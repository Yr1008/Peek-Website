'use client'

import { useState, useRef, useCallback } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

type Direction = 'left' | 'right' | 'up'
type Kind = 'reward' | 'ritual' | 'social' | 'conv'

type Charge = {
  amount: string
  merchant: React.ReactNode
  when: string
}

const CHARGES: Charge[] = [
  { amount: '$5.75',  merchant: <>latte at <em>blank street</em></>,        when: '8:42am tuesday' },
  { amount: '$84',    merchant: <>sambas at <em>new balance</em></>,        when: 'saturday afternoon' },
  { amount: '$22',    merchant: <>doordash</>,                                when: '9pm tuesday' },
  { amount: '$47',    merchant: <>target run</>,                              when: 'sunday evening' },
  { amount: '$345',   merchant: <>chubby cattle bbq <em>w/ sister</em></>,  when: 'friday 8pm' },
]

const KINDS: Record<Kind, { name: React.ReactNode; body: React.ReactNode; bubble: string }> = {
  reward: {
    name: <>You're a <em>self-reward person.</em></>,
    body: <>Your money tracks your week. Hard week, treat. Good week, splurge. Peek shows which rewards <em>actually</em> recharge you, and which were autopilot.</>,
    bubble: 'she gets it.',
  },
  ritual: {
    name: <>You're a <em>ritual person.</em></>,
    body: <>You spend on the same anchors every week. That's not a problem. That's a personality. Peek shows the ones <em>worth it</em> and the ones that drift.</>,
    bubble: 'she has rituals.',
  },
  social: {
    name: <>You're a <em>social spender.</em></>,
    body: <>Your money moves with the people you love. That's a feature, not a leak. Peek shows which moments felt <em>worth it</em> and which were just the room.</>,
    bubble: 'she shares well.',
  },
  conv: {
    name: <>You're a <em>convenience optimizer.</em></>,
    body: <>Your money buys time. Peek shows when that trade <em>landed</em> and when it cost more than the time it saved.</>,
    bubble: 'time is money.',
  },
}

const DIR_TO_KIND: Record<Direction, Kind> = {
  right: 'reward',
  up:    'ritual',
  left:  'conv',
}

const COLORS = ['#FF7A50', '#F4D547', '#7DB880', '#9DC8E8', '#FF80AB']

