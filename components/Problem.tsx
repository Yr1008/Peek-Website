const CARDS = [
  {
    icon: '📊',
    rot: -1.5,
    h: 'spreadsheets that judge.',
    p: <>pie charts and category breakdowns tell you what you spent. they never tell you whether <em>it was worth it.</em> so you close the app and go on with your day.</>,
  },
  {
    icon: '🤷',
    rot: 1,
    h: 'numbers without meaning.',
    p: <>$345.26 at "food &amp; dining" is technically true and emotionally useless. the same number could be a celebration with your sister, or a dinner you regret. <em>the app cannot tell.</em></>,
  },
  {
    icon: '🌀',
    rot: -1,
    h: 'tracking that never sticks.',
    p: <>every january you start a budget. by february you stop. not because you lack discipline. because the system was <em>never built for how you actually live.</em></>,
  },
]

export default function Problem() {
  return (
    <section className="problem sec--sage" id="problem">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            the real problem
          </span>
          <h2 className="h-section sec__h">
            you're not bad at money.<br />
            <em>money apps</em> are bad at understanding you.
          </h2>
          <p className="lead sec__lead">
            most money apps treat you like a spreadsheet. peek treats you like a person who happens
            to spend money. the difference is everything.
          </p>
        </div>

        <div className="problem__grid">
          {CARDS.map((c, i) => (
            <article
              key={i}
              className="probcard reveal"
              style={{ ['--rot' as string]: `${c.rot}deg` } as React.CSSProperties}
            >
              <div className="probcard__icon" aria-hidden="true">{c.icon}</div>
              <h3 className="probcard__h">{c.h}</h3>
              <p className="probcard__p">{c.p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
