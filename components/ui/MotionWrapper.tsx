'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, ReactNode } from 'react'

// Apple-inspired easing - slow, deliberate, smooth
const appleEasing = [0.25, 0.1, 0.25, 1]

// Fade in and slide up - the most common scroll animation
interface FadeInUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = '',
  once = true 
}: FadeInUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration, 
        delay, 
        ease: appleEasing 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Fade in with subtle scale - good for cards and images
interface FadeInScaleProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function FadeInScale({ 
  children, 
  delay = 0, 
  duration = 0.8,
  className = '',
  once = true 
}: FadeInScaleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ 
        duration, 
        delay, 
        ease: appleEasing 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide in from left or right
interface SlideInProps {
  children: ReactNode
  direction?: 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function SlideIn({ 
  children, 
  direction = 'left',
  delay = 0, 
  duration = 0.9,
  className = '',
  once = true 
}: SlideInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const xOffset = direction === 'left' ? -60 : 60

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
      transition={{ 
        duration, 
        delay, 
        ease: appleEasing 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Container for staggered children animations
interface StaggerContainerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
  once?: boolean
}

export function StaggerContainer({ 
  children, 
  staggerDelay = 0.1,
  className = '',
  once = true 
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item - use inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: appleEasing
      }
    }
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}

// Text reveal animation - words appear one by one
interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className = '', delay = 0 }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const words = text.split(' ')

  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: appleEasing
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Blur in animation - content fades in from blur
interface BlurInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function BlurIn({ 
  children, 
  delay = 0, 
  duration = 1,
  className = '',
  once = true 
}: BlurInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={isInView 
        ? { opacity: 1, filter: 'blur(0px)' } 
        : { opacity: 0, filter: 'blur(10px)' }
      }
      transition={{ 
        duration, 
        delay, 
        ease: appleEasing 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
