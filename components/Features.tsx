type Feat = {
  rev?: boolean
  eyebrow: string
  h: React.ReactNode
  p: string
  bullets: string[]
  phoneSrc: string
  phoneWebp: string
  alt: string
}

const FEATS: Feat[] = [
  {
    eyebrow: 'Insight reveals',
    h: <>The weekly moment that <em>changes your week.</em></>,
    p: 'Every Sunday, Peek surfaces one tiny thing you did not see coming. The $40 a month on Apple Stuff. The doordash creep. The week you actually saved without trying. Not a chart. A small noticing.',
    bullets: [
      'Surfaces one moment, not a hundred categories',
      'Shows the pattern in plain English',
      'Never scolds. Never gamifies guilt.',
    ],
    phoneSrc: '/images/uploads/screen-blindbox.png',
    phoneWebp: '/images/optimized/screen-blindbox.webp',
    alt: 'Peek revealing a weekly insight about your spending pattern',
  },
  {
    rev: true,
    eyebrow: 'Funds, not caps',
    h: <>Soft guardrails for <em>what you care about.</em></>,
    p: 'Caps feel like punishment. Funds feel like permission. Peek lets you set a fund for what matters (your bookshop habit, your pottery class, your monthly trip home) and tells you when you are coasting, never when you are bad.',
    bullets: [
      'Set funds for the things you actually love',
      'Adjust on the fly. Life is fluid.',
      'Nudges that read like a friend, not a parent',
    ],
    phoneSrc: '/images/uploads/screen-caps.png',
    phoneWebp: '/images/optimized/screen-caps.webp',
    alt: 'Peek showing a soft fund instead of a strict cap',
  },
  {
    eyebrow: 'AI reflection coach',
    h: <>Money questions answered <em>like a friend would.</em></>,
    p: '"Can I afford this?" "Why do I feel weird about that purchase?" "Am I doing better this month?" Peek answers in plain English, in your context, without ever making you feel stupid for asking.',
    bullets: [
      'Trained on your real spending, not generic advice',
      'Replies in seconds, in plain language',
      'Remembers the last time you asked',
    ],
    phoneSrc: '/images/uploads/screen-chat.png',
    phoneWebp: '/images/optimized/screen-chat.webp',
    alt: 'Peek AI coach answering a question about a recent purchase',
  },
]

export default function Features() {
  return (
    <section className="sec features" id="features">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">Inside Peek</span>
          <h2 className="h-section sec__h">
            The little moments that <em>change how money feels.</em>
          </h2>
          <p className="lead sec__lead">
            Not a feature list. Three real moments inside the app, each tuned to one anxiety it lifts.
          </p>
        </div>

        {FEATS.map((f, i) => (
          <article key={i} className={`frow${f.rev ? ' frow--rev' : ''} reveal`}>
            <div className="frow__copy">
              <span className="eyebrow frow__eyebrow">{f.eyebrow}</span>
              <h3 className="frow__h">{f.h}</h3>
              <p className="frow__p">{f.p}</p>
              <ul className="frow__list">
                {f.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
            <div className="frow__visual">
              <span className="frow__deco frow__deco--1" aria-hidden="true" />
              <span className="frow__deco frow__deco--2" aria-hidden="true" />
              <div className="frow__phone">
                <picture>
                  <source srcSet={f.phoneWebp} type="image/webp" />
                  <img src={f.phoneSrc} alt={f.alt} loading="lazy" decoding="async" />
                </picture>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
