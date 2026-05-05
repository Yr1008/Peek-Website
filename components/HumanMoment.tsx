import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function HumanMoment() {
  return (
    <section className="moment">
      <div className="moment__bg">
        <img
          src="/images/hero-street-bg.png"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="wrap moment__in r">
        <span className="moment__brow">the calm side of money</span>
        <h2 className="moment__h">
          <em>Less</em> dread.
          <br />
          More <em>oh — that makes sense.</em>
        </h2>
        <p className="moment__p">
          Peek isn&rsquo;t going to make you &ldquo;good with money.&rdquo;
          It&rsquo;s going to make you a person who knows herself, including
          the spending part. The rest gets easier.
        </p>
        <a
          className="btn btn--primary"
          id="cta-moment"
          data-cta-placement="moment"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
        >
          <span className="btn__icon">
            <AppleIcon />
          </span>
          Get Peek — free on iOS
          <span className="btn__arrow">→</span>
        </a>
      </div>
    </section>
  )
}
