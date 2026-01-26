'use client'

import { motion } from 'framer-motion'
import PeekCharacter from './ui/PeekCharacter'

const competitors = [
  { name: 'Trackers', x: 35, y: 50, color: '#22C55E' },
  { name: 'Budgeters', x: 25, y: 60, color: '#60A5FA' },
  { name: 'AI Apps', x: 55, y: 55, color: '#A855F7' },
  { name: 'Spreadsheets', x: 20, y: 35, color: '#9CA3AF' },
  { name: 'Bank Apps', x: 60, y: 30, color: '#374151' },
]

const peek = { name: 'Peek', x: 88, y: 96, color: '#FE875C' }

const benefits = [
  { icon: '⚡', title: 'Instant setup', desc: 'No forms, no fuss', isPlaid: false },
  { icon: '🧠', title: 'AI powered', desc: 'Personalized insights', isPlaid: false },
  { icon: null, title: 'Secured by Plaid', desc: 'Bank-grade security', isPlaid: true },
]

export default function ComparisonSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFF9F6] to-[#FFFBF9]" />
      
      {/* Ambient orbs - GPU accelerated */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(255,200,170,0.25) 0%, rgba(255,220,200,0.08) 50%, transparent 70%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.15) 0%, transparent 60%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(180,160,255,0.12) 0%, transparent 60%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      {/* Peek character looking confident - LEFT side */}
      <motion.div
        className="absolute left-4 md:left-8 top-20 z-10 hidden lg:flex items-center gap-0.5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <PeekCharacter size="md" variant="fancy" />
        <motion.div
          className="bg-[#007AFF] text-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-lg"
          initial={{ opacity: 0, scale: 0.8, x: -10 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <p className="text-xs font-bold whitespace-nowrap">Top tier 😎</p>
        </motion.div>
      </motion.div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left - Chart card */}
          <motion.div
            className="rounded-2xl p-5 md:p-6 order-2 lg:order-1 bg-warm-cream"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Chart container with padding for labels */}
            <div className="relative">
              {/* Top label */}
              <p className="text-center text-xs font-medium text-text-primary mb-4">Smart</p>
              
              {/* Chart area with side labels */}
              <div className="flex items-center gap-4">
                {/* Left label */}
                <p className="text-xs text-text-muted w-8 text-center shrink-0">Hard</p>
                
                {/* Chart box */}
                <div className="relative aspect-square flex-1 bg-gradient-to-br from-gray-50/80 to-white rounded-[18px] overflow-visible">
                  {/* Soft gradient quadrant for smart+easy */}
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-green-50/50 to-transparent rounded-tr-[18px]" />
                  
                  {/* Axes - softer, rounded ends */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    {/* Vertical axis */}
                    <line x1="50%" y1="8%" x2="50%" y2="92%" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
                    {/* Horizontal axis */}
                    <line x1="8%" y1="50%" x2="92%" y2="50%" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  
                  {/* Competitors */}
                  {competitors.map((comp, i) => (
                    <motion.div
                      key={comp.name}
                      className="absolute"
                      style={{ 
                        left: `${8 + comp.x * 0.84}%`, 
                        top: `${8 + (100 - comp.y) * 0.84}%`, 
                        transform: 'translate(-50%, -50%)' 
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                    >
                      <div 
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shadow-sm"
                        style={{ backgroundColor: comp.color }}
                      >
                        {comp.name.charAt(0)}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Peek - with NEON glow effect */}
                  <div
                    className="absolute z-10"
                    style={{ 
                      left: `${8 + peek.x * 0.84}%`, 
                      top: `${8 + (100 - peek.y) * 0.84}%`, 
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {/* Container */}
                    <div className="relative flex items-center justify-center">
                      {/* Neon glow - outer */}
                      <motion.div 
                        className="absolute w-24 h-24 rounded-full"
                        style={{ 
                          background: `radial-gradient(circle, ${peek.color}60 0%, ${peek.color}30 30%, transparent 70%)`,
                          filter: 'blur(8px)',
                        }}
                        animate={{ 
                          scale: [1, 1.15, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      
                      {/* Neon ring pulse */}
                      <motion.div 
                        className="absolute w-16 h-16 rounded-full"
                        style={{ 
                          border: `3px solid ${peek.color}`,
                          boxShadow: `0 0 20px ${peek.color}80, 0 0 40px ${peek.color}40, inset 0 0 20px ${peek.color}30`,
                        }}
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut',
                        }}
                      />
                      
                      {/* Second pulse ring */}
                      <motion.div 
                        className="absolute w-16 h-16 rounded-full"
                        style={{ 
                          border: `2px solid ${peek.color}`,
                          boxShadow: `0 0 15px ${peek.color}60`,
                        }}
                        animate={{ 
                          scale: [1, 1.6, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut',
                          delay: 0.5,
                        }}
                      />
                      
                      {/* Main circle with neon glow */}
                      <motion.div 
                        className="relative w-12 h-12 rounded-full flex items-center justify-center border-2 border-white"
                        style={{ 
                          backgroundColor: peek.color,
                          boxShadow: `0 0 20px ${peek.color}, 0 0 40px ${peek.color}80, 0 0 60px ${peek.color}40, 0 4px 15px rgba(0,0,0,0.2)`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 200 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="font-heading text-white text-sm font-bold tracking-tight drop-shadow-lg">Peek</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Right label */}
                <p className="text-xs font-medium text-text-primary w-8 text-center shrink-0">Easy</p>
              </div>
              
              {/* Bottom label */}
              <p className="text-center text-xs text-text-muted mt-4">Basic</p>
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-6 pt-5 border-t border-gray-100">
              {[...competitors, peek].map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-text-muted">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs text-text-muted uppercase tracking-widest mb-3">Why Peek</p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-text-primary mb-3">
              Understanding, not
              <br />
              <span className="text-peek-orange">just tracking.</span>
            </h2>
            <p className="text-sm md:text-base text-text-secondary mb-5 leading-relaxed">
              Other apps show what you spent. Peek helps you understand why, and what to do about it.
            </p>
            
            <div className="grid grid-cols-3 gap-2 mb-5">
              {benefits.map((b, i) => (
                <motion.div 
                  key={b.title} 
                  className="text-center p-3 md:p-4 rounded-[14px] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.08 * i }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  {b.isPlaid ? (
                    <svg className="w-6 h-6 mx-auto mb-1.5" viewBox="0 0 24 24" fill="none">
                      <path d="M3 7.5L7.5 3H16.5L21 7.5V16.5L16.5 21H7.5L3 16.5V7.5Z" fill="#111111"/>
                      <path d="M8.5 8H10.5V16H8.5V8Z" fill="white"/>
                      <path d="M12 8H14V12H16V14H14V16H12V14H10V12H12V8Z" fill="white"/>
                    </svg>
                  ) : (
                    <span className="text-xl block mb-1.5">{b.icon}</span>
                  )}
                  <p className="text-xs font-medium text-text-primary mb-0.5">{b.title}</p>
                  <p className="text-[10px] text-text-muted">{b.desc}</p>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
