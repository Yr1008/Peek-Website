'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PeekCharacterProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'smile' | 'thumbsup' | 'shy' | 'party' | 'coach' | 'business' | 'sad' | 'fire' | 'studious' | 'fancy' | 'clock' | 'construction' | 'icon' | 'logo' | 'eyes'
  className?: string
  animate?: boolean
}

const sizes = {
  sm: 64,
  md: 100,
  lg: 160,
  xl: 200,
}

const images = {
  default: '/images/11.png',      // smile
  smile: '/images/11.png',        // simple smile
  thumbsup: '/images/13.png',     // thumbs up
  shy: '/images/14.png',          // shy/blushing
  party: '/images/1.png',         // party hat & confetti
  coach: '/images/9.png',         // coach cap & whistle
  business: '/images/10.png',     // suit & briefcase
  sad: '/images/12.png',          // sad with clouds
  fire: '/images/2.png',          // fire/energized
  studious: '/images/4.png',      // glasses & notebook
  fancy: '/images/7.png',         // monocle & suit
  clock: '/images/5.png',         // with clock
  construction: '/images/8.png',  // hardhat
  icon: '/images/peek-icon.png',
  logo: '/images/3.png',          // logo with "Peek" text
  eyes: '/images/6.png',          // just eyes (minimal)
}

export default function PeekCharacter({ 
  size = 'md', 
  variant = 'default',
  className = '',
  animate = true,
}: PeekCharacterProps) {
  const dimension = sizes[size]
  const imageSrc = images[variant]
  
  return (
    <motion.div 
      className={`relative ${className}`}
      style={{ width: dimension, height: dimension }}
      animate={animate ? { y: [0, -8, 0] } : undefined}
      transition={animate ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      <Image
        src={imageSrc}
        alt="Peek"
        width={dimension}
        height={dimension}
        className="object-contain drop-shadow-lg"
      />
    </motion.div>
  )
}
