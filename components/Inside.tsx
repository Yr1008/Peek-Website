type Step = {
  num: string
  canvas: 'sage' | 'sky' | 'lavender'
  rev?: boolean
  rotL?: boolean
  stickerSrc: string
  stickerWebp: string
  stamp: string
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
    stamp: '5 min/day',
    h: <>peek surfaces what <em>slipped through.</em></>,
    p: 'the impulse buy at temu, the doordash creeping up, the subscription you forgot about. peek pulls the moments worth noticing — not all of them, just the ones that matter.',
    phoneSrc: '/images/uploads/screen-blindbox.png',
    phoneWebp: '/images/optimized/screen-blindbox.webp',
    phoneAlt: 'peek surfacing transactions to tag',
  },
  {
    num: '02',
    canvas: 'sky',
    rev: true,
    rotL: true,
    stickerSrc: '/images/uploads/stickers/glasses.png',
    stickerWebp: '/images/optimized/st-glasses.webp',
    stamp: "4 taps. that's it.",
    h: <>it asks the questions <em>only you can answer.</em></>,
    p: 'was this planned or impulse? did it feel worth it? do you want more of this or less? four taps, three seconds. peek learns. you stay in charge.',
    phoneSrc: '/images/uploads/screen-checkin.png',
    phoneWebp: '/images/optimized/screen-checkin.webp',
    phoneAlt: 'peek asking a check-in question',
  },
  {
    num: '03',
    canvas: 'lavender',
    rotL: false,
    stickerSrc: '/images/uploads/stickers/tea.png',
    stickerWebp: '/images/optimized/st-tea.webp',
    stamp: 'sundays in plain english',
    h: <>your spending becomes a story <em>you recognize.</em></>,
    p: "one paragraph. plain english. no charts. no category breakdowns. just the pattern, named — so you know where your money's living its values, and where it's drifted.",
    phoneSrc: '/images/uploads/screen-patterns.png',
    phoneWebp: '/images/optimized/screen-patterns.webp',
    phoneAlt: 'your spending story in plain english',
  },
]

export default function Inside() {
  return (
    <section className="inside sec--cream" id="how">
      <div className="wrap">
        <div className="inside__head reveal">
          <span className="eyebrow">
            <span className="dot" aria-hidden="true" />
            five minutes a day. <em>that's it.</em>
          </span>
          <h2 className="h-section inside__h">
            peek closes the gap, <em>one tap at a time.</em>
          </h2>
          <p className="lead inside__lead">
            no spreadsheets. no category dropdown. no monthly budget you'll quietly abandon.
          </p>
        </div>

        {STEPS.map((s) => (
          <article
            key={s.num}
            className={`inside__row inside__row--${s.canvas}${s.rev ? ' inside__row--rev' : ''} reveal`}
          >
            <div className="inside__copy">
              <span className="inside__num">step {s.num}</span>
              <span className="inside__stamp">{s.stamp}</span>
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
