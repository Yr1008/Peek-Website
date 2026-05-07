const STEPS = [
  {
    n: '01',
    rot: -1.5,
    h: <>connect your accounts.</>,
    p: 'bank-level encryption, read-only access through plaid. the same connector your bank, venmo, and robinhood already use. we never see your password.',
    hint: '30 seconds. bank-grade security.',
  },
  {
    n: '02',
    rot: 1,
    h: <>peek asks the <em>soft questions.</em></>,
    p: 'you spent $47 at target. was that planned, or autopilot? did it feel worth it? tap an answer. that is it. three taps, three seconds. peek learns. you stay in charge.',
    hint: '4 taps. 3 seconds. no typing.',
  },
  {
    n: '03',
    rot: -1,
    h: <>patterns reveal <em>themselves.</em></>,
    p: 'after a week, you stop seeing transactions and start seeing yourself. the sunday brunches you love. the doordash spiral you do not. the little story your money has been telling.',
    hint: '5 minutes a day. that is all.',
  },
]

export default function How() {
  return (
    <section className="how sec--cream" id="how">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            how it works
          </span>
          <h2 className="h-section sec__h">
            three soft steps. <em>zero spreadsheet.</em>
          </h2>
          <p className="lead sec__lead">
            no category dropdowns. no monthly budget you'll quietly abandon. just three small things you already wanted to do, made easier.
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
      </div>
    </section>
  )
}
