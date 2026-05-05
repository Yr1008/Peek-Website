import GapDemo from './GapDemo'

export default function Gap() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'var(--ink)',
        color: 'var(--cream)',
        padding: 'clamp(80px, 14vh, 140px) var(--pad)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(255,122,60,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(143, 180, 217, 0.12), transparent 60%)',
        }}
      />
      <div
        className="relative grid gap-10 md:gap-16 lg:gap-20 items-start"
        style={{
          maxWidth: 'var(--maxw)',
          margin: '0 auto',
          gridTemplateColumns: 'minmax(0, 1fr)',
        }}
      >
        <div
          className="lg:grid lg:gap-16 lg:items-start"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          <div style={{ paddingTop: 20 }}>
            <span
              className="eyebrow"
              style={{ color: 'var(--peach-2)' }}
            >
              <span
                style={{
                  width: 22,
                  height: 1,
                  background: 'var(--peach-2)',
                  opacity: 0.7,
                  display: 'inline-block',
                }}
              />
              why people stay anxious about money
            </span>
            <h2
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(40px, 5.4vw, 76px)',
                lineHeight: 1.0,
                letterSpacing: '-0.025em',
                fontWeight: 400,
                margin: '24px 0 24px',
              }}
              className="text-balance reveal-up"
            >
              not because you spend{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'var(--peach)',
                  fontWeight: 500,
                }}
              >
                too much.
              </em>
              <br />
              because there&rsquo;s a{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'var(--peach)',
                  fontWeight: 500,
                }}
              >
                gap.
              </em>
            </h2>
            <p
              className="reveal-up"
              style={{
                fontFamily: 'var(--serif)',
                fontStyle: 'italic',
                fontSize: 22,
                color: 'var(--peach-3)',
                margin: 0,
                marginTop: 12,
              }}
            >
              the gap between what you spent and why. peek closes it in 5
              minutes a day.
            </p>
          </div>

          <div className="reveal-up mt-10 lg:mt-0">
            <GapDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
