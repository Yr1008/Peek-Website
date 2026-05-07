import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function Hero() {
  return (
    <section className="hero" id="why" aria-label="Peek hero">
      <picture>
        <source srcSet="/images/optimized/lifestyle-laugh.webp" type="image/webp" />
        <img
          className="hero__photo"
          src="/images/uploads/lifestyle-laugh.png"
          alt="A young woman lying on a checkered blanket, laughing in afternoon light"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <span className="eyebrow-pill">
          The calm side of money
        </span>

        <h1 className="hero__h1">
          Less dread.<br />
          More <em>oh, that makes sense.</em>
        </h1>

        <p className="hero__sub">
          Peek isn&rsquo;t going to make you &ldquo;good with money.&rdquo; It&rsquo;s
          going to make you a person who knows herself, including the spending part.
          The rest gets easier.
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

        <span className="trust trust--light">
          <span className="stars" aria-hidden="true">★★★★★</span>
          <strong>Loved on the App Store</strong>
          <span className="sep" aria-hidden="true">·</span>
          <span>Free on iOS</span>
          <span className="sep" aria-hidden="true">·</span>
          <span>47K+ downloads</span>
        </span>
      </div>
    </section>
  )
}
