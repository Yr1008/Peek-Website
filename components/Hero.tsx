'use client'

import { useEffect, useState } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'
import PlaidMini from './PlaidMini'

const cycleWords: { tone: string; text: string }[] = [
  { tone: 'why', text: 'why?' },
  { tone: 'treat', text: 'a treat?' },
  { tone: 'social', text: 'for friends?' },
  { tone: 'ritual', text: 'routine?' },
  { tone: 'conv', text: 'just easier?' },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % cycleWords.length),
      2200
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <span className="hero__brow">
            not a budget. not a tracker. <em>a money clarity app.</em>
          </span>

          <h1 className="hero__h1">
            Your bank shows you <em>what</em>.
            <br />
            Peek shows you <em>why.</em>
          </h1>

          <p className="hero__sub">
            you spent it. but{' '}
            <span
              className="hero__cycle"
              aria-live="polite"
              role="button"
              tabIndex={0}
              aria-label="Cycle through reasons. Tap to advance."
              onClick={() => setActive((i) => (i + 1) % cycleWords.length)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActive((i) => (i + 1) % cycleWords.length)
                }
              }}
            >
              {cycleWords.map((w, i) => (
                <span
                  key={w.tone}
                  className={`hero__cycle__word${i === active ? ' is-active' : ''}`}
                  data-tone={w.tone}
                >
                  {w.text}
                </span>
              ))}
            </span>
          </p>

          <p className="hero__lead">
            Tap one of four tags. <strong>Self Reward, Social, Ritual,
            Convenience.</strong> Three days in, the patterns finally make
            sense. No spreadsheets. No guilt.
          </p>

          <div className="hero__cta">
            <a
              className="btn btn--primary"
              id="cta-hero"
              data-cta-placement="hero"
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
        </div>

        <div className="hero__visual">
          <div className="hero__phone-wrap" data-parallax data-parallax-speed="-0.08">
            <div className="hero__phone">
              <picture>
                <source srcSet="/images/optimized/screen-tags.webp" type="image/webp" />
                <img
                  src="/images/uploads/screen-tags.png"
                  alt="Peek app: stop tracking, start seeing why"
                  width={720}
                  height={1480}
                  loading="eager"
                  decoding="async"
                  // @ts-expect-error fetchpriority is a valid HTML attr
                  fetchpriority="high"
                />
              </picture>
            </div>

            <div className="hero__receipt hero__receipt--1">
              <div className="hero__receipt-row">
                <span
                  className="hero__receipt-pill"
                  style={{ background: '#FFE0CF', color: 'var(--peek-2)' }}
                >
                  self reward
                </span>
                <span className="hero__receipt-amt">$84</span>
              </div>
              <span className="hero__receipt-why">&ldquo;new sambas&rdquo;</span>
            </div>
            <div className="hero__receipt hero__receipt--2">
              <div className="hero__receipt-row">
                <span
                  className="hero__receipt-pill"
                  style={{ background: '#E1EFD7', color: '#3B7A3F' }}
                >
                  ritual
                </span>
                <span className="hero__receipt-amt">$5.75</span>
              </div>
              <span className="hero__receipt-why">blank street latte</span>
            </div>
            <div className="hero__receipt hero__receipt--3">
              <div className="hero__receipt-row">
                <span
                  className="hero__receipt-pill"
                  style={{ background: '#FAD8E5', color: '#B23F6E' }}
                >
                  social
                </span>
                <span className="hero__receipt-amt">$32</span>
              </div>
              <span className="hero__receipt-why">brunch w/ tess</span>
            </div>

            <div className="hero__sticker hero__sticker--croissant" aria-hidden="true">
              <picture>
                <source srcSet="/images/optimized/st-croissant.webp" type="image/webp" />
                <img src="/images/uploads/stickers/croissant.png" alt="" loading="lazy" />
              </picture>
            </div>
            <div className="hero__sticker hero__sticker--latest" aria-hidden="true">
              <picture>
                <source srcSet="/images/optimized/st-latest.webp" type="image/webp" />
                <img src="/images/uploads/stickers/latest.png" alt="" loading="lazy" />
              </picture>
            </div>
          </div>

          <div className="hero__mascot-peek" aria-hidden="true">
            <picture>
              <source srcSet="/images/optimized/peek-3d-right.webp" type="image/webp" />
              <img src="/images/uploads/mascots/peek-3d-right.png" alt="" loading="lazy" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
