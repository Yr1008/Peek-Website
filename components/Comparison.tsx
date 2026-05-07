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
    <section className="compare" id="compare">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="chapter">chapter six. the difference.</span>
          <h2 className="h-section sec__h">
            Every other money app makes you <em>manage.</em><br />
            Peek makes you <em>exhale.</em>
          </h2>
          <p className="lead sec__lead">
            Same data, two completely different conversations. One leaves you with a chart. One leaves you with clarity.
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
            <span className="col__sub">asks. reveals. <em>pays attention.</em></span>
            <ul className="col__list">
              {US.map((u) => <li key={u}>{u}</li>)}
            </ul>
          </div>
        </div>

        <div className="forward">
          <span>→ what kind of spender are you?</span>
        </div>
      </div>
    </section>
  )
}
