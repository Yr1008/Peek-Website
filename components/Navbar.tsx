import AppStoreButton from './AppStoreButton'

export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 glass-soft safe-top"
      style={{
        background: 'rgba(255, 249, 246, 0.78)',
        borderBottom: '1px solid rgba(45, 35, 25, 0.06)',
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-[72px]"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2"
          aria-label="Peek home"
        >
          <picture>
            <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
            <img
              src="/images/peek-icon.png"
              alt=""
              width={32}
              height={32}
              className="rounded-[8px]"
              loading="eager"
              decoding="async"
            />
          </picture>
          <span className="font-heading text-xl text-text-primary">peek</span>
        </a>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#how-it-works"
            className="hidden md:inline-flex btn-ghost"
          >
            How it works
          </a>
          <a href="#faq" className="hidden md:inline-flex btn-ghost">
            FAQ
          </a>
          <AppStoreButton
            placement="nav"
            id="cta-nav"
            label="Download"
            size="sm"
          />
        </div>
      </nav>
    </header>
  )
}
