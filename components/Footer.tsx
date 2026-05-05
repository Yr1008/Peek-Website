import { APP_STORE_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      style={{
        padding: '40px var(--pad)',
        background: 'var(--cream-3)',
        fontSize: 14,
        color: 'var(--ink-2)',
      }}
    >
      <div
        className="flex flex-wrap items-center justify-between gap-6"
        style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}
      >
        <a
          href="#top"
          className="flex items-center gap-2"
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          <picture>
            <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
            <img
              src="/images/peek-icon.png"
              alt=""
              width={24}
              height={24}
              style={{ borderRadius: 6 }}
              loading="lazy"
            />
          </picture>
          peek
        </a>
        <span
          style={{
            fontStyle: 'italic',
            fontFamily: 'var(--serif)',
            color: 'var(--ink-soft)',
            fontSize: 15,
          }}
        >
          a money app for people figuring it out, in public.
        </span>
        <div className="flex items-center gap-5">
          <a
            href={APP_STORE_URL}
            id="cta-footer"
            data-cta-placement="footer"
            className="footer-link"
          >
            app store
          </a>
          <a href="#faq" className="footer-link">
            faq
          </a>
          <a href="/privacy" className="footer-link">
            privacy
          </a>
          <a href="/terms" className="footer-link">
            terms
          </a>
        </div>
      </div>
      <div
        className="text-center mt-7"
        style={{
          maxWidth: 'var(--maxw)',
          margin: '28px auto 0',
          fontSize: 12,
          color: 'var(--ink-soft)',
        }}
      >
        © {new Date().getFullYear()} peek
      </div>
      <style>{`
        .footer-link { transition: color 200ms; }
        .footer-link:hover { color: var(--peach); }
      `}</style>
    </footer>
  )
}
