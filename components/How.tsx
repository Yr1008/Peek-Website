const STEPS = [
  {
    n: '01',
    rot: -1.5,
    h: <>Connect your accounts.</>,
    p: 'Bank-level encryption, read-only access through Plaid. The same connector your bank, Venmo, and Robinhood already use. We never see your password.',
    hint: '30 seconds. bank-grade security.',
  },
  {
    n: '02',
    rot: 1,
    h: <>Peek asks the <em>soft questions.</em></>,
    p: 'You spent $47 at Target. Was that planned, or autopilot? Did it feel worth it? Tap an answer. That is it. Three taps, three seconds. Peek learns. You stay in charge.',
    hint: '4 taps. 3 seconds. no typing.',
  },
  {
    n: '03',
    rot: -1,
    h: <>Patterns reveal <em>themselves.</em></>,
    p: 'After a week, you stop seeing transactions and start seeing yourself. The Sunday brunches you love. The doordash spiral you do not. The little story your money has been telling.',
    hint: '5 minutes a day. that is all.',
  },
]

export default function How() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="chapter">chapter four. three soft steps.</span>
          <h2 className="h-section sec__h">
            Remember the gap from chapter three? <em>Here's how peek closes it.</em>
          </h2>
          <p className="lead sec__lead">
            No category dropdowns. No monthly budget you'll quietly abandon. Just three small things you already wanted to do, made easier.
          </p>
        </div>

        <div className="how__grid">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="howcard reveal"
              style={{ ['--rot' as string]: `${s.rot}deg` } as React.CSSProperties}
            >
              <span className="howcard__num">step {s.n}</span>
              <h3 className="howcard__h">{s.h}</h3>
              <p className="howcard__p">{s.p}</p>
              <span className="howcard__hint">{s.hint}</span>
            </article>
          ))}
        </div>

        <div className="forward">
          <span>→ let me show you</span>
        </div>
      </div>
    </section>
  )
}
