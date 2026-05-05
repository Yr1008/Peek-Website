const voices = [
  {
    src: '/images/tiktok/tiktok-1.jpg',
    cap: 'first money app that didn’t make me feel like a failure.',
    handle: '@maya.km · 14k',
    rotate: '-1.5deg',
  },
  {
    src: '/images/tiktok/tiktok-2.jpg',
    cap: 'the tagging fixed my doordash problem in like a week.',
    handle: '@itslara_ · 38k',
    rotate: '1.2deg',
  },
  {
    src: '/images/tiktok/tiktok-3.jpg',
    cap: 'replaced my journal AND my banking app.',
    handle: '@sun.day.notes · 22k',
    rotate: '-0.8deg',
  },
  {
    src: '/images/tiktok/tiktok-4.jpg',
    cap: 'the only app on the green-flags side of fintok.',
    handle: '@fintok.fairy · 51k',
    rotate: '1.6deg',
  },
]

export default function Voices() {
  return (
    <section
      id="voices"
      className="overflow-hidden"
      style={{
        background: 'var(--cream-2)',
        padding: 'clamp(80px, 14vh, 140px) var(--pad)',
      }}
    >
      <div
        className="text-center reveal-up"
        style={{
          maxWidth: 900,
          margin: '0 auto clamp(48px, 7vw, 80px)',
        }}
      >
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          on tiktok this week
        </span>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(34px, 4.6vw, 60px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            fontWeight: 400,
            margin: '18px 0 0',
          }}
          className="text-balance"
        >
          women who finally{' '}
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--peach)',
              fontWeight: 500,
            }}
          >
            get it.
          </em>
        </h2>
      </div>

      <div
        className="grid grid-cols-2 lg:grid-cols-4 reveal-up"
        style={{ maxWidth: 'var(--maxw)', margin: '0 auto', gap: 22 }}
      >
        {voices.map((v, i) => (
          <figure
            key={v.handle}
            className="vtok"
            style={{ margin: 0, display: 'flex', flexDirection: 'column' }}
          >
            <div
              className="vtok__media"
              style={{
                aspectRatio: '9 / 16',
                borderRadius: 18,
                overflow: 'hidden',
                boxShadow: '0 20px 40px -16px rgba(42,19,82,0.3)',
                background: 'var(--ink)',
                transform: `rotate(${v.rotate})`,
                transition:
                  'transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
            >
              <img
                src={v.src}
                alt=""
                loading={i < 2 ? 'lazy' : 'lazy'}
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <figcaption
              style={{
                margin: '14px 6px 4px',
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 16,
                lineHeight: 1.35,
                color: 'var(--ink-2)',
              }}
            >
              &ldquo;{v.cap}&rdquo;
            </figcaption>
            <span
              style={{
                fontSize: 12,
                color: 'var(--ink-soft)',
                fontWeight: 500,
                margin: '0 6px',
              }}
            >
              {v.handle}
            </span>
          </figure>
        ))}
      </div>

      <style>{`
        .vtok { transition: transform 320ms cubic-bezier(0.2, 0.8, 0.2, 1); }
        .vtok:hover { transform: translateY(-6px); }
        .vtok:hover .vtok__media { transform: rotate(0deg) !important; }
      `}</style>
    </section>
  )
}
