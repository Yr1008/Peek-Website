import { STATS } from '@/lib/constants'

const stats = [
  { value: STATS.downloads, label: 'Downloads' },
  { value: STATS.tiktokViews, label: 'Monthly TikTok views' },
  { value: STATS.saved, label: 'Saved by users' },
]

const testimonials = [
  {
    name: 'Sarah, 28',
    quote:
      "I actually open this app. Like, voluntarily. That's never happened with a finance app.",
    tint: 'var(--peek-orange)',
  },
  {
    name: 'Marcus, 34',
    quote:
      'Found out I was spending $200 a month on subscriptions I forgot about. Peek paid for itself day one.',
    tint: 'var(--peek-purple-deep)',
  },
  {
    name: 'Priya, 26',
    quote:
      "Finally an app that doesn't make me feel like garbage about my spending. It just helps.",
    tint: 'var(--peek-sky-deep)',
  },
  {
    name: 'Jake, 31',
    quote:
      'The AI coach is lowkey addicting. I ask it random money questions at 2am, lol.',
    tint: 'var(--peek-pink)',
  },
]

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="relative py-20 md:py-28 px-5 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto reveal">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-heading text-[2rem] sm:text-5xl md:text-[3.5rem] leading-none"
                style={{
                  background:
                    'linear-gradient(135deg, #ff7a50 0%, #b388ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-text-secondary uppercase tracking-wider font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <figure className="mt-20 md:mt-28 max-w-3xl mx-auto text-center reveal">
          <blockquote className="font-heading text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] leading-[1.18] text-text-primary text-balance">
            <span className="accent-serif text-[1.4em] leading-none mr-1 align-[-0.12em]">&ldquo;</span>
            I actually open this app. Like,{' '}
            <span className="accent-serif">voluntarily.</span>
            <span className="accent-serif text-[1.4em] leading-none ml-1 align-[-0.12em]">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-4 text-sm text-text-muted uppercase tracking-wider font-semibold">
            Sarah, 28 &middot; App Store review
          </figcaption>
        </figure>

        {/* Heading */}
        <div className="mt-16 md:mt-20 max-w-3xl mx-auto text-center reveal">
          <span className="eyebrow">In their words</span>
          <h2 className="mt-5 text-[2rem] sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance">
            Don&rsquo;t take our word for it.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="mt-12 md:mt-16 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="card p-6 md:p-7 reveal relative"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill={t.tint}
                className="absolute top-5 right-5 opacity-20"
                aria-hidden="true"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>
              <blockquote className="font-heading text-[1.15rem] leading-snug text-text-primary text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-black/5 flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-heading text-sm"
                  style={{
                    background: `color-mix(in srgb, ${t.tint} 20%, white)`,
                    color: t.tint,
                  }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div className="text-sm font-semibold text-text-primary">
                  {t.name}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
