'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const painPoints = [
  { 
    emoji: '😶‍🌫️', 
    text: 'Vague guilt about spending',
    subtext: '"I feel like I spend too much but I don\'t know where."',
  },
  { 
    emoji: '😳', 
    text: 'Surprise shame moments',
    subtext: '"Wait, I spent $40/month on that?"',
  },
  { 
    emoji: '🤷', 
    text: 'Decision paralysis',
    subtext: '"I don\'t know if I can actually afford this."',
  },
  { 
    emoji: '🔄', 
    text: 'The restrict-splurge cycle',
    subtext: '"I overspent so now I\'ll restrict... which makes me want to splurge."',
  },
]

export default function EmpathySection() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 lg:px-12 relative overflow-hidden bg-white">
      <div 
        className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFB088 0%, transparent 70%)' }}
      />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Section intro */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.p 
            className="text-peek-orange font-medium mb-4 text-sm uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Sound familiar?
          </motion.p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
            The anxiety isn&apos;t about
            <br />
            <span className="text-peek-orange">spending too much.</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            It&apos;s the gap between what you <em>should</em> know about your money and what you <em>actually</em> know. That disconnect is what creates the stress.
          </p>
        </motion.div>
        
        {/* Pain points */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-16">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-peek-orange/30 hover:bg-peek-orange/5 transition-all duration-300">
                <span className="text-2xl mb-2 block">{point.emoji}</span>
                <p className="font-medium text-text-primary mb-1">{point.text}</p>
                <p className="text-sm text-text-muted">{point.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Transition */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative inline-block mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/9.png"
                alt="Peek"
                width={160}
                height={160}
                className="object-contain drop-shadow-lg"
              />
            </motion.div>
            
            <motion.div
              className="absolute -right-28 md:-right-36 top-2 bg-peek-orange text-white rounded-2xl px-4 py-2 shadow-lg"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <p className="text-sm font-medium whitespace-nowrap">Let&apos;s close that gap</p>
              <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 rotate-45 w-2 h-2 bg-peek-orange" />
            </motion.div>
          </motion.div>
          
          <h3 className="font-heading text-2xl md:text-3xl text-text-primary mb-4">
            What if you actually<br />understood yourself?
          </h3>
          <p className="text-text-secondary max-w-md mx-auto">
            Anxiety relief through clarity, not restriction. You don&apos;t need to spend less to feel better. You need to understand what you&apos;re doing and why.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
