'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import { APP_STORE_URL, METRICS, CTA_TEXT } from '@/lib/constants'

export default function HeroAlt() {
  return (
    <section className="h-screen max-h-[900px] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-street-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>
      
      <div className="relative z-10 h-full flex items-center pt-16 md:pt-20 pb-8 px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left side - Content */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              
              {/* Social proof */}
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
              
              {/* Main headline */}
              <motion.h1 
                className="font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-[1.1] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Your spending
                <br />
                <span className="text-peek-orange drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">tells a story.</span>
              </motion.h1>
              
              {/* Value prop */}
              <motion.p 
                className="text-base md:text-lg text-white/90 mb-5 leading-relaxed max-w-md drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                Peek helps you read it. See the patterns, understand the triggers, 
                and reshape your habits around what actually matters to you.
              </motion.p>
              
              {/* CTA */}
              <motion.div 
                className="mb-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Button href={APP_STORE_URL} size="large">
                  {CTA_TEXT.primary}
                </Button>
              </motion.div>
              
              {/* Trust badges row */}
              <motion.div
                className="inline-flex flex-wrap items-center gap-2 mb-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.35 }}
              >
                <span className="flex items-center gap-1.5 text-xs text-white/90">
                  <span className="text-green-400">✓</span> Cancel anytime
                </span>
                <span className="w-px h-4 bg-white/20" />
                <span className="flex items-center gap-1.5 text-xs text-white/90">
                  <span>🔒</span> Secured by Plaid
                </span>
                <span className="w-px h-4 bg-white/20" />
                <span className="flex items-center gap-1.5 text-xs text-white/90">
                  <span className="text-yellow-400">⭐</span> {METRICS.userCount} users
                </span>
              </motion.div>
              
              {/* Built with love tagline */}
              <motion.p 
                className="text-xs text-white/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Built with love for people who want to understand their money
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
                  <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black p-1">
                    <div className="absolute inset-1 rounded-[2rem] overflow-hidden bg-white">
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
                        src="/images/1.png"
                        alt="Peek"
                        width={120}
                        height={120}
                        className="object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Floating insight card */}
                  <motion.div
                    className="absolute -left-16 top-16 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl"
                    initial={{ opacity: 0, x: 20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.55 }}
                  >
                    <p className="text-xs font-semibold text-text-primary">🍕 Food & Dining</p>
                    <p className="text-lg font-bold text-peek-orange">$412</p>
                    <p className="text-[10px] text-text-muted">this month</p>
                  </motion.div>
                  
                  {/* Savings card */}
                  <motion.div
                    className="absolute -right-12 top-1/3 bg-green-50 rounded-2xl px-4 py-3 shadow-xl border border-green-100"
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.65 }}
                  >
                    <p className="text-xs font-semibold text-green-700">Saved</p>
                    <p className="text-lg font-bold text-green-600">$289</p>
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
