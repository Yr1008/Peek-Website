'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Smooth spring animation for the glow following cursor
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const glowX = useSpring(cursorX, springConfig)
  const glowY = useSpring(cursorY, springConfig)
  
  useEffect(() => {
    // Check if mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window)
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const checkReducedMotion = () => {
      setReduceMotion(motionQuery.matches)
    }
    
    checkMobile()
    checkReducedMotion()
    window.addEventListener('resize', checkMobile)
    motionQuery.addEventListener('change', checkReducedMotion)
    
    // Only enable on desktop
    if (
      typeof window !== 'undefined'
      && window.innerWidth >= 1024
      && !('ontouchstart' in window)
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsMobile(false)
      
      const handleMouseMove = (e: MouseEvent) => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
      }
      
      const handleMouseEnter = () => setIsVisible(true)
      const handleMouseLeave = () => setIsVisible(false)
      
      window.addEventListener('mousemove', handleMouseMove)
      document.body.addEventListener('mouseenter', handleMouseEnter)
      document.body.addEventListener('mouseleave', handleMouseLeave)
      
      // Show after a brief delay
      setTimeout(() => setIsVisible(true), 500)
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        document.body.removeEventListener('mouseenter', handleMouseEnter)
        document.body.removeEventListener('mouseleave', handleMouseLeave)
        window.removeEventListener('resize', checkMobile)
        motionQuery.removeEventListener('change', checkReducedMotion)
      }
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      motionQuery.removeEventListener('change', checkReducedMotion)
    }
  }, [cursorX, cursorY])
  
  // Don't render on mobile
  if (isMobile || reduceMotion) return null
  
  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{
        x: glowX,
        y: glowY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Outer soft glow - largest, most diffuse */}
      <div 
        className="absolute rounded-full"
        style={{
          width: '400px',
          height: '400px',
          left: '-200px',
          top: '-200px',
          background: 'radial-gradient(circle, rgba(255,176,136,0.08) 0%, rgba(255,212,196,0.04) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      
      {/* Middle glow - warmer */}
      <div 
        className="absolute rounded-full"
        style={{
          width: '200px',
          height: '200px',
          left: '-100px',
          top: '-100px',
          background: 'radial-gradient(circle, rgba(255,176,136,0.12) 0%, rgba(255,240,232,0.06) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Inner glow - subtle warm core */}
      <div 
        className="absolute rounded-full"
        style={{
          width: '80px',
          height: '80px',
          left: '-40px',
          top: '-40px',
          background: 'radial-gradient(circle, rgba(255,176,136,0.15) 0%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </motion.div>
  )
}
