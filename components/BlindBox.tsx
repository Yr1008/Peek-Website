export default function BlindBox() {
  return (
    <section className="bbox-sec" id="bbox">
      <div className="wrap">
        <div className="bbox-grid r">
          <div className="bbox-copy">
            <span className="eyebrow">
              <span className="dot" /> blind box · feature 02
            </span>
            <h2
              className="h-section"
              style={{ marginTop: 20, color: 'var(--paper)' }}
            >
              Hit your caps?
              <br />
              Unlock <em>a reveal.</em>
            </h2>
            <p
              className="lead"
              style={{
                marginTop: 18,
                color: 'rgba(244,236,219,.75)',
              }}
            >
              Pick one when you set your caps. Stay curious all month. Open it
              when the cycle ends. A tiny pattern Peek noticed about you that
              no algorithm could&rsquo;ve guessed.
            </p>
            <ul className="bbox-list">
              <li>
                <span className="bbox-list__b" /> a streak you didn&rsquo;t know you had
              </li>
              <li>
                <span className="bbox-list__b" /> a Tuesday-shaped pattern
              </li>
              <li>
                <span className="bbox-list__b" /> the one merchant that hijacks your week
              </li>
            </ul>
          </div>

          <div className="bbox-stage">
            <div className="bbox-particles" aria-hidden="true">
              <span className="bp bp--1">✦</span>
              <span className="bp bp--2">✦</span>
              <span className="bp bp--3">●</span>
              <span className="bp bp--4">✦</span>
              <span className="bp bp--5">●</span>
              <span className="bp bp--6">✦</span>
            </div>
            <div className="bbox-phone">
              <picture>
                <source srcSet="/images/optimized/store-screen-4.webp" type="image/webp" />
                <img
                  src="/images/uploads/store-screen-4.png"
                  alt="Peek blind box reveal screen"
                  width={720}
                  height={1480}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="bbox-tag bbox-tag--1">22 days · 09 hrs</div>
            <div className="bbox-tag bbox-tag--2">tap me ✦</div>
          </div>
        </div>
      </div>
    </section>
  )
}
