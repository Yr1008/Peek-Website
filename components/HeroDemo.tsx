'use client'

import { useState } from 'react'

type Tag = 'reward' | 'ritual' | 'social' | 'convenience'

const tagData: Record<Tag, {
  cat: string
  storyTag: string
  storyText: string
  feel: number
  feelLabel: string
}> = {
  reward: {
    cat: 'a celebration with your sister',
    storyTag: 'self reward',
    storyText: '"treating myself" · felt worth it',
    feel: 84,
    feelLabel: '84% worth it',
  },
  ritual: {
    cat: 'sunday dinner, like always',
    storyTag: 'ritual',
    storyText: '"this is just our thing" · steady, on track',
    feel: 72,
    feelLabel: '72% on track',
  },
  social: {
    cat: 'birthday with the group',
    storyTag: 'social',
    storyText: '"i wanted to be there" · a little stretchy',
    feel: 61,
    feelLabel: '61% on track',
  },
  convenience: {
    cat: 'work ran late, no plan',
    storyTag: 'convenience',
    storyText: '"i was tired" · spending pattern noticed',
    feel: 38,
    feelLabel: '38% worth it',
  },
}

const tagColors: Record<Tag, string> = {
  reward: 'rgba(255, 122, 60, 0.18)',
  ritual: 'rgba(143, 180, 217, 0.22)',
  social: 'rgba(216, 90, 122, 0.18)',
  convenience: 'rgba(152, 174, 107, 0.22)',
}

const tagTextColors: Record<Tag, string> = {
  reward: '#C13B0F',
  ritual: '#3D6E9E',
  social: '#A82E50',
  convenience: '#586E25',
}

