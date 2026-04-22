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
    if (typeof window.plausible === 'function') {
      window.plausible(event, { props })
    }
    if (window.posthog && typeof window.posthog.capture === 'function') {
      window.posthog.capture(event, props)
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, props)
    }
  } catch {
    // analytics must never throw on the page
  }
}

export default function Analytics() {
  useEffect(() => {
    // 1. App Store CTA clicks (event delegation)
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

    // 2. FAQ open events
    const onToggle = (e: Event) => {
      const el = e.target as HTMLDetailsElement
      if (!(el instanceof HTMLDetailsElement)) return
      if (!el.hasAttribute('data-faq-question')) return
      if (el.open) {
        track('faq_open', {
          question: el.getAttribute('data-faq-question') || '',
        })
      }
    }
    const detailsEls = document.querySelectorAll<HTMLDetailsElement>(
      'details[data-faq-question]'
    )
    detailsEls.forEach((d) => d.addEventListener('toggle', onToggle))

    // 3. Scroll depth milestones
    const milestones = [25, 50, 75, 100]
    const fired = new Set<number>()
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const h =
          document.documentElement.scrollHeight - window.innerHeight
        const pct = h > 0 ? Math.min(100, Math.round((window.scrollY / h) * 100)) : 0
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

    // 4. Reveal on scroll via IntersectionObserver
    const reveals = document.querySelectorAll('.reveal')
    let io: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              io?.unobserve(entry.target)
            }
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
      )
      reveals.forEach((el) => io!.observe(el))
    } else {
      reveals.forEach((el) => el.classList.add('in-view'))
    }

    return () => {
      document.removeEventListener('click', onClick)
      detailsEls.forEach((d) => d.removeEventListener('toggle', onToggle))
      window.removeEventListener('scroll', onScroll)
      io?.disconnect()
    }
  }, [])

  return null
}
