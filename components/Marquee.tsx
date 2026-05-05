const items = [
  ['tag the', 'why'],
  ['caps that', 'flex'],
  ['a monthly', 'blind box'],
  ['spending in', 'plain english'],
  ['no', 'guilt'],
  ['no', 'spreadsheets'],
]

export default function Marquee() {
  // duplicate for seamless scroll
  const all = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {all.map(([a, b], i) => (
          <div key={i} style={{ display: 'inline-flex', gap: 24, alignItems: 'center' }}>
            <span className="marquee__item">
              {a} <em>{b}</em>
            </span>
            <span className="marquee__sep" />
          </div>
        ))}
      </div>
    </div>
  )
}
