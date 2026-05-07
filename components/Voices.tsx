const TESTIS = [
  {
    name: 'Sarah',
    age: 28,
    initial: 'S',
    quote: 'I actually open this app. Like, voluntarily. That has never happened with a finance app.',
  },
  {
    name: 'Marcus',
    age: 34,
    initial: 'M',
    quote: 'Found out I was spending $200 a month on subscriptions I forgot about. Peek paid for itself day one.',
  },
  {
    name: 'Priya',
    age: 26,
    initial: 'P',
    quote: 'Finally an app that does not make me feel like garbage about my spending. It just helps.',
  },
  {
    name: 'Jake',
    age: 31,
    initial: 'J',
    quote: 'The AI coach is lowkey addicting. I ask it random money questions at 2am, lol.',
  },
]

export default function Voices() {
  return (
    <section className="sec proof" id="proof">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">Don't take our word for it</span>
          <h2 className="h-section sec__h">
            People who finally <em>get it.</em>
          </h2>
          <p className="lead sec__lead">
            Real users, real iPhones, real receipts. The kind of reviews you would actually read out loud to a friend.
          </p>
        </div>

        <div className="proof__stats reveal">
          <div className="proof__stat">
            <strong>47K+</strong>
            <span>downloads</span>
          </div>
          <div className="proof__stat">
            <strong>3M+</strong>
            <span>monthly TikTok views</span>
          </div>
          <div className="proof__stat">
            <strong>$2.1M</strong>
            <span>saved by users</span>
          </div>
        </div>

        <div className="proof__grid">
          {TESTIS.map((t) => (
            <article key={t.name} className="tcard reveal">
              <p className="tcard__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="tcard__person">
                <span className="tcard__avatar" aria-hidden="true">{t.initial}</span>
                <div>
                  <span className="tcard__name">{t.name}</span>
                  <span className="tcard__age">{t.age}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
