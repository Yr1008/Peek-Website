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
    const dur = 1100
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
    <section className="gap sec--lavender" id="gap">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            the part nobody says out loud
          </span>
          <h2 className="h-section sec__h">
            you're not bad at <em>budgeting.</em><br />
            budgeting is bad at <em>understanding you.</em>
          </h2>
          <p className="lead sec__lead">
            most apps tell you <em>what</em> you spent. they can't tell you why.
            here's the gap they leave you in.
          </p>
        </div>

        <div className="gap__demo reveal">
          <span className="gap__demo-q">
            guess your last 30 days on <em>coffee &amp; takeout</em>
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
              show me what's actually there →
            </button>
          )}

          {revealed && (
            <div className="gap__panel" role="status">
              <span className="gap__panel-lbl">average peek user, week one:</span>
              <div className="gap__panel-amount">
                <span className="gap__demo-prefix" style={{ color: '#E85F30' }}>$</span>
                {animatedActual}
              </div>
              <span className="gap__panel-diff">
                {diff > 0 ? '+' : ''}${Math.abs(diff)} {diff > 0 ? 'more than you guessed' : 'less than you guessed'}
              </span>
              <p className="gap__panel-quote">
                "i thought i was spending $80 on coffee. <em>it was $312.</em> not because i'm reckless. because no one ever showed me."
                <span className="gap__panel-cite">— maya, 26, brooklyn</span>
              </p>
            </div>
          )}

          <div className="gap__polaroid" aria-hidden="true">
            <picture>
              <source srcSet="/images/optimized/p-portrait-blonde.webp" type="image/webp" />
              <img src="/images/uploads/people/portrait-blonde.png" alt="" loading="lazy" />
            </picture>
            <span className="gap__polaroid-cap">maya · brooklyn</span>
          </div>
        </div>
      </div>
    </section>
  )
}
