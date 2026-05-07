import { APP_STORE_URL } from '@/lib/constants'

export default function Navbar() {
  return (
    <header className="nav" id="nav">
      <div className="nav__in">
        <a className="nav__brand" href="#top" aria-label="peek home">
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
          <span className="nav__word">peek</span>
        </a>
        <nav className="nav__links">
          <a href="#why">why peek</a>
          <a href="#how">how it works</a>
          <a href="#tagger">try it</a>
          <a href="#voices">on tiktok</a>
          <a
            className="nav__cta"
            id="cta-nav"
            data-cta="cta-nav"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener"
          >
            get peek
          </a>
        </nav>
      </div>
    </header>
  )
}
