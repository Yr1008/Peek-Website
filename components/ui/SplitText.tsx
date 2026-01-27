'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
  splitBy?: 'word' | 'character'
  animation?: 'fadeUp' | 'fadeIn' | 'slideUp' | 'wave'
}

// Animation variants for different effects
const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  },
  wave: {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
}

export default function SplitText({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  splitBy = 'word',
  animation = 'fadeUp',
}: SplitTextProps) {
  // Split text into words or characters
  const parts = useMemo(() => {
    if (splitBy === 'character') {
      return children.split('').map((char, i) => ({
        text: char === ' ' ? '\u00A0' : char, // Non-breaking space for spaces
        key: `char-${i}`,
      }))
    }
    return children.split(' ').map((word, i) => ({
      text: word,
      key: `word-${i}`,
    }))
  }, [children, splitBy])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = animations[animation]

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {parts.map((part, index) => (
        <motion.span
          key={part.key}
          className="inline-block"
          variants={itemVariants}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ 
            marginRight: splitBy === 'word' ? '0.25em' : 0,
            whiteSpace: 'pre',
          }}
        >
          {part.text}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Animated headline component for common use cases
interface AnimatedHeadlineProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  delay?: number
}

export function AnimatedHeadline({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0,
}: AnimatedHeadlineProps) {
  return (
    <Component className={className}>
      <SplitText delay={delay} animation="slideUp" staggerDelay={0.04}>
        {children}
      </SplitText>
    </Component>
  )
}
