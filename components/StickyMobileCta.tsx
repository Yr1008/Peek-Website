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
        aria-label="Get Peek. Free on iOS. Opens the App Store."
        target="_blank"
        rel="noopener"
      >
        <AppleIcon />
        Get Peek. Free on iOS.
      </a>
    </div>
  )
}
