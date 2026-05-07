const CARDS = [
  {
    rot: -1.5,
    quote: 'i feel weird about brunch.',
    answer: 'peek hears this. and it doesn\'t roast you for it.',
  },
  {
    rot: 1.2,
    quote: 'my card declined for $6 and i have $4,200 in checking.',
    answer: 'peek closes the gap between your balance and your brain.',
  },
  {
    rot: -1,
    quote: "i've started a budget every january since 2020.",
    answer: 'peek isn\'t a budget. that\'s the whole point.',
  },
]

export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="chapter">chapter two. the part nobody says.</span>
          <span className="eyebrow-pill eyebrow-pill--light" style={{ marginBottom: 16 }}>
            What you'd say if a money app actually asked.
          </span>
          <h2 className="h-section sec__h">
            You're not bad at money. <em>Money apps are bad at understanding you.</em>
          </h2>
          <p className="lead sec__lead">
            Most money apps treat you like a spreadsheet. Peek treats you like a person who happens
            to spend money. The difference is everything.
          </p>
        </div>

        <div className="problem__grid">
          {CARDS.map((c, i) => (
            <article
              key={i}
              className="qcard reveal"
              style={{ ['--rot' as string]: `${c.rot}deg` } as React.CSSProperties}
            >
              <p className="qcard__quote">{c.quote}</p>
              <p className="qcard__answer">{c.answer}</p>
            </article>
          ))}
        </div>

        <div className="forward">
          <span>↓ now guess your gap</span>
        </div>
      </div>
    </section>
  )
}
