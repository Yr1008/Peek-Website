import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'
import PlaidMini from './PlaidMini'

export default function FinalCta() {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="cta__banner reveal-up">
          <span className="cta__brow">one more thing</span>
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
            className="btn btn--primary btn--big"
            id="cta-final"
            data-cta-placement="final"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            <span className="btn__icon">
              <AppleIcon size={20} />
            </span>
            Get Peek. Free on iOS.
            <span className="btn__arrow">→</span>
          </a>
          <div className="cta__meta">
            <span className="stars">★★★★★</span>
            <PlaidMini light />
          </div>

          <div className="cta__mascots" aria-hidden="true">
            <div className="cta__mascot cta__mascot--l">
              <picture>
                <source srcSet="/images/optimized/peek-3d-left.webp" type="image/webp" />
                <img src="/images/uploads/mascots/peek-3d-left.png" alt="" loading="lazy" />
              </picture>
            </div>
            <div className="cta__mascot cta__mascot--r">
              <picture>
                <source srcSet="/images/optimized/peek-3d-right.webp" type="image/webp" />
                <img src="/images/uploads/mascots/peek-3d-right.png" alt="" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
