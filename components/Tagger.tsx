'use client'

import { useState, useRef } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

type Tag = 'ritual' | 'reward' | 'social' | 'conv'

type Question = {
  prompt: React.ReactNode
  options: { tag: Tag; lbl: string; name: string }[]
}

const Q: Question[] = [
  {
    prompt: <><em>8:42am.</em> $5.75 latte at blank street. why?</>,
    options: [
      { tag: 'ritual',  lbl: 'ritual',       name: 'part of my routine' },
      { tag: 'reward',  lbl: 'self reward',  name: 'treating myself' },
      { tag: 'social',  lbl: 'social',       name: 'with someone' },
      { tag: 'conv',    lbl: 'convenience',  name: 'easiest option' },
    ],
  },
  {
    prompt: <>$84 sambas, three days later. <em>worth it?</em></>,
    options: [
      { tag: 'reward',  lbl: 'self reward',  name: 'still feels right' },
      { tag: 'ritual',  lbl: 'ritual',       name: 'classic. always good' },
      { tag: 'social',  lbl: 'social',       name: "wore them out w/ tess" },
      { tag: 'conv',    lbl: 'convenience',  name: 'mid. would skip next time' },
    ],
  },
  {
    prompt: <>$22 doordash, 9pm tuesday. <em>pattern or one-off?</em></>,
    options: [
      { tag: 'conv',    lbl: 'convenience',  name: 'happens every week' },
      { tag: 'ritual',  lbl: 'ritual',       name: 'sunday night thing' },
      { tag: 'reward',  lbl: 'self reward',  name: 'rough day. earned it' },
      { tag: 'social',  lbl: 'social',       name: 'sharing w/ roommate' },
    ],
  },
]

const KIND: Record<Tag, { name: React.ReactNode; body: React.ReactNode }> = {
  ritual: {
    name: <>you're a <em>ritual person.</em></>,
    body: <>you spend on the same anchors every week. that's not a problem. that's a personality. peek shows the ones <em>worth it</em> and the ones that drift.</>,
  },
  reward: {
    name: <>you're a <em>self-reward person.</em></>,
    body: <>your money tracks your week. hard week, treat. good week, splurge. peek shows which rewards <em>actually</em> recharge you, and which were autopilot.</>,
  },
  social: {
    name: <>you're a <em>social spender.</em></>,
    body: <>your money moves with the people you love. that's a feature, not a leak. peek shows which moments felt <em>worth it</em> and which were just the room.</>,
  },
  conv: {
    name: <>you're a <em>convenience optimizer.</em></>,
    body: <>your money buys time. peek shows when that trade <em>landed</em> and when it cost more than the time it saved.</>,
  },
}

export default function Tagger() {
  const [step, setStep] = useState(0)
  const [picks, setPicks] = useState<Tag[]>([])
  const confettiRoot = useRef<HTMLDivElement>(null)

  const choose = (tag: Tag, ev: React.MouseEvent<HTMLButtonElement>) => {
    burst(ev.currentTarget, confettiRoot.current)
    const next = [...picks, tag]
    setPicks(next)
    if (step < Q.length - 1) {
      setTimeout(() => setStep(step + 1), 280)
    } else {
      setTimeout(() => setStep(Q.length), 280)
    }
  }

  const reset = () => { setStep(0); setPicks([]) }

  const result: Tag = picks.length === Q.length ? topTag(picks) : 'ritual'
  const k = KIND[result]
  const isDone = step >= Q.length

  return (
    <section className="tagger sec--cream-2" id="tagger">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            try it · <em>3 seconds</em>
          </span>
          <h2 className="h-section sec__h">
            what kind of <em>spender</em> are you?
          </h2>
          <p className="lead sec__lead">
            three real moments. tap a reason. peek labels the rest.
          </p>
        </div>

        <div className="tagger__sheet reveal">
          {!isDone && (
            <>
              <div className="tagger__progress" aria-hidden="true">
                {Q.map((_, i) => (
                  <span
                    key={i}
                    className={`tagger__dot${i === step ? ' is-active' : ''}${i < step ? ' is-done' : ''}`}
                  />
                ))}
              </div>
              <p className="tagger__prompt">{Q[step].prompt}</p>
              <div className="tagger__chips">
                {Q[step].options.map((opt) => (
                  <button
                    key={opt.tag + opt.name}
                    className="tagger__chip"
                    data-tag={opt.tag}
                    onClick={(e) => choose(opt.tag, e)}
                  >
                    <span className="tagger__chip-lbl">{opt.lbl}</span>
                    <span className="tagger__chip-name">{opt.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {isDone && (
            <div className="tagger__result">
              <span className="tagger__result-eyebrow">your spending kind</span>
              <h3 className="tagger__result-kind">{k.name}</h3>
              <p className="tagger__result-body">{k.body}</p>
              <div className="tagger__result-mascot" aria-hidden="true">
                <picture>
                  <source srcSet="/images/optimized/peek-3d-left.webp" type="image/webp" />
                  <img src="/images/uploads/mascots/peek-3d-left.png" alt="" />
                </picture>
              </div>
              <div className="tagger__result-cta">
                <a
                  className="btn btn--peach"
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener"
                  data-cta="quiz-result"
                >
                  <AppleIcon />
                  <span>download on the <em>app store</em></span>
                </a>
              </div>
              <button
                onClick={reset}
                style={{ marginTop: 18, fontSize: 13, color: 'var(--ink-3)', fontFamily: 'var(--f-display)', fontStyle: 'italic' }}
              >
                ↺ try again
              </button>
            </div>
          )}
        </div>

        <div ref={confettiRoot} className="confetti" aria-hidden="true" />
      </div>
    </section>
  )
}

function topTag(picks: Tag[]): Tag {
  const counts: Record<string, number> = {}
  for (const p of picks) counts[p] = (counts[p] || 0) + 1
  return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]) as Tag
}

const COLORS = ['#FF7A50', '#F4D547', '#7DB880', '#9DC8E8', '#EC6E9C']

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
