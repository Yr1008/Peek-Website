import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function Navbar() {
  return (
    <header className="nav" id="nav">
      <div className="nav__in">
        <a className="nav__brand" href="#top" aria-label="Peek home">
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
          <span className="nav__word">Peek<span className="nav__pulse" aria-hidden="true" /></span>
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
          Get Peek
        </a>
      </div>
      <span className="nav__progress" id="nav-progress" aria-hidden="true" />
    </header>
  )
}
