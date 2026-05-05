import PhoneMock from './PhoneMock'

export default function Story() {
  return (
    <section className="story-sec" id="story">
      <div className="wrap">
        <div className="story-sec__head r">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot" /> the story · feature 03
          </span>
          <h2 className="h-section" style={{ marginTop: 20 }}>
            Your week,
            <br />
            <em>in plain english.</em>
          </h2>
          <p
            className="lead"
            style={{
              marginTop: 18,
              maxWidth: 600,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Sunday morning. One paragraph. No charts. No category breakdowns.
            Just here&rsquo;s the pattern, plainly stated. Then you decide
            what to do about it.
          </p>
        </div>

        <div className="story-grid r">
          <div className="story-phone">
            <PhoneMock variant="story" />
          </div>

          <div className="story-card">
            <div className="story-card__brow">
              <span>your spending story</span>
              <span className="story-card__date">Sunday · Aug 18</span>
            </div>
            <p className="story-card__body">
              You spent <mark>$230/day more</mark> on weekdays this week — most
              of it tagged <em>&ldquo;convenience.&rdquo;</em> Tuesday was the
              peak: a <em>$47 Target run</em> at 9:14pm right after your 1:1.
            </p>
            <p className="story-card__body">
              The pattern&rsquo;s been holding for <mark>three weeks</mark>.
              Maybe a Tuesday thing. Maybe a 1:1 thing. <em>Up to you.</em>
            </p>
            <div className="story-card__sig">— peek, sunday morning</div>
          </div>

          <div className="story-stickers" aria-hidden="true">
            <span className="ss ss--1">☕</span>
            <span className="ss ss--2">👟</span>
            <span className="ss ss--3">🍳</span>
            <span className="ss ss--4">🥐</span>
          </div>
        </div>
      </div>
    </section>
  )
}
