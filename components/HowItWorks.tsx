const steps = [
  {
    num: '01',
    title: 'Connect your accounts',
    body: 'Bank-level encryption, read-only through Plaid. Peek can never move money. We just listen.',
    tag: 'Takes 60 seconds',
  },
  {
    num: '02',
    title: 'Peek asks the soft questions',
    body: 'You spent $47 at Target. Was that the impulse candle or the stuff you actually needed? A tap, and Peek learns how you think.',
    tag: 'No categorizing. No judging.',
  },
  {
    num: '03',
    title: 'Patterns reveal themselves',
    body: 'Your weekly Peek surfaces what you would never notice alone. The subscription you forgot. The Friday habit. The thing worth keeping.',
    tag: 'One quiet moment a week',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-28 px-5 md:px-8"
      style={{
        background:
          'linear-gradient(180deg, rgba(250, 248, 245, 0) 0%, rgba(243, 232, 255, 0.35) 45%, rgba(250, 248, 245, 0) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 text-[2rem] sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance">
            Three <span className="accent-serif">soft</span> steps.
            <br className="hidden sm:block" /> Zero spreadsheet.
          </h2>
        </div>

        <ol className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.num}
              className="card p-7 md:p-8 relative reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="font-heading text-5xl md:text-6xl mb-5"
                style={{
                  background:
                    'linear-gradient(135deg, #ff7a50 0%, #b388ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                aria-hidden="true"
              >
                {s.num}
              </div>
              <h3 className="font-heading text-2xl mb-3">{s.title}</h3>
              <p className="text-text-secondary leading-relaxed mb-5">
                {s.body}
              </p>
              <span
                className="chip"
                style={{
                  background: 'rgba(255, 122, 80, 0.1)',
                  color: 'var(--peek-orange-dark)',
                }}
              >
                {s.tag}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
