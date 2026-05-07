'use client'

import { useState } from 'react'

type Card = {
  date: string
  merchant: string
  initial: string
  bankCat: string
  amount: string
  peekTime: string
  peekCat: string
  pill: string
  story: string
  feel: number
  feelLabel: string
}

const cards: Card[] = [
  {
    date: 'apr 6 · mon',
    merchant: 'Chubby Cattle BBQ',
    initial: 'C',
    bankCat: 'Food & Dining',
    amount: '$345.26',
    peekTime: '8:14pm · with sis',
    peekCat: 'a celebration with your sister',
    pill: 'self reward',
    story: '"treating ourselves" felt worth it',
    feel: 84,
    feelLabel: '84% worth it',
  },
  {
    date: 'apr 8 · wed',
    merchant: 'Blank Street',
    initial: 'B',
    bankCat: 'Coffee Shop',
    amount: '$5.75',
    peekTime: '8:42am · pre-1:1',
    peekCat: 'the latte you have every weekday',
    pill: 'ritual',
    story: '"part of my routine" steady',
    feel: 72,
    feelLabel: '72% on track',
  },
  {
    date: 'apr 9 · thu',
    merchant: 'Target',
    initial: 'T',
    bankCat: 'Department Store',
    amount: '$47.18',
    peekTime: '9:14pm · post-1:1',
    peekCat: 'the candle and three things you forgot',
    pill: 'convenience',
    story: '"i was tired" pattern noticed',
    feel: 38,
    feelLabel: '38% worth it',
  },
]

export default function Permission() {
  const [flipped, setFlipped] = useState<number[]>([])
  const toggle = (i: number) =>
    setFlipped((arr) =>
      arr.includes(i) ? arr.filter((n) => n !== i) : [...arr, i]
    )

  return (
    <section className="permission" id="permission">
      <div className="wrap">
        <div className="permission__head reveal-up">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot" /> the part nobody says out loud
          </span>
          <h2 className="h-section">
            You&rsquo;re not bad at budgeting.
            <br />
            <em>Budgeting is bad at understanding you.</em>
          </h2>
          <p className="lead">
            Same dollars. Different stories. Tap any card to see the bank&rsquo;s
            version flip into yours.
          </p>
        </div>

        <div className="permission__cards reveal-up">
          {cards.map((c, i) => {
            const isFlipped = flipped.includes(i)
            return (
              <div
                key={c.merchant}
                className={`flip${isFlipped ? ' is-flipped' : ''}`}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(i)
                  }
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isFlipped}
                aria-label={`Flip the ${c.merchant} receipt to see how Peek shows it`}
              >
                <div className="flip__inner">
                  {/* Bank face */}
                  <div className="flip__face flip__face--front">
                    <div className="flip__brow">
                      <span>your bank app</span>
                      <span>{c.date}</span>
                    </div>
                    <div className="flip__row">
                      <div className="flip__merch">
                        <span className="flip__avatar">{c.initial}</span>
                        <div>
                          <h3 className="flip__name">{c.merchant}</h3>
                          <span className="flip__cat">{c.bankCat}</span>
                        </div>
                      </div>
                      <div className="flip__amount">{c.amount}</div>
                    </div>
                    <div className="flip__bottom">debit · ****4271</div>
                    <span className="flip__hint">tap →</span>
                  </div>
                  {/* Peek face */}
                  <div className="flip__face flip__face--back">
                    <div className="flip__brow">
                      <span>peek</span>
                      <span>{c.peekTime}</span>
                    </div>
                    <div className="flip__row">
                      <div className="flip__merch">
                        <span className="flip__avatar">{c.initial.toLowerCase()}</span>
                        <div>
                          <h3 className="flip__name">
                            {c.merchant.toLowerCase()}
                          </h3>
                          <span className="flip__cat">{c.peekCat}</span>
                        </div>
                      </div>
                      <div className="flip__amount">{c.amount}</div>
                    </div>
                    <div className="flip__bottom">
                      <div className="flip__story">
                        <span className="flip__pill">{c.pill}</span>
                        <span className="flip__story-text">{c.story}</span>
                      </div>
                      <div className="flip__feel">
                        <div className="flip__feel-row">
                          <span>how did this feel?</span>
                          <span className="flip__feel-val">{c.feelLabel}</span>
                        </div>
                        <div className="flip__feel-bar">
                          <div
                            className="flip__feel-fill"
                            style={{ width: `${c.feel}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <p className="permission__between reveal-up">
          Same dollars. Three stories. <em>Only the second column is yours.</em>
        </p>
      </div>
    </section>
  )
}
