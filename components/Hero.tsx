'use client'

import { useEffect, useRef, useState } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'
import PlaidMini from './PlaidMini'
import HeroCycle from './HeroCycle'

export default function Hero() {
  const phoneRef = useRef<HTMLDivElement | null>(null)
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(m.matches)
    const fineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (m.matches || !fineHover) return
    const el = phoneRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const x = (e.clientX - cx) / r.width
      const y = (e.clientY - cy) / r.height
      el.style.transform = `rotate(-2.5deg) rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`
    }
    const onLeave = () => {
      el.style.transform = ''
    }
    document.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__orb hero__orb--peach" aria-hidden="true" />
      <div className="hero__orb hero__orb--pink" aria-hidden="true" />

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <span className="eyebrow hero__brow">
            <span className="dot" />
            not a budget. not a tracker. <em>a money clarity app.</em>
          </span>

          <h1 className="h-display hero__h1" style={{ marginTop: 18 }}>
            you spent it.
            <br />
            but <HeroCycle />
          </h1>

          <p className="hero__pos">
            Your bank shows you <em>what</em> you spent.
            <br />
            Peek shows you <em>why.</em>
          </p>

          <p className="lead hero__lead">
            Tap one of four tags. <strong>Self Reward, Social, Ritual,
            Convenience.</strong> Three days in, the patterns finally make
            sense. No spreadsheets. No guilt.
          </p>

          <div className="hero__cta">
            <a
              className="btn btn--primary btn--lg"
              id="cta-hero"
              data-cta-placement="hero"
              data-mag
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
            >
              <span className="btn__icon">
                <AppleIcon />
              </span>
              Get Peek. Free on iOS.
              <span className="btn__arrow">→</span>
            </a>
          </div>

          <div className="hero__meta">
            <span className="stars">★★★★★</span>
            <span>
              <strong>4.9</strong> on the App Store
            </span>
            <span className="hero__meta-sep">·</span>
            <span>
              connect a bank in <strong>30 sec</strong>
            </span>
            <span className="hero__meta-sep">·</span>
            <PlaidMini />
          </div>

          <a href="#how" className="hero__cue" aria-label="See how it works">
            see why your spending is what it is
          </a>
        </div>

        <div className="hero__visual" id="hero-visual">
          <div className="hero__phone-wrap">
            <div
              className="hero__phone"
              id="hero-phone"
              ref={phoneRef}
              style={{ animation: reduce ? 'none' : undefined }}
            >
              <picture>
                <source srcSet="/images/optimized/store-screen-1.webp" type="image/webp" />
                <img
                  src="/images/uploads/store-screen-1.png"
                  alt="Peek app showing the tag-the-why moment for a purchase"
                  width={720}
                  height={1480}
                  loading="eager"
                  decoding="async"
                  // @ts-expect-error fetchpriority is a valid HTML attr
                  fetchpriority="high"
                />
              </picture>
            </div>

            <div className="receipt receipt--1">
              <div className="receipt__row">
                <span
                  className="receipt__pill"
                  style={{ background: '#FFE0CF', color: 'var(--peek-2)' }}
                >
                  self reward
                </span>
                <span className="receipt__amt">$84</span>
              </div>
              <span className="receipt__why">&ldquo;new sambas&rdquo;</span>
            </div>
            <div className="receipt receipt--2">
              <div className="receipt__row">
                <span
                  className="receipt__pill"
                  style={{ background: '#E1EFD7', color: '#3B7A3F' }}
                >
                  ritual
                </span>
                <span className="receipt__amt">$5.75</span>
              </div>
              <span className="receipt__why">blank street latte</span>
            </div>
            <div className="receipt receipt--4">
              <div className="receipt__row">
                <span
                  className="receipt__pill"
                  style={{ background: '#FAD8E5', color: '#B23F6E' }}
                >
                  social
                </span>
                <span className="receipt__amt">$32</span>
              </div>
              <span className="receipt__why">brunch w/ tess</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
