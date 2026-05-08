import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function FinalCta() {
  return (
    <section className="final-photo" id="get" aria-label="Get Peek">
      <picture>
        <source srcSet="/images/optimized/lifestyle-laugh.webp" type="image/webp" />
        <img
          className="final-photo__bg"
          src="/images/uploads/lifestyle-laugh.png"
          alt="A young woman lying on a checkered blanket, laughing in afternoon light"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div className="final-photo__overlay" aria-hidden="true" />

      <div className="final-photo__content reveal">
        <span className="eyebrow-pill">
          The calm side of money
        </span>

        <h2 className="final-photo__h">
          <em>Less</em> <span className="roman">dread.</span><br />
          <span className="roman">More</span> <em>oh &mdash; that makes sense.</em>
        </h2>

        <p className="final-photo__sub">
          Peek isn&rsquo;t going to make you &ldquo;good with money.&rdquo; It&rsquo;s
          going to make you a person who knows herself, including the spending part.
          The rest gets easier.
        </p>

        <a
          className="btn btn--white btn--big"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
          id="cta-final"
          data-cta="final"
        >
          <AppleIcon />
          Get Peek &mdash; free on iOS
          <span className="arrow" aria-hidden="true">→</span>
        </a>

        <span className="final-photo__trust">
          <span className="stars" aria-hidden="true">★★★★★</span>
          <strong>loved on the app store</strong>
          <span className="sep" aria-hidden="true">·</span>
          <span>secured by Plaid</span>
          <span className="sep" aria-hidden="true">·</span>
          <span>free on iOS</span>
        </span>
      </div>
    </section>
  )
}
