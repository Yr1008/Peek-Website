import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

const TKS = [
  {
    src: '/images/tiktok/tiktok-1.jpg',
    handle: '@maya.km · 14k',
    cap: '"first money app that didn\'t make me feel like a failure."',
    rot: -3,
  },
  {
    src: '/images/tiktok/tiktok-2.jpg',
    handle: '@itslara_ · 38k',
    cap: '"the tagging fixed my doordash problem in like a week."',
    rot: 2,
  },
  {
    src: '/images/tiktok/tiktok-3.jpg',
    handle: '@sun.day.notes · 22k',
    cap: '"replaced my journal AND my banking app."',
    rot: -2,
  },
  {
    src: '/images/tiktok/tiktok-4.jpg',
    handle: '@fintok.fairy · 51k',
    cap: '"the only app on the green-flags side of fintok."',
    rot: 3,
  },
]

export default function Voices() {
  return (
    <section className="voices sec--pink" id="voices">
      <div className="wrap">
        <div className="voices__head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            on tiktok this week
          </span>
          <h2 className="h-section voices__h">
            people who finally <em>get it.</em>
          </h2>
          <p className="lead voices__lead">
            not influencers. real users sharing peek on their grids.
          </p>
        </div>

        <div className="voices__stats reveal">
          <span className="voices__stat"><strong>47k+</strong> downloads</span>
          <span className="sep" aria-hidden="true">·</span>
          <span className="voices__stat"><strong>3M+</strong> tiktok views</span>
          <span className="sep" aria-hidden="true">·</span>
          <span className="voices__stat"><strong>4.9★</strong> on the app store</span>
        </div>

        <div className="voices__row reveal">
          {TKS.map((t, i) => (
            <figure
              key={i}
              className="tk"
              style={{ ['--rot' as string]: `${t.rot}deg` } as React.CSSProperties}
            >
              <img
                src={t.src}
                alt={`tiktok creator ${t.handle.split(' ')[0]} sharing peek`}
                loading="lazy"
                decoding="async"
              />
              <figcaption className="tk__cap">{t.cap}</figcaption>
              <span className="tk__handle">{t.handle}</span>
            </figure>
          ))}
        </div>

        <div className="voices__cta-row reveal">
          <span>tag your first charge tonight.</span>
          <a
            className="btn btn--primary"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
            data-cta="cta-mid"
          >
            <AppleIcon />
            <span>download peek <em>free</em></span>
          </a>
        </div>
      </div>
    </section>
  )
}
