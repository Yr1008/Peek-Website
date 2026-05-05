import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function Close() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'var(--ink)',
        color: 'var(--cream)',
        padding: 'clamp(80px, 14vh, 160px) var(--pad)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(255,122,60,0.18), transparent 60%)',
        }}
      />

      <div
        className="relative text-center"
        style={{ maxWidth: 880, margin: '0 auto' }}
      >
        <div
          className="animate-bobby"
          style={{
            width: 'clamp(120px, 16vw, 200px)',
            margin: '0 auto 24px',
          }}
          aria-hidden="true"
        >
          <picture>
            <source
              srcSet="/images/optimized/mascot-party.webp"
              type="image/webp"
            />
            <img
              src="/images/1.png"
              alt=""
              loading="lazy"
              decoding="async"
              style={{ width: '100%', display: 'block' }}
            />
          </picture>
        </div>

        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(40px, 6.4vw, 88px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            fontWeight: 400,
            margin: '0 0 20px',
          }}
          className="text-balance"
        >
          stop tracking.
          <br />
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--peach)',
              fontWeight: 500,
            }}
          >
            start understanding yourself.
          </em>
        </h2>

        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(18px, 2vw, 22px)',
            fontStyle: 'italic',
            color: 'rgba(255,234,210,0.75)',
            margin: '0 0 36px',
          }}
        >
          <em style={{ color: 'var(--peach)', fontStyle: 'italic' }}>
            30 seconds
          </em>{' '}
          to connect.{' '}
          <em style={{ color: 'var(--peach)', fontStyle: 'italic' }}>
            5 minutes
          </em>{' '}
          a day.{' '}
          <em style={{ color: 'var(--peach)', fontStyle: 'italic' }}>0</em>{' '}
          spreadsheets.
        </p>

        <a
          href={APP_STORE_URL}
          id="cta-final"
          data-cta-placement="final"
          data-mag
          className="btn btn--peach btn--big"
          aria-label="Download peek free. Opens App Store."
        >
          <AppleIcon size={20} />
          <span>
            download peek <em>free</em>
          </span>
        </a>

        <div
          className="inline-flex flex-wrap justify-center gap-2.5 mt-7"
          style={{
            fontSize: 14,
            color: 'rgba(255,234,210,0.7)',
          }}
        >
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          <span>
            <strong style={{ color: 'var(--cream)', fontWeight: 600 }}>
              4.9
            </strong>{' '}
            · 1,240+ reviews
          </span>
          <span aria-hidden="true" style={{ opacity: 0.4 }}>
            ·
          </span>
          <span>
            secured by{' '}
            <strong style={{ color: 'var(--cream)', fontWeight: 600 }}>
              plaid
            </strong>
          </span>
        </div>
      </div>
    </section>
  )
}
