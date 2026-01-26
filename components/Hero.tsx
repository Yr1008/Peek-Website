'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import { APP_STORE_URL, METRICS, CTA_TEXT } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="min-h-[90vh] md:min-h-screen pt-24 md:pt-28 pb-8 md:pb-12 px-6 md:px-8 lg:px-12 relative overflow-hidden flex items-center">
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left - Problem Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Stressed person image */}
              <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 shadow-2xl">
                <Image
                  src="/images/hero-stressed-person.png"
                  alt="Person stressed about finances"
                  fill
                  className="object-cover"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                
                {/* Problem text overlay */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  <p className="text-white/70 text-sm mb-1.5">Sound familiar?</p>
                  <p className="text-white text-lg font-medium leading-snug">
                    "Where did my $3,200 go this month?"
                  </p>
                </motion.div>
              </div>
              
              {/* Floating problem bubbles */}
              <motion.div
                className="absolute -top-2 -right-2 md:-right-4 rounded-2xl px-4 py-2.5 shadow-lg bg-red-50 border border-red-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <p className="text-xs text-red-600 font-medium">😰 No idea where it went</p>
              </motion.div>
              
              <motion.div
                className="absolute top-1/3 -left-2 md:-left-4 rounded-2xl px-4 py-2.5 shadow-lg bg-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.55 }}
              >
                <p className="text-xs text-gray-600 font-medium">🤔 Was it worth it?</p>
              </motion.div>
              
            </div>
          </motion.div>
          
          {/* Right - Solution Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Social proof */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-peek-orange/10 rounded-full px-3 py-1.5 mb-5"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              <div className="flex -space-x-1.5">
                {['👩🏻', '👨🏽', '👩🏾'].map((e, i) => (
                  <span key={i} className="w-5 h-5 rounded-full bg-peek-orange/20 flex items-center justify-center text-[10px]">{e}</span>
                ))}
              </div>
              <span className="text-xs text-peek-orange font-medium">4,200+ joined this month</span>
            </motion.div>
            
            {/* Problem statement */}
            <motion.p
              className="text-text-muted text-sm md:text-base mb-2"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              Money isn't just numbers. Neither is Peek.
            </motion.p>
            
            {/* Main headline */}
            <motion.h1 
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-text-primary mb-5 leading-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              Understand your
              <br />
              <span className="text-peek-orange">money habits.</span>
            </motion.h1>
            
            {/* Value prop */}
            <motion.p 
              className="text-base md:text-lg text-text-secondary mb-5 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              See the why behind every purchase: the impulse buys, the comfort spending, the autopilot. 
              <span className="text-text-primary font-medium"> So you can reshape them around what matters.</span>
            </motion.p>
            
            {/* Objection busters */}
            <motion.div
              className="flex flex-wrap gap-3 mb-6 text-sm text-text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.33 }}
            >
              <span>✓ Bank-level security</span>
            </motion.div>
            
            {/* CTA */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Button href={APP_STORE_URL} size="large">
                {CTA_TEXT.primary}
              </Button>
            </motion.div>
            
            {/* Trust badges row */}
            <motion.div
              className="inline-flex flex-wrap items-center gap-3 mb-5 bg-gray-100/80 backdrop-blur-md rounded-full px-5 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                <span className="text-green-500">✓</span> Cancel anytime
              </span>
              <span className="w-px h-4 bg-gray-300" />
              <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                <span>🔒</span> Secured by Plaid
              </span>
              <span className="w-px h-4 bg-gray-300" />
              <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                <span className="text-yellow-500">⭐</span> {METRICS.userCount} users
              </span>
            </motion.div>
            
            {/* Built with love tagline */}
            <motion.p 
              className="text-xs text-text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
            >
              Built with love for people who want to understand their money
            </motion.p>
            
            {/* App preview */}
            <motion.a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-4 cursor-pointer group"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {/* Mini phone mockup */}
              <motion.div 
                className="relative w-16 h-32 rounded-[14px] overflow-hidden shadow-lg bg-black p-0.5 shrink-0 group-hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0.5 rounded-[12px] overflow-hidden bg-white">
                  <Image
                    src="/images/app-screenshot.png"
                    alt="Peek App"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Arrow and text */}
              <div className="flex items-center gap-3">
                <motion.svg 
                  className="w-5 h-5 text-peek-orange" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
                <div>
                  <p className="text-sm font-medium text-text-primary group-hover:text-peek-orange transition-colors">Start tracking in 2 min</p>
                  <p className="text-xs text-text-muted">iOS only (Android coming soon)</p>
                </div>
              </div>
              
              {/* Floating Peek character */}
              <motion.div
                className="relative w-10 h-10 shrink-0"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/images/13.png"
                  alt="Peek"
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
