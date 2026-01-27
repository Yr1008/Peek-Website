'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Button from './ui/Button'
import ProductHuntBadge from './ui/ProductHuntBadge'
import { APP_STORE_URL, METRICS, CTA_TEXT } from '@/lib/constants'

const videos = [
  { src: '/videos/evgen_kochetkov_httpss.mj.runLM61bq1sfs4_A_black_woman_in_her_4b7dd37d-5c2d-4313-a91a-49a0a10229ed_0.mp4', label: 'Black Woman' },
  { src: '/videos/schalkt._httpss.mj.runTMmjJABj5-w_friends_laughing_while_havi_b66e3d25-06cc-4e8a-827f-ab491d8dfff4_0.mp4', label: 'Friends Laughing' },
  { src: '/videos/social_Antimatter_Black_and_white_photo_of_a_woman_walking_through_a_a47647de-9ae7-4f7d-a850-9234fc765b74_0.mp4', label: 'Woman Walking B&W' },
  { src: '/videos/hero-bg.mp4', label: 'Street Scene' },
]

export default function HeroVideo() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Randomize video on client-side mount
  useEffect(() => {
    if (!isInitialized) {
      const randomIndex = Math.floor(Math.random() * videos.length)
      setCurrentVideoIndex(randomIndex)
      setIsInitialized(true)
    }
  }, [isInitialized])

  // Reload video when source changes
  useEffect(() => {
    if (videoRef.current && isInitialized) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [currentVideoIndex, isInitialized])

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background video/gif */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videos[currentVideoIndex].src} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
      </div>
      
      
      <div className="relative z-10 min-h-screen flex items-center pt-24 md:pt-28 pb-12 px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
            
            {/* Left side - Content */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Product Hunt Badge */}
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <ProductHuntBadge />
              </motion.div>
              
              {/* Social proof - authentic */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 mb-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-peek-orange text-xs">★</span>
                  ))}
                </div>
                <span className="text-xs text-white/90">{METRICS.appRating} · {METRICS.downloads} downloads</span>
              </motion.div>
              
              {/* Main headline - punchy, specific */}
              <motion.h1 
                className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-5 leading-[1.1] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Know the why
                <br />
                <span className="text-peek-orange drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">behind every dollar.</span>
              </motion.h1>
              
              {/* Value prop - specific, benefit-focused */}
              <motion.p 
                className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed max-w-md drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                Not just what you spent, but which were impulse, which were intentional, and which were autopilot.
                <span className="text-white font-medium"> Understanding changes everything.</span>
              </motion.p>
              
              {/* CTA - action-oriented */}
              <motion.div 
                className="mb-5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.28 }}
              >
                <Button href={APP_STORE_URL} size="large">
                  {CTA_TEXT.primary}
                </Button>
              </motion.div>
              
              {/* Trust badges row */}
              <motion.div
                className="inline-flex flex-wrap items-center gap-2 md:gap-3 mb-5 bg-white/10 backdrop-blur-md rounded-2xl md:rounded-full px-4 md:px-5 py-2 md:py-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.32 }}
              >
                <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-white/90 whitespace-nowrap">
                  <span className="text-green-400">✓</span> Cancel anytime
                </span>
                <span className="w-px h-3 md:h-4 bg-white/20 hidden sm:block" />
                <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-white/90 whitespace-nowrap">
                  <span>🔒</span> Secured by Plaid
                </span>
                <span className="w-px h-3 md:h-4 bg-white/20 hidden sm:block" />
                <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-white/90 whitespace-nowrap">
                  <span className="text-yellow-400">⭐</span> {METRICS.userCount} users
                </span>
              </motion.div>
              
              {/* Tagline */}
              <motion.p 
                className="text-xs text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.36 }}
              >
                The difference between tracking your money and understanding yourself
              </motion.p>
              
            </motion.div>
            
            {/* Right side - Phone */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative mx-auto max-w-[200px] lg:max-w-[220px]">
                <motion.div 
                  className="relative"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Phone frame */}
                  <div className="relative aspect-[9/19] rounded-[2rem] overflow-hidden shadow-2xl bg-black p-1">
                    <div className="absolute inset-1 rounded-[1.5rem] overflow-hidden bg-white">
                      <Image
                        src="/images/app-screenshot.png"
                        alt="Peek App"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
                  </div>
                  
                  {/* Floating Peek character */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-30 h-30 z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Image
                        src="/images/13.png"
                        alt="Peek"
                        width={120}
                        height={120}
                        className="object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Floating insight card - emotional labeling */}
                  <motion.div
                    className="absolute -left-20 top-16 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl"
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.55 }}
                  >
                    <p className="text-xs font-semibold text-text-primary">🎯 Intentional</p>
                    <p className="text-lg font-bold text-peek-orange">$412</p>
                    <p className="text-[10px] text-text-muted">aligned with your values</p>
                  </motion.div>
                  
                  {/* Floating savings card */}
                  <motion.div
                    className="absolute -right-14 top-1/3 bg-green-50 rounded-2xl px-4 py-3 shadow-xl border border-green-100"
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.65 }}
                  >
                    <p className="text-xs font-semibold text-green-700">You saved</p>
                    <p className="text-lg font-bold text-green-600">$340</p>
                    <p className="text-[10px] text-green-600/70">vs last month</p>
                  </motion.div>
                  
                </motion.div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1 text-white/50"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-wider">scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
