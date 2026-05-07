export default function Inside() {
  return (
    <section className="inside" id="features">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="chapter">chapter five. the moments.</span>
          <h2 className="h-section sec__h">
            After the gap and the soft questions, <em>three little moments.</em>
          </h2>
          <p className="lead sec__lead">
            These are the ones people screenshot and send to their sister.
          </p>
        </div>

        <div className="scatter">
          {/* Big phone tile — Insight reveals */}
          <article
            className="tile tile--phone tile--big reveal"
            style={{ ['--rot' as string]: '-1.5deg' } as React.CSSProperties}
          >
            <div className="phone">
              <picture>
                <source srcSet="/images/optimized/screen-blindbox.webp" type="image/webp" />
                <img src="/images/uploads/screen-blindbox.png" alt="Peek revealing a weekly insight" loading="lazy" decoding="async" />
              </picture>
            </div>
          </article>

          {/* Lavender quote tile */}
          <article
            className="tile tile--lavender tile--med tile--quote reveal"
            style={{ ['--rot' as string]: '1.2deg' } as React.CSSProperties}
          >
            <span className="tile__lbl">insight reveals</span>
            <h3 className="tile__h">The weekly moment <em>that changes your week.</em></h3>
            <p className="tile__p">
              Every Sunday peek surfaces one tiny thing you didn't see coming. Not a chart. A small noticing.
            </p>
            <div className="tile__sticker tile__sticker--tr" aria-hidden="true">
              <picture>
                <source srcSet="/images/optimized/st-croissant.webp" type="image/webp" />
                <img src="/images/uploads/stickers/croissant.png" alt="" />
              </picture>
            </div>
          </article>

          {/* Peach quote tile — Funds, not caps */}
          <article
            className="tile tile--peach tile--wide tile--quote reveal"
            style={{ ['--rot' as string]: '-0.8deg' } as React.CSSProperties}
          >
            <span className="tile__lbl">funds, not caps</span>
            <h3 className="tile__h">Soft guardrails for <em>what you care about.</em></h3>
            <p className="tile__p">
              Caps feel like punishment. Funds feel like permission. Peek lets you set a fund for what matters
              (the bookshop habit, the pottery class, the monthly trip home) and tells you when you're coasting,
              never when you're bad.
            </p>
            <div className="tile__sticker tile__sticker--bl" aria-hidden="true">
              <picture>
                <source srcSet="/images/optimized/st-flower.webp" type="image/webp" />
                <img src="/images/uploads/stickers/flower.png" alt="" />
              </picture>
            </div>
          </article>

          {/* Phone tile — Funds */}
          <article
            className="tile tile--phone tile--sm reveal"
            style={{ ['--rot' as string]: '2deg' } as React.CSSProperties}
          >
            <div className="phone">
              <picture>
                <source srcSet="/images/optimized/screen-caps.webp" type="image/webp" />
                <img src="/images/uploads/screen-caps.png" alt="Peek showing a soft fund instead of a strict cap" loading="lazy" decoding="async" />
              </picture>
            </div>
          </article>

          {/* Sky quote tile — AI coach */}
          <article
            className="tile tile--sky tile--med tile--quote reveal"
            style={{ ['--rot' as string]: '-1deg' } as React.CSSProperties}
          >
            <span className="tile__lbl">ai reflection coach</span>
            <h3 className="tile__h">Money questions answered <em>like a friend would.</em></h3>
            <p className="tile__p">
              "Can I afford this?" "Why do I feel weird about that purchase?" "Am I doing better this month?" Peek answers in plain English. In your context.
            </p>
            <div className="tile__sticker tile__sticker--tr" aria-hidden="true">
              <picture>
                <source srcSet="/images/optimized/st-glasses.webp" type="image/webp" />
                <img src="/images/uploads/stickers/glasses.png" alt="" />
              </picture>
            </div>
          </article>

          {/* Phone tile — Chat */}
          <article
            className="tile tile--phone tile--sm reveal"
            style={{ ['--rot' as string]: '1.5deg' } as React.CSSProperties}
          >
            <div className="phone">
              <picture>
                <source srcSet="/images/optimized/screen-chat.webp" type="image/webp" />
                <img src="/images/uploads/screen-chat.png" alt="Peek AI coach answering a question" loading="lazy" decoding="async" />
              </picture>
            </div>
          </article>
        </div>

        <div className="forward">
          <span>↓ here's why we're different</span>
        </div>
      </div>
    </section>
  )
}
