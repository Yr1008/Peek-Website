'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Button from './ui/Button'
import { APP_STORE_URL, CTA_TEXT } from '@/lib/constants'

const features = [
  {
    id: 'feed',
    emoji: '📱',
    title: '5 minutes a day',
    description: 'Your personalized feed surfaces moments worth noticing: an impulse buy, a habit creeping up, a subscription you forgot.',
    highlight: 'Just the stuff that needs attention',
    screenshot: '/images/app-screenshot.png',
  },
  {
    id: 'labeling',
    emoji: '🏷️',
    title: 'Emotional labeling',
    description: 'Not just "Food & Dining." Peek knows the difference between the celebratory dinner, the stress takeout, and the coffee ritual.',
    highlight: 'Impulse • Intentional • Autopilot',
    screenshot: '/images/app-screenshot.png',
  },
  {
    id: 'experiments',
    emoji: '🧪',
    title: 'Small experiments',
    description: 'Budgets fail because life is fluid. Instead, try small tests: pause an impulse buy for 48 hours, swap takeout for something you\'ve wanted.',
    highlight: 'Try it for a week, see what happens',
    screenshot: '/images/app-screenshot.png',
  },
  {
    id: 'story',
    emoji: '📖',
    title: 'Your spending story',
    description: 'Over time, Peek builds a picture of you and your money, like a scrapbook of your financial life.',
    highlight: 'An autobiography you actually recognize',
    screenshot: '/images/app-screenshot.png',
  },
]

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="py-20 md:py-28 lg:py-32 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F6] via-[#FFF5F0] to-[#FFFBF9]" />
      
      {/* Ambient orbs - enhanced visibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large center peach glow */}
        <motion.div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,180,140,0.35) 0%, rgba(255,200,170,0.15) 40%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Left orange accent */}
        <motion.div 
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.25) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        
        {/* Right purple accent */}
        <motion.div 
          className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(180,160,255,0.2) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.12, 1], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        
        {/* Bottom warm glow */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(255,220,200,0.3) 0%, transparent 70%)' }}
          animate={{ opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        
        {/* Floating subtle particles */}
        <motion.div 
          className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-peek-orange/20"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-purple-300/30"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-peek-orange/15"
          animate={{ y: [0, -25, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header - Centered */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-peek-orange font-medium mb-4 text-xs uppercase tracking-[0.2em]">
            How Peek works
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
            Understand yourself.
            <br />
            <span className="text-peek-orange">Change naturally follows.</span>
          </h2>
        </motion.div>
        
        {/* Centered Phone + Content Stack */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Phone Mockup - Centered with glow */}
          <div className="relative mb-10">
            {/* Soft glow behind phone */}
            <div 
              className="absolute -inset-12 rounded-full blur-3xl opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.3) 0%, transparent 70%)' }}
            />
            
            {/* Phone frame */}
            <div className="relative w-[200px] md:w-[240px]">
              <motion.div 
                className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-black p-[3px] shadow-[0_25px_80px_rgba(0,0,0,0.15)]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Screen */}
                <div className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={features[activeIndex].screenshot}
                        alt={features[activeIndex].title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Notch */}
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-2xl z-10" />
                
                {/* Subtle screen shine */}
                <div 
                  className="absolute inset-[3px] rounded-[2.3rem] pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%)' }}
                />
              </motion.div>
            </div>
          </div>
          
          {/* Feature Content - Centered below phone */}
          <div className="text-center max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {/* Emoji + Title */}
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl">{features[activeIndex].emoji}</span>
                  <h3 className="font-heading text-2xl md:text-3xl text-text-primary">
                    {features[activeIndex].title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-text-secondary text-base leading-relaxed">
                  {features[activeIndex].description}
                </p>
                
                {/* Highlight */}
                <div className="pt-2">
                  <span className="inline-block bg-peek-orange/10 text-peek-orange rounded-full px-5 py-2 text-sm font-medium">
                    {features[activeIndex].highlight}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation - Clean dots with progress */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative p-1 group"
                aria-label={`Go to feature ${index + 1}`}
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-peek-orange scale-125' 
                    : 'bg-gray-300 group-hover:bg-gray-400'
                }`} />
                {/* Progress ring for active */}
                {index === activeIndex && !isPaused && (
                  <svg className="absolute inset-0 w-4 h-4 -rotate-90" viewBox="0 0 16 16">
                    <motion.circle
                      cx="8"
                      cy="8"
                      r="6"
                      fill="none"
                      stroke="rgba(254,135,92,0.3)"
                      strokeWidth="1.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 4, ease: 'linear' }}
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
          
          {/* Step indicator */}
          <p className="text-xs text-text-muted mt-4">
            {activeIndex + 1} of {features.length}
          </p>
          
          {/* CTA below features */}
          <motion.div
            className="flex flex-col items-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Button href={APP_STORE_URL} size="large">
              {CTA_TEXT.primary}
            </Button>
            <p className="text-xs text-text-muted">Free on iOS · No credit card needed</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
