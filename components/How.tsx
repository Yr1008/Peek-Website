const steps = [
  {
    num: '01',
    title: (
      <>
        peek surfaces what{' '}
        <em
          style={{
            fontStyle: 'italic',
            color: 'var(--peach)',
            fontWeight: 500,
          }}
        >
          slipped through.
        </em>
      </>
    ),
    body: 'every transaction shows up in a feed you can actually scan. no categories, no charts. just what happened, on a quiet card.',
    image: '/images/optimized/app-screenshot-insights.webp',
    fallback: '/images/app-screenshot-insights.png',
    alt: 'peek surfacing a transaction',
    tag: '5 min/day',
    rotate: '-1.5deg',
    tagRotate: '-3deg',
    reverse: false,
  },
  {
    num: '02',
    title: (
      <>
        it asks the questions{' '}
        <em
          style={{
            fontStyle: 'italic',
            color: 'var(--peach)',
            fontWeight: 500,
          }}
        >
          only you can answer.
        </em>
      </>
    ),
    body: 'tap a tag. self reward, ritual, social, convenience. peek learns how you think about money. nobody is judging the $47 at target.',
    image: '/images/optimized/app-screenshot-chat.webp',
    fallback: '/images/app-screenshot-chat.png',
    alt: 'peek asking a check-in question',
    tag: '3 questions',
    rotate: '1.5deg',
    tagRotate: '4deg',
    reverse: true,
  },
  {
    num: '03',
    title: (
      <>
        your spending becomes a story{' '}
        <em
          style={{
            fontStyle: 'italic',
            color: 'var(--peach)',
            fontWeight: 500,
          }}
        >
          you recognize.
        </em>
      </>
    ),
    body: 'every sunday, peek shows you the week in plain english. patterns you can do something about. moments that were worth it.',
    image: '/images/optimized/app-screenshot-goals.webp',
    fallback: '/images/app-screenshot-goals.png',
    alt: 'your peek spending story',
    tag: 'your story',
    rotate: '-2deg',
    tagRotate: '-2deg',
    reverse: false,
  },
]

export default function How() {
  return (
    <section
      id="how"
      style={{
        background: 'var(--cream-2)',
        padding: 'clamp(80px, 14vh, 140px) var(--pad)',
      }}
    >
      <div className="text-center max-w-3xl mx-auto" style={{ marginBottom: 80 }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          how peek closes the gap
        </span>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(38px, 5.4vw, 72px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            fontWeight: 400,
            margin: '18px 0 0',
          }}
          className="text-balance"
        >
          five minutes a day.{' '}
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--peach)',
              fontWeight: 500,
            }}
          >
            that&rsquo;s it.
          </em>
        </h2>
      </div>

      <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
        {steps.map((s, i) => (
          <article
            key={s.num}
            className="reveal-up grid items-center md:grid-cols-2 py-10 md:py-16"
            style={{ gap: 'clamp(40px, 6vw, 90px)' }}
          >
            <div className={s.reverse ? 'md:order-2' : ''}>
              <span
                style={{
                  fontFamily: 'var(--serif)',
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: 'var(--peach)',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                }}
              >
                {s.num}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(30px, 3.6vw, 46px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  fontWeight: 400,
                  margin: '14px 0 18px',
                }}
                className="text-balance"
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: 'var(--ink-2)',
                  margin: 0,
                  maxWidth: 460,
                }}
                className="text-pretty"
              >
                {s.body}
              </p>
            </div>

            <div
              className={`relative flex justify-center ${s.reverse ? 'md:order-1' : ''}`}
            >
              <div
                className="relative"
                style={{
                  width: 280,
                  borderRadius: 38,
                  overflow: 'hidden',
                  boxShadow:
                    '0 30px 60px -20px rgba(42,19,82,0.4), 0 0 0 8px var(--paper), 0 0 0 9px rgba(42,19,82,0.08)',
                  transform: `rotate(${s.rotate})`,
                  transition: 'transform 400ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                }}
              >
                <picture>
                  <source srcSet={s.image} type="image/webp" />
                  <img
                    src={s.fallback}
                    alt={s.alt}
                    width={600}
                    height={1300}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', display: 'block' }}
                  />
                </picture>
              </div>
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: -12,
                  right: 'calc(50% - 200px)',
                  background: 'var(--peach)',
                  color: 'var(--cream)',
                  padding: '8px 16px',
                  borderRadius: 999,
                  fontFamily: 'var(--hand)',
                  fontSize: 22,
                  fontWeight: 500,
                  transform: `rotate(${s.tagRotate})`,
                  boxShadow: '0 8px 20px -6px rgba(255,122,60,0.5)',
                }}
              >
                {s.tag}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
