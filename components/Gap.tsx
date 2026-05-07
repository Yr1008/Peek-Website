'use client'

import { useEffect, useRef, useState } from 'react'

const TARGET = 192

export default function Gap() {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(TARGET)
      return
    }
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          const start = performance.now()
          const dur = 1100
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            setCount(Math.round(eased * TARGET))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.disconnect()
        }
      }
    }, { threshold: 0.4 })
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <section className="sec sec--lavender" id="gap">
      <div className="wrap">
        <div className="sec__head reveal">
          <span className="eyebrow-pill eyebrow-pill--cream">
            Most people guess wrong
          </span>
          <h2 className="h-section sec__h">
            you're off by <em>~$192</em> a month.<br/>
            peek closes <em>that gap.</em>
          </h2>
          <p className="lead sec__lead">
            the average peek user, week one, finds out they were spending $192 more than they thought on coffee and takeout. not because they're reckless. because no one ever showed them.
          </p>
        </div>

        <div className="gap__wrap">
          <div className="gap__stat reveal">
            <span className="gap__stat-badge" ref={ref}>{count}</span>
            <p className="gap__stat-quote">
              &ldquo;i thought i was spending $80 on coffee. <em>it was $312.</em> not because i'm reckless. because no one ever showed me.&rdquo;
              <span className="gap__stat-cite">Maya · Brooklyn</span>
            </p>
          </div>

          <div className="gap__photo reveal">
            <div className="gap__photo-img">
              <picture>
                <source srcSet="/images/optimized/p-portrait-blonde.webp" type="image/webp" />
                <img src="/images/uploads/people/portrait-blonde.png" alt="Maya, a peek user from Brooklyn" loading="lazy" />
              </picture>
            </div>
            <span className="gap__photo-cap">maya · brooklyn</span>
          </div>
        </div>
      </div>
    </section>
  )
}
