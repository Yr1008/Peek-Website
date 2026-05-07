const STEPS = [
  {
    n: '01',
    rot: -1.5,
    canvas: 'sage',
    emoji: '🔌',
    h: <>connect your accounts.</>,
    p: 'bank-level encryption, read-only access through plaid. the same connector your bank, venmo, and robinhood already use. we never see your password.',
    stamp: '30 sec to connect',
  },
  {
    n: '02',
    rot: 1,
    canvas: 'sky',
    emoji: '✨',
    h: <>peek asks the <em>soft questions.</em></>,
    p: 'you spent $47 at target. was that planned, or autopilot? did it feel worth it? tap an answer. that is it. four taps, three seconds.',
    stamp: '4 taps · 3 seconds',
  },
  {
    n: '03',
    rot: -1,
    canvas: 'lavender',
    emoji: '🪞',
    h: <>patterns reveal <em>themselves.</em></>,
    p: 'after a week, you stop seeing transactions and start seeing yourself. the sunday brunches you love. the doordash spiral you do not.',
    stamp: '5 min/day',
  },
]

export default function How() {
  return (
    <section className="sec sec--cream-2" id="how">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            03 / how peek closes it
          </span>
          <h2 className="h-section sec__h">
            three soft steps. <em>zero spreadsheet.</em>
          </h2>
          <p className="lead sec__lead">
            no category dropdowns. no monthly budget you'll quietly abandon. three small things you already wanted to do, made easier.
          </p>
        </div>

        <div className="how__grid">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className={`howcard howcard--${s.canvas} reveal`}
              style={{ ['--rot' as string]: `${s.rot}deg` } as React.CSSProperties}
            >
              <div className="howcard__icon" aria-hidden="true">
                <span className="howcard__icon-emoji">{s.emoji}</span>
              </div>
              <span className="howcard__num">step {s.n}</span>
              <h3 className="howcard__h">{s.h}</h3>
              <p className="howcard__p">{s.p}</p>
              <span className="howcard__stamp">{s.stamp} ✦</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
