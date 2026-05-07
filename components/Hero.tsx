import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function Hero() {
  return (
    <section className="hero" id="why">
      <div className="orb orb--peach" aria-hidden="true" />
      <div className="orb orb--purple" aria-hidden="true" />

      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__head">
            <span className="eyebrow hero__eyebrow">Anti-budgeting. Pro-clarity.</span>

            <h1 className="h-display hero__h1">
              Know <em>the why</em> behind every dollar.
            </h1>

            <p className="hero__sub">
              Your bank shows what you spent. Peek shows you why. The money app for
              people who want clarity without the spreadsheet.
            </p>

            <div className="hero__cta-row">
              <a
                className="btn btn--primary"
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener"
                id="cta-hero"
                data-cta="hero"
              >
                <AppleIcon />
                Download on the App Store
              </a>
              <a className="hero__cta-secondary" href="#how">
                See how it works →
              </a>
            </div>

            <div className="hero__trust">
              <span className="stars" aria-hidden="true">★★★★★</span>
              <strong>Loved on the App Store</strong>
              <span className="sep" aria-hidden="true">·</span>
              <span>Free on iOS</span>
              <span className="sep" aria-hidden="true">·</span>
              <span>47K+ downloads</span>
            </div>
          </div>

          <div className="hero__visual" aria-label="Peek showing a tagged spending insight on iPhone">
            <div className="hero__phone">
              <picture>
                <source srcSet="/images/optimized/screen-tags.webp" type="image/webp" />
                <img
                  src="/images/uploads/screen-tags.png"
                  alt="The Peek app showing tagged spending and intentional purchases"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="insight-card insight-card--1" aria-hidden="true">
              <span className="insight-card__lbl">This week</span>
              <span className="insight-card__num">$412</span>
              <span className="insight-card__tag insight-card__tag--intentional">Intentional</span>
            </div>

            <div className="insight-card insight-card--2" aria-hidden="true">
              <span className="insight-card__lbl">Saved by you</span>
              <span className="insight-card__num">$340</span>
              <span className="insight-card__tag insight-card__tag--saved">Skipped impulse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
