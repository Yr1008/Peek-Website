import PhoneMock from './PhoneMock'

const left = [
  {
    cls: 'cap--green',
    label: 'Coffee',
    amt: '$28 / $40',
    w: '70%',
    bg: 'var(--green)',
    note: '"guilt-free stays" ✓',
  },
  {
    cls: 'cap--pink',
    label: 'Going out',
    amt: '$120 / $200',
    w: '60%',
    bg: 'var(--pink)',
    note: 'on track',
  },
]

const right = [
  {
    cls: 'cap--over',
    label: 'Stress buys',
    amt: '$96 / $80 ↑',
    w: '100%',
    bg: 'var(--peek-2)',
    note: '"not worth it" — peek noticed.',
  },
  {
    cls: 'cap--green',
    label: 'Groceries',
    amt: '$48 / $120',
    w: '40%',
    bg: 'var(--green)',
    note: '+$72 left',
  },
]

function Cap({
  d,
}: {
  d: { label: string; amt: string; w: string; bg: string; note: string; cls: string }
}) {
  return (
    <div className={`cap ${d.cls}`}>
      <div className="cap__top">
        <span className="cap__lbl">{d.label}</span>
        <span className="cap__amt">{d.amt}</span>
      </div>
      <div className="cap__bar">
        <div
          className="cap__fill"
          style={{ ['--w' as string]: d.w, background: d.bg } as React.CSSProperties}
        />
      </div>
      <div className="cap__note">{d.note}</div>
    </div>
  )
}

export default function Caps() {
  return (
    <section className="caps-sec" id="caps">
      <div className="wrap">
        <div className="caps-sec__head r">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot" /> caps · feature 01
          </span>
          <h2 className="h-section" style={{ marginTop: 20 }}>
            Limits that <em>notice.</em>
            <br />
            <span style={{ color: 'var(--ink-3)' }}>Never scold.</span>
          </h2>
          <p
            className="lead"
            style={{
              marginTop: 18,
              maxWidth: 600,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Set caps on what you actually want to control. Peek nudges. The
            math doesn&rsquo;t care if you&rsquo;re &ldquo;good.&rdquo; It
            just shows you, plainly.
          </p>
        </div>

        <div className="caps-stage r">
          <div className="caps-side caps-side--l">
            {left.map((d) => (
              <Cap key={d.label} d={d} />
            ))}
          </div>

          <div className="caps-stage__phone">
            <PhoneMock variant="caps" />
          </div>

          <div className="caps-side caps-side--r">
            {right.map((d) => (
              <Cap key={d.label} d={d} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
