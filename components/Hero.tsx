import AppStoreButton from './AppStoreButton'
import { STATS } from '@/lib/constants'

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="App Store rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="#FF7A50"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="orb orb-peach"
        style={{ width: 520, height: 520, top: -120, left: -120 }}
        aria-hidden="true"
      />
      <div
        className="orb orb-purple"
        style={{ width: 420, height: 420, top: 180, right: -100, opacity: 0.45 }}
        aria-hidden="true"
      />
      <div
        className="orb orb-sky"
        style={{ width: 360, height: 360, bottom: -120, left: '38%', opacity: 0.35 }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 md:gap-10 items-center">
        {/* Copy column */}
        <div className="text-center md:text-left">
          <span className="eyebrow">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--peek-orange)' }}
            />
            Anti-budgeting. Pro-clarity.
          </span>

          <h1
            className="mt-5 text-[2.5rem] sm:text-5xl md:text-[3.75rem] lg:text-[4.25rem] leading-[1.05] tracking-tight text-balance"
          >
            Know{' '}
            <span className="accent-serif">the&nbsp;why</span>
            <br className="hidden sm:block" /> behind every dollar.
          </h1>

          <p className="mt-5 text-lg md:text-xl text-text-secondary max-w-xl mx-auto md:mx-0 text-pretty">
            Your bank shows what you spent. Peek shows you why. The money app
            for people who want clarity without the spreadsheet.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4 justify-center md:justify-start">
            <AppStoreButton placement="hero" id="cta-hero" size="lg" />
            <a
              href="#how-it-works"
              className="btn-ghost text-[15px] text-text-secondary"
            >
              See how it works
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center md:justify-start text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <Stars />
              <span>Loved on the App Store</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-text-muted/50" aria-hidden="true" />
            <span>Free on iOS</span>
            <span className="w-1 h-1 rounded-full bg-text-muted/50" aria-hidden="true" />
            <span>{STATS.downloads} downloads</span>
          </div>
        </div>

        {/* Phone column */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[280px] sm:w-[320px] md:w-[360px]">
            {/* Phone frame */}
            <div
              className="relative rounded-[44px] p-[10px] shadow-2xl"
              style={{
                background:
                  'linear-gradient(145deg, #2a2a2a 0%, #0f0f0f 60%, #1a1a1a 100%)',
                boxShadow:
                  '0 40px 80px -20px rgba(45, 35, 25, 0.25), 0 20px 40px -10px rgba(45, 35, 25, 0.15)',
              }}
            >
              <div className="relative rounded-[36px] overflow-hidden bg-white">
                <picture>
                  <source
                    srcSet="/images/optimized/app-screenshot-insights.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/app-screenshot-insights.png"
                    alt="Peek app showing insight reveals on your spending patterns"
                    className="w-full h-auto block"
                    width={720}
                    height={1560}
                    loading="eager"
                    decoding="async"
                    // @ts-expect-error fetchpriority is a valid HTML attr
                    fetchpriority="high"
                  />
                </picture>
                {/* Notch */}
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full"
                  style={{ background: '#0a0a0a' }}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Floating insight card — top left */}
            <div
              className="hidden sm:block absolute -left-10 md:-left-20 top-16 glass rounded-[18px] px-4 py-3 float-y"
              style={{ width: 180 }}
              aria-hidden="true"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--peek-green)' }}
                />
                <span className="text-[11px] font-semibold tracking-wide uppercase text-text-muted">
                  Intentional
                </span>
              </div>
              <div className="font-heading text-2xl text-text-primary">$412</div>
              <div className="text-[12px] text-text-secondary mt-0.5">
                dinners with friends
              </div>
            </div>

            {/* Floating insight card — bottom right */}
            <div
              className="hidden sm:block absolute -right-6 md:-right-14 bottom-20 glass rounded-[18px] px-4 py-3 float-y-delay"
              style={{ width: 200 }}
              aria-hidden="true"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--peek-purple-deep)' }}
                />
                <span className="text-[11px] font-semibold tracking-wide uppercase text-text-muted">
                  Saved this month
                </span>
              </div>
              <div className="font-heading text-2xl text-text-primary">$340</div>
              <div className="text-[12px] text-text-secondary mt-0.5">
                skipped impulse buys
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
