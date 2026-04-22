import React from 'react'

type Feature = {
  eyebrow: string
  title: React.ReactNode
  body: string
  bullets: string[]
  image: string
  fallback: string
  alt: string
  accent: string
  reverse?: boolean
}

const features: Feature[] = [
  {
    eyebrow: 'Insight reveals',
    title: (
      <>
        The weekly moment that
        <br />
        <span className="accent-serif">changes your week.</span>
      </>
    ),
    body: 'Every Sunday, Peek surfaces one quiet observation about your money. Not a scoldy notification. A pattern you can actually do something with.',
    bullets: [
      'Found: 3 subscriptions you forgot about',
      'Noticed: Tuesday take-out is your comfort spend',
      'Kept: the $6 coffee you call a daily joy',
    ],
    image: '/images/optimized/app-screenshot-insights.webp',
    fallback: '/images/app-screenshot-insights.png',
    alt: 'Peek insights screen showing weekly spending patterns',
    accent: 'var(--peek-orange)',
  },
  {
    eyebrow: 'Funds, not caps',
    title: (
      <>
        Soft guardrails for the
        <br />
        <span className="accent-serif">things you actually care about.</span>
      </>
    ),
    body: 'Most apps cap you. Peek gives you funds. A pocket for the ski trip, a pocket for dining out, a pocket for whatever lights you up. No guilt notifications when you dip in.',
    bullets: [
      'Set funds in a sentence, not a form',
      'Move money between funds in one tap',
      'Zero shame when you flex a limit',
    ],
    image: '/images/optimized/app-screenshot-goals.webp',
    fallback: '/images/app-screenshot-goals.png',
    alt: 'Peek funds screen showing flexible spending pockets',
    accent: 'var(--peek-purple-deep)',
    reverse: true,
  },
  {
    eyebrow: 'AI reflection coach',
    title: (
      <>
        Money questions answered
        <br />
        <span className="accent-serif">like a thoughtful friend would.</span>
      </>
    ),
    body: 'Ask anything. Should I keep the gym membership. Can I afford Lisbon in November. Why do I keep buying books I never read. Peek answers with your data, not a script.',
    bullets: [
      'Personal context from your real spending',
      'Warm tone, never snarky, never shamey',
      'Available 2am when the what-ifs hit',
    ],
    image: '/images/optimized/app-screenshot-chat.webp',
    fallback: '/images/app-screenshot-chat.png',
    alt: 'Peek AI coach answering a money question',
    accent: 'var(--peek-sky-deep)',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-20 md:py-28 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="eyebrow">Inside Peek</span>
          <h2 className="mt-5 text-[2rem] sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance">
            The little moments that change
            <br className="hidden sm:block" />{' '}
            <span className="accent-serif">how money feels.</span>
          </h2>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col gap-20 md:gap-28">
          {features.map((f, i) => (
            <article
              key={f.eyebrow}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                f.reverse ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="reveal">
                <span
                  className="chip"
                  style={{
                    background: `color-mix(in srgb, ${f.accent} 12%, white)`,
                    color: f.accent,
                  }}
                >
                  {f.eyebrow}
                </span>
                <h3 className="mt-4 font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] leading-[1.12] text-balance">
                  {f.title}
                </h3>
                <p className="mt-4 text-lg text-text-secondary text-pretty">
                  {f.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-[15px] text-text-primary">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <circle cx="10" cy="10" r="10" fill={f.accent} opacity="0.14" />
                        <path
                          d="M6 10l2.5 2.5L14 7.5"
                          stroke={f.accent}
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal relative flex justify-center">
                <div
                  className="absolute inset-0 orb"
                  style={{
                    background: `radial-gradient(circle, ${f.accent} 0%, transparent 70%)`,
                    opacity: 0.12,
                    filter: 'blur(60px)',
                  }}
                  aria-hidden="true"
                />
                <div
                  className="relative rounded-[32px] p-[8px] shadow-xl"
                  style={{
                    background:
                      'linear-gradient(145deg, #2a2a2a, #0f0f0f)',
                    boxShadow:
                      '0 30px 60px -20px rgba(45, 35, 25, 0.18)',
                    maxWidth: 300,
                  }}
                >
                  <div className="rounded-[26px] overflow-hidden bg-white">
                    <picture>
                      <source srcSet={f.image} type="image/webp" />
                      <img
                        src={f.fallback}
                        alt={f.alt}
                        className="w-full h-auto block"
                        width={600}
                        height={1300}
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
