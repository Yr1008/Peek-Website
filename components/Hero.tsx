import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function Hero() {
  return (
    <section className="hero" id="why" aria-label="Peek hero">
      <picture>
        <source srcSet="/images/optimized/p-portrait-blonde.webp" type="image/webp" />
        <img
          className="hero__photo"
          src="/images/uploads/people/portrait-blonde.png"
          alt="A young woman, candid, smiling — the calm side of money"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <span className="hero__caveat" aria-hidden="true">
          you don't know what 'food &amp; dining' actually means. ↓ same.
        </span>

        <span className="eyebrow-pill">
          <span aria-hidden="true">●</span>
          The calm side of money
        </span>

        <h1 className="hero__h1">
          <em>Less</em> dread.<br />
          <em>More</em>: <em>oh, that makes sense.</em>
        </h1>

        <p className="hero__sub">
          Peek isn't going to make you "good with money." It's going to make
          you a person who knows herself, including the spending part. The rest
          gets easier.
        </p>

        <div className="hero__cta-row">
          <a
            className="btn btn--white"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            id="cta-hero"
            data-cta="hero"
          >
            <AppleIcon />
            Get Peek. Free on iOS.
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <span className="trust trust--light" style={{ marginTop: 4 }}>
          <span className="stars" aria-hidden="true">★★★★★</span>
          <strong>loved on the app store</strong>
          <span className="sep" aria-hidden="true">·</span>
          <span>free on ios</span>
          <span className="sep" aria-hidden="true">·</span>
          <span>47k+ downloads</span>
        </span>
      </div>
    </section>
  )
}
