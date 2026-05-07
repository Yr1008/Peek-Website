'use client'

import { useEffect, useRef, useState } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

const SCREENS = [
  { src: '/images/uploads/screen-tags.png',     webp: '/images/optimized/screen-tags.webp',     alt: 'Peek tagging — stop tracking, start seeing why' },
  { src: '/images/uploads/screen-checkin.png',  webp: '/images/optimized/screen-checkin.webp',  alt: 'Peek monthly caps — keep the spending that feels good' },
  { src: '/images/uploads/screen-patterns.png', webp: '/images/optimized/screen-patterns.webp', alt: 'Peek spending story — finally see where your money goes' },
  { src: '/images/uploads/screen-blindbox.png', webp: '/images/optimized/screen-blindbox.webp', alt: 'Peek insight reveal — your last 30 days' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const phoneRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  // Auto-cycle through real app screenshots every 3.5s
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setActive(prev => (prev + 1) % SCREENS.length)
    }, 3500)
    return () => window.clearInterval(id)
  }, [])

  // Subtle mouse parallax on phone (desktop only)
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(max-width: 900px)').matches) return
    const stage = stageRef.current
    const phone = phoneRef.current
    if (!stage || !phone) return
    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / rect.width
      const dy = (e.clientY - cy) / rect.height
      const tx = Math.max(-7, Math.min(7, dx * 14))
      const ty = Math.max(-7, Math.min(7, dy * 14))
      phone.style.transform = `rotate(2deg) translate(${tx}px, ${ty}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero" id="why" aria-label="Peek hero">
      <div className="hero__orbs" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__head">
          <span className="eyebrow-pill">
            The calm side of money
          </span>

          <h1 className="h-display hero__h1">
            your bank shows <em>what.</em><br />
            peek shows <em>why.</em>
          </h1>

          <p className="hero__sub">
            the money app for people figuring out money. <em>five minutes a day.</em> zero spreadsheets.
          </p>

          <div className="hero__cta-row">
            <a
              className="btn btn--primary btn--big"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
              id="cta-hero"
              data-cta="hero"
            >
              <AppleIcon />
              Get Peek. Free on iOS.
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <span className="trust">
            <span className="stars" aria-hidden="true">★★★★★</span>
            <strong>loved on the app store</strong>
            <span className="sep" aria-hidden="true">·</span>
            <span>free on ios</span>
            <span className="sep" aria-hidden="true">·</span>
            <span>47k+ downloads</span>
          </span>
        </div>

        <div className="hero__stage" ref={stageRef}>
          {/* Mascot orb with tap-me caveat label */}
          <div className="float float--mascot" aria-hidden="true">
            <span className="float--mascot-label">tap me</span>
            <picture>
              <source srcSet="/images/optimized/peek-3d-right.webp" type="image/webp" />
              <img src="/images/uploads/mascots/peek-3d-right.png" alt="" />
            </picture>
          </div>

          {/* iPhone with full iOS chrome — cycling real app screenshots */}
          <div className="iphone" ref={phoneRef}>
            <div className="iphone__notch" aria-hidden="true" />
            <div className="iphone__screen">
              <div className="iphone__shots">
                {SCREENS.map((s, i) => (
                  <picture
                    key={s.src}
                    className={`iphone__shot${i === active ? ' is-active' : ''}`}
                    aria-hidden={i !== active}
                  >
                    <source srcSet={s.webp} type="image/webp" />
                    <img
                      src={s.src}
                      alt={i === active ? s.alt : ''}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                    />
                  </picture>
                ))}
              </div>
              <div className="iphone__home" aria-hidden="true" />
            </div>
          </div>

          {/* Cycle dots indicator */}
          <div className="hero__dots" aria-hidden="true">
            {SCREENS.map((_, i) => (
              <span
                key={i}
                className={`hero__dot${i === active ? ' is-active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
