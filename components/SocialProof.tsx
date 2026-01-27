'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from './ui/Button'
import { TrustMarquee } from './ui/Marquee'
import { METRICS, APP_STORE_URL, CTA_TEXT } from '@/lib/constants'

const testimonials = [
  { 
    text: "I actually open this app. Like, voluntarily. That's never happened with a finance app.", 
    author: 'Sarah',
    avatar: '👩🏻',
  },
  { 
    text: "Found out I was spending $200/mo on subscriptions I forgot about. Peek paid for itself day 1.", 
    author: 'Marcus',
    avatar: '👨🏽',
  },
  { 
    text: "Finally an app that doesn't make me feel like garbage about my spending. It just... helps.", 
    author: 'Priya',
    avatar: '👩🏾',
  },
  { 
    text: "The AI coach is lowkey addicting. I ask it random money questions at 2am lol", 
    author: 'Jake',
    avatar: '👨🏼',
  },
]

export default function SocialProof() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section ref={sectionRef} className="py-12 md:py-16 pb-6 md:pb-8 px-6 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-[#FAFAFA] via-[#FFF9F7] to-[#FAFAFA]">
      {/* Animated ambient orbs - GPU accelerated */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(255,176,136,0.25) 0%, transparent 70%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(255,200,180,0.2) 0%, transparent 70%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(255,220,200,0.15) 0%, transparent 60%)', willChange: 'transform, opacity' }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.22, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-peek-orange font-medium mb-4 text-sm uppercase tracking-wider">
            Real talk
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary mb-6 leading-tight">
            Don&apos;t take our word for it
          </h2>
        </motion.div>
        
        {/* Tweet-style testimonials */}
        <motion.div className="grid md:grid-cols-2 gap-4 mb-12" style={{ y }}>
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* Author */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-text-primary text-sm">{testimonial.author}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-peek-orange text-xs">★</span>
                  ))}
                </div>
              </div>
              
              {/* Quote */}
              <p className="text-text-primary text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust badges marquee */}
        <motion.div
          className="mb-12 -mx-6 md:-mx-8 lg:-mx-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TrustMarquee className="py-4" />
        </motion.div>
        
        {/* Stats bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { value: METRICS.appRating, label: 'App Store rating' },
            { value: METRICS.downloads, label: 'downloads' },
            { value: METRICS.savedAmount, label: 'saved by users' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
            >
              <p className="font-heading text-3xl text-peek-orange">{stat.value}</p>
              <p className="text-xs text-text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Peek */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <motion.div
              className="will-change-transform"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/1.png"
                alt="Peek"
                width={160}
                height={160}
                className="object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
            <span className="absolute -right-6 -top-1 text-xl">🧡</span>
          </div>
        </div>
        
        {/* Mid-page CTA */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Button href={APP_STORE_URL} size="large">
            {CTA_TEXT.primary}
          </Button>
          <p className="text-xs text-text-muted">Free on iOS</p>
        </motion.div>
      </div>
    </section>
  )
}
