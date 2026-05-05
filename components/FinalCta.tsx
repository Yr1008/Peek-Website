import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'
import PlaidMini from './PlaidMini'
import PhoneMock from './PhoneMock'

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
            Free on iOS. Connect a bank in 30 seconds. Secured by Plaid. Cancel
            any time — there&rsquo;s nothing to cancel.
          </p>
          <a
            className="btn btn--primary"
            id="cta-final"
            data-cta-placement="final"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            <span className="btn__icon">
              <AppleIcon />
            </span>
            Download on iOS
            <span className="btn__arrow">→</span>
          </a>
          <div className="cta__meta">
            <span className="stars">★★★★★</span>
            <PlaidMini light />
          </div>

          <div className="cta__phones" aria-hidden="true">
            <div className="cta__phone cta__phone--l">
              <PhoneMock variant="caps" />
            </div>
            <div className="cta__phone cta__phone--r">
              <PhoneMock variant="box" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
