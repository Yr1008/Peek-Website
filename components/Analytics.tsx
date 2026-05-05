'use client'

import { useEffect } from 'react'

type Payload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Payload }) => void
    posthog?: { capture: (event: string, props?: Payload) => void }
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

function track(event: string, props?: Payload) {
  if (typeof window === 'undefined') return
  try {
    if (typeof window.plausible === 'function') window.plausible(event, { props })
    if (window.posthog?.capture) window.posthog.capture(event, props)
    if (typeof window.gtag === 'function') window.gtag('event', event, props)
  } catch {
    /* analytics never throws */
  }
}

export default function Analytics() {
  useEffect(() => {
    // 1. CTA clicks via delegation
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const el = target.closest<HTMLElement>('[data-cta-placement]')
      if (!el) return
      track('appstore_click', {
        placement: el.dataset.ctaPlacement || 'unknown',
      })
    }
    document.addEventListener('click', onClick, { passive: true })

    // 2. FAQ toggles
    const onToggle = (e: Event) => {
      const el = e.target as HTMLDetailsElement
      if (!(el instanceof HTMLDetailsElement)) return
      if (!el.hasAttribute('data-faq-question')) return
      if (el.open)
        track('faq_open', {
          question: el.getAttribute('data-faq-question') || '',
        })
    }
    const detailsEls = document.querySelectorAll<HTMLDetailsElement>(
      'details[data-faq-question]'
    )
    detailsEls.forEach((d) => d.addEventListener('toggle', onToggle))

    // 3. Scroll depth + progress bar
    const milestones = [25, 50, 75, 100]
    const fired = new Set<number>()
    const prog = document.getElementById('prog')
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight
        const pct = h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0
        if (prog) prog.style.width = pct.toFixed(2) + '%'
        for (const m of milestones) {
          if (pct >= m && !fired.has(m)) {
            fired.add(m)
            track('scroll_depth', { depth: m })
          }
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // 4. Reveal-on-scroll
    let io: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in')
              io?.unobserve(entry.target)
            }
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.18 }
      )
      document
        .querySelectorAll('.reveal-up')
        .forEach((el) => io!.observe(el))
    } else {
      document
        .querySelectorAll('.reveal-up')
        .forEach((el) => el.classList.add('is-in'))
    }

    // 5. Magnetic buttons (subtle pull on hover)
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const fineHover = window.matchMedia('(hover: hover) and (pointer: fine)')
      .matches
    const mags: Array<{
      el: HTMLElement
      onMove: (e: MouseEvent) => void
      onLeave: () => void
    }> = []
    if (!reduceMotion && fineHover) {
      document.querySelectorAll<HTMLElement>('[data-mag]').forEach((btn) => {
        const onMove = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect()
          const x = (e.clientX - r.left - r.width / 2) * 0.18
          const y = (e.clientY - r.top - r.height / 2) * 0.18
          btn.style.transform = `translate(${x}px, ${y}px)`
        }
        const onLeave = () => {
          btn.style.transform = ''
        }
        btn.addEventListener('mousemove', onMove)
        btn.addEventListener('mouseleave', onLeave)
        mags.push({ el: btn, onMove, onLeave })
      })
    }

    return () => {
      document.removeEventListener('click', onClick)
      detailsEls.forEach((d) => d.removeEventListener('toggle', onToggle))
      window.removeEventListener('scroll', onScroll)
      io?.disconnect()
      for (const m of mags) {
        m.el.removeEventListener('mousemove', m.onMove)
        m.el.removeEventListener('mouseleave', m.onLeave)
      }
    }
  }, [])

  return null
}
