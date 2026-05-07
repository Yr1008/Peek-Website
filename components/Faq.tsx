'use client'

import { useEffect } from 'react'

const Q = [
  {
    q: 'Is my financial data safe?',
    a: (
      <>
        Yes. Peek connects through <em>Plaid</em>, the same encrypted bank connector that powers
        Venmo, Robinhood, and Coinbase. Read-only access. We never see your bank password,
        and we cannot move money. Your data is encrypted at rest and in transit.
      </>
    ),
  },
  {
    q: 'What does Peek cost?',
    a: (
      <>
        <em>Free on iOS.</em> The whole core experience (insights, soft questions, funds, reflection coach)
        is included. We will be honest if that ever changes.
      </>
    ),
  },
  {
    q: 'How is this different from Mint, Monarch, or Copilot?',
    a: (
      <>
        Those apps categorize your transactions and show you charts. Peek asks <em>why</em> you spent,
        and shows you the pattern in plain English. Mint and Copilot are about tracking. Peek is
        about understanding.
      </>
    ),
  },
  {
    q: 'Do I have to budget to use Peek?',
    a: (
      <>
        Nope. There are no rigid budgets, no zero-based math, no monthly plan to stick to. You can
        use Peek as a soft journal for your money and never set a single rule. Most people find that
        the patterns alone change how they spend.
      </>
    ),
  },
  {
    q: 'Is Peek on Android?',
    a: (
      <>
        iOS first. Android is coming. If you want to be on the early-access list, the App Store
        listing has the most current update.
      </>
    ),
  },
  {
    q: 'What if I just want to look around first?',
    a: (
      <>
        Totally fine. The app has a guided tour mode, no bank connection required. You can poke
        around, see the soft questions, read a sample insight, and decide if it feels like you.
      </>
    ),
  },
]

export default function Faq() {
  useEffect(() => {
    const onToggle = (e: Event) => {
      const t = e.target as HTMLDetailsElement
      if (t.tagName !== 'DETAILS' || !t.open) return
      const summary = t.querySelector('summary')?.textContent || ''
      if (typeof window !== 'undefined' && (window as any).plausible) {
        ;(window as any).plausible('faq_open', { props: { question: summary.trim() } })
      }
    }
    document.querySelectorAll('details.faqi').forEach((d) =>
      d.addEventListener('toggle', onToggle)
    )
    return () => {
      document.querySelectorAll('details.faqi').forEach((d) =>
        d.removeEventListener('toggle', onToggle)
      )
    }
  }, [])

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="chapter">chapter nine. the questions.</span>
          <h2 className="h-section sec__h">
            The questions you'd ask <em>before downloading.</em>
          </h2>
          <p className="lead sec__lead">
            No fluff. Real answers to the things people actually ask before they install.
          </p>
        </div>

        <div className="faq__list">
          {Q.map((item) => (
            <details key={item.q} className="faqi">
              <summary>{item.q}</summary>
              <div className="faqi__body">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="forward">
          <span>↓ exhale</span>
        </div>
      </div>
    </section>
  )
}
