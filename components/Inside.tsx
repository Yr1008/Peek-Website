type Step = {
  num: string
  canvas: 'sage' | 'sky' | 'lavender'
  rev?: boolean
  rotL?: boolean
  stickerSrc: string
  stickerWebp: string
  stamp: string
  eyebrow: string
  h: React.ReactNode
  p: string
  phoneSrc: string
  phoneWebp: string
  phoneAlt: string
}

const STEPS: Step[] = [
  {
    num: '01',
    canvas: 'sage',
    rotL: false,
    stickerSrc: '/images/uploads/stickers/croissant.png',
    stickerWebp: '/images/optimized/st-croissant.webp',
    stamp: 'sundays at 9am',
    eyebrow: 'insight reveals',
    h: <>the weekly moment <em>that changes your week.</em></>,
    p: 'every sunday peek surfaces one tiny thing you did not see coming. the $40 a month on apple stuff. the doordash creep. the week you actually saved without trying. not a chart. a small noticing.',
    phoneSrc: '/images/uploads/screen-blindbox.png',
    phoneWebp: '/images/optimized/screen-blindbox.webp',
    phoneAlt: 'peek revealing a weekly insight',
  },
  {
    num: '02',
    canvas: 'sky',
    rev: true,
    rotL: true,
    stickerSrc: '/images/uploads/stickers/glasses.png',
    stickerWebp: '/images/optimized/st-glasses.webp',
    stamp: 'soft, not strict',
    eyebrow: 'funds, not caps',
    h: <>guardrails for <em>what you care about.</em></>,
    p: "caps feel like punishment. funds feel like permission. peek lets you set a fund for what matters (the bookshop habit, the pottery class, the monthly trip home) and tells you when you're coasting, never when you're bad.",
    phoneSrc: '/images/uploads/screen-caps.png',
    phoneWebp: '/images/optimized/screen-caps.webp',
    phoneAlt: 'peek showing a soft fund instead of a strict cap',
  },
  {
    num: '03',
    canvas: 'lavender',
    rotL: false,
    stickerSrc: '/images/uploads/stickers/tea.png',
    stickerWebp: '/images/optimized/st-tea.webp',
    stamp: 'asks like a friend would',
    eyebrow: 'ai reflection coach',
    h: <>money questions answered <em>like a friend would.</em></>,
    p: '"can i afford this?" "why do i feel weird about that purchase?" "am i doing better this month?" peek answers in plain english, in your context, without ever making you feel stupid for asking.',
    phoneSrc: '/images/uploads/screen-chat.png',
    phoneWebp: '/images/optimized/screen-chat.webp',
    phoneAlt: 'peek ai coach answering a question',
  },
]

export default function Inside() {
  return (
    <section className="inside sec--cream-2" id="features">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            inside peek
          </span>
          <h2 className="h-section sec__h">
            the little moments <em>that change how money feels.</em>
          </h2>
          <p className="lead sec__lead">
            not a feature list. three real moments inside the app, each tuned to one anxiety it lifts.
          </p>
        </div>

        {STEPS.map((s) => (
          <article
            key={s.num}
            className={`inside__row inside__row--${s.canvas}${s.rev ? ' inside__row--rev' : ''} reveal`}
          >
            <div className="inside__copy">
              <span className="inside__num">{s.eyebrow}</span>
              <span className="stamp">{s.stamp}</span>
              <h3 className="inside__h-step">{s.h}</h3>
              <p className="inside__p">{s.p}</p>
            </div>
            <div className="inside__shot">
              <div className={`inside__phone ${s.rotL ? 'inside__phone--rotL' : 'inside__phone--rotR'}`}>
                <picture>
                  <source srcSet={s.phoneWebp} type="image/webp" />
                  <img src={s.phoneSrc} alt={s.phoneAlt} loading="lazy" decoding="async" />
                </picture>
              </div>
              <div className="inside__sticker inside__sticker--1" aria-hidden="true">
                <picture>
                  <source srcSet={s.stickerWebp} type="image/webp" />
                  <img src={s.stickerSrc} alt="" />
                </picture>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
