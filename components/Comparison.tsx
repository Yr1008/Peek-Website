const them = [
  'Categorize every transaction',
  'Strict budgets and hard caps',
  'Guilt notifications when you spend',
  'Show you what you spent',
  'Treat you like a problem to fix',
]

const us = [
  'Ask the why behind each choice',
  'Funds that flex with your life',
  'Weekly insight reveals, not pings',
  'Show you the pattern underneath',
  'Treat you like someone worth understanding',
]

function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#E8E4DE" />
      <path
        d="M7 7l6 6M13 7l-6 6"
        stroke="#8A8A8A"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#FF7A50" />
      <path
        d="M6 10l2.5 2.5L14 7.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="relative py-20 md:py-28 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="eyebrow">Why Peek is different</span>
          <h2 className="mt-5 text-[2rem] sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance">
            Other apps track.
            <br />
            <span className="accent-serif">Peek understands.</span>
          </h2>
        </div>

        <div className="mt-14 md:mt-20 grid gap-5 md:grid-cols-2 md:gap-6">
          {/* Them */}
          <div className="card p-7 md:p-9 reveal">
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-black/5">
              <div
                className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                style={{ background: '#EFEBE6' }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    d="M5 5h10v10H5z"
                    stroke="#8A8A8A"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path d="M5 9h10M9 5v10" stroke="#8A8A8A" strokeWidth="1.5" />
                </svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-text-muted font-semibold">
                  Most money apps
                </div>
                <div className="font-heading text-xl">Tracking & tallying</div>
              </div>
            </div>
            <ul className="space-y-4">
              {them.map((t) => (
                <li key={t} className="flex gap-3 text-text-secondary">
                  <Cross />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Us */}
          <div
            className="card p-7 md:p-9 relative reveal overflow-hidden"
            style={{
              background:
                'linear-gradient(145deg, rgba(255, 176, 136, 0.18) 0%, rgba(255, 255, 255, 0.85) 60%, rgba(232, 212, 255, 0.22) 100%)',
              borderColor: 'rgba(255, 122, 80, 0.22)',
            }}
          >
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-black/5">
              <div
                className="w-10 h-10 rounded-[12px] flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #ff7a50, #ff5722)',
                }}
              >
                <picture>
                  <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
                  <img
                    src="/images/peek-icon.png"
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-[6px]"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--peek-orange-dark)' }}>
                  Peek
                </div>
                <div className="font-heading text-xl">Understanding & clarity</div>
              </div>
            </div>
            <ul className="space-y-4">
              {us.map((t) => (
                <li key={t} className="flex gap-3 text-text-primary">
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
