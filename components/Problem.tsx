const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 9h18M9 4v16M15 4v16"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: 'Spreadsheets that judge',
    body: 'You open them once, feel guilty, and never come back. Budgeting apps think grids are the answer. They are not.',
    accent: 'var(--peek-orange)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 19l6-6 4 4 7-8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="4" cy="19" r="1.2" fill="currentColor" />
        <circle cx="21" cy="9" r="1.2" fill="currentColor" />
      </svg>
    ),
    title: 'Numbers without meaning',
    body: 'Your bank tells you $2,847 on Dining. It does not tell you which dinners mattered and which were accidents.',
    accent: 'var(--peek-purple-deep)',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 7h16M4 12h10M4 17h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Tracking that never sticks',
    body: 'Week one you categorize every coffee. Week three you forget the app exists. Discipline is not the problem. The app is.',
    accent: 'var(--peek-sky-deep)',
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative py-20 md:py-28 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="eyebrow">The real problem</span>
          <h2 className="mt-5 text-[2rem] sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance">
            You are not bad at money.
            <br />
            <span className="accent-serif">Money apps</span> are bad at
            understanding you.
          </h2>
          <p className="mt-5 text-lg text-text-secondary text-pretty">
            Every finance app wants to fix your behavior. Peek wants to
            understand it first.
          </p>
        </div>

        {/* Killer pull quote */}
        <figure className="mt-12 md:mt-16 max-w-3xl mx-auto reveal">
          <blockquote
            className="relative font-heading text-[1.5rem] sm:text-[1.875rem] md:text-[2.125rem] leading-[1.25] text-center text-balance px-4"
          >
            <span
              className="absolute -top-6 left-1/2 -translate-x-1/2 font-heading text-7xl md:text-8xl leading-none select-none pointer-events-none"
              style={{ color: 'rgba(255, 122, 80, 0.18)', fontStyle: 'italic' }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            You are{' '}
            <span className="accent-serif">not bad at budgeting.</span>
            <br />
            Budgeting is{' '}
            <span className="accent-serif">bad at understanding you.</span>
          </blockquote>
        </figure>

        <div className="mt-14 md:mt-20 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="card p-7 md:p-8 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-5"
                style={{
                  background: `color-mix(in srgb, ${c.accent} 14%, white)`,
                  color: c.accent,
                }}
              >
                {c.icon}
              </div>
              <h3 className="font-heading text-2xl mb-3">{c.title}</h3>
              <p className="text-text-secondary leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
