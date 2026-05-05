import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'
import PlaidMini from './PlaidMini'
import HeroCycle from './HeroCycle'
import PhoneMock from './PhoneMock'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div className="hero__portrait" aria-hidden="true">
          <div className="hero__portrait-frame">
            <img
              src="/images/hero-stressed-person.png"
              alt=""
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="hero__portrait-cap">
            <span className="cap-dot" />
            <span>tagged. went on with my day.</span>
          </div>
        </div>

        <div className="hero__copy">
          <span className="eyebrow hero__brow">
            <span className="dot" />
            a money app that asks <em>why</em>, not how much
          </span>

          <h1 className="h-display hero__h1" style={{ marginTop: 18 }}>
            you spent it.
            <br />
            but <HeroCycle />
          </h1>

          <p className="lead hero__lead">
            Peek tags every purchase with what actually drove it —{' '}
            <em>Self Reward, Social, Ritual, Convenience.</em> No
            spreadsheets. No guilt. Three days in, the patterns finally make
            sense.
          </p>

          <div className="hero__cta">
            <a
              className="btn btn--primary"
              id="cta-hero"
              data-cta-placement="hero"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
            >
              <span className="btn__icon">
                <AppleIcon />
              </span>
              Download on iOS
              <span className="btn__arrow">→</span>
            </a>
            <a className="btn btn--ghost" href="#how">
              try the demo
            </a>
          </div>

          <div className="hero__meta">
            <span className="stars">★★★★★</span>
            <span>
              <strong>Free</strong> on iOS
            </span>
            <span className="hero__meta-sep">·</span>
            <span>
              connect a bank in <strong>30 sec</strong>
            </span>
            <span className="hero__meta-sep">·</span>
            <PlaidMini />
          </div>

          <svg
            className="hero__scribble hero__scribble--1"
            viewBox="0 0 100 60"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
          >
            <path d="M5 30 Q 20 5, 40 25 T 70 30 Q 85 35, 95 15" />
          </svg>
        </div>

        <div className="hero__visual" id="hero-visual">
          <div
            className="hero__phone"
            id="hero-phone"
            style={{ width: 'min(340px, 88%)' }}
          >
            <PhoneMock variant="tag" />
          </div>

          <div className="receipt receipt--1">
            <div className="receipt__row">
              <span
                className="receipt__pill"
                style={{ background: '#FFE0CF', color: 'var(--peek-2)' }}
              >
                self reward
              </span>
              <span className="receipt__amt">$84</span>
            </div>
            <span className="receipt__why">&ldquo;new sambas&rdquo;</span>
          </div>
          <div className="receipt receipt--2">
            <div className="receipt__row">
              <span
                className="receipt__pill"
                style={{ background: '#E1EFD7', color: '#3B7A3F' }}
              >
                ritual
              </span>
              <span className="receipt__amt">$5.75</span>
            </div>
            <span className="receipt__why">blank street latte</span>
          </div>
          <div className="receipt receipt--3">
            <div className="receipt__row">
              <span
                className="receipt__pill"
                style={{ background: '#FFEFA8', color: '#8A6E1A' }}
              >
                convenience
              </span>
              <span className="receipt__amt">$22</span>
            </div>
            <span className="receipt__why">9pm DoorDash</span>
          </div>
          <div className="receipt receipt--4">
            <div className="receipt__row">
              <span
                className="receipt__pill"
                style={{ background: '#FAD8E5', color: '#B23F6E' }}
              >
                social
              </span>
              <span className="receipt__amt">$32</span>
            </div>
            <span className="receipt__why">brunch w/ tess</span>
          </div>
        </div>
      </div>
    </section>
  )
}
