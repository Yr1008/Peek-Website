'use client'

import { useEffect, useRef, useState } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

const TESTIS = [
  {
    name: 'sarah',
    age: 28,
    initial: 'S',
    quote: 'i actually open this app. like, voluntarily. that has never happened with a finance app.',
    rot: -2,
  },
  {
    name: 'marcus',
    age: 34,
    initial: 'M',
    quote: 'found out i was spending $200 a month on subscriptions i forgot about. peek paid for itself day one.',
    rot: 1,
  },
  {
    name: 'priya',
    age: 26,
    initial: 'P',
    quote: 'finally an app that does not make me feel like garbage about my spending. it just helps.',
    rot: -1,
  },
  {
    name: 'jake',
    age: 31,
    initial: 'J',
    quote: 'the ai coach is lowkey addicting. i ask it random money questions at 2am, lol.',
    rot: 2,
  },
]

type Stat = { num: number; suffix: string; label: string; isMoney?: boolean }

const STATS: Stat[] = [
  { num: 47, suffix: 'K+', label: 'downloads' },
  { num: 3,  suffix: 'M+', label: 'monthly tiktok views' },
  { num: 2.1, suffix: 'M', label: 'saved by users', isMoney: true },
]

function AnimatedStat({ stat }: { stat: Stat }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const fired = useRef(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(stat.num)
      return
    }
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          const start = performance.now()
          const dur = 1100
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            setN(Number((eased * stat.num).toFixed(stat.num < 10 ? 1 : 0)))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.disconnect()
        }
      }
    }, { threshold: 0.4 })
    io.observe(node)
    return () => io.disconnect()
  }, [stat.num])

  const display = stat.isMoney
    ? `$${n}${stat.suffix}`
    : `${stat.num >= 10 ? Math.round(n) : n}${stat.suffix}`

  return <strong ref={ref}>{display}</strong>
}

export default function Voices() {
  return (
    <section className="sec sec--pink" id="voices">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            Real users · real receipts
          </span>
          <h2 className="h-section sec__h">
            don't take our word <em>for it.</em>
          </h2>
          <p className="lead sec__lead">
            sarah, marcus, priya, jake. real people on real iphones, sharing what peek did for them.
          </p>
        </div>

        <div className="voices__stats reveal">
          {STATS.map((s) => (
            <div key={s.label} className="voices__stat">
              <AnimatedStat stat={s} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="voices__grid reveal">
          {TESTIS.map((t) => (
            <article
              key={t.name}
              className="tcard"
              style={{ ['--rot' as string]: `${t.rot}deg` } as React.CSSProperties}
            >
              <p className="tcard__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="tcard__person">
                <span className="tcard__avatar" aria-hidden="true">{t.initial}</span>
                <div>
                  <span className="tcard__name">{t.name}</span>
                  <span className="tcard__age">{t.age}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="voices__cta-row reveal">
          <span><em>tag your first charge tonight.</em></span>
          <a
            className="btn btn--primary"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            data-cta="mid"
          >
            <AppleIcon />
            Get Peek. Free on iOS.
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
