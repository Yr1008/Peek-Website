import { APP_STORE_URL } from '@/lib/constants'
import AppleIcon from './AppleIcon'

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between safe-top"
      style={{
        padding: '14px var(--pad)',
        background: 'rgba(242, 235, 217, 0.78)',
        backdropFilter: 'blur(14px) saturate(140%)',
        WebkitBackdropFilter: 'blur(14px) saturate(140%)',
        borderBottom: '1px solid rgba(42, 19, 82, 0.06)',
      }}
    >
      <a
        href="#top"
        aria-label="peek home"
        className="flex items-center gap-2"
        style={{
          fontFamily: 'var(--serif)',
          fontWeight: 700,
          fontSize: 22,
          fontStyle: 'italic',
          letterSpacing: '-0.02em',
        }}
      >
        <picture>
          <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
          <img
            src="/images/peek-icon.png"
            alt=""
            width={28}
            height={28}
            style={{ borderRadius: 8 }}
            loading="eager"
            decoding="async"
          />
        </picture>
        <span>peek</span>
      </a>

      <nav
        className="hidden md:flex"
        style={{ gap: 28, fontSize: 14, color: 'var(--ink-soft)', fontWeight: 500 }}
        aria-label="primary"
      >
        <a href="#why" className="nav-link">why peek</a>
        <a href="#how" className="nav-link">how it works</a>
        <a href="#voices" className="nav-link">on tiktok</a>
        <a href="#faq" className="nav-link">faq</a>
      </nav>

      <a
        href={APP_STORE_URL}
        id="cta-nav"
        data-cta-placement="nav"
        data-mag
        className="inline-flex items-center gap-1.5 transition-all"
        style={{
          background: 'var(--ink)',
          color: 'var(--cream)',
          padding: '9px 18px',
          borderRadius: 999,
          fontSize: 14,
          fontWeight: 600,
        }}
        aria-label="Get peek. Opens App Store."
      >
        <AppleIcon size={14} />
        get peek
      </a>

      <style>{`
        .nav-link { position: relative; padding: 4px 0; transition: color 200ms; }
        .nav-link::after {
          content: ""; position: absolute; left: 0; bottom: -2px;
          height: 1px; width: 0; background: var(--peach);
          transition: width 240ms cubic-bezier(0.2,0.8,0.2,1);
        }
        .nav-link:hover { color: var(--ink); }
        .nav-link:hover::after { width: 100%; }
      `}</style>
    </header>
  )
}
