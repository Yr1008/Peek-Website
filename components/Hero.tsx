import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'
import HeroDemo from './HeroDemo'

export default function Hero() {
  return (
    <section
      id="why"
      className="relative"
      style={{
        padding:
          'clamp(60px, 12vh, 130px) var(--pad) clamp(80px, 14vh, 160px)',
        maxWidth: 'var(--maxw)',
        margin: '0 auto',
      }}
    >
      <span
        id="top"
        className="block"
        style={{ position: 'absolute', top: -76 }}
        aria-hidden="true"
      />

      <div className="max-w-3xl">
        <span
          className="inline-flex items-center gap-2"
          style={{
            padding: '7px 14px',
            background: 'var(--paper)',
            border: '1px solid rgba(42,19,82,0.08)',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            color: 'var(--ink-3)',
            letterSpacing: '0.04em',
            marginBottom: 28,
          }}
        >
          <span
            className="pulse-dot"
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'var(--peach)',
            }}
          />
          a money app for people who want to{' '}
          <em
            style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: 'var(--peach)',
              fontSize: 13,
              letterSpacing: 0,
            }}
          >
            understand themselves.
          </em>
        </span>

        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontWeight: 400,
            fontSize: 'clamp(54px, 10vw, 132px)',
            lineHeight: 0.94,
            letterSpacing: '-0.035em',
            margin: '0 0 32px',
            color: 'var(--ink)',
          }}
          className="text-balance"
        >
          your bank shows{' '}
          <em
            style={{ fontStyle: 'italic', color: 'var(--ink-soft)', fontWeight: 400 }}
          >
            what.
          </em>
          <br />
          peek shows{' '}
          <em
            style={{ fontStyle: 'italic', color: 'var(--peach)', fontWeight: 500 }}
          >
            why.
          </em>
        </h1>

        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(20px, 2.4vw, 28px)',
            lineHeight: 1.4,
            fontWeight: 400,
            color: 'var(--ink-2)',
            margin: '0 0 36px',
            letterSpacing: '-0.01em',
            maxWidth: 640,
          }}
          className="text-pretty"
        >
          tap a reason. watch a transaction{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--peach)' }}>
            become a story.
          </em>
        </p>
      </div>

      {/* The bank vs peek demo */}
      <HeroDemo />

      {/* CTA row */}
      <div className="flex flex-wrap items-center gap-4 mt-10 md:mt-14">
        <a
          href={APP_STORE_URL}
          id="cta-hero"
          data-cta-placement="hero"
          data-mag
          className="btn btn--ink"
          aria-label="Download peek free. Opens App Store."
        >
          <AppleIcon size={16} />
          <span>
            download peek <em>free</em>
          </span>
        </a>
        <span
          className="flex flex-wrap items-center gap-2"
          style={{ fontSize: 14, color: 'var(--ink-soft)' }}
        >
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>4.9</strong>{' '}
          · secured by{' '}
          <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>plaid</strong>
          {' · free on ios'}
        </span>
      </div>
    </section>
  )
}
