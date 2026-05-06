'use client'

import { useState } from 'react'
import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

const chips = [
  { tone: 'ritual', label: 'Ritual', name: 'part of my routine' },
  { tone: 'treat', label: 'Self Reward', name: 'treating myself' },
  { tone: 'social', label: 'Social', name: 'with someone' },
  { tone: 'conv', label: 'Convenience', name: 'easiest option' },
] as const

const results: Record<
  (typeof chips)[number]['tone'],
  { kind: string; body: string }
> = {
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
  const [active, setActive] = useState<keyof typeof results | null>(null)
  const r = active ? results[active] : null

  return (
    <section className="tagger-sec" id="tagger">
      <div className="wrap">
        <div className="tagger-sec__inner reveal-up">
          <span className="eyebrow">
            <span className="dot" /> try it · 3 seconds
          </span>
          <h2 className="tagger-sec__h">
            What kind of <em>spender</em> are you?
          </h2>
          <p className="tagger-sec__sub">
            One charge, four answers, three seconds. Tap the one that sounds
            like you. Peek will tell you the rest.
          </p>

          <div className="tagger-sec__prompt">
            <span>
              8:42am. <strong className="tagger-sec__prompt-amt">$5.75</strong>{' '}
              at Blank Street. <em>why?</em>
            </span>
          </div>

          <div className="tagger-sec__chips">
            {chips.map((c) => (
              <button
                key={c.tone}
                className={`tag-chip${active === c.tone ? ' is-on' : ''}`}
                data-tone={c.tone}
                onClick={() => setActive(c.tone)}
                aria-pressed={active === c.tone}
              >
                <span className="tag-chip__lbl">{c.label}</span>
                <span className="tag-chip__name">{c.name}</span>
              </button>
            ))}
          </div>

          <div className={`tagger-sec__result${r ? ' is-on' : ''}`} aria-live="polite">
            {r && (
              <>
                <div className="tagger-sec__result-mascot">
                  <picture>
                    <source srcSet="/images/optimized/peek-3d-left.webp" type="image/webp" />
                    <img src="/images/uploads/mascots/peek-3d-left.png" alt="" loading="lazy" />
                  </picture>
                </div>
                <div className="tagger-sec__result-text">
                  <p className="tagger-sec__result-kind">you&rsquo;re {r.kind}</p>
                  <p className="tagger-sec__result-body">{r.body}</p>
                  <a
                    href={APP_STORE_URL}
                    id="cta-tagger-result"
                    data-cta-placement="tagger"
                    className="tagger-sec__result-cta"
                    target="_blank"
                    rel="noopener"
                  >
                    <AppleIcon size={14} />
                    See your real spending kind on Peek
                    <span className="tagger-sec__result-cta-arrow">→</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
