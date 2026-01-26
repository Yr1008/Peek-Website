'use client'

import { motion } from 'framer-motion'
import PeekCharacter from './ui/PeekCharacter'
import { METRICS } from '@/lib/constants'

const testimonials = [
  { 
    text: "I finally get where my money goes. The breakdowns are so clear, it's kind of addicting to check.", 
    author: 'Sarah K.',
    source: 'App Store Review',
    avatar: '👩🏻',
    rating: 5
  },
  { 
    text: "Other apps stressed me out. Peek makes me feel like I actually have my life together.", 
    author: 'Mike R.',
    source: 'App Store Review',
    avatar: '👨🏽',
    rating: 5
  },
  { 
    text: "It's so pretty and actually useful?? Like having a bestie who's secretly a finance genius.", 
    author: 'Priya T.',
    source: 'App Store Review',
    avatar: '👩🏾',
    rating: 5
  },
]

const trustBadges = [
  { icon: '🔒', text: 'Bank-level security', color: 'from-blue-50 to-blue-100/50' },
  { icon: '🛡️', text: 'Your data stays yours', color: 'from-green-50 to-green-100/50' },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-6 md:px-8 lg:px-12 relative overflow-hidden bg-warm-beige">
      {/* Peek character listening to testimonials - RIGHT */}
      <motion.div
        className="absolute right-4 md:right-12 bottom-12 z-10 hidden lg:block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center gap-1">
          <motion.div
            className="bg-[#007AFF] text-white rounded-2xl rounded-br-sm px-3 py-2 shadow-lg"
            initial={{ opacity: 0, scale: 0.8, x: 10 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            <p className="text-xs font-bold whitespace-nowrap">*blushes* 🥹</p>
          </motion.div>
          <PeekCharacter size="lg" variant="eyes" />
        </div>
      </motion.div>
      
      <div className="max-w-5xl mx-auto relative">
        {/* Rating header - minimal */}
        <motion.div
          className="flex flex-col items-center text-center mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs text-text-muted uppercase tracking-widest mb-4">What people say</p>
          
          {/* Clean rating display */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-4 h-4 text-peek-orange"
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-text-secondary">{METRICS.appRating} on App Store</span>
          </div>
          <p className="text-sm text-text-muted">Trusted by {METRICS.userCount} people</p>
        </motion.div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-3 mb-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-4 md:p-5 rounded-[18px] relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              whileHover={{ y: -3, boxShadow: '0 12px 36px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)', transition: { duration: 0.2 } }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-3 h-3 text-peek-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-sm text-text-primary leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              
              <div className="flex items-center gap-2">
                <span className="text-lg">{t.avatar}</span>
                <div>
                  <p className="text-xs font-medium text-text-primary">{t.author}</p>
                  <p className="text-[10px] text-text-muted">{t.source}</p>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-peek-orange-light/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        
        {/* Trust badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
        >
          {trustBadges.map((badge, i) => (
            <motion.div 
              key={badge.text}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${badge.color} border border-white/50`}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <span className="text-sm">{badge.icon}</span>
              <span className="text-xs font-medium text-text-primary">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
