'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'see where it goes',
    description: 'not boring categories. actual patterns that make sense.',
    gradient: 'from-peek-sky/40 to-peek-sky-soft/60',
  },
  {
    number: '02',
    title: 'understand the why',
    description: 'stress spending? retail therapy? peek gets it.',
    gradient: 'from-peek-purple/40 to-peek-purple-soft/60',
  },
  {
    number: '03',
    title: 'feel good about it',
    description: 'no shame. no red alerts. just helpful insights.',
    gradient: 'from-peek-orange-light/40 to-warm-cream/60',
  },
]

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Gradient background - sky to warm */}
      <div className="absolute inset-0 bg-gradient-to-b from-peek-sky-soft/20 via-warm-cream to-peek-orange-light/10" />
      
      {/* Decorative orbs */}
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(184, 217, 232, 0.4) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-text-primary mb-3 lowercase">
            here's how peek works
          </h2>
          <p className="text-text-muted text-base md:text-lg">
            spoiler: it's actually simple
          </p>
        </motion.div>
        
        {/* Steps - clean cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <motion.div
                className={`glass p-6 md:p-7 h-full bg-gradient-to-br ${step.gradient}`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {/* Step number */}
                <span className="text-xs font-medium text-text-muted mb-4 block">
                  {step.number}
                </span>
                
                <h3 className="font-heading text-xl md:text-2xl text-text-primary mb-2 lowercase">
                  {step.title}
                </h3>
                
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Coach Peek */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            className="relative w-20 h-20 md:w-24 md:h-24"
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/images/9.png"
              alt="peek coach"
              fill
              className="object-contain drop-shadow-lg"
            />
            {/* Sparkle */}
            <motion.span
              className="absolute -top-2 -right-2 text-lg"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
