export default function Gap() {
  return (
    <section className="sec sec--lavender" id="gap">
      <span className="sec__orb sec__orb--peach" aria-hidden="true" />
      <span className="sec__orb sec__orb--pink" aria-hidden="true" />

      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            02 / the gap
          </span>
          <h2 className="h-section sec__h">
            anxiety isn't from spending too much.<br/>
            it's from <em>not knowing where it went.</em>
          </h2>
          <p className="lead sec__lead">
            most apps tell you what you spent. Peek shows you why. that's the gap they leave you in,
            and the one Peek closes.
          </p>
        </div>

        <div className="gap__wrap">
          <div className="gap__copy reveal">
            <div className="gap__bullet">
              <span className="gap__bullet-num">→</span>
              <div>
                <h3 className="gap__bullet-h">labels what was vague.</h3>
                <p className="gap__bullet-p">"this is comfort spending. this is autopilot. this is a ritual you'd never give up."</p>
              </div>
            </div>
            <div className="gap__bullet">
              <span className="gap__bullet-num">→</span>
              <div>
                <h3 className="gap__bullet-h">surfaces patterns over time.</h3>
                <p className="gap__bullet-p">"you tend to overbuy when stressed. you light up around your sister."</p>
              </div>
            </div>
            <div className="gap__bullet">
              <span className="gap__bullet-num">→</span>
              <div>
                <h3 className="gap__bullet-h">gives you a stable place to stand.</h3>
                <p className="gap__bullet-p">your money changes month to month. how you understand it doesn't have to.</p>
              </div>
            </div>

            <span className="stamp" style={{ marginTop: 12 }}>anxiety relief through clarity ✦</span>
          </div>

          <div className="gap__phone reveal">
            <div className="iphone iphone--still">
              <div className="iphone__notch" aria-hidden="true" />
              <div className="iphone__screen">
                <picture>
                  <source srcSet="/images/optimized/screen-patterns.webp" type="image/webp" />
                  <img src="/images/uploads/screen-patterns.png" alt="Peek revealing your spending story over time" loading="lazy" decoding="async" />
                </picture>
                <div className="iphone__home" aria-hidden="true" />
              </div>
            </div>
            <span className="gap__phone-cap">your spending story · in plain english</span>
          </div>
        </div>
      </div>
    </section>
  )
}
