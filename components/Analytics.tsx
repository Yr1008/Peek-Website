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
    // CTA clicks via delegation
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const el = target.closest<HTMLElement>('[data-cta]')
      if (!el) return
      track('appstore_click', {
        placement: el.dataset.cta || 'unknown',
      })
    }
    document.addEventListener('click', onClick, { passive: true })

    // Scroll depth milestones
    const milestones = [25, 50, 75, 100]
    const fired = new Set<number>()
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight
        const pct = h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0
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

    // Reveal-on-scroll for .reveal nodes
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
      document.querySelectorAll('.reveal').forEach((el) => io!.observe(el))
    } else {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'))
    }

    // Nav scroll-state for shadow line + scroll progress bar
    const nav = document.getElementById('nav')
    const progress = document.getElementById('nav-progress')
    const onNavScroll = () => {
      if (nav) {
        if (window.scrollY > 12) nav.classList.add('is-scrolled')
        else nav.classList.remove('is-scrolled')
      }
      if (progress) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const pct = docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0
        progress.style.width = `${pct}%`
      }
    }
    window.addEventListener('scroll', onNavScroll, { passive: true })
    onNavScroll()

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onNavScroll)
      io?.disconnect()
    }
  }, [])

  return null
}
