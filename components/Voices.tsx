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

export default function Voices() {
  return (
    <section className="voices sec--pink" id="voices">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            people who finally <em>get it</em>
          </span>
          <h2 className="h-section sec__h">
            don't take our word <em>for it.</em>
          </h2>
          <p className="lead sec__lead">
            real users, real iphones, real receipts. no influencer polish.
          </p>
        </div>

        <div className="voices__stats reveal">
          <div className="voices__stat">
            <strong>47k+</strong>
            <span>downloads</span>
          </div>
          <div className="voices__stat">
            <strong>3M+</strong>
            <span>monthly tiktok views</span>
          </div>
          <div className="voices__stat">
            <strong>$2.1M</strong>
            <span>saved by users</span>
          </div>
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
          <span>tag your first charge tonight.</span>
          <a
            className="btn btn--primary"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            data-cta="mid"
          >
            <AppleIcon />
            <span>download <em>peek</em></span>
          </a>
        </div>
      </div>
    </section>
  )
}
