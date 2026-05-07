export default function Inside() {
  return (
    <section className="sec sec--sky" id="features">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            Inside Peek
          </span>
          <h2 className="h-section sec__h">
            the little moments <em>that change how money feels.</em>
          </h2>
          <p className="lead sec__lead">
            three real moments inside the app. each one tuned to a single anxiety it lifts.
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
                <source srcSet="/images/optimized/screen-blindbox.webp" type="image/webp" />
                <img src="/images/uploads/screen-blindbox.png" alt="Peek revealing a weekly insight" loading="lazy" decoding="async" />
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
                <source srcSet="/images/optimized/screen-caps.webp" type="image/webp" />
                <img src="/images/uploads/screen-caps.png" alt="Peek showing a soft fund instead of a strict cap" loading="lazy" decoding="async" />
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

          {/* Mascot tile */}
          <article
            className="tile tile--mascot tile--sm reveal"
            style={{ ['--rot' as string]: '1.2deg' } as React.CSSProperties}
          >
            <picture>
              <source srcSet="/images/optimized/peek-3d-left.webp" type="image/webp" />
              <img src="/images/uploads/mascots/peek-3d-left.png" alt="" />
            </picture>
            <span className="tile__lbl" style={{ color: '#E85F30' }}>tap me · ai coach</span>
            <p className="tile__p" style={{ textAlign: 'center' }}>money questions, answered like a friend would.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
