export default function Permission() {
  return (
    <section className="permission" id="permission">
      <div className="wrap">
        <div className="permission__head reveal-up">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot" /> the part nobody says out loud
          </span>
          <h2 className="h-section">
            You&rsquo;re not bad at budgeting.
            <br />
            <em>Budgeting is bad at understanding you.</em>
          </h2>
          <p className="lead">
            Same dollars, two stories. Your bank tells you a merchant and a
            number. Peek tells you which dinner mattered, which one was just
            Tuesday, and how it felt the morning after.
          </p>
        </div>

        <div className="permission__cards reveal-up">
          {/* Bank receipt */}
          <article className="rcard rcard--bank" aria-label="how your bank app shows it">
            <header className="rcard__brow">
              <span>your bank app</span>
              <span>apr 6 · mon</span>
            </header>
            <div className="rcard__row">
              <div className="rcard__merch">
                <span className="rcard__avatar">C</span>
                <div>
                  <h3 className="rcard__name">Chubby Cattle BBQ</h3>
                  <span className="rcard__cat">Food &amp; Dining</span>
                </div>
              </div>
              <div className="rcard__amount">$345.26</div>
            </div>
            <footer className="rcard__bottom">debit · ****4271</footer>
          </article>

          {/* Peek receipt */}
          <article className="rcard rcard--peek" aria-label="how peek shows it">
            <header className="rcard__brow">
              <span className="rcard__src">peek</span>
              <span>apr 6 · mon, 8pm</span>
            </header>
            <div className="rcard__row">
              <div className="rcard__merch">
                <span className="rcard__avatar">C</span>
                <div>
                  <h3 className="rcard__name">chubby cattle bbq</h3>
                  <span className="rcard__cat">a celebration with your sister</span>
                </div>
              </div>
              <div className="rcard__amount">$345.26</div>
            </div>
            <footer className="rcard__bottom">
              <span className="rcard__story">
                <span className="rcard__pill">self reward</span>
                <span className="rcard__story-text">
                  &ldquo;treating ourselves&rdquo; · felt <em>worth it</em>
                </span>
              </span>
              <div className="rcard__feel">
                <div className="rcard__feel-label">
                  <span>how did this feel?</span>
                  <span className="rcard__feel-val">84% worth it</span>
                </div>
                <div className="rcard__feel-bar">
                  <div className="rcard__feel-fill" style={{ width: '84%' }} />
                </div>
              </div>
            </footer>
          </article>
        </div>

        <p className="permission__between reveal-up">
          Same dollars. Two stories. <em>Only one of them is yours.</em>
        </p>
      </div>
    </section>
  )
}
