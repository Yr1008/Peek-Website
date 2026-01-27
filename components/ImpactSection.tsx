'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import PeekCharacter from './ui/PeekCharacter'
import Button from './ui/Button'
import { APP_STORE_URL, CTA_TEXT } from '@/lib/constants'

const timeframes = [
  { id: 'week', label: 'Weekly', savings: 50, prefix: '$', suffix: '', context: 'That\'s brunch with friends', loss: 'you might be losing' },
  { id: 'month', label: 'Monthly', savings: 200, prefix: '$', suffix: '', context: 'A nice dinner out, every month', loss: 'slipping away unnoticed' },
  { id: 'year', label: 'Yearly', savings: 2400, prefix: '$', suffix: '', context: 'Your dream vacation, funded', loss: 'gone without a trace' },
  { id: 'fiveYear', label: '5 Years', savings: 12000, prefix: '$', suffix: '+', context: 'A down payment on your future', loss: 'you\'ll never get back' },
]

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const duration = 600
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Smooth easeOut curve
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(eased * value)
        
        setDisplayValue(current)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value])
  
  return <span ref={ref}>{prefix}{displayValue.toLocaleString()}{suffix}</span>
}

export default function ImpactSection() {
  const [activeIndex, setActiveIndex] = useState(1)
  const active = timeframes[activeIndex]
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-28 px-6 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-white via-[#FFFAF8] to-white">
      {/* Ambient background effects - GPU accelerated */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large ambient glow - center */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(255,176,136,0.25) 0%, rgba(255,212,196,0.12) 40%, transparent 70%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        {/* Secondary glow - left */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.2) 0%, transparent 70%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Peek character with thought bubble - TOP LEFT above content */}
            <motion.div
              className="flex flex-col items-center mb-4 w-fit"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Thought bubble */}
              <motion.div
                className="relative mb-1"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="bg-[#007AFF] text-white rounded-2xl px-3 py-2 shadow-lg">
                  <p className="text-xs font-bold whitespace-nowrap">Clarity is power! 💡</p>
                </div>
                {/* Thought bubble tail */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                  <div className="w-2 h-2 bg-[#007AFF] rounded-full" />
                  <div className="w-1 h-1 bg-[#007AFF] rounded-full" />
                </div>
              </motion.div>
              <PeekCharacter size="md" variant="business" />
            </motion.div>
            
            <p className="text-sm md:text-base text-text-muted uppercase tracking-widest mb-4">Real clarity</p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-text-primary mb-5">
              When you understand,
              <br />
              <span className="text-peek-orange">change follows naturally.</span>
            </h2>
            <p className="text-sm md:text-base text-text-secondary mb-8 leading-relaxed max-w-md">
              You don't need to spend less to feel better. You need to understand what you're doing and why.
            </p>
            
            {/* Timeframe selector - interactive pills with visual cues */}
            <div className="inline-flex flex-wrap gap-2 p-2 bg-gray-100/80 backdrop-blur-sm rounded-2xl mb-6 shadow-inner">
              {timeframes.map((tf, index) => (
                <motion.button
                  key={tf.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                    activeIndex === index 
                      ? 'text-white' 
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  whileHover={{ scale: activeIndex === index ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-peek-orange rounded-xl shadow-lg"
                      style={{ 
                        boxShadow: '0 8px 25px rgba(254,135,92,0.4)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tf.label}</span>
                </motion.button>
              ))}
            </div>
            
            {/* Tap hint */}
            <motion.p 
              className="text-xs md:text-sm text-text-muted flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="inline-flex w-6 h-6 rounded-full bg-peek-orange/20 items-center justify-center">
                <motion.span
                  className="text-sm"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  👆
                </motion.span>
              </span>
              Tap to explore · *Results vary
            </motion.p>
          </motion.div>
          
          {/* Right - Number display card */}
          <motion.div
            key={active.id}
            className="relative"
            style={{ y }}
          >
            {/* Ambient glow behind card */}
            <motion.div 
              className="absolute -inset-6 rounded-[3rem] opacity-40 blur-3xl -z-10"
              style={{ background: 'radial-gradient(circle, rgba(255,176,136,0.4) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.55, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            {/* Interactive card container */}
            <motion.div
              className="relative text-center py-12 md:py-14 px-8 md:px-10 rounded-[2rem] bg-gradient-to-br from-white to-gray-50/80 border border-gray-100/50 shadow-2xl overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(254,135,92,0.2)' }}
            >
              {/* Animated glow background */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full blur-3xl"
                  style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.3) 0%, rgba(255,212,196,0.15) 40%, transparent 70%)' }}
                />
              </motion.div>
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
              />
              
              {/* Label */}
              <motion.p
                className="text-sm md:text-base font-medium text-peek-orange uppercase tracking-wider mb-4 relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                You could save
              </motion.p>
              
              {/* Big number */}
              <motion.p 
                className="font-heading text-5xl md:text-6xl lg:text-7xl text-peek-orange mb-4 relative"
                style={{ 
                  textShadow: '0 0 40px rgba(254,135,92,0.5)',
                }}
                initial={{ y: 10, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
              >
                <AnimatedNumber value={active.savings} prefix={active.prefix} suffix={active.suffix} />
              </motion.p>
              
              {/* Context */}
              <motion.p 
                className="text-base md:text-lg lg:text-xl text-text-secondary relative font-medium"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {active.context}
              </motion.p>
              
            </motion.div>
          </motion.div>
        </div>
        
        {/* Mid-page CTA */}
        <motion.div
          className="flex flex-col items-center gap-3 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
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
