const CARDS = [
  {
    quote: 'I feel weird about brunch.',
    answer: 'Peek hears this. And it doesn’t roast you for it.',
  },
  {
    quote: 'My card declined for $6 and I have $4,200 in checking.',
    answer: 'Peek closes the gap between your balance and your brain.',
  },
  {
    quote: 'I’ve started a budget every January since 2020.',
    answer: 'Peek isn’t a budget. That’s the whole point.',
  },
]

export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="eyebrow__num">02</span>
            <span className="eyebrow__sep" aria-hidden="true" />
            <span>Recognition</span>
          </span>
          <h2 className="h-section sec__h">
            You&rsquo;re not bad at money.<br />
            <em>Money apps are bad at understanding you.</em>
          </h2>
          <p className="lead sec__lead">
            What you&rsquo;d say if a money app actually asked. Three thoughts. Three real answers.
          </p>
        </div>

        <div className="problem__grid">
          {CARDS.map((c, i) => (
            <article key={i} className="qcard reveal">
              <p className="qcard__quote">&ldquo;{c.quote}&rdquo;</p>
              <p className="qcard__answer">{c.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
