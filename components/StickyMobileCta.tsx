import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function StickyMobileCta() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-bottom px-4 pt-3"
      style={{
        background:
          'linear-gradient(180deg, rgba(242,235,217,0) 0%, rgba(242,235,217,0.96) 40%, rgba(242,235,217,1) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
      role="region"
      aria-label="Install peek"
    >
      <a
        href={APP_STORE_URL}
        id="cta-sticky"
        data-cta-placement="sticky"
        className="btn btn--peach w-full"
        style={{ width: '100%' }}
        aria-label="Get peek. Free on iOS. Opens App Store."
      >
        <AppleIcon size={16} />
        <span>
          get peek. <em>free on ios.</em>
        </span>
      </a>
    </div>
  )
}
