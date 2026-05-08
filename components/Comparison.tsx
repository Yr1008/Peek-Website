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
    <section className="sec sec--cream" id="compare">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            05 / the difference
          </span>
          <h2 className="h-section sec__h">
            other apps make you <em>manage.</em><br />
            Peek makes you <em>exhale.</em>
          </h2>
          <p className="lead sec__lead">
            same data, two completely different conversations. one leaves you with a chart. one leaves you with clarity.
          </p>
        </div>

        <div className="compare__wrap">
          <div className="compare__grid">
            <div className="col col--them reveal">
              <h3 className="col__h">most money apps</h3>
              <span className="col__sub">track. categorize. quietly judge.</span>
              <ul className="col__list">
                {THEM.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="col col--us reveal">
              <h3 className="col__h">Peek</h3>
              <span className="col__sub">asks. reveals. <em>pays attention.</em></span>
              <ul className="col__list">
                {US.map((u) => <li key={u}>{u}</li>)}
              </ul>
            </div>
          </div>

          <div className="compare__mascot" aria-hidden="true">
            <picture>
              <source srcSet="/images/optimized/Peek-3d-right.webp" type="image/webp" />
              <img src="/images/uploads/mascots/Peek-3d-right.png" alt="" />
            </picture>
          </div>
          <span className="compare__mascot-label" aria-hidden="true">← that's us</span>
        </div>
      </div>
    </section>
  )
}
