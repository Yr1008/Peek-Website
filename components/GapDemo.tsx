'use client'

import { useState } from 'react'

export default function GapDemo() {
  const [guess, setGuess] = useState(120)
  const [revealed, setRevealed] = useState(false)
  const [actualDisplay, setActualDisplay] = useState(0)
  const [target, setTarget] = useState(0)

  const min = 40
  const max = 600
  const pct = ((guess - min) / (max - min)) * 100

  const handleReveal = () => {
    const actual = Math.round(guess * 1.85 + 60)
    setTarget(actual)
    setRevealed(true)
    let n = guess
    const step = Math.max(1, Math.round((actual - guess) / 38))
    const tick = () => {
      n += step
      if (n >= actual) {
        setActualDisplay(actual)
        return
      }
      setActualDisplay(n)
      requestAnimationFrame(tick)
    }
    tick()
  }

  return (
    <div
      className="rounded-[32px] relative"
      style={{
        background: 'var(--paper)',
        color: 'var(--ink)',
        padding: 'clamp(28px, 3.5vw, 48px)',
        boxShadow: '0 30px 60px -20px rgba(0,0,0,0.4)',
      }}
    >
      <span
        className="block text-center"
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 22,
          lineHeight: 1.3,
          marginBottom: 28,
          color: 'var(--ink-2)',
        }}
      >
        guess your last 30 days on{' '}
        <em style={{ fontStyle: 'italic', color: 'var(--peach)' }}>
          coffee &amp; takeout.
        </em>
      </span>

      <div className="flex items-baseline justify-center gap-1 mb-4">
        <span
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 36,
            color: 'var(--ink-soft)',
          }}
        >
          $
        </span>
        <span
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(72px, 10vw, 120px)',
            lineHeight: 1,
            color: 'var(--ink)',
            letterSpacing: '-0.04em',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {guess}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={guess}
        step={5}
        onChange={(e) => setGuess(+e.target.value)}
        aria-label="your guess"
        className="gap-slider w-full"
        style={
          {
            ['--p' as string]: `${pct}%`,
          } as React.CSSProperties
        }
      />

      <div className="text-center">
        {!revealed && (
          <button
            onClick={handleReveal}
            className="mt-5 transition-all"
            style={{
              background: 'var(--ink)',
              color: 'var(--cream)',
              border: 'none',
              padding: '14px 24px',
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--peach)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--ink)'
              e.currentTarget.style.transform = ''
            }}
          >
            show me what&rsquo;s actually there <span aria-hidden="true">→</span>
          </button>
        )}
      </div>

      {revealed && (
        <div
          className="anim-reveal-up text-center mt-7 pt-7"
          style={{ borderTop: '1px dashed rgba(42,19,82,0.18)' }}
        >
          <span
            className="block text-[13px] mb-3"
            style={{
              color: 'var(--ink-soft)',
              letterSpacing: '0.04em',
            }}
          >
            average peek user, week one:
          </span>
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 36,
                color: 'var(--ink-soft)',
              }}
            >
              $
            </span>
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(64px, 9vw, 100px)',
                fontWeight: 500,
                color: 'var(--peach)',
                letterSpacing: '-0.04em',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {actualDisplay}
            </span>
          </div>
          <div
            className="inline-flex items-baseline gap-2 px-4 py-2 rounded-full"
            style={{ background: 'rgba(255, 122, 60, 0.12)' }}
          >
            <span
              style={{
                fontFamily: 'var(--serif)',
                fontWeight: 600,
                fontSize: 18,
                color: 'var(--peach)',
              }}
            >
              +${target - guess}
            </span>
            <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>
              more than you guessed
            </span>
          </div>
          <p
            className="mt-7 mb-1.5 max-w-md mx-auto"
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 18,
              lineHeight: 1.5,
              color: 'var(--ink-2)',
              fontStyle: 'italic',
            }}
          >
            &ldquo;i thought i was spending $80 on coffee.{' '}
            <em
              style={{
                color: 'var(--peach)',
                fontWeight: 500,
                fontStyle: 'italic',
              }}
            >
              it was $312.
            </em>{' '}
            not because i&rsquo;m reckless. because no one ever showed me.&rdquo;
            <span style={{ fontSize: 13, color: 'var(--ink-soft)', display: 'inline-block', marginLeft: 4 }}>
              {' '}— maya, 26, brooklyn
            </span>
          </p>
        </div>
      )}

      <style>{`
        .gap-slider {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          margin: 12px 0 8px;
          cursor: grab;
        }
        .gap-slider::-webkit-slider-runnable-track {
          height: 4px; border-radius: 2px;
          background: linear-gradient(to right, var(--peach) 0%, var(--peach) var(--p), rgba(42,19,82,0.12) var(--p), rgba(42,19,82,0.12) 100%);
        }
        .gap-slider::-moz-range-track {
          height: 4px; border-radius: 2px;
          background: linear-gradient(to right, var(--peach) 0%, var(--peach) var(--p), rgba(42,19,82,0.12) var(--p), rgba(42,19,82,0.12) 100%);
        }
        .gap-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 24px; height: 24px; border-radius: 50%;
          background: var(--ink); border: 3px solid var(--paper);
          margin-top: -10px;
          box-shadow: 0 4px 12px rgba(42,19,82,0.3);
          cursor: grab;
        }
        .gap-slider::-moz-range-thumb {
          width: 24px; height: 24px; border-radius: 50%;
          background: var(--ink); border: 3px solid var(--paper);
          box-shadow: 0 4px 12px rgba(42,19,82,0.3);
          cursor: grab;
        }
        .gap-slider:active::-webkit-slider-thumb { cursor: grabbing; }
      `}</style>
    </div>
  )
}
