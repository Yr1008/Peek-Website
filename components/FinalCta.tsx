import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function FinalCta() {
  return (
    <section className="final sec--peach" id="get">
      <div className="final__orbs" aria-hidden="true" />

      <div className="final__inner reveal">
        <div className="final__mascot" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/optimized/peek-3d-left.webp"
          >
            <source src="/images/optimized/peek-animated.webm" type="video/webm" />
            <source src="/images/optimized/peek-animated.mp4" type="video/mp4" />
            <img src="/images/optimized/peek-3d-left.webp" alt="" />
          </video>
        </div>

        <h2 className="final__h">
          money that finally <em>reflects who you are.</em>
        </h2>
        <p className="final__p">
          stop tracking. <em>start understanding yourself.</em> free on ios.
          30 seconds to connect. 5 minutes a day.
        </p>

        <a
          className="btn btn--primary btn--big"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
          id="cta-final"
          data-cta="final"
        >
          <AppleIcon />
          Get Peek. Free on iOS.
          <span className="arrow" aria-hidden="true">→</span>
        </a>

        <div className="final__meta">
          <span><span className="stars" aria-hidden="true">★★★★★</span> <strong>loved on the app store</strong></span>
          <span className="sep" aria-hidden="true">·</span>
          <span>secured by <strong>plaid</strong></span>
          <span className="sep" aria-hidden="true">·</span>
          <span>free on ios</span>
        </div>
      </div>
    </section>
  )
}
