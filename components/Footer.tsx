import { APP_STORE_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      className="relative px-5 md:px-8 pt-16 pb-10 md:pb-12 mt-6"
      style={{
        borderTop: '1px solid rgba(45, 35, 25, 0.06)',
        background: 'rgba(250, 248, 245, 0.5)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <picture>
            <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
            <img
              src="/images/peek-icon.png"
              alt=""
              width={36}
              height={36}
              className="rounded-[10px]"
              loading="lazy"
            />
          </picture>
          <div>
            <div className="font-heading text-xl text-text-primary">peek</div>
            <div className="text-xs text-text-muted mt-0.5">
              Made with care for people who want clarity, not caps.
            </div>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-secondary"
        >
          <a
            href={APP_STORE_URL}
            data-cta-placement="footer"
            id="cta-footer"
            className="hover:text-text-primary transition-colors"
          >
            App Store
          </a>
          <a href="/privacy" className="hover:text-text-primary transition-colors">
            Privacy
          </a>
          <a href="/terms" className="hover:text-text-primary transition-colors">
            Terms
          </a>
          <a
            href="mailto:hello@peek.money"
            className="hover:text-text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-black/5 text-xs text-text-muted">
        &copy; {new Date().getFullYear()} Peek. All rights reserved.
      </div>
    </footer>
  )
}
