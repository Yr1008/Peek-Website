import HowTagger from './HowTagger'

export default function How() {
  return (
    <section className="beat" id="how">
      <div className="wrap">
        <div className="beat__head r">
          <span className="eyebrow">
            <span className="dot" /> the fix, 30 seconds in
          </span>
          <h2 className="h-section" style={{ marginTop: 20 }}>
            One tap. <em>That&rsquo;s it.</em>
            <br />
            <span style={{ color: 'var(--ink-3)' }}>Try it →</span>
          </h2>
          <p className="lead" style={{ marginTop: 18, maxWidth: 600 }}>
            Peek shows you a charge. You answer one question. Done. The four
            answers map to the four ways money actually moves in your life.
          </p>
        </div>

        <div className="demo">
          <div className="demo__phone r" style={{ width: 'min(330px, 90%)' }}>
            <picture>
              <source srcSet="/images/optimized/store-screen-1.webp" type="image/webp" />
              <img
                src="/images/uploads/store-screen-1.png"
                alt="Peek's tag-the-why screen"
                width={720}
                height={1480}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <span className="demo__sticker demo__sticker--1">tap → tag → done</span>
            <span className="demo__sticker demo__sticker--2">~3 sec</span>
          </div>
          <HowTagger />
        </div>
      </div>
    </section>
  )
}
