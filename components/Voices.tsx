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
    <section className="voices" id="voices">
      <div className="voices__wallpaper" aria-hidden="true" />
      <div className="voices__inner wrap">
        <div className="voices__head reveal">
          <span className="chapter">chapter eight. people who get it.</span>
          <h2 className="h-section sec__h">
            Don't take our word <em>for it.</em>
          </h2>
          <p className="lead sec__lead">
            Real users. Real iPhones. Real receipts. Sarah, Marcus, Priya, Jake.
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
            Get Peek. <em>Free on iOS.</em>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div className="forward">
          <span>↓ before you tap</span>
        </div>
      </div>
    </section>
  )
}
