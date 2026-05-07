import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function Bento() {
  return (
    <section className="bento-sec" id="features">
      <div className="wrap">
        <div className="bento-sec__head reveal-up">
          <span className="eyebrow">
            <span className="dot" /> what is actually inside the app
          </span>
          <h2 className="h-section">
            Eight reasons it&rsquo;s not just <em>another money app.</em>
          </h2>
          <p className="lead">
            Tag the why, see your kinds, run small experiments, collect the
            patterns. Peek is built for how you actually live with money.
          </p>
        </div>

        <div className="bento reveal-up">
          {/* 1. Tag the why */}
          <article className="bcell bcell--peek bcell--span2 bcell--tall">
            <div>
              <p className="bcell__brow">tag the why</p>
              <h3 className="bcell__h">
                One question. <em>Four answers.</em>
              </h3>
              <p className="bcell__p">
                Every charge gets a quick tap. Self Reward, Social, Ritual,
                Convenience. Three seconds. The whole framework hangs off this
                one move.
              </p>
            </div>
            <div className="bcell__viz">
              <span className="bchip bchip--peek">self reward</span>
              <span className="bchip bchip--sage">ritual</span>
              <span className="bchip bchip--pink">social</span>
              <span className="bchip bchip--yellow">convenience</span>
            </div>
          </article>

          {/* 2. The 7 spending kinds */}
          <article className="bcell bcell--cream bcell--tall">
            <div>
              <p className="bcell__brow">the 7 spending kinds</p>
              <h3 className="bcell__h">
                Where your money <em>actually goes.</em>
              </h3>
              <p className="bcell__p">
                Not vague categories. The seven ways every dollar lands.
              </p>
            </div>
            <ol className="blist" style={{ marginTop: 14 }}>
              <li className="blist__row">essential</li>
              <li className="blist__row">staple</li>
              <li className="blist__row">intentional</li>
              <li className="blist__row">treat</li>
              <li className="blist__row">flexible</li>
              <li className="blist__row">autopilot</li>
              <li className="blist__row">impulse</li>
            </ol>
          </article>

          {/* 3. Caps that flex */}
          <article className="bcell bcell--sage">
            <div>
              <p className="bcell__brow">caps that flex</p>
              <h3 className="bcell__h">
                Limits that <em>notice.</em> Never scold.
              </h3>
              <p className="bcell__p">
                Peek nudges. The math just shows up, plainly.
              </p>
            </div>
            <div className="bcell__viz" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <div className="bbar">
                <span className="bbar__seg bbar__seg--ok" style={{ width: '60%' }} />
                <span className="bbar__seg bbar__seg--over" style={{ width: '24%' }} />
              </div>
              <span className="bhint">$127 guilt-free ✓</span>
            </div>
          </article>

          {/* 4. The blind box */}
          <article className="bcell bcell--aub">
            <div>
              <p className="bcell__brow">blind box</p>
              <h3 className="bcell__h">
                Hit your caps. <em>Unlock a reveal.</em>
              </h3>
              <p className="bcell__p">
                One tiny pattern Peek noticed about you that no algorithm
                could&rsquo;ve guessed.
              </p>
            </div>
            <div className="btap" aria-hidden="true">
              <span className="btap__card">tap me</span>
              <span className="btap__card is-on">tap me ✦</span>
              <span className="btap__card">tap me</span>
            </div>
          </article>

          {/* 5. Sticker scrapbook */}
          <article className="bcell bcell--yellow">
            <div>
              <p className="bcell__brow">sticker scrapbook</p>
              <h3 className="bcell__h">
                A scrapbook of your <em>financial life.</em>
              </h3>
              <p className="bcell__p">
                Earn stickers from every coffee run, dinner date, spontaneous
                adventure. Yours to keep.
              </p>
            </div>
            <div className="bsticker-row" aria-hidden="true">
              <picture>
                <source srcSet="/images/optimized/st-latest.webp" type="image/webp" />
                <img src="/images/uploads/stickers/latest.png" alt="" loading="lazy" />
              </picture>
              <picture>
                <source srcSet="/images/optimized/st-croissant.webp" type="image/webp" />
                <img src="/images/uploads/stickers/croissant.png" alt="" loading="lazy" />
              </picture>
              <picture>
                <source srcSet="/images/optimized/st-tea.webp" type="image/webp" />
                <img src="/images/uploads/stickers/tea.png" alt="" loading="lazy" />
              </picture>
              <picture>
                <source srcSet="/images/optimized/st-glasses.webp" type="image/webp" />
                <img src="/images/uploads/stickers/glasses.png" alt="" loading="lazy" />
              </picture>
            </div>
          </article>

          {/* 6. Sunday spending story */}
          <article className="bcell bcell--sky">
            <div>
              <p className="bcell__brow">sunday story</p>
              <h3 className="bcell__h">
                Your week, in <em>plain english.</em>
              </h3>
              <p className="bcell__p">
                One paragraph. No charts. Just the pattern. You decide what
                to do.
              </p>
            </div>
            <div className="bcell__bigword" aria-hidden="true">sunday.</div>
          </article>

          {/* 7. AI chat companion */}
          <article className="bcell bcell--lilac">
            <div>
              <p className="bcell__brow">ai chat</p>
              <h3 className="bcell__h">
                Ask Peek <em>anything.</em>
              </h3>
              <p className="bcell__p">
                It remembers context. Stores it as memory. Answers like the
                friend who actually pays attention.
              </p>
            </div>
            <div className="bbubble" aria-hidden="true">
              <div className="bbubble__row">
                <span className="bbubble__msg">that&rsquo;s a bit more than a standard latte. seasonal?</span>
              </div>
              <div className="bbubble__row">
                <span className="bbubble__msg bbubble__msg--me">i went for the pumpkin one</span>
              </div>
            </div>
          </article>

          {/* 8. Low-stakes experiments */}
          <article className="bcell bcell--pink bcell--span2">
            <div>
              <p className="bcell__brow">low-stakes experiments</p>
              <h3 className="bcell__h">
                Pause an impulse for 48 hours. <em>Swap takeout for shoes.</em>
              </h3>
              <p className="bcell__p">
                Tiny tests you can actually run, notice, and adjust. No "stick
                to the plan" pressure. Just small experiments that move you
                closer to what you actually want.
              </p>
            </div>
            <div className="bcell__viz">
              <span className="bhint">pause for 48h ✦</span>
              <span className="bchip">try it →</span>
            </div>
          </article>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }} className="reveal-up">
          <a
            className="btn btn--primary"
            id="cta-bento"
            data-cta-placement="bento"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            <span className="btn__icon">
              <AppleIcon size={16} />
            </span>
            Get all of this. Free on iOS.
            <span className="btn__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
