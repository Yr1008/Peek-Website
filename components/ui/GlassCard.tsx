'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// Warm glassmorphism card - Peek brand colors
interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  intensity?: 'light' | 'medium' | 'heavy'
}

export function GlassCard({ 
  children, 
  className = '',
  hover = true,
  intensity = 'medium'
}: GlassCardProps) {
  const intensityStyles = {
    light: 'bg-white/40 backdrop-blur-sm',
    medium: 'bg-white/60 backdrop-blur-glass',
    heavy: 'bg-white/80 backdrop-blur-heavy'
  }

  return (
    <motion.div
      className={`
        ${intensityStyles[intensity]}
        glass-shimmer
        rounded-3xl
        border border-white/50
        shadow-glass
        ${className}
      `}
      whileHover={hover ? {
        scale: 1.02,
        y: -4,
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.6)'
      } : undefined}
      whileTap={hover ? { scale: 0.99 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

// Warm beige glass card - more on-brand for Peek
interface WarmGlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function WarmGlassCard({ 
  children, 
  className = '',
  hover = true
}: WarmGlassCardProps) {
  return (
    <motion.div
      className={`
        bg-gradient-to-br from-off-white/90 to-beige/80
        backdrop-blur-glass
        glass-shimmer
        rounded-3xl
        border border-white/40
        shadow-glass
        ${className}
      `}
      whileHover={hover ? {
        scale: 1.02,
        y: -4,
        boxShadow: '0 20px 50px rgba(254, 135, 92, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.5)'
      } : undefined}
      whileTap={hover ? { scale: 0.99 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

// Glowing glass card with orange accent
interface GlowGlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'orange' | 'cyan'
}

export function GlowGlassCard({ 
  children, 
  className = '',
  glowColor = 'orange'
}: GlowGlassCardProps) {
  const glowStyles = {
    orange: 'hover:shadow-glow-orange',
    cyan: 'hover:shadow-[0_0_40px_rgba(94,166,169,0.3)]'
  }

  return (
    <motion.div
      className={`
        bg-white/70
        backdrop-blur-glass
        glass-shimmer
        rounded-3xl
        border border-white/50
        shadow-glass
        transition-shadow duration-500
        ${glowStyles[glowColor]}
        ${className}
      `}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

// Frosted panel - for larger sections
interface FrostedPanelProps {
  children: ReactNode
  className?: string
}

export function FrostedPanel({ 
  children, 
  className = ''
}: FrostedPanelProps) {
  return (
    <div
      className={`
        bg-gradient-to-b from-white/50 to-white/30
        backdrop-blur-glass
        glass-shimmer
        rounded-[2rem]
        border border-white/30
        shadow-[0_8px_32px_rgba(0,0,0,0.06)]
        ${className}
      `}
    >
      {children}
    </div>
  )
}

// Interactive card with 3D tilt effect
interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ 
  children, 
  className = ''
}: TiltCardProps) {
  return (
    <motion.div
      className={`
        bg-white/60
        backdrop-blur-glass
        glass-shimmer
        rounded-3xl
        border border-white/50
        shadow-glass
        ${className}
      `}
      whileHover={{ 
        rotateX: 5, 
        rotateY: 5,
        scale: 1.02 
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 300, 
        damping: 20 
      }}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  )
}
