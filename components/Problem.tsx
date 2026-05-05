'use client'

import { useState } from 'react'

const receipts = [
  { date: 'Aug 12', amt: '$84', a: 'Sambas', b: 'shipping', bv: '$0', foot: '"i deserved it"' },
  { date: 'Aug 13', amt: '$32', a: 'brunch', b: 'tip', bv: '$5', foot: '"friends in town"' },
  { date: 'Aug 14', amt: '$47', a: 'Target', b: 'candles??', bv: '$24', foot: '"???"' },
  { date: 'Aug 15', amt: '$5.75', a: 'Blank Street', b: 'oat latte', bv: '$5.75', foot: '"every day"' },
  { date: 'Aug 16', amt: '$112', a: 'Whole Foods', b: 'truffle pasta?', bv: '$28', foot: '"sunday reset"' },
]

export default function Problem() {
  const [fanned, setFanned] = useState(false)
  return (
    <section className="story">
      <div className="wrap">
        <div className="story__intro r">
          <span className="eyebrow">
            <span className="dot" /> the problem
          </span>
          <h2 className="h-section" style={{ margin: '24px 0' }}>
            Your bank app says
            <br />
            you spent <em>$847</em> last week.
            <br />
            <span style={{ color: 'var(--ink-3)' }}>
              Cool. So… <em>what now?</em>
            </span>
          </h2>
          <p className="lead" style={{ margin: '0 auto', maxWidth: 640 }}>
            Categories don&rsquo;t help. &ldquo;Dining&rdquo; doesn&rsquo;t tell
            you which meals were stress-DoorDash after a bad meeting and which
            were brunch with someone you love. Same dollars. Wildly different
            stories.
          </p>
        </div>

        <div
          className={`pile r${fanned ? ' is-fanned' : ''}`}
          aria-label="Pile of receipts — hover to fan out"
          onMouseEnter={() => setFanned(true)}
          onMouseLeave={() => setFanned(false)}
          onTouchStart={() => setFanned((f) => !f)}
        >
          {receipts.map((r) => (
            <div className="pile__r" key={r.date}>
              <div className="pile__r-h">
                <span>{r.date}</span>
                <span className="pile__amt">{r.amt}</span>
              </div>
              <div className="pile__r-line">
                <span>{r.a}</span>
                <span>—</span>
              </div>
              <div className="pile__r-line">
                <span>{r.b}</span>
                <span>{r.bv}</span>
              </div>
              <div className="pile__r-foot">{r.foot}</div>
            </div>
          ))}
          <div className="pile__hint">hover the pile</div>
        </div>
      </div>
    </section>
  )
}
