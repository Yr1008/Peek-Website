'use client'

import { useEffect } from 'react'

const Q = [
  {
    q: 'is my financial data safe?',
    a: (
      <>
        yes. peek connects through <em>plaid</em>, the same encrypted bank connector that powers
        venmo, robinhood, and coinbase. read-only access. we never see your bank password,
        and we cannot move money. your data is encrypted at rest and in transit.
      </>
    ),
  },
  {
    q: 'what does peek cost?',
    a: (
      <>
        <em>free on ios.</em> the whole core experience (insights, soft questions, funds, reflection coach)
        is included. we will be honest if that ever changes.
      </>
    ),
  },
  {
    q: 'how is this different from mint, monarch, or copilot?',
    a: (
      <>
        those apps categorize your transactions and show you charts. peek asks <em>why</em> you spent,
        and shows you the pattern in plain english. mint and copilot are about tracking. peek is
        about understanding.
      </>
    ),
  },
  {
    q: 'do i have to budget to use peek?',
    a: (
      <>
        nope. there are no rigid budgets, no zero-based math, no monthly plan to stick to. you can
        use peek as a soft journal for your money and never set a single rule. most people find that
        the patterns alone change how they spend.
      </>
    ),
  },
  {
    q: 'is peek on android?',
    a: (
      <>
        ios first. android is coming. if you want to be on the early-access list, the app store
        listing has the most current update.
      </>
    ),
  },
  {
    q: 'what if i just want to look around first?',
    a: (
      <>
        totally fine. the app has a guided tour mode, no bank connection required. poke around,
        see the soft questions, read a sample insight, and decide if it feels like you.
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
    <section className="sec sec--cream" id="faq">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            07 / before you tap
          </span>
          <h2 className="h-section sec__h">
            the questions you'd ask <em>before downloading.</em>
          </h2>
          <p className="lead sec__lead">
            no fluff. real answers to the things people actually ask before they install.
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
      </div>
    </section>
  )
}
