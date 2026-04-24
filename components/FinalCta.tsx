import AppStoreButton from './AppStoreButton'

export default function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative py-24 md:py-32 px-5 md:px-8 overflow-hidden"
    >
      <div
        className="orb orb-peach"
        style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}
        aria-hidden="true"
      />
      <div
        className="orb orb-purple"
        style={{ width: 400, height: 400, bottom: -100, right: -80, opacity: 0.35 }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center reveal">
        <div className="flex justify-center mb-6">
          <picture>
            <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
            <img
              src="/images/peek-icon.png"
              alt=""
              width={64}
              height={64}
              className="rounded-[16px] shadow-xl"
              style={{ boxShadow: '0 20px 40px -10px rgba(255, 87, 34, 0.35)' }}
              loading="lazy"
            />
          </picture>
        </div>

        <h2 className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] leading-[1.08] text-balance">
          Money that finally reflects
          <br />
          <span className="accent-serif">who you are.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-text-secondary text-pretty">
          Stop tracking. Start understanding. Free on iOS.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <AppStoreButton placement="final" id="cta-final" size="lg" />
          <div className="text-sm text-text-muted">
            Built for iPhone. 4.4 stars on the App Store.
          </div>
        </div>
      </div>
    </section>
  )
}
