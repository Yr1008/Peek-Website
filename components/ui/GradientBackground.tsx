'use client'

import { motion } from 'framer-motion'

// Animated gradient orbs - Peek brand colors (warm orange/beige)
interface GradientOrbsProps {
  className?: string
}

export function GradientOrbs({ className = '' }: GradientOrbsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Primary orange orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(254, 135, 92, 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '-10%',
          right: '-10%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Secondary beige orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(244, 238, 231, 0.6) 0%, transparent 70%)',
          filter: 'blur(50px)',
          bottom: '10%',
          left: '-5%',
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      {/* Subtle cyan accent orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(94, 166, 169, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          top: '40%',
          left: '30%',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  )
}

// Mesh gradient background
interface MeshGradientProps {
  className?: string
  variant?: 'hero' | 'cta' | 'subtle'
}

export function MeshGradient({ className = '', variant = 'hero' }: MeshGradientProps) {
  const variants = {
    hero: 'from-beige via-off-white to-beige',
    cta: 'from-off-white via-beige to-off-white',
    subtle: 'from-beige/50 via-transparent to-beige/50',
  }

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${variants[variant]} opacity-80`} />
      
      {/* Noise texture overlay for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}

// Animated gradient border
interface GradientBorderProps {
  children: React.ReactNode
  className?: string
}

export function GradientBorder({ children, className = '' }: GradientBorderProps) {
  return (
    <div className={`relative p-[2px] rounded-3xl ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'linear-gradient(90deg, #FE875C, #5EA6A9, #FE875C)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <div className="relative bg-off-white rounded-[calc(1.5rem-2px)]">
        {children}
      </div>
    </div>
  )
}

// Spotlight effect that follows content
interface SpotlightProps {
  className?: string
}

export function Spotlight({ className = '' }: SpotlightProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(254, 135, 92, 0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      animate={{
        x: ['-50%', '50%', '-50%'],
        y: ['-30%', '30%', '-30%'],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

// Subtle animated lines/grid
interface AnimatedGridProps {
  className?: string
}

export function AnimatedGrid({ className = '' }: AnimatedGridProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] ${className}`}>
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
