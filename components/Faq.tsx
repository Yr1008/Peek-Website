const faqs = [
  {
    q: 'Is connecting my bank actually safe?',
    a: (
      <>
        Yes. Peek uses <em>Plaid</em> — the same encrypted connector your bank,
        Venmo, and Robinhood use. Peek never sees your bank login, never
        stores your credentials, and we have <em>read-only</em> access to
        transactions. We can&rsquo;t move money. Even if we wanted to.
      </>
    ),
  },
  {
    q: 'Is Peek free?',
    a: (
      <>
        The core app is <em>free on iOS.</em> Tagging, caps, the spending
        story — all free. We may add a paid tier later for power features; the
        basics will stay free.
      </>
    ),
  },
  {
    q: 'How long does it actually take?',
    a: (
      <>
        About <em>30 seconds</em> to connect a bank. Tagging a charge takes
        about <em>3 seconds</em>. Most users tag once a day on the toilet. We
        respect your time more than your bank does.
      </>
    ),
  },
  {
    q: 'Will it nag me?',
    a: (
      <>
        No. Peek&rsquo;s whole thing is <em>noticing without scolding.</em>{' '}
        One nudge if you&rsquo;re heading over a cap. One paragraph on Sunday.
        That&rsquo;s it. You can mute everything.
      </>
    ),
  },
  {
    q: 'What about Android?',
    a: (
      <>
        Coming. <em>iOS first</em> — we wanted to build the app properly for
        one platform before splitting attention. Drop your email at the App
        Store link and we&rsquo;ll tell you when Android lands.
      </>
    ),
  },
  {
    q: 'Do you sell my data?',
    a: (
      <>
        No. Peek&rsquo;s business model is the app, not your data. We
        don&rsquo;t sell, share, or monetize your transactions. Your spending
        story is between you and you.
      </>
    ),
  },
]

export default function Faq() {
  return (
    <section className="faq-sec" id="faq">
      <div className="wrap" style={{ maxWidth: 880 }}>
        <div className="faq-sec__head r">
          <span className="eyebrow">
            <span className="dot" /> the small print, in plain english
          </span>
          <h2 className="h-section" style={{ marginTop: 20 }}>
            Things <em>people ask.</em>
          </h2>
        </div>

        <div className="faq r">
          {faqs.map((f) => (
            <details key={f.q} data-faq-question={f.q}>
              <summary>{f.q}</summary>
              <div className="faq__body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
