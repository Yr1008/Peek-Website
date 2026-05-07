'use client'

import { useState, useCallback, useRef } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

type Tag = 'reward' | 'ritual' | 'social' | 'convenience'

const TAG_DATA: Record<Tag, {
  label: string
  pillBg: string
  pillFg: string
  why: string
  story: string
  worth: number
}> = {
  reward:      { label: 'self reward',  pillBg: '#FF7A50', pillFg: '#1F0E33', why: 'a celebration with your sister', story: '"treating myself" · felt worth it',     worth: 84 },
  ritual:      { label: 'ritual',       pillBg: '#F4D547', pillFg: '#1F0E33', why: 'sunday slow-down with mom',       story: '"part of my routine" · weekly anchor', worth: 72 },
  social:      { label: 'social',       pillBg: '#7DB880', pillFg: '#1F0E33', why: 'birthday dinner for tess',         story: '"with someone" · shared the bill',     worth: 91 },
  convenience: { label: 'convenience',  pillBg: '#9DC8E8', pillFg: '#1F0E33', why: 'too tired to cook · friday late',  story: '"easiest option" · would skip next time', worth: 38 },
}

const COLORS = ['#FF7A50', '#F4D547', '#7DB880', '#9DC8E8', '#FF80AB']

export default function Transformer() {
  const [active, setActive] = useState<Tag>('reward')
  const confettiRoot = useRef<HTMLDivElement>(null)

  const onTap = useCallback((tag: Tag, ev: React.MouseEvent<HTMLButtonElement>) => {
    setActive(tag)
    burst(ev.currentTarget, confettiRoot.current)
  }, [])

  const t = TAG_DATA[active]

  return (
    <section className="tx" id="transformer">
      <div className="wrap">
        <div className="tx__head reveal">
          <span className="chapter">chapter one. the why.</span>
          <h2 className="h-section tx__h">
            Your bank shows <em>what.</em><br />
            Peek shows <em>why.</em>
          </h2>
          <p className="lead tx__lead">
            Tap a tag below. Watch the <em>why</em> change live. The whole app, in one breath.
          </p>
        </div>

        <div className="tx__demo">
          <article className="bcard" aria-label="how your bank app shows it">
            <header className="bcard__top">
              <span className="bcard__badge">your bank app</span>
              <span>apr 6 · mon</span>
            </header>
            <div className="bcard__body">
              <div className="bcard__merchant">
                <span className="bcard__avatar">C</span>
                <div>
                  <h3>Chubby Cattle BBQ</h3>
                  <span className="bcard__cat">Food &amp; Dining</span>
                </div>
              </div>
              <div className="bcard__amount">$345.26</div>
            </div>
            <footer className="bcard__foot">debit · ****4271</footer>
          </article>

          <article className="pcard" aria-label="how peek shows it" aria-live="polite">
            <header className="pcard__top">
              <span className="pcard__badge">
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF7A50', display: 'inline-block' }} />
                peek
              </span>
              <span style={{ color: 'rgba(255,255,255,.55)' }}>apr 6 · 8pm</span>
            </header>
            <div className="pcard__body">
              <div className="pcard__merchant">
                <span className="pcard__avatar">C</span>
                <div>
                  <h3>chubby cattle bbq</h3>
                  <span className="pcard__cat" key={active}>{t.why}</span>
                </div>
              </div>
              <div className="pcard__amount">$345.26</div>
            </div>

            <div className="pcard__story">
              <span
                className="pcard__tag"
                style={{ background: t.pillBg, color: t.pillFg }}
                key={`tag-${active}`}
              >
                {t.label}
              </span>
              <span style={{ color: 'rgba(255,255,255,.85)', fontFamily: 'var(--f-display)', fontStyle: 'italic' }}>
                {t.story}
              </span>
            </div>

            <div className="pcard__feel">
              <span className="pcard__feel-q">how did this feel?</span>
              <div className="pcard__feel-bar">
                <span className="pcard__feel-fill" style={{ width: `${t.worth}%` }} />
              </div>
              <span className="pcard__feel-val">{t.worth}% worth it</span>
            </div>
          </article>
        </div>

        <div className="tx__chips">
          <span className="tx__chips-label">↓ what made this move?</span>
          <div className="tx__chips-row" role="radiogroup" aria-label="tag this transaction">
            {(Object.keys(TAG_DATA) as Tag[]).map(tag => (
              <button
                key={tag}
                className={`hchip${active === tag ? ' is-on' : ''}`}
                data-tag={tag}
                role="radio"
                aria-checked={active === tag}
                onClick={(ev) => onTap(tag, ev)}
              >
                <span className="hchip__dot" aria-hidden="true" />
                {TAG_DATA[tag].label}
              </button>
            ))}
          </div>
        </div>

        <div className="tx__cta-row">
          <a
            className="btn btn--white"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            data-cta="transformer"
          >
            <AppleIcon />
            Get Peek. Free on iOS.
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="forward">
          <span>→ now guess your gap</span>
        </div>

        <div ref={confettiRoot} className="confetti" aria-hidden="true" />
      </div>
    </section>
  )
}

function burst(target: HTMLElement, root: HTMLElement | null) {
  if (!root) return
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const rect = target.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const layer = document.createElement('div')
  layer.style.position = 'fixed'
  layer.style.left = `${cx}px`
  layer.style.top = `${cy}px`
  layer.style.pointerEvents = 'none'
  layer.style.zIndex = '1000'
  for (let i = 0; i < 10; i++) {
    const dot = document.createElement('span')
    dot.className = 'confetti__dot'
    const angle = Math.random() * Math.PI * 2
    const dist = 40 + Math.random() * 40
    dot.style.setProperty('--dx', `${Math.cos(angle) * dist}px`)
    dot.style.setProperty('--dy', `${Math.sin(angle) * dist - 30}px`)
    dot.style.background = COLORS[i % COLORS.length]
    dot.style.left = '-4px'
    dot.style.top = '-4px'
    dot.style.animationDelay = `${i * 12}ms`
    layer.appendChild(dot)
  }
  root.appendChild(layer)
  setTimeout(() => layer.remove(), 1200)
}
