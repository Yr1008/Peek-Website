'use client'

import { useEffect, useRef, useState } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

type Tag = 'reward' | 'ritual' | 'social' | 'convenience'

const TAGS: Record<Tag, {
  label: string
  pillBg: string
  why: string
  story: string
  worth: number
}> = {
  reward:      { label: 'self reward',  pillBg: '#FF7A50', why: 'a celebration with your sister', story: '"treating myself" · felt worth it',     worth: 84 },
  ritual:      { label: 'ritual',       pillBg: '#F4D547', why: 'sunday slow-down with mom',       story: '"part of my routine" · weekly anchor', worth: 72 },
  social:      { label: 'social',       pillBg: '#7DB880', why: 'birthday dinner for tess',         story: '"with someone" · shared the bill',     worth: 91 },
  convenience: { label: 'convenience',  pillBg: '#9DC8E8', why: 'too tired to cook · friday late',  story: '"easiest option" · would skip next time', worth: 38 },
}

const ORDER: Tag[] = ['reward', 'ritual', 'social', 'convenience']

export default function Hero() {
  const [active, setActive] = useState<Tag>('reward')
  const stageRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const cycleRef = useRef<number | null>(null)

  // Auto-cycle through tags every 3 seconds
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let i = 0
    cycleRef.current = window.setInterval(() => {
      i = (i + 1) % ORDER.length
      setActive(ORDER[i])
    }, 3200)
    return () => {
      if (cycleRef.current) window.clearInterval(cycleRef.current)
    }
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
      const tx = Math.max(-8, Math.min(8, dx * 16))
      const ty = Math.max(-8, Math.min(8, dy * 16))
      phone.style.transform = `rotate(2deg) translate(${tx}px, ${ty}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const t = TAGS[active]

  return (
    <section className="hero" id="why" aria-label="Peek hero">
      <div className="hero__orbs" aria-hidden="true" />
      <div className="hero__grid">
        <div className="hero__head">
          <span className="eyebrow-pill">
            The calm side of money
          </span>

          <h1 className="h-display hero__h1">
            stop tracking.<br />
            start seeing <em>why.</em>
          </h1>

          <p className="hero__sub">
            the money app for people figuring out money. <em>five minutes a day,</em> zero spreadsheets.
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
          {/* Glass-morphism notification toast — decorative */}
          <div className="glass-toast" aria-hidden="true">
            <div className="glass-toast__icon">
              <picture>
                <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
                <img src="/images/peek-icon.png" alt="" />
              </picture>
            </div>
            <div>
              <span className="glass-toast__app">Peek</span>
              <strong>peek noticed</strong>
              <span>$5.75 ritual at blank street ✨</span>
            </div>
            <span className="glass-toast__time">now</span>
          </div>

          {/* Two side stickers */}
          <div className="float float--sticker-1" aria-hidden="true">
            <picture>
              <source srcSet="/images/optimized/st-croissant.webp" type="image/webp" />
              <img src="/images/uploads/stickers/croissant.png" alt="" />
            </picture>
          </div>
          <div className="float float--sticker-2" aria-hidden="true">
            <picture>
              <source srcSet="/images/optimized/st-shoes.webp" type="image/webp" />
              <img src="/images/uploads/stickers/shoes.png" alt="" />
            </picture>
          </div>

          {/* Mascot orb with tap-me caveat label */}
          <div className="float float--mascot" aria-hidden="true">
            <span className="float--mascot-label">tap me</span>
            <picture>
              <source srcSet="/images/optimized/peek-3d-right.webp" type="image/webp" />
              <img src="/images/uploads/mascots/peek-3d-right.png" alt="" />
            </picture>
          </div>

          {/* Floating yellow $ price badge */}
          <span className="float float--badge" aria-hidden="true">$345.26</span>

          {/* Floating tag chip */}
          <span className="float float--tag" aria-hidden="true">SELF REWARD</span>

          {/* Phone */}
          <div className="iphone" ref={phoneRef}>
            <div className="iphone__notch" aria-hidden="true" />
            <div className="iphone__screen">
              <div className="iphone__status" aria-hidden="true">
                <span className="iphone__status-time">10:42</span>
                <span className="iphone__status-icons">
                  <svg viewBox="0 0 18 12" aria-hidden="true"><path d="M1 11h2v-3H1zM5 11h2V7H5zM9 11h2V4H9zM13 11h2V1h-2z"/></svg>
                  <svg viewBox="0 0 16 12" aria-hidden="true"><path d="M8 0L0 5l1.5 2L8 3l6.5 4L16 5z"/></svg>
                  <svg viewBox="0 0 24 12" aria-hidden="true"><rect x="1" y="2" width="20" height="8" rx="2" ry="2" stroke="currentColor" fill="none" strokeWidth="1"/><rect x="3" y="4" width="14" height="4" rx="1" ry="1" fill="currentColor"/><rect x="22" y="4" width="2" height="4" rx="1" ry="1" fill="currentColor"/></svg>
                </span>
              </div>

              <div className="iphone__inner">
                <span className="appui__lbl">last 30 days</span>
                <h3 className="appui__h">stop tracking.<br/>start seeing <em>why.</em></h3>
                <p className="appui__sub">tag every purchase with what drove it. peek does the rest.</p>

                {/* Live peek transaction card — mirrors the actual app */}
                <div className="appui__card" aria-live="polite">
                  <div className="appui__card-row">
                    <div className="appui__merchant">
                      <span className="appui__avatar">C</span>
                      <div>
                        <h4 className="appui__merchant-h">chubby cattle bbq</h4>
                        <span className="appui__why" key={active}>{t.why}</span>
                      </div>
                    </div>
                    <span className="appui__amount">$345.26</span>
                  </div>

                  <div className="appui__story">
                    <span
                      className="appui__tag"
                      style={{ background: t.pillBg }}
                      key={`tag-${active}`}
                    >
                      {t.label}
                    </span>
                    <span className="appui__story-text">{t.story}</span>
                  </div>

                  <div className="appui__feel">
                    <span className="appui__feel-q">how did this feel?</span>
                    <div className="appui__feel-bar">
                      <span className="appui__feel-fill" style={{ width: `${t.worth}%` }} />
                    </div>
                    <span className="appui__feel-val">{t.worth}% worth it</span>
                  </div>
                </div>

                <div className="appui__chips" aria-hidden="true">
                  {ORDER.map(tag => (
                    <span
                      key={tag}
                      data-tag={tag}
                      className={`appui__chip${active === tag ? ' is-on' : ''}`}
                    >
                      <span className="appui__chip-dot" />
                      {TAGS[tag].label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="iphone__home" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
