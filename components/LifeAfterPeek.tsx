'use client'

import { motion } from 'framer-motion'
import PeekCharacter from './ui/PeekCharacter'

// Pastel theme colors aligned with Peek brand
const benefits = [
  { 
    text: 'Know exactly where every dollar goes', 
    icon: '📍',
    stat: '3x',
    statLabel: 'clearer picture',
    iconBg: 'bg-peek-orange-light',
    iconColor: 'text-peek-orange',
    bgColor: 'bg-peek-orange-light/30',
    accentColor: 'bg-peek-orange/60',
  },
  { 
    text: 'Build habits that actually stick', 
    icon: '🔄',
    stat: '21',
    statLabel: 'day streaks',
    iconBg: 'bg-peek-purple-soft',
    iconColor: 'text-peek-purple-deep',
    bgColor: 'bg-peek-purple-soft/30',
    accentColor: 'bg-peek-purple/60',
  },
  { 
    text: 'Make money decisions with confidence', 
    icon: '💡',
    stat: '89%',
    statLabel: 'feel in control',
    iconBg: 'bg-peek-sky-soft',
    iconColor: 'text-peek-sky',
    bgColor: 'bg-peek-sky-soft/30',
    accentColor: 'bg-peek-sky/60',
  },
  { 
    text: 'Say goodbye to money anxiety', 
    icon: '✨',
    stat: '2x',
    statLabel: 'calmer about $',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50/50',
    accentColor: 'bg-green-400/60',
  },
]

export default function LifeAfterPeek() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 relative overflow-hidden bg-white">
      {/* Peek celebrating on the side - RIGHT */}
      <motion.div
        className="absolute right-4 md:right-10 top-24 z-10 hidden lg:block"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center gap-1">
          <motion.div
            className="bg-[#007AFF] text-white rounded-2xl rounded-br-sm px-3 py-2 shadow-lg"
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <p className="text-xs font-bold whitespace-nowrap">You did it! 🎉</p>
          </motion.div>
          <PeekCharacter size="xl" variant="party" />
        </div>
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header - minimal */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs text-text-muted uppercase tracking-widest mb-3">Financial wellness</p>
          
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-text-primary mb-3 leading-tight">
            Less stress. <span className="text-peek-orange">More confidence.</span>
          </h2>
          <p className="text-sm md:text-base text-text-secondary max-w-sm mx-auto">
            Join thousands who finally feel in control of their money.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left column - Feature preview card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div 
              className="relative rounded-[22px] p-5 md:p-6 overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
            >
              {/* Decorative gradient blob */}
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br from-peek-orange/15 to-peek-purple-soft/15 blur-xl" />
              
              {/* Header with Peek */}
              <div className="relative flex items-center gap-3 mb-4">
                <PeekCharacter size="md" variant="thumbsup" animate={false} />
                <div>
                  <p className="font-medium text-text-primary text-sm">You&apos;re crushing it!</p>
                  <p className="text-xs text-text-muted">Your best month yet</p>
                </div>
                <motion.div
                  className="ml-auto text-xl"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎉
                </motion.div>
              </div>
              
              {/* Stats row - Pastel theme colors */}
              <div className="relative grid grid-cols-2 gap-3 mb-4">
                <motion.div 
                  className="bg-green-50/80 rounded-xl p-3 text-center border border-green-100/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.p 
                    className="text-xl font-bold text-green-600/80"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    +$340
                  </motion.p>
                  <p className="text-[10px] text-text-muted mt-0.5">saved this month</p>
                </motion.div>
                <motion.div 
                  className="bg-peek-purple-soft/50 rounded-xl p-3 text-center border border-peek-purple-soft/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.p 
                    className="text-xl font-bold text-peek-purple-deep/80"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                  >
                    12
                  </motion.p>
                  <p className="text-[10px] text-text-muted mt-0.5">day streak 🔥</p>
                </motion.div>
              </div>
              
              {/* Progress visualization - Softer colors */}
              <div className="relative">
                <div className="flex justify-between text-[10px] text-text-muted mb-1.5">
                  <span>Monthly goal</span>
                  <span className="font-medium text-peek-orange">85% there!</span>
                </div>
                <div className="h-2 bg-peek-cream/80 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-peek-orange-light to-peek-orange rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Benefits grid */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {benefits.map((b, i) => (
              <motion.div
                key={b.text}
                className={`relative p-4 rounded-[18px] overflow-hidden ${b.bgColor}`}
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,255,255,0.4)',
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                whileHover={{ 
                  y: -2, 
                  transition: { duration: 0.2 } 
                }}
              >
                {/* Soft accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${b.accentColor}`} />
                
                {/* Icon with soft background */}
                <motion.div 
                  className={`w-8 h-8 rounded-lg ${b.iconBg} flex items-center justify-center mb-2.5`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm">{b.icon}</span>
                </motion.div>
                
                {/* Stat */}
                <div className="mb-1.5">
                  <motion.p 
                    className="text-xl font-bold text-text-primary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: 0.15 + i * 0.06 }}
                  >
                    {b.stat}
                  </motion.p>
                  <p className="text-[10px] text-text-muted">{b.statLabel}</p>
                </div>
                
                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
