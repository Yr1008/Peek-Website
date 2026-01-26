'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const painPoints = [
  { icon: '📊', text: 'Shows what you spent, not why' },
  { icon: '😰', text: 'Vague guilt without clarity' },
  { icon: '🔄', text: 'Budget → fail → repeat cycle' },
]

const solutions = [
  { icon: '💡', text: 'Labels the why: impulse, comfort, intentional', color: 'from-peek-orange-light/50 to-peek-orange-light/20' },
  { icon: '🎯', text: 'Surfaces patterns you can actually change', color: 'from-peek-purple-soft/50 to-peek-purple-soft/20' },
  { icon: '🧠', text: 'Learns what matters to you', color: 'from-peek-sky-soft/50 to-peek-sky-soft/20' },
]

export default function ProblemSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-peek-purple-soft/30 border border-peek-purple/10 mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-lg">🔄</span>
            <span className="text-sm font-medium text-text-primary">The real problem</span>
          </motion.div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary mb-3">
            The gap that causes anxiety.
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-xl mx-auto">
            You feel like you <span className="italic">should</span> know where your money goes. But you <span className="italic">actually</span> don&apos;t. <span className="text-peek-orange font-medium">That gap is the problem.</span>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Other apps - Boring Spreadsheet UI */}
          <motion.div
            className="p-4 md:p-5 rounded-[18px] bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[10px] text-text-muted mb-3 uppercase tracking-wide">Other apps</p>
            
            {/* Spreadsheet-style boring UI */}
            <div className="bg-white rounded-xl mb-4 shadow-sm border border-gray-200 overflow-hidden">
              {/* Formula bar */}
              <div className="flex items-center gap-2 px-2 py-1.5 bg-gray-50 border-b border-gray-200">
                <div className="text-[10px] text-gray-500 font-mono bg-white px-2 py-0.5 border border-gray-200 rounded">fx</div>
                <div className="flex-1 text-[10px] text-gray-400 font-mono">=SUM(B2:B15)/COUNT(A2:A15)*0.85</div>
              </div>
              
              {/* Spreadsheet grid */}
              <div className="overflow-hidden">
                {/* Header row */}
                <div className="grid grid-cols-5 border-b border-gray-200">
                  <div className="py-1.5 px-2 bg-gray-100 text-[9px] font-mono text-gray-500 border-r border-gray-200"></div>
                  <div className="py-1.5 px-2 bg-gray-100 text-[9px] font-mono text-gray-500 text-center border-r border-gray-200">A</div>
                  <div className="py-1.5 px-2 bg-gray-100 text-[9px] font-mono text-gray-500 text-center border-r border-gray-200">B</div>
                  <div className="py-1.5 px-2 bg-gray-100 text-[9px] font-mono text-gray-500 text-center border-r border-gray-200">C</div>
                  <div className="py-1.5 px-2 bg-gray-100 text-[9px] font-mono text-gray-500 text-center">D</div>
                </div>
                
                {/* Data rows */}
                {[1, 2, 3, 4].map((row) => (
                  <div key={row} className="grid grid-cols-5 border-b border-gray-100 last:border-b-0">
                    <div className="py-1.5 px-2 bg-gray-50 text-[9px] font-mono text-gray-400 border-r border-gray-200">{row}</div>
                    <div className="py-1.5 px-2 text-[9px] font-mono text-gray-600 border-r border-gray-100">
                      {row === 1 ? 'Food' : row === 2 ? 'Trans.' : row === 3 ? 'Bills' : 'Misc.'}
                    </div>
                    <div className="py-1.5 px-2 text-[9px] font-mono text-gray-600 text-right border-r border-gray-100">
                      ${row === 1 ? '847.32' : row === 2 ? '234.50' : row === 3 ? '1,205' : '156.78'}
                    </div>
                    <div className="py-1.5 px-2 text-[9px] font-mono text-gray-400 text-right border-r border-gray-100">
                      {row === 1 ? '23.4%' : row === 2 ? '6.5%' : row === 3 ? '33.2%' : '4.3%'}
                    </div>
                    <div className="py-1.5 px-2 text-[9px] font-mono text-gray-400 text-right">
                      {row === 1 ? '+12%' : row === 2 ? '-3%' : row === 3 ? '0%' : '+8%'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sad Peek character */}
            <div className="absolute top-3 right-3 w-16 h-16 opacity-40">
              <Image
                src="/images/12.png"
                alt="Confused"
                width={96}
                height={96}
                className="object-contain grayscale"
              />
            </div>
            
            <div className="space-y-1.5">
              {painPoints.map((p) => (
                <div key={p.text} className="flex items-center gap-2 py-1">
                  <span className="text-sm grayscale opacity-60">{p.icon}</span>
                  <span className="text-xs text-text-muted line-through decoration-gray-300">{p.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Peek - Clean, friendly UI with liquid glass */}
          <motion.div
            className="p-4 md:p-5 rounded-[18px] relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.8) 100%)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(254,135,92,0.08), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,1)',
              border: '1px solid rgba(254,135,92,0.12)',
            }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-[10px] text-peek-orange mb-3 uppercase tracking-wide font-medium">With Peek</p>
            
            {/* Clean Peek UI mockup */}
            <div className="bg-white rounded-xl p-3 mb-4 shadow-md border border-white/50 relative">
              {/* Chat bubble style */}
              <div className="flex gap-2 items-start mb-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-peek-orange to-peek-orange-light flex items-center justify-center shrink-0 shadow-sm">
                  <span className="text-white text-[10px] font-bold">P</span>
                </div>
                <div className="flex-1">
                  <div className="bg-peek-orange-light/40 rounded-lg rounded-tl-sm px-3 py-2">
                    <p className="text-xs text-text-primary leading-relaxed">That $47 at Target, was it planned or impulse? Did it feel worth it?</p>
                  </div>
                </div>
              </div>
              {/* Action buttons */}
              <div className="flex gap-1.5 ml-8">
                <motion.div 
                  className="px-2.5 py-1 bg-peek-purple-soft/60 rounded-full cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-[10px] font-medium text-peek-purple-deep">Worth it ✓</span>
                </motion.div>
                <motion.div 
                  className="px-2.5 py-1 bg-peek-sky-soft/60 rounded-full cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-[10px] font-medium text-peek-sky-deep">Impulse 🤷</span>
                </motion.div>
              </div>
              {/* Sparkle */}
              <motion.div 
                className="absolute -top-1 -right-1 text-sm"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
            
            <div className="space-y-1.5">
              {solutions.map((p, i) => (
                <motion.div 
                  key={p.text} 
                  className={`flex items-center gap-2 py-1.5 px-3 rounded-lg bg-gradient-to-r ${p.color}`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: 0.15 + i * 0.06 }}
                >
                  <span className="text-sm">{p.icon}</span>
                  <span className="text-xs text-text-primary font-medium">{p.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Happy Peek character */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/11.png"
                alt="Peek"
                width={96}
                height={96}
                className="object-contain drop-shadow-md"
              />
            </motion.div>
            
            {/* Decorative blurs */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-peek-orange/12 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-peek-purple-soft/30 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
