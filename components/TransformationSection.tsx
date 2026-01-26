'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const transformations = [
  {
    before: '"I feel like I spend too much but don\'t know where"',
    after: '"Now I see the patterns: comfort spending on hard days, autopilot subscriptions, intentional treats"',
    icon: '🔍',
    benefit: 'Self-understanding',
  },
  {
    before: '"I make a budget, try to follow it, then quietly give up"',
    after: '"Small experiments work better. I paused impulse buys for 48 hours and it actually stuck"',
    icon: '🧪',
    benefit: 'Real change',
  },
  {
    before: '"$647 on Food & Dining means nothing to me"',
    after: '"The celebratory dinner, the stress takeout, the coffee ritual. Now it\'s a story I recognize"',
    icon: '📖',
    benefit: 'Your narrative',
  },
  {
    before: '"I feel anxious about money but don\'t know why"',
    after: '"Understanding myself made money feel clearer, calmer, more intentional"',
    icon: '✨',
    benefit: 'Anxiety relief',
  },
]

const stats = [
  { value: '$347', label: 'avg saved/month', subtext: 'by Peek users', color: '#E26B45' },
  { value: '2 min', label: 'to set up', subtext: 'seriously, that\'s it', color: '#2BAE66' },
  { value: '94%', label: 'open daily', subtext: 'because it\'s actually helpful', color: '#2E8CCF' },
]

export default function TransformationSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Ambient background glows */}
      <motion.div 
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,176,136,0.15) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(105,240,174,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,230,255,0.1) 0%, transparent 70%)' }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-peek-orange/10 to-green-400/10 border border-peek-orange/20 mb-5"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.span 
              className="text-lg"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              ✨
            </motion.span>
            <span className="text-sm font-medium bg-gradient-to-r from-peek-orange to-green-500 bg-clip-text text-transparent">
              The transformation
            </span>
          </motion.div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 leading-tight">
            From tracking money to
            <br />
            <span className="relative">
              <span className="text-peek-orange">understanding yourself</span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M2 8 Q75 2 150 8 T298 6"
                  fill="none"
                  stroke="#FFB088"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto">
            When you understand yourself, money starts to feel clearer, calmer, and more intentional
          </p>
        </motion.div>
        
        {/* Transformation cards - improved layout */}
        <div className="space-y-4 mb-16 max-w-3xl mx-auto">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              {/* Connecting line */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-lg">→</span>
                </motion.div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3 md:gap-6">
                {/* Before card */}
                <motion.div 
                  className="bg-gray-50 rounded-2xl p-5 text-text-muted relative overflow-hidden group"
                  whileHover={{ scale: 0.98, opacity: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-3 relative">
                    <span className="text-2xl grayscale opacity-50">😔</span>
                    <div>
                      <span className="text-gray-400 text-[10px] uppercase tracking-wider font-medium block mb-1">Before Peek</span>
                      <p className="text-sm text-text-muted">{item.before}</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* After card */}
                <motion.div 
                  className="relative rounded-2xl p-5 text-text-primary overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,176,136,0.15) 0%, rgba(255,240,232,0.3) 100%)',
                    border: '1px solid rgba(255,176,136,0.3)',
                  }}
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: '0 10px 40px rgba(254,135,92,0.2)',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  <div className="flex items-start gap-3 relative">
                    <motion.span 
                      className="text-2xl"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    >
                      {item.icon}
                    </motion.span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-peek-orange text-[10px] uppercase tracking-wider font-medium">With Peek</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-peek-orange/20 text-peek-orange font-medium">
                          {item.benefit}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-text-primary">{item.after}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats card with ambient glow */}
        <motion.div
          className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,250,248,0.9) 100%)',
            boxShadow: '0 20px 60px rgba(254,135,92,0.1), 0 8px 24px rgba(0,0,0,0.04)',
            border: '1px solid rgba(255,176,136,0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated ambient glows */}
          <motion.div 
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,176,136,0.3) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(105,240,174,0.25) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(168,230,255,0.2) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />
          
          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 relative mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              >
                <motion.p 
                  className="font-heading text-3xl md:text-5xl mb-2"
                  style={{ 
                    color: stat.color,
                    textShadow: `0 0 16px ${stat.color}40`,
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-text-primary font-medium">{stat.label}</p>
                <p className="text-xs text-text-secondary">{stat.subtext}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Peek mascot with message */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/13.png"
                alt="Peek"
                width={120}
                height={120}
                className="object-contain drop-shadow-lg"
              />
            </motion.div>
            
            <motion.div
              className="bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100 max-w-[220px]"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <p className="text-sm font-medium text-text-primary">
                Ready to understand your money habits? 
                <span className="text-peek-orange"> I&apos;ll help!</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
