'use client'

import { motion } from 'framer-motion'
import Button from './ui/Button'
import PeekCharacter from './ui/PeekCharacter'

const APP_STORE_URL = 'https://apps.apple.com/us/app/peek-ai-personal-finance-app/id6742875016'

export default function HeroNew() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#FFF8F5] via-white to-[#FFFAF8]">
      {/* Warm decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-[30%] -right-[20%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #FFB088 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[40%] -left-[20%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #FFD4C4 0%, transparent 70%)' }}
        />
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left - Emotional content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Made with love badge */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm border border-peek-orange/10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="text-peek-orange">🧡</span>
                <span className="text-sm font-medium text-text-secondary">Made with love, for you</span>
              </motion.div>
              
              {/* Main headline - warm and personal */}
              <motion.h1 
                className="font-heading text-4xl sm:text-5xl md:text-6xl text-text-primary mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Finally, an app that
                <br />
                <span className="text-peek-orange relative">
                  gets you.
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <motion.path
                      d="M2 8 Q50 2 100 8 T198 6"
                      fill="none"
                      stroke="#FFB088"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
              </motion.h1>
              
              {/* Empathetic subheadline */}
              <motion.p 
                className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Money stuff is hard. We built Peek to make it feel easy, 
                <span className="text-text-primary font-medium"> like having a friend who&apos;s really good with money.</span>
              </motion.p>
              
              {/* CTA with warmth */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button href={APP_STORE_URL} size="large">
                  Try Peek Free
                </Button>
                <p className="text-sm text-text-muted">
                  Free on iOS · 2 min setup
                </p>
              </motion.div>
              
              {/* Social proof snippet */}
              <motion.div 
                className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex -space-x-2">
                  {['👩🏻', '👨🏽', '👩🏾', '👨🏼'].map((emoji, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-warm-cream border-2 border-white flex items-center justify-center text-sm">
                      {emoji}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-text-muted">
                  <span className="text-text-primary font-semibold">10,000+</span> people found their calm
                </p>
              </motion.div>
            </motion.div>
            
            {/* Right - Peek character */}
            <motion.div 
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Main Peek character */}
              <div className="relative flex items-center gap-1">
                {/* Glow behind Peek */}
                <div 
                  className="absolute inset-0 scale-150 rounded-full opacity-40 blur-3xl"
                  style={{ background: 'radial-gradient(circle, #FFB088 0%, transparent 70%)' }}
                />
                
                {/* CSS-based Peek character */}
                <PeekCharacter size="xl" variant="smile" />
                
                {/* Speech bubble - supportive message */}
                <motion.div
                  className="bg-[#007AFF] text-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-xl max-w-[180px]"
                  initial={{ opacity: 0, scale: 0.8, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <p className="text-sm font-bold">
                    You&apos;ve got this! 💪
                  </p>
                </motion.div>
                
                {/* Floating hearts */}
                <motion.div
                  className="absolute -left-8 top-1/4 text-2xl"
                  animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  🧡
                </motion.div>
                <motion.div
                  className="absolute -right-4 bottom-1/3 text-xl"
                  animate={{ y: [0, -8, 0], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-text-muted"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs">See how it works</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-50">
            <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
