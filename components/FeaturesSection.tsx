'use client'

import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Button from './ui/Button'
import SplitText from './ui/SplitText'
import { APP_STORE_URL, CTA_TEXT } from '@/lib/constants'

const features = [
  {
    id: 'feed',
    emoji: '✨',
    title: 'Your daily check-in',
    description: 'Quick swipes, zero judgment. See what you spent and how it made you feel.',
    highlight: 'Takes 2 min',
    screenshot: '/images/app-screenshot.png',
  },
  {
    id: 'labeling',
    emoji: '🎯',
    title: 'Spot the patterns',
    description: 'That late-night Amazon order? Stress shopping. Sunday brunch? Self-care. Finally see the why.',
    highlight: 'Impulse vs intentional',
    screenshot: '/images/app-screenshot-insights.png',
  },
  {
    id: 'experiments',
    emoji: '💅',
    title: 'Goals that don\'t suck',
    description: 'No boring budgets. Just small challenges like "wait 24hrs before checkout" that actually work.',
    highlight: 'Real results',
    screenshot: '/images/app-screenshot-goals.png',
  },
  {
    id: 'story',
    emoji: '💬',
    title: 'Your AI bestie',
    description: 'Ask anything about your money. Get honest answers without the lecture from your parents.',
    highlight: 'No judgment zone',
    screenshot: '/images/app-screenshot-chat.png',
  },
]

// Split features into left and right columns
const leftFeatures = features.filter((_, i) => i % 2 === 0)
const rightFeatures = features.filter((_, i) => i % 2 === 1)

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax transforms for ambient orbs
  const orbY1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const orbY2 = useTransform(scrollYProgress, [0, 1], [50, -150])
  const orbY3 = useTransform(scrollYProgress, [0, 1], [80, -80])
  
  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden bg-gradient-to-b from-[#FFF9F6] via-[#FFF5F0] to-[#FFFBF9]">
      {/* Ambient orbs with parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(255,180,140,0.25) 0%, rgba(255,200,170,0.1) 40%, transparent 70%)',
            y: orbY1
          }}
        />
        <motion.div 
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(254,135,92,0.15) 0%, transparent 60%)',
            y: orbY2
          }}
        />
        <motion.div 
          className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(180,160,255,0.12) 0%, transparent 60%)',
            y: orbY3
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <motion.p 
            className="text-peek-orange font-medium mb-3 text-xs uppercase tracking-[0.2em]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            How it works
          </motion.p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
            <SplitText animation="fadeUp" staggerDelay={0.04}>
              Finally get your money.
            </SplitText>
            <br />
            <span className="text-peek-orange">
              <SplitText animation="fadeUp" delay={0.2} staggerDelay={0.04}>
                Without the guilt trip.
              </SplitText>
            </span>
          </h2>
        </motion.div>
        
        {/* Three column layout: Features - Phone - Features */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center mb-12">
          
          {/* Left Features */}
          <div className="space-y-4 order-2 lg:order-1">
            {leftFeatures.map((feature) => {
              const featureIndex = features.findIndex(f => f.id === feature.id)
              const isActive = activeFeature === featureIndex
              
              return (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  isActive={isActive}
                  onClick={() => setActiveFeature(featureIndex)}
                  align="right"
                  index={featureIndex}
                />
              )
            })}
          </div>
          
          {/* Center Phone */}
          <motion.div 
            className="flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Soft glow behind phone */}
              <motion.div 
                className="absolute -inset-16 rounded-full blur-3xl opacity-50"
                style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.35) 0%, transparent 70%)' }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* Phone frame */}
              <div className="relative w-[240px] md:w-[280px] lg:w-[300px]">
                <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-black p-[3px] shadow-[0_25px_80px_rgba(0,0,0,0.2)]">
                  {/* Screen with animated transitions */}
                  <div className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden bg-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={features[activeFeature].id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={features[activeFeature].screenshot}
                          alt={features[activeFeature].title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-b-2xl z-10" />
                  
                  {/* Screen shine */}
                  <div 
                    className="absolute inset-[3px] rounded-[2.3rem] pointer-events-none z-20"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)' }}
                  />
                </div>
              </div>
              
              {/* Feature indicator dots */}
              <div className="flex justify-center gap-2 mt-6">
                {features.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      activeFeature === index ? 'bg-peek-orange' : 'bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    animate={activeFeature === index ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Features */}
          <div className="space-y-4 order-3 lg:order-3">
            {rightFeatures.map((feature) => {
              const featureIndex = features.findIndex(f => f.id === feature.id)
              const isActive = activeFeature === featureIndex
              
              return (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  isActive={isActive}
                  onClick={() => setActiveFeature(featureIndex)}
                  align="left"
                  index={featureIndex}
                />
              )
            })}
          </div>
        </div>
        
        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-3"
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
      </div>
    </section>
  )
}

// Feature Card Component
function FeatureCard({ 
  feature, 
  isActive, 
  onClick, 
  align,
  index
}: { 
  feature: typeof features[0]
  isActive: boolean
  onClick: () => void
  align: 'left' | 'right'
  index: number
}) {
  return (
    <motion.div
      onClick={onClick}
      className={`
        relative p-5 rounded-2xl cursor-pointer transition-all duration-300
        ${isActive 
          ? 'bg-white shadow-lg border-2 border-peek-orange/30' 
          : 'bg-white/60 backdrop-blur-sm border border-gray-100/80 shadow-sm hover:bg-white/80'
        }
        ${align === 'right' ? 'lg:text-right' : 'lg:text-left'}
      `}
      initial={{ opacity: 0, x: align === 'right' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Active indicator line */}
      {isActive && (
        <motion.div
          className={`absolute top-1/2 -translate-y-1/2 w-1 h-12 bg-peek-orange rounded-full ${
            align === 'right' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
          }`}
          layoutId="activeIndicator"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
      
      <div className={`flex items-start gap-3 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
        <motion.span 
          className="text-2xl flex-shrink-0"
          animate={isActive ? { scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          {feature.emoji}
        </motion.span>
        <div>
          <h3 className={`font-heading text-base md:text-lg mb-1 ${
            isActive ? 'text-peek-orange' : 'text-text-primary'
          }`}>
            {feature.title}
          </h3>
          <p className="text-xs md:text-sm text-text-secondary leading-relaxed mb-2">
            {feature.description}
          </p>
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
            isActive 
              ? 'bg-peek-orange text-white' 
              : 'bg-peek-orange/10 text-peek-orange'
          }`}>
            {feature.highlight}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
