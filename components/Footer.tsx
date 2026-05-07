import { APP_STORE_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__row">
          <a className="foot__brand" href="#top" aria-label="peek home">
            <picture>
              <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
              <img src="/images/peek-icon.png" alt="" width={32} height={32} loading="lazy" />
            </picture>
            <strong>peek</strong>
          </a>
          <span className="foot__tag">a money app for people figuring it out, in public.</span>
          <div className="foot__links">
            <a id="cta-footer" data-cta="footer" href={APP_STORE_URL} target="_blank" rel="noopener">
              app store
            </a>
            <a href="/privacy">privacy</a>
            <a href="/terms">terms</a>
            <a href="mailto:hi@peek.money">contact</a>
          </div>
        </div>
        <div className="foot__copy">© {new Date().getFullYear()} peek</div>
      </div>
    </footer>
  )
}
