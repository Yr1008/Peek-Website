import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function MidCta() {
  return (
    <section className="midcta wrap">
      <div className="midcta__inner r">
        <h3 className="midcta__h">
          Tag your first charge tonight.{' '}
          <em>Free on iOS.</em>
        </h3>
        <a
          className="btn btn--primary"
          id="cta-mid"
          data-cta-placement="mid"
          data-mag
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
        >
          <span className="btn__icon">
            <AppleIcon size={16} />
          </span>
          Get Peek
          <span className="btn__arrow">→</span>
        </a>
      </div>
    </section>
  )
}
