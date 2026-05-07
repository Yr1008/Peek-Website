const STEPS = [
  {
    n: '01',
    h: <>Connect your accounts.</>,
    p: 'Bank-level encryption, read-only access through Plaid. The same connector your bank, Venmo, and Robinhood already use. We never see your password.',
    hint: '30 seconds · bank-grade',
  },
  {
    n: '02',
    h: <>Peek asks the <em>soft questions.</em></>,
    p: 'You spent $47 at Target. Was that planned, or autopilot? Did it feel worth it? Tap an answer. That is it. Three taps, three seconds.',
    hint: '4 taps · no typing',
  },
  {
    n: '03',
    h: <>Patterns reveal <em>themselves.</em></>,
    p: 'After a week, you stop seeing transactions and start seeing yourself. The Sunday brunches you love. The doordash spiral you do not.',
    hint: '5 minutes a day',
  },
]

export default function How() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="eyebrow__num">04</span>
            <span className="eyebrow__sep" aria-hidden="true" />
            <span>How it works</span>
          </span>
          <h2 className="h-section sec__h">
            Three soft steps. <em>Zero spreadsheet.</em>
          </h2>
          <p className="lead sec__lead">
            No category dropdowns. No monthly budget you&rsquo;ll quietly abandon. Three small things you already wanted to do, made easier.
          </p>
        </div>

        <div className="how__grid">
          {STEPS.map((s) => (
            <article key={s.n} className="howcard reveal">
              <span className="howcard__num">Step {s.n}</span>
              <h3 className="howcard__h">{s.h}</h3>
              <p className="howcard__p">{s.p}</p>
              <span className="howcard__hint">{s.hint}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
