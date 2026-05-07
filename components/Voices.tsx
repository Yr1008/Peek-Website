import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

const TESTIS = [
  {
    name: 'Sarah',
    age: 28,
    initial: 'S',
    quote: 'I actually open this app. Like, voluntarily. That has never happened with a finance app.',
  },
  {
    name: 'Marcus',
    age: 34,
    initial: 'M',
    quote: 'Found out I was spending $200 a month on subscriptions I forgot about. Peek paid for itself day one.',
  },
  {
    name: 'Priya',
    age: 26,
    initial: 'P',
    quote: 'Finally an app that does not make me feel like garbage about my spending. It just helps.',
  },
  {
    name: 'Jake',
    age: 31,
    initial: 'J',
    quote: 'The AI coach is lowkey addicting. I ask it random money questions at 2am, lol.',
  },
]

export default function Voices() {
  return (
    <section className="voices" id="voices">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="eyebrow__num">08</span>
            <span className="eyebrow__sep" aria-hidden="true" />
            <span>Real users</span>
          </span>
          <h2 className="h-section sec__h">
            Don&rsquo;t take our word <em>for it.</em>
          </h2>
          <p className="lead sec__lead">
            Real users. Real iPhones. Real receipts.
          </p>
        </div>

        <div className="voices__stats reveal">
          <div className="voices__stat">
            <strong>47K+</strong>
            <span>Downloads</span>
          </div>
          <div className="voices__stat">
            <strong>3M+</strong>
            <span>Monthly TikTok views</span>
          </div>
          <div className="voices__stat">
            <strong>$2.1M</strong>
            <span>Saved by users</span>
          </div>
        </div>

        <div className="voices__grid reveal">
          {TESTIS.map((t) => (
            <article key={t.name} className="tcard">
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
          <span><em>Tag your first charge tonight.</em></span>
          <a
            className="btn btn--primary"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            data-cta="mid"
          >
            <AppleIcon />
            Get Peek. Free on iOS.
          </a>
        </div>
      </div>
    </section>
  )
}
