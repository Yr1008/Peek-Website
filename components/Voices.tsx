const tks = [
  { src: '/images/tiktok/tiktok-1.jpg', handle: '@lindsay<3', rot: -3 },
  { src: '/images/tiktok/tiktok-2.jpg', handle: '@chloe', rot: 2, up: true },
  { src: '/images/tiktok/tiktok-3.jpg', handle: '@financeswithella', rot: -2 },
  { src: '/images/tiktok/tiktok-4.jpg', handle: '@madison · #peekmoney', rot: 3, up: true },
  { src: '/images/tiktok/tiktok-5.jpg', handle: '@addison', rot: -3 },
]

export default function Voices() {
  return (
    <section className="proof" id="proof">
      <div className="wrap">
        <div className="proof__head r">
          <span className="eyebrow">
            <span className="dot" /> on tiktok · #peekapp
          </span>
          <h2 className="h-section" style={{ marginTop: 20 }}>
            The girls
            <br />
            <em>get it.</em>
          </h2>
          <p className="lead" style={{ marginTop: 18, maxWidth: 560 }}>
            Real videos from people figuring it out in public, using Peek to
            make sense of where the money goes.
          </p>
        </div>

        <div className="proof__row">
          {tks.map((t, i) => (
            <div
              key={i}
              className={`tk r${t.up ? ' tk--up' : ''}`}
              style={{ ['--rot' as string]: `${t.rot}deg` } as React.CSSProperties}
            >
              <img
                src={t.src}
                alt={`TikTok user ${t.handle.replace('@', '').split(' ')[0]} sharing peek app`}
                loading="lazy"
                decoding="async"
              />
              <div className="tk__handle">{t.handle}</div>
            </div>
          ))}
        </div>

        <p className="proof__foot r">
          <span>scroll the pile · search</span>
          <code>#peekapp</code>
          <span>on tiktok</span>
        </p>
      </div>
    </section>
  )
}
