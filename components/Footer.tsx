import { APP_STORE_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <div>
            <a className="foot__brand" href="#top" aria-label="Peek home">
              <picture>
                <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
                <img src="/images/peek-icon.png" alt="" width={34} height={34} loading="lazy" />
              </picture>
              <span className="foot__word">Peek</span>
            </a>
            <p className="foot__tag">
              a calmer way to see your money. tag the why. notice the pattern.
              no spreadsheets.
            </p>
          </div>
          <div className="foot__cols">
            <div className="foot__col">
              <h6>app</h6>
              <ul>
                <li>
                  <a
                    id="cta-footer"
                    data-cta-placement="footer"
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener"
                  >
                    iOS
                  </a>
                </li>
                <li>
                  <a href="#how">how it works</a>
                </li>
                <li>
                  <a href="#tags">the four tags</a>
                </li>
                <li>
                  <a href="#faq">faq</a>
                </li>
              </ul>
            </div>
            <div className="foot__col">
              <h6>company</h6>
              <ul>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
                <li>
                  <a href="#">careers</a>
                </li>
              </ul>
            </div>
            <div className="foot__col">
              <h6>legal</h6>
              <ul>
                <li>
                  <a href="/privacy">privacy</a>
                </li>
                <li>
                  <a href="/terms">terms</a>
                </li>
                <li>
                  <a href="#">security</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot__bot">
          <span>© {new Date().getFullYear()} Peek</span>
          <span>made for the calm-money girls.</span>
        </div>
      </div>
    </footer>
  )
}
