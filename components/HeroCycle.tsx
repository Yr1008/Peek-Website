'use client'

import { useEffect, useState } from 'react'

const words: { tone: string; text: string }[] = [
  { tone: 'why', text: 'why?' },
  { tone: 'treat', text: 'a treat?' },
  { tone: 'social', text: 'for friends?' },
  { tone: 'routine', text: 'routine?' },
  { tone: 'stress', text: 'just easier?' },
]

export default function HeroCycle() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % words.length)
    }, 2200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <span className="cycle" id="cycle" aria-live="polite">
      {words.map((w, i) => (
        <span
          key={w.tone}
          className={`cycle__word${i === active ? ' is-active' : ''}`}
          data-tone={w.tone}
        >
          {w.text}
        </span>
      ))}
    </span>
  )
}
