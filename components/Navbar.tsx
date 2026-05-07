import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function Navbar() {
  return (
    <header className="nav" id="nav">
      <div className="nav__in">
        <a className="nav__brand" href="#top" aria-label="peek home">
          <picture>
            <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
            <img
              src="/images/peek-icon.png"
              alt=""
              width={32}
              height={32}
              loading="eager"
              decoding="async"
            />
          </picture>
          <span className="nav__word">peek</span>
        </a>
        <a
          className="nav__cta"
          id="cta-nav"
          data-cta="nav"
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener"
        >
          <AppleIcon className="nav__cta-icon" />
          get peek
        </a>
      </div>
    </header>
  )
}
