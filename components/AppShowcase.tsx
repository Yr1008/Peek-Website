'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const screenshots = [
  {
    id: 'chat',
    src: '/images/app-screenshot-chat.png',
    alt: 'AI chat with Peek',
    label: 'chat with your ai coach',
  },
  {
    id: 'insights',
    src: '/images/app-screenshot-insights.png',
    alt: 'Spending insights',
    label: 'see where your money goes',
  },
  {
    id: 'goals',
    src: '/images/app-screenshot-goals.png',
    alt: 'Financial goals',
    label: 'track your progress',
  },
]

export default function AppShowcase() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-peek-purple-soft/20 via-warm-cream to-peek-sky-soft/20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-text-primary mb-3 lowercase">
            peek inside the app
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-md mx-auto">
            beautiful design meets smart money management
          </p>
        </motion.div>
        
        {/* Screenshots carousel */}
        <div className="flex justify-center gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              className="flex-shrink-0 snap-center"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="relative group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {/* Phone frame */}
                <div className="relative w-48 md:w-56 lg:w-64 aspect-[9/19] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-black p-1">
                  <div className="absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
                </div>
                
                {/* Label */}
                <motion.p
                  className="text-center mt-4 text-sm text-text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {screenshot.label}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* App Store callout */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? 'text-peek-orange' : 'text-peek-orange/50'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-text-primary font-medium">4.5 on the App Store</span>
            <span className="text-sm text-text-muted">200+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
