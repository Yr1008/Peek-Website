'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, ReactNode } from 'react'

// Parallax layer - moves at different speed than scroll
interface ParallaxLayerProps {
  children: ReactNode
  speed?: number // 0.5 = half speed, 1.5 = 1.5x speed
  className?: string
}

export function ParallaxLayer({ 
  children, 
  speed = 0.5,
  className = '' 
}: ParallaxLayerProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating element with subtle up/down motion
interface FloatingElementProps {
  children: ReactNode
  intensity?: number // How much it floats (in pixels)
  duration?: number // Animation duration
  delay?: number
  className?: string
}

export function FloatingElement({ 
  children, 
  intensity = 20,
  duration = 6,
  delay = 0,
  className = '' 
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-intensity / 2, intensity / 2, -intensity / 2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax image with depth effect
interface ParallaxImageProps {
  children: ReactNode
  depth?: number // Higher = more parallax effect
  className?: string
}

export function ParallaxImage({ 
  children, 
  depth = 50,
  className = '' 
}: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-depth, depth])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY, scale: smoothScale }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scroll-triggered rotation
interface ParallaxRotateProps {
  children: ReactNode
  rotation?: number // Max rotation in degrees
  className?: string
}

export function ParallaxRotate({ 
  children, 
  rotation = 10,
  className = '' 
}: ParallaxRotateProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [-rotation, rotation])
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      ref={ref}
      style={{ rotate: smoothRotate }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Breathing/pulsing element - subtle scale animation
interface BreathingElementProps {
  children: ReactNode
  intensity?: number // Scale factor (1.05 = 5% larger at peak)
  duration?: number
  className?: string
}

export function BreathingElement({ 
  children, 
  intensity = 1.03,
  duration = 4,
  className = '' 
}: BreathingElementProps) {
  return (
    <motion.div
      animate={{
        scale: [1, intensity, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scroll progress indicator
interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className = '' }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-1 bg-primary-orange origin-left z-50 ${className}`}
    />
  )
}