export default function Swipe() {
  const [step, setStep] = useState(0)
  const [picks, setPicks] = useState<Kind[]>([])
  const [outDirection, setOutDirection] = useState<Direction | null>(null)
  const startRef = useRef<{ x: number; y: number } | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const confettiRoot = useRef<HTMLDivElement>(null)

  const commit = useCallback((dir: Direction, srcEl: HTMLElement) => {
    if (outDirection) return
    setOutDirection(dir)
    burst(srcEl, confettiRoot.current)
    const kind = DIR_TO_KIND[dir]
    setTimeout(() => {
      setPicks(prev => [...prev, kind])
      setStep(prev => prev + 1)
      setOutDirection(null)
      const card = cardRef.current
      if (card) card.style.transform = ''
    }, 380)
  }, [outDirection])

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (outDirection) return
    startRef.current = { x: e.clientX, y: e.clientY }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!startRef.current || outDirection) return
    const dx = e.clientX - startRef.current.x
    const dy = e.clientY - startRef.current.y
    const card = cardRef.current
    if (card) {
      card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx * 0.06}deg)`
    }
  }
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!startRef.current || outDirection) return
    const dx = e.clientX - startRef.current.x
    const dy = e.clientY - startRef.current.y
    startRef.current = null
    const absX = Math.abs(dx)
    const absY = Math.abs(dy)
    const T = 80
    if (absX > T && absX > absY) {
      commit(dx > 0 ? 'right' : 'left', e.currentTarget)
    } else if (-dy > T) {
      commit('up', e.currentTarget)
    } else {
      const card = cardRef.current
      if (card) card.style.transform = ''
    }
  }

  const onButton = (dir: Direction, ev: React.MouseEvent<HTMLButtonElement>) => {
    commit(dir, ev.currentTarget)
  }

  const reset = () => { setStep(0); setPicks([]); setOutDirection(null) }

  if (step >= CHARGES.length) {
    const top = topKind(picks)
    const k = KINDS[top]
    return (
      <section className="swipe" id="swipe">
        <div className="wrap">
          <div className="sec__head reveal">
            <span className="chapter">chapter seven. your turn.</span>
            <h2 className="h-section sec__h">
              What kind of <em>spender</em> are you?
            </h2>
          </div>

          <div className="swipe__result">
            <span className="swipe__bubble" aria-hidden="true">{k.bubble}</span>
            <span className="swipe__result-eyebrow">your spending kind</span>
            <h3 className="swipe__result-h">{k.name}</h3>
            <div className="swipe__result-mascot" aria-hidden="true">
              <picture>
                <source srcSet="/images/optimized/peek-3d-left.webp" type="image/webp" />
                <img src="/images/uploads/mascots/peek-3d-left.png" alt="" />
              </picture>
            </div>
            <p className="swipe__result-body">{k.body}</p>
            <a
              className="btn btn--primary btn--big"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
              data-cta="swipe-result"
            >
              <AppleIcon />
              Get Peek. Free on iOS.
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <button onClick={reset} className="swipe__reset">↺ try again</button>
          </div>

          <div className="forward">
            <span>↓ people who get it</span>
          </div>
          <div ref={confettiRoot} className="confetti" aria-hidden="true" />
        </div>
      </section>
    )
  }

  const c = CHARGES[step]
  const next = CHARGES[step + 1]
  const next2 = CHARGES[step + 2]

  const cardClass = `swipe__card${outDirection ? ` is-out-${outDirection}` : ''}`

  return (
    <section className="swipe" id="swipe">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="chapter">chapter seven. your turn.</span>
          <h2 className="h-section sec__h">
            What kind of <em>spender</em> are you?
          </h2>
          <p className="lead sec__lead">
            Five real moments. Swipe right "worth it", left "skip next time", up "add to a fund". The framework is yours after the fifth swipe.
          </p>
        </div>

        <div className="swipe__stage">
          {next2 && (
            <div className="swipe__card swipe__card--bg2" aria-hidden="true">
              <span className="swipe__amount">{next2.amount}</span>
              <div>
                <div className="swipe__merchant">{next2.merchant}</div>
                <div className="swipe__when">{next2.when}</div>
              </div>
            </div>
          )}
          {next && (
            <div className="swipe__card swipe__card--bg1" aria-hidden="true">
              <span className="swipe__amount">{next.amount}</span>
              <div>
                <div className="swipe__merchant">{next.merchant}</div>
                <div className="swipe__when">{next.when}</div>
              </div>
            </div>
          )}
          <div
            ref={cardRef}
            className={cardClass}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            role="group"
            aria-label={`Swipe transaction ${step + 1} of ${CHARGES.length}: ${c.amount}`}
          >
            <span className="swipe__amount">{c.amount}</span>
            <div>
              <div className="swipe__merchant">{c.merchant}</div>
              <div className="swipe__when">{c.when}</div>
            </div>
            <div className="swipe__hint">drag, or tap a button below</div>
          </div>
        </div>

        <div className="swipe__progress" aria-hidden="true">
          {CHARGES.map((_, i) => (
            <span
              key={i}
              className={`swipe__progress-dot${i === step ? ' is-active' : ''}${i < step ? ' is-done' : ''}`}
            />
          ))}
        </div>

        <div className="swipe__buttons">
          <button className="swipe__btn swipe__btn--left" onClick={(e) => onButton('left', e)} aria-label="skip next time">
            ← skip
          </button>
          <button className="swipe__btn swipe__btn--up" onClick={(e) => onButton('up', e)} aria-label="add to a fund">
            add to fund
          </button>
          <button className="swipe__btn swipe__btn--right" onClick={(e) => onButton('right', e)} aria-label="worth it">
            worth it →
          </button>
        </div>

        <div ref={confettiRoot} className="confetti" aria-hidden="true" />
      </div>
    </section>
  )
}

function topKind(picks: Kind[]): Kind {
  if (picks.length === 0) return 'reward'
  const counts: Record<string, number> = {}
  for (const p of picks) counts[p] = (counts[p] || 0) + 1
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as Kind
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
  for (let i = 0; i < 14; i++) {
    const dot = document.createElement('span')
    dot.className = 'confetti__dot'
    const angle = Math.random() * Math.PI * 2
    const dist = 50 + Math.random() * 60
    dot.style.setProperty('--dx', `${Math.cos(angle) * dist}px`)
    dot.style.setProperty('--dy', `${Math.sin(angle) * dist - 40}px`)
    dot.style.background = COLORS[i % COLORS.length]
    dot.style.left = '-4px'
    dot.style.top = '-4px'
    dot.style.animationDelay = `${i * 14}ms`
    layer.appendChild(dot)
  }
  root.appendChild(layer)
  setTimeout(() => layer.remove(), 1200)
}
