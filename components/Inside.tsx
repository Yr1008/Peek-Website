export default function Inside() {
  return (
    <section className="sec sec--sky" id="features">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            04 / inside peek
          </span>
          <h2 className="h-section sec__h">
            the little moments <em>that change how money feels.</em>
          </h2>
          <p className="lead sec__lead">
            three real moments inside the app. each tuned to a single anxiety it lifts.
          </p>
        </div>

        <div className="bento">
          {/* Big phone tile — Insight reveals */}
          <article
            className="tile tile--phone tile--big tile--tall reveal"
            style={{ ['--rot' as string]: '-1.5deg' } as React.CSSProperties}
          >
            <div className="phoneTile">
              <picture>
                <source srcSet="/images/optimized/screen-patterns.webp" type="image/webp" />
                <img src="/images/uploads/screen-patterns.png" alt="Peek revealing your spending story" loading="lazy" decoding="async" />
              </picture>
            </div>
          </article>

          {/* Lavender quote tile */}
          <article
            className="tile tile--lavender tile--med reveal"
            style={{ ['--rot' as string]: '1deg' } as React.CSSProperties}
          >
            <span className="tile__lbl">insight reveals</span>
            <h3 className="tile__h">the weekly moment <em>that changes your week.</em></h3>
            <p className="tile__p">
              every sunday peek surfaces one tiny thing you didn't see coming. not a chart. a small noticing.
            </p>
            <span className="tile__stamp">sundays at 9am ✦</span>
          </article>

          {/* Yellow $ stat tile */}
          <article
            className="tile tile--yellow tile--sm reveal"
            style={{ ['--rot' as string]: '-1deg' } as React.CSSProperties}
          >
            <span className="tile__lbl" style={{ color: '#8A6E1A' }}>saved this week</span>
            <p className="tile__stat">$340</p>
            <span className="tile__stat-cap">skipped impulse + caught a forgotten subscription</span>
          </article>

          {/* Small phone tile — Funds */}
          <article
            className="tile tile--phone tile--sm reveal"
            style={{ ['--rot' as string]: '2deg' } as React.CSSProperties}
          >
            <div className="phoneTile">
              <picture>
                <source srcSet="/images/optimized/screen-checkin.webp" type="image/webp" />
                <img src="/images/uploads/screen-checkin.png" alt="Peek showing a soft fund instead of a strict cap" loading="lazy" decoding="async" />
              </picture>
            </div>
          </article>

          {/* Peach quote tile — Funds */}
          <article
            className="tile tile--peach tile--med reveal"
            style={{ ['--rot' as string]: '-0.8deg' } as React.CSSProperties}
          >
            <span className="tile__lbl">funds, not caps</span>
            <h3 className="tile__h">soft guardrails for <em>what you care about.</em></h3>
            <p className="tile__p">
              caps feel like punishment. funds feel like permission. set one for the bookshop habit, the pottery class, the trip home.
            </p>
          </article>

          {/* Small phone tile — AI coach */}
          <article
            className="tile tile--phone tile--sm reveal"
            style={{ ['--rot' as string]: '1.2deg' } as React.CSSProperties}
          >
            <div className="phoneTile">
              <picture>
                <source srcSet="/images/optimized/screen-chat.webp" type="image/webp" />
                <img src="/images/uploads/screen-chat.png" alt="Peek AI coach answering money questions" loading="lazy" decoding="async" />
              </picture>
            </div>
          </article>

          {/* Sage AI coach quote tile */}
          <article
            className="tile tile--sage tile--wide reveal"
            style={{ ['--rot' as string]: '-0.5deg' } as React.CSSProperties}
          >
            <span className="tile__lbl">ai reflection coach</span>
            <h3 className="tile__h">money questions answered <em>like a friend would.</em></h3>
            <p className="tile__p">
              "can i afford this?" "why do i feel weird about that purchase?" "am i doing better this month?" peek answers in plain english, in your context.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
