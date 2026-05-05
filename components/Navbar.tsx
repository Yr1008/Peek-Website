import { APP_STORE_URL } from '@/lib/constants'

export default function Navbar() {
  return (
    <header className="nav" id="nav">
      <div className="nav__in">
        <a className="nav__brand" href="#top" aria-label="Peek home">
          <picture>
            <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
            <img
              className="nav__blob"
              src="/images/peek-icon.png"
              alt=""
              width={34}
              height={34}
              loading="eager"
              decoding="async"
            />
          </picture>
          <span className="nav__word">Peek</span>
        </a>
        <nav className="nav__links">
          <a href="#how">how it works</a>
          <a href="#tags">the four tags</a>
          <a href="#proof">people on it</a>
          <a href="#faq">faq</a>
          <a
            className="nav__cta"
            id="cta-nav"
            data-cta-placement="nav"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            Get Peek
          </a>
        </nav>
      </div>
    </header>
  )
}
