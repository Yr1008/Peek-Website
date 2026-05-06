const tags = [
  {
    cls: 'tg--reward',
    num: '01',
    chip: 'Self Reward',
    h: '"i deserve this."',
    p: (
      <>
        Friday-evening Sephora. Payday sambas. The treat after a hard week.{' '}
        <em>No shame. Just worth seeing.</em>
      </>
    ),
    rec: { when: 'Sep 12 · 6:14pm', amt: '$84', tag: 'self reward' },
  },
  {
    cls: 'tg--social',
    num: '02',
    chip: 'Social',
    h: '"with someone i love."',
    p: (
      <>
        Brunch. Birthday dinners. Splitting wine and refusing to math the bill.{' '}
        <em>Almost always worth it.</em>
      </>
    ),
    rec: { when: 'Sep 13 · 11:32am', amt: '$32', tag: 'social' },
  },
  {
    cls: 'tg--ritual',
    num: '03',
    chip: 'Ritual',
    h: '"part of my routine."',
    p: (
      <>
        Same coffee. Same gym. Same Sunday groceries.{' '}
        <em>The cost of being a person, basically.</em>
      </>
    ),
    rec: { when: 'Sep 14 · 8:42am', amt: '$5.75', tag: 'ritual' },
  },
  {
    cls: 'tg--conv',
    num: '04',
    chip: 'Convenience',
    h: '"easiest option."',
    p: (
      <>
        9pm DoorDash. Airport pretzel. The thing you grabbed because you
        couldn&rsquo;t deal. <em>Quietly the most expensive.</em>
      </>
    ),
    rec: { when: 'Sep 14 · 9:18pm', amt: '$22', tag: 'convenience' },
  },
] as const

export default function Tags() {
  return (
    <section className="tags" id="tags">
      <div className="wrap">
        <div className="tags__head r">
          <span className="eyebrow">
            <span className="dot" /> the four tags · the whole system
          </span>
          <h2
            className="h-section"
            style={{ marginTop: 20, color: 'var(--paper)' }}
          >
            Every dollar lands
            <br />
            in <em>one of four</em> places.
          </h2>
          <p
            className="lead"
            style={{
              marginTop: 18,
              maxWidth: 580,
              color: 'rgba(244,236,219,.75)',
            }}
          >
            Peek doesn&rsquo;t invent categories. It uses the four reasons
            humans actually spend. Pick one. Move on. The patterns reveal
            themselves.
          </p>
        </div>

        <div className="tags__grid r">
          {tags.map((t) => (
            <article key={t.num} className={`tg ${t.cls}`}>
              <div className="tg__num">{t.num}</div>
              <div className="tg__chip">{t.chip}</div>
              <h3 className="tg__h">{t.h}</h3>
              <p className="tg__p">{t.p}</p>
              <div className="tg__rec">
                <span className="tg__rec-when">{t.rec.when}</span>
                <span className="tg__rec-amt">{t.rec.amt}</span>
                <span className="tg__rec-tag">{t.rec.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
