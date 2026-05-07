'use client'

import { useEffect, useRef, useState } from 'react'

export default function CountUp({
  to,
  duration = 1200,
  format = (n) => n.toLocaleString('en-US'),
  suffix = '',
  prefix = '',
}: {
  to: number
  duration?: number
  format?: (n: number) => string
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [n, setN] = useState(0)
  const fired = useRef(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setN(to)
      return
    }
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setN(to)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !fired.current) {
            fired.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setN(Math.round(to * eased))
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            io.disconnect()
          }
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className="count-up">
      {prefix}
      {format(n)}
      {suffix}
    </span>
  )
}
