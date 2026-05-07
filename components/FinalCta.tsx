import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function FinalCta() {
  return (
    <section className="final sec--peach" id="get">
      <div className="wrap">
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
            stop tracking.<br />
            <em>start understanding yourself.</em>
          </h2>
          <p className="final__p">
            <em>30 seconds</em> to connect. <em>5 minutes</em> a day.{' '}
            <em>0</em> spreadsheets.
          </p>

          <a
            className="btn btn--primary btn--big"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            data-cta="cta-final"
          >
            <AppleIcon />
            <span>download peek <em>free</em></span>
          </a>

          <div className="final__meta">
            <span><span className="stars" aria-hidden="true">★★★★★</span> <strong>4.9</strong> · 1,240+ reviews</span>
            <span className="sep" aria-hidden="true">·</span>
            <span>secured by <strong>plaid</strong></span>
            <span className="sep" aria-hidden="true">·</span>
            <span>free on ios</span>
          </div>
        </div>
      </div>
    </section>
  )
}
