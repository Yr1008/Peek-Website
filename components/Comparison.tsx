const THEM = [
  'Categorize every transaction',
  'Strict budgets that snap',
  'Guilt notifications and red bars',
  'Show what you spent',
  'Treat you like a problem to fix',
]

const US = [
  'Ask the why, not just the what',
  'Funds that flex with your life',
  'Insight reveals you actually look forward to',
  'Show the pattern, in plain English',
  'Treat you like someone worth understanding',
]

export default function Comparison() {
  return (
    <section className="sec compare" id="compare">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">Why Peek is different</span>
          <h2 className="h-section sec__h">
            Other apps track. <em>Peek understands.</em>
          </h2>
          <p className="lead sec__lead">
            The same data, two completely different conversations. One leaves you with a chart.
            One leaves you with clarity.
          </p>
        </div>

        <div className="compare__grid">
          <div className="col col--them reveal">
            <h3 className="col__h">Most money apps</h3>
            <span className="col__sub">Track. Categorize. Quietly judge.</span>
            <ul className="col__list">
              {THEM.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <div className="col col--us reveal">
            <h3 className="col__h">Peek</h3>
            <span className="col__sub">Asks. Reveals. Pays attention.</span>
            <ul className="col__list">
              {US.map((u) => <li key={u}>{u}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
