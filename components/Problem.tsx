const CARDS = [
  {
    rot: -1.5,
    quote: 'i feel weird about brunch.',
    answer: 'peek hears this. and it does not roast you for it.',
    sticker: { src: '/images/uploads/stickers/croissant.png', webp: '/images/optimized/st-croissant.webp' },
  },
  {
    rot: 1.2,
    quote: 'my card declined for $6 and i have $4,200 in checking.',
    answer: 'peek closes the gap between your balance and your brain.',
    sticker: { src: '/images/uploads/stickers/glasses.png', webp: '/images/optimized/st-glasses.webp' },
  },
  {
    rot: -1,
    quote: "i've started a budget every january since 2020.",
    answer: 'peek is not a budget. that is the whole point.',
    sticker: { src: '/images/uploads/stickers/tea.png', webp: '/images/optimized/st-tea.webp' },
  },
]

export default function Problem() {
  return (
    <section className="sec sec--sage" id="problem">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            01 / what you'd say if it asked
          </span>
          <h2 className="h-section sec__h">
            you're not bad at money.<br />
            <em>money apps are bad at understanding you.</em>
          </h2>
          <p className="lead sec__lead">
            most apps treat you like a spreadsheet. peek treats you like a person who happens to spend money. that's the whole difference.
          </p>
        </div>

        <div className="problem__grid">
          {CARDS.map((c, i) => (
            <article
              key={i}
              className="qcard reveal"
              style={{ ['--rot' as string]: `${c.rot}deg` } as React.CSSProperties}
            >
              <div className="qcard__sticker" aria-hidden="true">
                <picture>
                  <source srcSet={c.sticker.webp} type="image/webp" />
                  <img src={c.sticker.src} alt="" />
                </picture>
              </div>
              <p className="qcard__quote">&ldquo;{c.quote}&rdquo;</p>
              <p className="qcard__answer">{c.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
