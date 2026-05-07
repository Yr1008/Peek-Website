export default function Inside() {
  return (
    <section className="inside" id="features">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="eyebrow__num">05</span>
            <span className="eyebrow__sep" aria-hidden="true" />
            <span>Inside Peek</span>
          </span>
          <h2 className="h-section sec__h">
            The little moments <em>that change how money feels.</em>
          </h2>
          <p className="lead sec__lead">
            Three real moments inside the app. Each one tuned to a single anxiety it lifts.
          </p>
        </div>

        <div className="scatter">
          <article className="tile tile--phone tile--big tile--tall reveal">
            <div className="phone">
              <picture>
                <source srcSet="/images/optimized/screen-blindbox.webp" type="image/webp" />
                <img src="/images/uploads/screen-blindbox.png" alt="Peek revealing a weekly insight" loading="lazy" decoding="async" />
              </picture>
            </div>
          </article>

          <article className="tile tile--lavender tile--med reveal">
            <span className="tile__lbl">Insight reveals</span>
            <h3 className="tile__h">The weekly moment <em>that changes your week.</em></h3>
            <p className="tile__p">
              Every Sunday Peek surfaces one tiny thing you didn&rsquo;t see coming. Not a chart. A small noticing.
            </p>
          </article>

          <article className="tile tile--peach tile--med reveal">
            <span className="tile__lbl">Funds, not caps</span>
            <h3 className="tile__h">Soft guardrails for <em>what you care about.</em></h3>
            <p className="tile__p">
              Caps feel like punishment. Funds feel like permission. Set one for the bookshop habit, the pottery class, the trip home.
            </p>
          </article>

          <article className="tile tile--phone tile--sm reveal">
            <div className="phone">
              <picture>
                <source srcSet="/images/optimized/screen-caps.webp" type="image/webp" />
                <img src="/images/uploads/screen-caps.png" alt="Peek showing a soft fund instead of a strict cap" loading="lazy" decoding="async" />
              </picture>
            </div>
          </article>

          <article className="tile tile--sky tile--med reveal">
            <span className="tile__lbl">AI reflection coach</span>
            <h3 className="tile__h">Money questions answered <em>like a friend would.</em></h3>
            <p className="tile__p">
              &ldquo;Can I afford this?&rdquo; &ldquo;Why do I feel weird about that purchase?&rdquo; Peek answers in plain English, in your context.
            </p>
          </article>

          <article className="tile tile--phone tile--sm reveal">
            <div className="phone">
              <picture>
                <source srcSet="/images/optimized/screen-chat.webp" type="image/webp" />
                <img src="/images/uploads/screen-chat.png" alt="Peek AI coach answering a question" loading="lazy" decoding="async" />
              </picture>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
