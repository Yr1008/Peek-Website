import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function StickyMobileCta() {
  return (
    <div className="smcta">
      <a
        href={APP_STORE_URL}
        id="cta-sticky"
        data-cta="sticky"
        className="smcta__btn"
        aria-label="get peek free on ios. opens app store."
        target="_blank"
        rel="noopener"
      >
        <AppleIcon />
        get peek. free on ios.
      </a>
    </div>
  )
}
