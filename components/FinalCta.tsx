import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'
import PlaidMini from './PlaidMini'

export default function FinalCta() {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="cta__banner r">
          <span className="cta__brow">tag your first charge tonight</span>
          <h2 className="cta__h">
            See <em>why</em> you spend.
            <br />
            Not just <em>how much.</em>
          </h2>
          <p className="cta__p">
            Free on iOS. Connect a bank in 30 seconds. Secured by Plaid.
            Cancel any time. There&rsquo;s nothing to cancel.
          </p>
          <a
            className="btn btn--primary btn--lg"
            id="cta-final"
            data-cta-placement="final"
            data-mag
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            <span className="btn__icon">
              <AppleIcon />
            </span>
            Get Peek. Free on iOS.
            <span className="btn__arrow">→</span>
          </a>
          <div className="cta__meta">
            <span className="stars">★★★★★</span>
            <PlaidMini light />
          </div>

          <div className="cta__phones" aria-hidden="true">
            <div className="cta__phone cta__phone--l">
              <picture>
                <source srcSet="/images/optimized/store-screen-2.webp" type="image/webp" />
                <img
                  src="/images/uploads/store-screen-2.png"
                  alt=""
                  width={720}
                  height={1480}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="cta__phone cta__phone--r">
              <picture>
                <source srcSet="/images/optimized/store-screen-4.webp" type="image/webp" />
                <img
                  src="/images/uploads/store-screen-4.png"
                  alt=""
                  width={720}
                  height={1480}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
