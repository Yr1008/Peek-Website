import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function FinalCta() {
  return (
    <section className="final" id="get">
      <div className="orb orb--peach" aria-hidden="true" />
      <div className="wrap">
        <div className="final__inner reveal">
          <h2 className="final__h">
            Money that finally <em>reflects who you are.</em>
          </h2>
          <p className="final__p">
            Stop tracking. Start understanding. Free on iOS.
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
            Download on the App Store
          </a>

          <div className="final__meta">
            <span><span className="stars" aria-hidden="true">★★★★★</span> Loved on the App Store</span>
            <span className="sep" aria-hidden="true">·</span>
            <span>Free on iOS</span>
            <span className="sep" aria-hidden="true">·</span>
            <span>Secured by Plaid</span>
          </div>
        </div>
      </div>
    </section>
  )
}
