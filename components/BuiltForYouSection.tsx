'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const forYouIf = [
  { emoji: '🤔', text: 'You wonder where your money goes' },
  { emoji: '📱', text: 'You want answers, not spreadsheets' },
  { emoji: '🎯', text: 'You have goals but need a plan' },
  { emoji: '✨', text: 'You want to feel good about money' },
]

export default function BuiltForYouSection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary mb-5">
            Built for <span className="text-peek-orange">you.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-xl mx-auto">
            No matter where you are in your money journey, Peek meets you there.
          </p>
        </motion.div>

        {/* Simple grid of "Peek is for you if..." */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {forYouIf.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-base md:text-lg text-text-primary">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Peek character with simple message */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="relative w-20 h-20 mb-5"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/images/14.png"
              alt="Peek"
              fill
              className="object-contain"
            />
          </motion.div>
          <p className="text-lg text-text-secondary max-w-md">
            Think of Peek as your financial bestie who actually gets it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
