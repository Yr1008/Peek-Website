const THEM = [
  'categorize every transaction',
  'strict budgets that snap',
  'guilt notifications + red bars',
  'show what you spent',
  'treat you like a problem to fix',
]

const US = [
  'ask the why, not just the what',
  'funds that flex with your life',
  'insight reveals you actually open',
  'show the pattern, in plain english',
  'treat you like someone worth understanding',
]

export default function Comparison() {
  return (
    <section className="compare sec--cream" id="compare">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            why peek is different
          </span>
          <h2 className="h-section sec__h">
            other apps track. <em>peek understands.</em>
          </h2>
          <p className="lead sec__lead">
            same data, two completely different conversations. one leaves you with a chart. one leaves you with clarity.
          </p>
        </div>

        <div className="compare__grid">
          <div className="col col--them reveal">
            <h3 className="col__h">most money apps</h3>
            <span className="col__sub">track. categorize. quietly judge.</span>
            <ul className="col__list">
              {THEM.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="col col--us reveal">
            <h3 className="col__h">peek</h3>
            <span className="col__sub">asks. reveals. pays attention.</span>
            <ul className="col__list">
              {US.map((u) => <li key={u}>{u}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
