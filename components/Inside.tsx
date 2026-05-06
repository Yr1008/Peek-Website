const steps = [
  {
    num: '01',
    title: (
      <>
        Tap an answer.{' '}
        <em>peek learns.</em>
      </>
    ),
    body: 'One question, four answers, three seconds. The four answers map to the four ways money actually moves in your life.',
    image: '/images/optimized/screen-checkin.webp',
    fallback: '/images/uploads/screen-checkin.png',
    alt: 'Peek check-in: answer a quick question for each transaction',
    rotClass: 'phone-frame--rot-l',
    reverse: false,
  },
  {
    num: '02',
    title: (
      <>
        Caps that <em>do not shame.</em>
      </>
    ),
    body: 'Set limits on what you actually want to control. Peek nudges. Never scolds. Guilt-free spending stays guilt-free.',
    image: '/images/optimized/screen-caps.webp',
    fallback: '/images/uploads/screen-caps.png',
    alt: 'Peek caps: keep the spending that feels good',
    rotClass: 'phone-frame--rot-r',
    reverse: true,
  },
  {
    num: '03',
    title: (
      <>
        Sundays, in <em>plain english.</em>
      </>
    ),
    body: 'One paragraph. No charts. No category breakdowns. Just the pattern, plainly stated. You decide what to do.',
    image: '/images/optimized/screen-story.webp',
    fallback: '/images/uploads/screen-story.png',
    alt: 'Peek spending story: weekday vs weekend in plain English',
    rotClass: 'phone-frame--rot-l',
    reverse: false,
  },
]

export default function Inside() {
  return (
    <section className="inside" id="inside">
      <div className="wrap">
        <div className="inside__head reveal-up">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot" /> five minutes a day. that&rsquo;s it.
          </span>
          <h2 className="h-section">
            Inside <em>Peek.</em>
          </h2>
        </div>

        {steps.map((s) => (
          <article
            key={s.num}
            className={`inside__step reveal-up${s.reverse ? ' inside__step--reverse' : ''}`}
          >
            <div className="inside__step-copy">
              <span className="inside__step-num">{s.num}</span>
              <h3 className="inside__step-h">{s.title}</h3>
              <p className="inside__step-p">{s.body}</p>
            </div>
            <div className="inside__step-shot">
              <div className={`phone-frame ${s.rotClass}`}>
                <picture>
                  <source srcSet={s.image} type="image/webp" />
                  <img
                    src={s.fallback}
                    alt={s.alt}
                    width={720}
                    height={1480}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
