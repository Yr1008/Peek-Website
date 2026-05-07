import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

const tks = [
  { src: '/images/tiktok/tiktok-1.jpg', handle: '@lindsay<3', rot: -3 },
  { src: '/images/tiktok/tiktok-2.jpg', handle: '@chloe', rot: 2, up: true },
  { src: '/images/tiktok/tiktok-3.jpg', handle: '@financeswithella', rot: -2 },
  { src: '/images/tiktok/tiktok-4.jpg', handle: '@madison · #peekmoney', rot: 3, up: true },
]

export default function Voices() {
  return (
    <section className="proof" id="proof">
      <div className="proof__scatter" aria-hidden="true">
        <span className="proof__scatter-item proof__scatter-item--croissant">
          <picture>
            <source srcSet="/images/optimized/st-croissant.webp" type="image/webp" />
            <img src="/images/uploads/stickers/croissant.png" alt="" loading="lazy" />
          </picture>
        </span>
        <span className="proof__scatter-item proof__scatter-item--pizza">
          <picture>
            <source srcSet="/images/optimized/st-pizza.webp" type="image/webp" />
            <img src="/images/uploads/stickers/pizza.png" alt="" loading="lazy" />
          </picture>
        </span>
        <span className="proof__scatter-item proof__scatter-item--tea">
          <picture>
            <source srcSet="/images/optimized/st-tea.webp" type="image/webp" />
            <img src="/images/uploads/stickers/tea.png" alt="" loading="lazy" />
          </picture>
        </span>
        <span className="proof__scatter-item proof__scatter-item--latest">
          <picture>
            <source srcSet="/images/optimized/st-latest.webp" type="image/webp" />
            <img src="/images/uploads/stickers/latest.png" alt="" loading="lazy" />
          </picture>
        </span>
      </div>
      <div className="wrap">
        <div className="proof__head reveal-up">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="dot" /> on tiktok this week
          </span>
          <h2 className="h-section" style={{ marginTop: 14 }}>
            People who finally <em>get it.</em>
          </h2>
          <p className="lead" style={{ margin: '18px auto 0' }}>
            Real videos from people figuring it out in public, using Peek to
            make sense of where the money goes.
          </p>
        </div>

        <div className="voices__stats reveal-up">
          <span>
            <strong>47k+</strong> downloads
          </span>
          <span>·</span>
          <span>
            <strong>3M+</strong> monthly TikTok views
          </span>
          <span>·</span>
          <code>#peekapp</code>
        </div>

        <div className="proof__row reveal-up">
          {tks.map((t, i) => (
            <div
              key={i}
              className={`tk${t.up ? ' tk--up' : ''}`}
              style={{ ['--rot' as string]: `${t.rot}deg` } as React.CSSProperties}
            >
              <img
                src={t.src}
                alt={`TikTok creator ${t.handle.replace('@', '').split(' ')[0]} sharing peek`}
                loading="lazy"
                decoding="async"
              />
              <div className="tk__handle">{t.handle}</div>
            </div>
          ))}
        </div>

        <div className="voices__mid reveal-up">
          <h3 className="voices__mid-h">
            Tag your first charge tonight. <em>Free on iOS.</em>
          </h3>
          <a
            className="btn btn--primary"
            id="cta-mid"
            data-cta-placement="mid"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            <span className="btn__icon">
              <AppleIcon size={16} />
            </span>
            Get Peek
            <span className="btn__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
