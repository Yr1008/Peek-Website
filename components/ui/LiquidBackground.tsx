'use client'

import { motion } from 'framer-motion'

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Warm, inviting base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F6] via-white to-[#FFFAF8]" />

      {/* Aurora layer - slow-moving color waves */}
      <div className="absolute inset-0 aurora-layer hidden md:block" />
      
      {/* Subtle warm grain texture overlay */}
      <div className="absolute inset-0 grain-overlay hidden md:block" />

      {/* Ambient animated layers - desktop only */}
      <div className="hidden md:block">
        {/* Primary breathing glow - top right - like a calm heartbeat */}
        <motion.div 
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] blob-morph"
          style={{ 
            background: 'radial-gradient(circle, #FFB088 0%, #FFD4C4 30%, transparent 70%)',
            filter: 'blur(40px)',
            animationDuration: '26s',
          }}
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.28, 0.2],
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: 'easeInOut',
          }}
        />
        
        {/* Secondary breathing glow - bottom left */}
        <motion.div 
          className="absolute top-[55%] -left-[15%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] blob-morph"
          style={{ 
            background: 'radial-gradient(circle, #FFD4C4 0%, #FFF0E8 40%, transparent 70%)',
            filter: 'blur(50px)',
            animationDuration: '22s',
            animationDelay: '2s',
          }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: 'easeInOut', 
            delay: 3,
          }}
        />
        
        {/* Floating comfort blob 1 - slow drift */}
        <motion.div 
          className="absolute top-[20%] right-[25%] w-[25vw] h-[25vw] max-w-[250px] max-h-[250px] blob-morph"
          style={{ 
            background: 'radial-gradient(circle, #FFB088 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDuration: '24s',
            animationDelay: '4s',
          }}
          animate={{ 
            x: [0, 30, 0, -20, 0],
            y: [0, -20, 10, -10, 0],
            scale: [1, 1.05, 0.98, 1.02, 1],
            opacity: [0.08, 0.12, 0.08, 0.1, 0.08],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: 'easeInOut',
          }}
        />
        
        {/* Floating comfort blob 2 - gentle wanderer */}
        <motion.div 
          className="absolute top-[65%] right-[10%] w-[20vw] h-[20vw] max-w-[200px] max-h-[200px] blob-morph"
          style={{ 
            background: 'radial-gradient(circle, #FFF0E8 0%, #FFD4C4 30%, transparent 70%)',
            filter: 'blur(45px)',
            animationDuration: '20s',
            animationDelay: '6s',
          }}
          animate={{ 
            x: [0, -25, 15, -10, 0],
            y: [0, 15, -25, 10, 0],
            opacity: [0.1, 0.15, 0.1, 0.12, 0.1],
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 5,
          }}
        />
        
        {/* Floating comfort blob 3 - subtle presence */}
        <motion.div 
          className="absolute top-[35%] left-[5%] w-[18vw] h-[18vw] max-w-[180px] max-h-[180px] blob-morph"
          style={{ 
            background: 'radial-gradient(circle, #FFD4C4 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDuration: '28s',
            animationDelay: '3s',
          }}
          animate={{ 
            x: [0, 20, -15, 10, 0],
            y: [0, -15, 20, -5, 0],
            opacity: [0.06, 0.1, 0.07, 0.09, 0.06],
          }}
          transition={{ 
            duration: 28, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 8,
          }}
        />
        
        {/* Warm accent glow - center area */}
        <motion.div 
          className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] blob-morph"
          style={{ 
            background: 'radial-gradient(circle, #FFF0E8 0%, transparent 60%)',
            filter: 'blur(50px)',
            animationDuration: '24s',
            animationDelay: '1s',
          }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        
        {/* Floating hearts - subtle love theme - slower */}
        <motion.div
          className="absolute top-[15%] right-[12%] text-2xl"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.15, 0.25, 0.15],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          🧡
        </motion.div>
        
        <motion.div
          className="absolute top-[60%] left-[8%] text-xl"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        >
          🧡
        </motion.div>
        
        <motion.div
          className="absolute top-[80%] right-[30%] text-lg"
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
        >
          🧡
        </motion.div>
        
        {/* Sparkle accents - gentler */}
        <motion.div
          className="absolute top-[25%] left-[18%] text-sm"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          ✨
        </motion.div>
        
        <motion.div
          className="absolute top-[70%] right-[15%] text-sm"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        >
          ✨
        </motion.div>
      </div>
    </div>
  )
}
