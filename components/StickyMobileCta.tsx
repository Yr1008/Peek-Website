import { APP_STORE_URL } from '@/lib/constants'

export default function StickyMobileCta() {
  return (
    <a
      href={APP_STORE_URL}
      id="cta-sticky"
      data-cta-placement="sticky"
      className="sticky-cta"
      aria-label="Get Peek free on iOS. Opens App Store."
    >
      <span className="sticky-cta__l">
        <span>
          <span className="sticky-cta__t">Get Peek. Free on iOS.</span>
          <span className="sticky-cta__s">tag the why · 30 sec to connect</span>
        </span>
      </span>
      <span className="sticky-cta__a" aria-hidden="true">
        →
      </span>
    </a>
  )
}
