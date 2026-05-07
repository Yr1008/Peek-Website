const CARDS = [
  {
    icon: '📊',
    h: 'Spreadsheets that judge.',
    p: 'Pie charts and category breakdowns tell you what you spent. They never tell you whether it was worth it. So you close the app and go on with your day.',
  },
  {
    icon: '🤷',
    h: 'Numbers without meaning.',
    p: '$345.26 at "Food and Dining" is technically true and emotionally useless. The same number could be a celebration with your sister or a dinner you regret. The app cannot tell.',
  },
  {
    icon: '🌀',
    h: 'Tracking that never sticks.',
    p: 'Every January you start a budget. By February you stop. Not because you lack discipline. Because the system was never built for how you actually live.',
  },
]

export default function Problem() {
  return (
    <section className="sec problem" id="problem">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">The real problem</span>
          <h2 className="h-section sec__h">
            You are not bad at money. <em>Money apps are bad at understanding you.</em>
          </h2>
          <p className="lead sec__lead">
            Most money apps treat you like a spreadsheet. Peek treats you like a person who happens
            to spend money. The difference is everything.
          </p>
        </div>

        <div className="problem__grid">
          {CARDS.map((c) => (
            <article key={c.h} className="pcard reveal">
              <div className="pcard__icon" aria-hidden="true">{c.icon}</div>
              <h3 className="pcard__h">{c.h}</h3>
              <p className="pcard__p">{c.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
