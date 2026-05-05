const faqs = [
  {
    q: 'is connecting my bank actually safe?',
    a: 'yes. peek uses plaid, the same encrypted connector your bank, venmo, and robinhood already use. read-only access. we never see your password.',
    em: 'plaid',
  },
  {
    q: 'is peek free?',
    a: 'the core app is free on ios. the feed, the tagging, the spending story. all free.',
    em: 'free on ios.',
  },
  {
    q: 'how long does it take?',
    a: '30 seconds to connect a bank. 5 minutes a day after that.',
    em: '30 seconds',
  },
  {
    q: 'will it nag or shame me?',
    a: 'no. peek’s whole thing is noticing without scolding. no good or bad. just patterns, plainly stated.',
    em: 'noticing without scolding.',
  },
  {
    q: 'android?',
    a: 'coming. ios first.',
    em: '',
  },
  {
    q: 'how is this different from mint, monarch, or copilot?',
    a: 'those apps categorize what you spent. peek asks why you spent it. they show you a pie chart. peek shows you a pattern.',
    em: 'why',
  },
]

function highlight(text: string, em: string) {
  if (!em) return text
  const idx = text.toLowerCase().indexOf(em.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <em
        style={{
          fontStyle: 'italic',
          color: 'var(--ink)',
          fontWeight: 500,
        }}
      >
        {text.slice(idx, idx + em.length)}
      </em>
      {text.slice(idx + em.length)}
    </>
  )
}

export default function Faq() {
  return (
    <section
      id="faq"
      style={{
        background: 'var(--cream-2)',
        padding: 'clamp(80px, 14vh, 140px) var(--pad)',
      }}
    >
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <span className="eyebrow">questions, plain answers</span>
        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(38px, 5vw, 64px)',
            lineHeight: 1,
            letterSpacing: '-0.025em',
            fontWeight: 400,
            margin: '14px 0 36px',
          }}
        >
          things{' '}
          <em
            style={{
              fontStyle: 'italic',
              color: 'var(--peach)',
              fontWeight: 500,
            }}
          >
            people ask.
          </em>
        </h2>

        {faqs.map((f) => (
          <details
            key={f.q}
            className="faqi"
            data-faq-question={f.q}
            style={{
              borderBottom: '1px solid rgba(42,19,82,0.12)',
              padding: '6px 0',
            }}
          >
            <summary
              style={{
                listStyle: 'none',
                cursor: 'pointer',
                padding: '22px 36px 22px 0',
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(20px, 2.4vw, 26px)',
                fontWeight: 500,
                letterSpacing: '-0.015em',
                position: 'relative',
                transition: 'color 220ms',
              }}
            >
              {f.q}
            </summary>
            <p
              style={{
                margin: '0 0 22px',
                fontSize: 16,
                lineHeight: 1.55,
                color: 'var(--ink-2)',
                maxWidth: 680,
              }}
            >
              {highlight(f.a, f.em)}
            </p>
          </details>
        ))}
      </div>

      <style>{`
        .faqi summary::-webkit-details-marker { display: none; }
        .faqi summary::after {
          content: "+";
          position: absolute;
          right: 4px; top: 50%;
          transform: translateY(-50%);
          font-size: 28px; font-weight: 300;
          color: var(--ink-soft);
          transition: transform 240ms cubic-bezier(0.2,0.8,0.2,1), color 240ms;
        }
        .faqi[open] summary::after { transform: translateY(-50%) rotate(45deg); color: var(--peach); }
        .faqi summary:hover { color: var(--peach); }
      `}</style>
    </section>
  )
}
