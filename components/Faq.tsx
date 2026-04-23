const faqs = [
  {
    q: 'Is my financial data safe?',
    a: 'Yes. Peek uses Plaid for bank connections, which is the same infrastructure Venmo and Chime rely on. It is read-only, bank-level encrypted, and Peek cannot move money anywhere. We never sell your data.',
  },
  {
    q: 'What does Peek cost?',
    a: 'Peek is free to download on iOS. There is a premium tier inside the app if you want deeper insights and unlimited AI coach conversations. No paywall before you can try it.',
  },
  {
    q: 'How is this different from Mint, Monarch, or Copilot?',
    a: 'Those apps categorize what you spent. Peek asks why you spent it. They show you a pie chart. Peek shows you a pattern. It is a different question, which makes it a different product.',
  },
  {
    q: 'Do I have to budget to use Peek?',
    a: 'No. Peek is anti-budget on purpose. Instead of caps and categories, you get funds and soft guardrails. If budgeting has never stuck for you, that is the point.',
  },
  {
    q: 'Is Peek on Android?',
    a: 'Not yet. We are iOS only while we get the product right. If you are on Android, drop your email in the App Store description link and we will tell you when it lands.',
  },
  {
    q: 'What if I just want to look around first?',
    a: 'Download, poke around, connect one account if you want, disconnect it if you do not. No pressure. The whole product is designed so you can leave whenever without losing anything.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center reveal">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-[2rem] sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance">
            The questions you&rsquo;d ask
            <br className="hidden sm:block" />{' '}
            <span className="accent-serif">before downloading.</span>
          </h2>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col gap-3 reveal">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group card px-6 py-5 md:px-7 md:py-6 cursor-pointer"
              data-faq-question={f.q}
            >
              <summary className="flex items-center justify-between gap-4 list-none cursor-pointer select-none">
                <span className="font-heading text-lg md:text-xl text-text-primary pr-4">
                  {f.q}
                </span>
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45"
                  style={{
                    background: 'rgba(255, 122, 80, 0.1)',
                    color: 'var(--peek-orange-dark)',
                  }}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <path
                      d="M7 2v10M2 7h10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-text-secondary leading-relaxed text-pretty">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
