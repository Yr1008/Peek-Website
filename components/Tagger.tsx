'use client'

import { useState } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'
import Confetti from './Confetti'

type Tone = 'ritual' | 'treat' | 'social' | 'conv'

type Question = {
  prompt: string
  amount: string
  merchant: string
  time: string
  chips: { tone: Tone; label: string; name: string }[]
}

const questions: Question[] = [
  {
    prompt: 'a $5.75 latte',
    amount: '$5.75',
    merchant: 'Blank Street',
    time: 'today · 8:42am',
    chips: [
      { tone: 'ritual', label: 'Ritual', name: 'every weekday' },
      { tone: 'treat', label: 'Self Reward', name: 'the seasonal one' },
      { tone: 'social', label: 'Social', name: 'with a friend' },
      { tone: 'conv', label: 'Convenience', name: 'closest to me' },
    ],
  },
  {
    prompt: 'a pair of sambas',
    amount: '$84',
    merchant: 'Adidas',
    time: 'last fri · 7:12pm',
    chips: [
      { tone: 'treat', label: 'Self Reward', name: 'hard week' },
      { tone: 'ritual', label: 'Ritual', name: 'replace old pair' },
      { tone: 'social', label: 'Social', name: 'matched a friend' },
      { tone: 'conv', label: 'Convenience', name: 'on sale, just ordered' },
    ],
  },
  {
    prompt: '$22 doordash',
    amount: '$22',
    merchant: 'DoorDash',
    time: 'tue · 9:18pm',
    chips: [
      { tone: 'conv', label: 'Convenience', name: 'too tired to cook' },
      { tone: 'ritual', label: 'Ritual', name: 'tuesday thing' },
      { tone: 'treat', label: 'Self Reward', name: 'long day' },
      { tone: 'social', label: 'Social', name: 'split with roommate' },
    ],
  },
]

const kinds: Record<Tone, { kind: string; body: string }> = {
  ritual: {
    kind: 'a ritual person.',
    body: 'you spend on the same anchors every week. that is not a problem. that is a personality. peek shows the rituals worth keeping and the ones that quietly drift.',
  },
  treat: {
    kind: 'a self-reward person.',
    body: 'you tag the hard weeks with little wins. peek tracks which treats actually feel worth it three days later, and which were just a dopamine hit you forgot.',
  },
  social: {
    kind: 'a social spender.',
    body: 'most of your meaningful spending is shared with someone you care about. peek surfaces the ones that built memory, and the ones that were peer pressure in a nice outfit.',
  },
  conv: {
    kind: 'a convenience spender.',
    body: 'the 9pm doordash, the airport pretzel, the thing you grabbed because you could not deal. peek does not judge. it shows you the hidden cost of "just easier" so you can decide.',
  },
}

export default function Tagger() {
  const [step, setStep] = useState(0)
  const [picks, setPicks] = useState<Tone[]>([])
  const [burstKey, setBurstKey] = useState(0)

  const done = step >= questions.length
  const winner = (() => {
    if (!picks.length) return null
    const c: Record<Tone, number> = { ritual: 0, treat: 0, social: 0, conv: 0 }
    picks.forEach((p) => (c[p] += 1))
    return (Object.entries(c).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null) as Tone | null
  })()

  const onPick = (t: Tone) => {
    setBurstKey((k) => k + 1)
    setPicks((p) => [...p, t])
    setStep((s) => s + 1)
  }

  const onReset = () => {
    setStep(0)
    setPicks([])
  }

  const q = !done ? questions[step] : null

  return (
    <section className="tagger-sec" id="tagger">
      <div className="wrap">
        <div className="tagger-sec__inner reveal-up" style={{ position: 'relative' }}>
          <span className="eyebrow">
            <span className="dot" /> spending personality · 30 seconds
          </span>
          <h2 className="tagger-sec__h">
            What kind of <em>spender</em> are you?
          </h2>
          <p className="tagger-sec__sub">
            Three questions. Tap the one that sounds like you. Peek will tell
            you the rest.
          </p>

          <div className="quiz-progress" aria-hidden="true">
            {questions.map((_, i) => (
              <span
                key={i}
                className={`quiz-progress__dot${
                  i === step ? ' is-on' : i < step ? ' is-done' : ''
                }`}
              />
            ))}
          </div>

          {q && (
            <div className="quiz-step-anim" key={step}>
              <div className="tagger-sec__prompt">
                <span>
                  <strong className="tagger-sec__prompt-amt">{q.amount}</strong>{' '}
                  at {q.merchant}, {q.time}. <em>why?</em>
                </span>
              </div>
              <div className="tagger-sec__chips" style={{ position: 'relative' }}>
                {q.chips.map((c) => (
                  <button
                    key={c.tone + c.label}
                    className="tag-chip"
                    data-tone={c.tone}
                    onClick={() => onPick(c.tone)}
                    aria-label={`${c.label}, ${c.name}`}
                  >
                    <span className="tag-chip__lbl">{c.label}</span>
                    <span className="tag-chip__name">{c.name}</span>
                  </button>
                ))}
                <Confetti trigger={burstKey} count={14} />
              </div>
            </div>
          )}

          {done && winner && (
            <div className="tagger-sec__result is-on quiz-step-anim" key="result">
              <div className="tagger-sec__result-mascot">
                <picture>
                  <source srcSet="/images/optimized/peek-3d-left.webp" type="image/webp" />
                  <img src="/images/uploads/mascots/peek-3d-left.png" alt="" loading="lazy" />
                </picture>
              </div>
              <div className="tagger-sec__result-text">
                <span className="quiz-badge">badge unlocked</span>
                <p className="tagger-sec__result-kind">you&rsquo;re {kinds[winner].kind}</p>
                <p className="tagger-sec__result-body">{kinds[winner].body}</p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={APP_STORE_URL}
                    id="cta-quiz-result"
                    data-cta-placement="quiz-result"
                    className="tagger-sec__result-cta"
                    target="_blank"
                    rel="noopener"
                  >
                    <AppleIcon size={14} />
                    See your real spending kind on Peek
                    <span className="tagger-sec__result-cta-arrow">→</span>
                  </a>
                  <button
                    onClick={onReset}
                    style={{
                      fontSize: 13,
                      color: 'rgba(244,236,219,.65)',
                      textDecoration: 'underline',
                      background: 'none',
                      border: 0,
                      cursor: 'pointer',
                      padding: '4px 8px',
                    }}
                  >
                    take it again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
