import { APP_STORE_URL } from '@/lib/constants'

export default function StickyMobileCta() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 safe-bottom px-4 pt-3"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 249, 246, 0) 0%, rgba(255, 249, 246, 0.96) 40%, rgba(255, 249, 246, 1) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
      role="region"
      aria-label="Install Peek"
    >
      <a
        href={APP_STORE_URL}
        id="cta-sticky"
        data-cta-placement="sticky"
        className="btn-primary w-full text-base"
        aria-label="Get Peek. Free on iOS. Opens App Store."
      >
        <svg
          width="18"
          height="20"
          viewBox="0 0 24 28"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.9 21.4c-1 1.5-2 3-3.6 3s-2.1-1-4-1-2.4 1-3.9 1c-1.6 0-2.8-1.6-3.9-3.2C2.4 17.8 1.2 13 3.3 9.7c1-1.6 2.9-2.6 4.9-2.6 1.5 0 3 1 3.9 1 .9 0 2.7-1.3 4.6-1.1.8 0 3 .3 4.5 2.4-.1 0-2.6 1.5-2.6 4.5 0 3.6 3.2 4.8 3.2 4.8s-.2.8-.9 2.7zM14 5.3c.8-1 1.4-2.4 1.2-3.8-1.2 0-2.6.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.7 1.4.1 2.8-.7 3.6-1.7z" />
        </svg>
        <span>Get Peek. Free on iOS.</span>
      </a>
    </div>
  )
}
