'use client'

import { useEffect, useState } from 'react'

const opts = [
  { tone: 'routine', label: 'Ritual', name: 'part of my routine' },
  { tone: 'treat', label: 'Self reward', name: 'treating myself' },
  { tone: 'social', label: 'Social', name: 'with someone' },
  { tone: 'stress', label: 'Convenience', name: 'easiest option' },
] as const

export default function HowTagger() {
  const [active, setActive] = useState<string | null>(null)
  const [ack, setAck] = useState(false)

  useEffect(() => {
    if (!active) return
    setAck(true)
    const id = window.setTimeout(() => setAck(false), 1800)
    return () => window.clearTimeout(id)
  }, [active])

  return (
    <div className="tagger r" id="tagger">
      <div className="tagger__brow">live demo · click an answer ↓</div>
      <div className="tagger__txn">
        <div className="tagger__txn-l">
          <div className="tagger__merch">B</div>
          <div>
            <div className="tagger__name">Blank Street Coffee</div>
            <div className="tagger__when">today · 8:42am</div>
          </div>
        </div>
        <div className="tagger__amt">$5.75</div>
      </div>
      <div className="tagger__q">
        What made you <em>buy</em> this?
      </div>
      <div className="tagger__opts">
        {opts.map((o) => (
          <button
            key={o.tone}
            className={`tag-opt${active === o.tone ? ' is-on' : ''}`}
            data-tone={o.tone}
            onClick={() => setActive(o.tone)}
          >
            <span className="tag-opt__lbl">{o.label}</span>
            <span className="tag-opt__name">{o.name}</span>
          </button>
        ))}
      </div>
      <div className={`tagger__ack${ack ? ' is-on' : ''}`}>
        tagged. ✦ on to the next.
      </div>
    </div>
  )
}
