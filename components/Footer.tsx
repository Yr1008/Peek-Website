import { APP_STORE_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__row">
          <a className="foot__brand" href="#top" aria-label="Peek home">
            <picture>
              <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
              <img src="/images/peek-icon.png" alt="" width={28} height={28} loading="lazy" />
            </picture>
            <strong>Peek</strong>
          </a>
          <span className="foot__tag">
            A money app for people figuring it out, in public.
          </span>
          <div className="foot__links">
            <a
              id="cta-footer"
              data-cta="footer"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
            >
              App Store
            </a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="mailto:hi@peek.money">Contact</a>
          </div>
        </div>
        <div className="foot__copy">© {new Date().getFullYear()} Peek</div>
      </div>
    </footer>
  )
}
