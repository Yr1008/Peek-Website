import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

type StickerSpec = {
  src: string
  webp: string
  size: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  rot: number
}

const STICKERS: StickerSpec[] = [
  { src: '/images/uploads/stickers/croissant.png', webp: '/images/optimized/st-croissant.webp', size: 84, top: '8%',  left: '6%',  rot: -12 },
  { src: '/images/uploads/stickers/glasses.png',   webp: '/images/optimized/st-glasses.webp',   size: 78, top: '14%', right: '8%', rot: 14 },
  { src: '/images/uploads/stickers/tea.png',       webp: '/images/optimized/st-tea.webp',       size: 80, bottom: '12%', left: '4%', rot: 8 },
  { src: '/images/uploads/stickers/shoes.png',     webp: '/images/optimized/st-shoes.webp',     size: 92, bottom: '8%',  right: '6%', rot: -10 },
  { src: '/images/uploads/stickers/flower.png',    webp: '/images/optimized/st-flower.webp',    size: 70, top: '46%',   left: '3%',  rot: 16 },
  { src: '/images/uploads/stickers/Container.png', webp: '/images/optimized/st-container.webp', size: 72, top: '52%',   right: '4%', rot: -14 },
]

export default function FinalCta() {
  return (
    <section className="final" id="get">
      <div className="final__constellation" aria-hidden="true">
        {STICKERS.map((s, i) => (
          <div
            key={i}
            className="final__sticker"
            style={{
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
              transform: `rotate(${s.rot}deg)`,
            }}
          >
            <picture>
              <source srcSet={s.webp} type="image/webp" />
              <img src={s.src} alt="" />
            </picture>
          </div>
        ))}
        {/* Animated mascot, one tilted element in the constellation */}
        <div
          className="final__sticker"
          style={{
            width: 110,
            height: 110,
            top: '34%',
            right: '14%',
            transform: 'rotate(-6deg)',
          }}
        >
          <video autoPlay loop muted playsInline poster="/images/optimized/peek-3d-left.webp">
            <source src="/images/optimized/peek-animated.webm" type="video/webm" />
            <source src="/images/optimized/peek-animated.mp4" type="video/mp4" />
            <img src="/images/optimized/peek-3d-left.webp" alt="" />
          </video>
        </div>
      </div>

      <div className="wrap">
        <div className="final__inner reveal">
          <span className="final__bubble" aria-hidden="true">you ready?</span>

          <h2 className="final__h">
            Money that finally <em>reflects who you are.</em>
          </h2>
          <p className="final__p">
            Stop tracking. <em>Start understanding yourself.</em> Free on iOS.
            30 seconds to connect. 5 minutes a day.
          </p>

          <a
            className="btn btn--white btn--big"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            id="cta-final"
            data-cta="final"
          >
            <AppleIcon />
            Get Peek. Free on iOS.
            <span className="arrow" aria-hidden="true">→</span>
          </a>

          <div className="final__meta">
            <span><span className="stars" aria-hidden="true">★★★★★</span> <strong>loved on the app store</strong></span>
            <span className="sep" aria-hidden="true">·</span>
            <span>secured by <strong>plaid</strong></span>
            <span className="sep" aria-hidden="true">·</span>
            <span>free on ios</span>
          </div>
        </div>
      </div>
    </section>
  )
}