export default function HeroDemo() {
  const [active, setActive] = useState<Tag>('reward')
  const d = tagData[active]

  return (
    <div className="relative grid gap-5 md:gap-7 lg:grid-cols-[1fr_auto_1fr] items-center mt-12 md:mt-16">
      {/* Bank card */}
      <article
        aria-label="how your bank app shows it"
        className="rounded-[22px] p-6 md:p-7"
        style={{
          background: '#E5DFCE',
          border: '1px solid rgba(42,19,82,0.08)',
          color: 'var(--ink-soft)',
          fontFamily: 'var(--sans)',
          minHeight: 220,
        }}
      >
        <header className="flex items-center justify-between mb-5">
          <span
            className="text-[11px] font-semibold uppercase tracking-wider"
            style={{ letterSpacing: '0.12em', color: 'var(--ink-soft)' }}
          >
            your bank app
          </span>
          <span className="text-[12px]" style={{ color: 'var(--ink-soft)' }}>
            apr 6 · mon
          </span>
        </header>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
              style={{ background: '#D7CFB7', color: 'var(--ink-soft)' }}
            >
              C
            </span>
            <div>
              <h3
                className="text-[17px] font-semibold leading-tight"
                style={{ color: 'var(--ink-2)' }}
              >
                Chubby Cattle BBQ
              </h3>
              <span className="text-[12px]" style={{ color: 'var(--ink-soft)' }}>
                Food &amp; Dining
              </span>
            </div>
          </div>
          <div
            className="text-[24px] font-semibold tabular-nums"
            style={{ color: 'var(--ink-2)' }}
          >
            $345.26
          </div>
        </div>
        <footer className="mt-6 pt-4 border-t" style={{ borderColor: 'rgba(42,19,82,0.08)' }}>
          <span className="text-[11px]" style={{ color: 'var(--ink-soft)' }}>
            debit · ****4271
          </span>
        </footer>
      </article>

      {/* vs */}
      <div
        aria-hidden="true"
        className="hidden lg:flex flex-col items-center self-stretch justify-center gap-3"
      >
        <span className="block w-px flex-1" style={{ background: 'rgba(42,19,82,0.18)' }} />
        <span
          className="font-italic"
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 28,
            color: 'var(--peach)',
          }}
        >
          vs
        </span>
        <span className="block w-px flex-1" style={{ background: 'rgba(42,19,82,0.18)' }} />
      </div>
      <div className="lg:hidden flex items-center justify-center gap-3 my-1">
        <span className="block h-px flex-1" style={{ background: 'rgba(42,19,82,0.18)' }} />
        <span
          style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 22,
            color: 'var(--peach)',
          }}
        >
          vs
        </span>
        <span className="block h-px flex-1" style={{ background: 'rgba(42,19,82,0.18)' }} />
      </div>

      {/* Peek card */}
      <article
        aria-label="how peek shows it"
        className="rounded-[22px] p-6 md:p-7 transition-shadow"
        style={{
          background: 'var(--paper)',
          border: '1.5px solid rgba(255, 122, 60, 0.32)',
          boxShadow:
            '0 18px 38px -16px rgba(255, 122, 60, 0.32), 0 4px 14px rgba(42,19,82,0.08)',
          minHeight: 280,
        }}
      >
        <header className="flex items-center justify-between mb-5">
          <span
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider"
            style={{ letterSpacing: '0.12em', color: 'var(--peach)' }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--peach)' }}
            />
            peek
          </span>
          <span className="text-[12px]" style={{ color: 'var(--ink-soft)' }}>
            apr 6 · mon, 8pm
          </span>
        </header>

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
              style={{
                background: 'var(--peach)',
                color: 'var(--cream)',
              }}
            >
              C
            </span>
            <div>
              <h3
                className="text-[17px] leading-tight font-medium"
                style={{
                  color: 'var(--ink)',
                  fontFamily: 'var(--serif)',
                  letterSpacing: '-0.01em',
                }}
              >
                chubby cattle bbq
              </h3>
              <span
                key={`cat-${active}`}
                className="text-[13px] anim-reveal-up inline-block"
                style={{
                  color: 'var(--ink-soft)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--serif)',
                }}
              >
                {d.cat}
              </span>
            </div>
          </div>
          <div
            className="text-[24px] font-medium tabular-nums"
            style={{
              color: 'var(--ink)',
              fontFamily: 'var(--serif)',
              letterSpacing: '-0.02em',
            }}
          >
            $345.26
          </div>
        </div>

        {/* story strip */}
        <div
          key={`story-${active}`}
          className="rounded-xl p-3 mb-5 flex flex-wrap items-center gap-2 anim-reveal-up"
          style={{ background: tagColors[active] }}
        >
          <span
            className="inline-flex items-center text-[12px] font-semibold rounded-full px-2.5 py-1"
            style={{
              background: 'var(--cream)',
              color: tagTextColors[active],
              letterSpacing: '0.02em',
            }}
          >
            {d.storyTag}
          </span>
          <span
            className="text-[14px]"
            style={{
              fontFamily: 'var(--serif)',
              color: 'var(--ink-2)',
            }}
            dangerouslySetInnerHTML={{
              __html: d.storyText.replace(/worth it|on track|noticed/, (m) => `<em style="color:var(--peach);font-style:italic">${m}</em>`),
            }}
          />
        </div>

        {/* feel meter */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-wider font-semibold" style={{ color: 'var(--ink-soft)' }}>
              how did this feel?
            </span>
            <span
              key={`val-${active}`}
              className="text-[12px] font-semibold anim-reveal-up"
              style={{ color: 'var(--peach)' }}
            >
              {d.feelLabel}
            </span>
          </div>
          <div
            className="w-full h-2 rounded-full overflow-hidden"
            style={{ background: 'rgba(42,19,82,0.08)' }}
          >
            <span
              className="block h-full transition-all duration-500"
              style={{
                width: `${d.feel}%`,
                background: 'linear-gradient(90deg, var(--peach), var(--peach-2))',
              }}
            />
          </div>
        </div>
      </article>

      {/* tag chips */}
      <div className="lg:col-span-3 mt-6 md:mt-8 text-center">
        <span
          className="block text-[12px] font-semibold uppercase tracking-wider mb-3"
          style={{ color: 'var(--ink-3)', letterSpacing: '0.16em' }}
        >
          what made this move?
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
          {(Object.keys(tagData) as Tag[]).map((t) => {
            const isOn = t === active
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                aria-pressed={isOn}
                className="text-[13px] md:text-[14px] font-semibold transition-all"
                style={{
                  padding: '10px 18px',
                  borderRadius: 999,
                  background: isOn ? 'var(--ink)' : 'var(--paper)',
                  color: isOn ? 'var(--cream)' : 'var(--ink-2)',
                  border: `1.5px solid ${isOn ? 'var(--ink)' : 'rgba(42,19,82,0.14)'}`,
                  transform: isOn ? 'translateY(-1px)' : 'none',
                  boxShadow: isOn
                    ? '0 12px 28px -10px rgba(42,19,82,0.4)'
                    : 'none',
                }}
              >
                {tagData[t].storyTag}
              </button>
            )
          })}
        </div>
        <p
          className="mt-4 text-[16px]"
          style={{
            fontFamily: 'var(--hand)',
            color: 'var(--ink-soft)',
            fontWeight: 500,
          }}
        >
          ↑ tap one. watch peek&rsquo;s card change.
        </p>
      </div>
    </div>
  )
}
