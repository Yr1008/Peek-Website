'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number // pixels per second
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  className?: string
}

export default function Marquee({
  children,
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  // Calculate animation duration based on speed
  // Assuming content width is roughly 100% of container
  const duration = 100 / speed * 10

  return (
    <div 
      className={`overflow-hidden ${className}`}
      style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
    >
      <motion.div
        className="flex gap-8 w-fit"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            duration,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
        style={pauseOnHover ? { willChange: 'transform' } : undefined}
      >
        {/* Duplicate children for seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  )
}

// Pre-built trust badge marquee
interface TrustBadge {
  icon: string
  text: string
}

interface TrustMarqueeProps {
  badges?: TrustBadge[]
  className?: string
}

const defaultBadges: TrustBadge[] = [
  { icon: '🔒', text: 'Bank-level security' },
  { icon: '⭐', text: '4.9 App Store rating' },
  { icon: '✓', text: 'Cancel anytime' },
  { icon: '🛡️', text: 'Secured by Plaid' },
  { icon: '💳', text: 'No credit card needed' },
  { icon: '📱', text: 'Free on iOS' },
  { icon: '🧠', text: 'AI-powered insights' },
  { icon: '❤️', text: 'Loved by 50K+ users' },
]

export function TrustMarquee({ badges = defaultBadges, className = '' }: TrustMarqueeProps) {
  return (
    <Marquee speed={30} className={className}>
      <div className="flex gap-6 items-center">
        {badges.map((badge, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm whitespace-nowrap"
          >
            <span className="text-base">{badge.icon}</span>
            <span className="text-sm text-text-secondary font-medium">{badge.text}</span>
          </div>
        ))}
      </div>
    </Marquee>
  )
}

// Testimonial snippet marquee
interface TestimonialSnippet {
  text: string
  author: string
}

interface TestimonialMarqueeProps {
  testimonials?: TestimonialSnippet[]
  className?: string
}

const defaultTestimonials: TestimonialSnippet[] = [
  { text: "Finally understand where my money goes", author: "Sarah" },
  { text: "Saved $340 in my first month", author: "Marcus" },
  { text: "The AI coach is amazing", author: "Priya" },
  { text: "Best finance app I've ever used", author: "Jake" },
  { text: "No more money anxiety", author: "Emma" },
  { text: "Actually enjoy checking my spending now", author: "David" },
]

export function TestimonialMarquee({ 
  testimonials = defaultTestimonials, 
  className = '' 
}: TestimonialMarqueeProps) {
  return (
    <Marquee speed={35} className={className}>
      <div className="flex gap-4 items-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-peek-orange/5 to-peek-orange/10 rounded-2xl border border-peek-orange/10 whitespace-nowrap"
          >
            <span className="text-sm text-text-primary">&ldquo;{t.text}&rdquo;</span>
            <span className="text-xs text-text-muted">— {t.author}</span>
          </div>
        ))}
      </div>
    </Marquee>
  )
}
