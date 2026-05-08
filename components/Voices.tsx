import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

const TESTIS = [
  {
    name: 'Sarah',
    age: 28,
    initial: 'S',
    quote: 'I actually open this app. Like, voluntarily. That has never happened with a finance app.',
    rot: -2,
  },
  {
    name: 'Marcus',
    age: 34,
    initial: 'M',
    quote: 'Found out I was spending $200 a month on subscriptions I forgot about. Peek paid for itself day one.',
    rot: 1,
  },
  {
    name: 'Priya',
    age: 26,
    initial: 'P',
    quote: 'Finally an app that does not make me feel like garbage about my spending. It just helps.',
    rot: -1,
  },
  {
    name: 'Jake',
    age: 31,
    initial: 'J',
    quote: 'The AI coach is lowkey addicting. I ask it random money questions at 2am, lol.',
    rot: 2,
  },
]

export default function Voices() {
  return (
    <section className="sec sec--pink" id="voices">
      <span className="sec__orb sec__orb--peach" aria-hidden="true" />
      <span className="sec__sticker sec__sticker--tl" aria-hidden="true">
        <picture>
          <source srcSet="/images/optimized/st-flower.webp" type="image/webp" />
          <img src="/images/uploads/stickers/flower.png" alt="" />
        </picture>
      </span>
      <span className="sec__sticker sec__sticker--br" aria-hidden="true">
        <picture>
          <source srcSet="/images/optimized/st-tea.webp" type="image/webp" />
          <img src="/images/uploads/stickers/tea.png" alt="" />
        </picture>
      </span>

      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            06 / what people say
          </span>
          <h2 className="h-section sec__h">
            don't take our word <em>for it.</em>
          </h2>
          <p className="lead sec__lead">
            real users. real iPhones. real receipts.
          </p>
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
