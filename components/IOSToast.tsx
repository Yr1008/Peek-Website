'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'peek_iostoast_shown_v1'

export default function IOSToast() {
  const [show, setShow] = useState(false)
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const sentinel = document.getElementById('hero-sentinel') || document.body
    const onScroll = () => {
      if (window.scrollY > Math.min(window.innerHeight * 0.55, 540)) {
        triggerToast()
        window.removeEventListener('scroll', onScroll)
      }
    }
    function triggerToast() {
      sessionStorage.setItem(STORAGE_KEY, '1')
      setTimeout(() => {
        setShow(true)
        setTimeout(() => setAnimateIn(true), 30)
        setTimeout(() => {
          setAnimateIn(false)
          setTimeout(() => setShow(false), 500)
        }, 5500)
      }, 1500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <div
      className={`iostoast${animateIn ? ' is-in' : ''}`}
      role="status"
      aria-live="polite"
    >
      <div className="iostoast__icon" aria-hidden="true">
        <picture>
          <source srcSet="/images/optimized/peek-icon.webp" type="image/webp" />
          <img src="/images/peek-icon.png" alt="" />
        </picture>
      </div>
      <div className="iostoast__body">
        <span className="iostoast__app">PEEK</span>
        <strong>peek noticed</strong>
        <span>$5.75 ritual at blank street · felt worth it ✨</span>
      </div>
      <span className="iostoast__time">now</span>
    </div>
  )
}
