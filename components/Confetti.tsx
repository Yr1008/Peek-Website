'use client'

import { useEffect, useState } from 'react'

const colors = ['#FF7A50', '#EC6E9C', '#7DB880', '#F4D547', '#9DC8E8', '#C8E661']

type Bit = { id: number; left: number; cx: number; cy: number; cr: number; color: string; delay: number; size: number }

function makeBits(count: number, key: number): Bit[] {
  return Array.from({ length: count }, (_, i) => ({
    id: key * 1000 + i,
    left: 50 + (Math.random() - 0.5) * 24,
    cx: (Math.random() - 0.5) * 240,
    cy: -60 - Math.random() * 120,
    cr: (Math.random() - 0.5) * 320,
    color: colors[i % colors.length],
    delay: Math.random() * 0.18,
    size: 6 + Math.random() * 6,
  }))
}

/**
 * Lightweight confetti burst.
 * - `trigger` is a counter you increment to fire a new burst.
 * - Set `auto` = "view" to fire once when the component enters viewport.
 */
export default function Confetti({
  trigger,
  count = 14,
  auto,
}: {
  trigger?: number
  count?: number
  auto?: 'view'
}) {
  const [bursts, setBursts] = useState<Bit[][]>([])

  useEffect(() => {
    if (trigger === undefined) return
    setBursts((prev) => [...prev, makeBits(count, trigger)])
    const id = window.setTimeout(() => {
      setBursts((prev) => prev.slice(1))
    }, 1700)
    return () => window.clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger])

  useEffect(() => {
    if (auto !== 'view') return
    if (typeof IntersectionObserver === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const target = document.currentScript?.parentElement
    // fallback: observe a sentinel via ref pattern would be cleaner;
    // we just fire once on mount when the parent is roughly in view.
    const fire = () => {
      setBursts((prev) => [...prev, makeBits(count, Date.now())])
      window.setTimeout(() => setBursts((prev) => prev.slice(1)), 1700)
    }
    // Use rAF + getBoundingClientRect on the host element via a sentinel
    const sentinel = document.querySelector('[data-confetti-sentinel]')
    if (!sentinel) {
      fire()
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            fire()
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.3 }
    )
    io.observe(sentinel)
    return () => io.disconnect()
  }, [auto, count])

  return (
    <span className="confetti" aria-hidden="true">
      {bursts.flat().map((b) => (
        <span
          key={b.id}
          className="confetti__bit"
          style={
            {
              left: `${b.left}%`,
              top: '50%',
              width: b.size,
              height: b.size,
              background: b.color,
              animationDelay: `${b.delay}s`,
              ['--cx' as string]: `${b.cx}px`,
              ['--cy' as string]: `${b.cy}px`,
              ['--cr' as string]: `${b.cr}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </span>
  )
}
