'use client'

import { useState, useEffect, useRef } from 'react'

const ACTUAL = 312

export default function Gap() {
  const [guess, setGuess] = useState(120)
  const [revealed, setRevealed] = useState(false)
  const [animatedActual, setAnimatedActual] = useState(0)
  const animFrame = useRef<number | null>(null)

  useEffect(() => {
    if (!revealed) return
    const start = performance.now()
    const dur = 1200
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setAnimatedActual(Math.round(eased * ACTUAL))
      if (p < 1) animFrame.current = requestAnimationFrame(tick)
    }
    animFrame.current = requestAnimationFrame(tick)
    return () => { if (animFrame.current) cancelAnimationFrame(animFrame.current) }
  }, [revealed])

  const diff = ACTUAL - guess

  return (
    <section className="gap" id="gap">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="eyebrow__num">03</span>
            <span className="eyebrow__sep" aria-hidden="true" />
            <span>The gap</span>
          </span>
          <h2 className="h-section sec__h">
            You&rsquo;re not bad at budgeting.<br />
            <em>Budgeting is bad at understanding you.</em>
          </h2>
          <p className="lead sec__lead">
            Most apps tell you what you spent. They can&rsquo;t tell you why. Here&rsquo;s the gap they leave you in.
          </p>
        </div>

        <div className="gap__wrap">
          <div className="gap__demo reveal">
            <span className="gap__demo-q">
              Guess your last 30 days on <em>coffee &amp; takeout</em>
            </span>
            <div className="gap__demo-amount" aria-live="polite">
              <span className="gap__demo-prefix">$</span>
              {guess}
            </div>
            <input
              type="range"
              min={40}
              max={600}
              step={5}
              value={guess}
              onChange={(e) => setGuess(Number(e.target.value))}
              disabled={revealed}
              className="gap__demo-slider"
              aria-label="your guess for coffee and takeout in the last 30 days"
            />
            {!revealed && (
              <button
                className="gap__demo-reveal"
                onClick={() => setRevealed(true)}
                data-cta="gap-reveal"
              >
                Show me what&rsquo;s actually there →
              </button>
            )}

            {revealed && (
              <div className="gap__panel" role="status">
                <span className="gap__panel-lbl">Average peek user, week one</span>
                <div className="gap__panel-amount">
                  <span className="gap__demo-prefix" style={{ color: '#E85F30' }}>$</span>
                  {animatedActual}
                </div>
                <span className="gap__panel-diff">
                  {diff > 0 ? '+' : ''}${Math.abs(diff)} {diff > 0 ? 'more than you guessed' : 'less than you guessed'}
                </span>
                <p className="gap__panel-quote">
                  &ldquo;I thought I was spending $80 on coffee. <em>It was $312.</em> Not because I&rsquo;m reckless. Because no one ever showed me.&rdquo;
                  <span className="gap__panel-cite">Maya · Brooklyn</span>
                </p>
              </div>
            )}
          </div>

          <div className="gap__photo reveal">
            <div className="gap__photo-img">
              <picture>
                <source srcSet="/images/optimized/p-portrait-blonde.webp" type="image/webp" />
                <img src="/images/uploads/people/portrait-blonde.png" alt="Maya, a peek user from Brooklyn" loading="lazy" />
              </picture>
            </div>
            <span className="gap__photo-cap">Maya · Brooklyn · joined March 2026</span>
          </div>
        </div>
      </div>
    </section>
  )
}
