'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from './ui/Button'
import { APP_STORE_URL, METRICS, CTA_TEXT } from '@/lib/constants'

export default function FinalCTA() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [25, -25])

  return (
    <>
      <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-b from-white via-[#FFF9F6] to-[#FFF8F5]">
        {/* Enhanced ambient background - GPU accelerated */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large center glow */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full will-change-transform"
            style={{ background: 'radial-gradient(circle, rgba(255,176,136,0.25) 0%, rgba(255,200,170,0.12) 40%, transparent 70%)', willChange: 'transform' }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
          {/* Top left accent */}
          <motion.div 
            className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full will-change-transform"
            style={{ background: 'radial-gradient(circle, rgba(255,150,200,0.15) 0%, transparent 60%)', willChange: 'transform' }}
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
          {/* Bottom right accent */}
          <motion.div 
            className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full will-change-transform"
            style={{ background: 'radial-gradient(circle, rgba(180,160,255,0.12) 0%, transparent 60%)', willChange: 'transform' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        
        <motion.div className="max-w-3xl mx-auto relative text-center" style={{ y }}>
          {/* Peek character */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="will-change-transform"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/images/2.png"
                  alt="Peek"
                  width={200}
                  height={200}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -right-12 top-4 bg-peek-orange text-white rounded-2xl px-4 py-2 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <p className="text-sm font-bold whitespace-nowrap">I&apos;ll help you see!</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4 leading-tight">
              Ready to understand
              <br />
              <span className="text-peek-orange">your money habits?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto leading-relaxed">
              Join {METRICS.userCount} people who stopped guessing and started understanding. 
              When you see clearly, you&apos;ll know what to do.
            </p>
            
            {/* CTA + Trust badges together */}
            <motion.div 
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button href={APP_STORE_URL} size="large">
                {CTA_TEXT.primary}
              </Button>
              
              {/* Trust badges row */}
              <div className="inline-flex flex-wrap items-center justify-center gap-3 bg-white/80 backdrop-blur-md rounded-full px-5 py-3 shadow-sm border border-gray-100/50">
                <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <span className="text-green-500">✓</span> Cancel anytime
                </span>
                <span className="w-px h-4 bg-gray-200" />
                <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <span>🔒</span> Secured by Plaid
                </span>
                <span className="w-px h-4 bg-gray-200" />
                <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <span className="text-yellow-500">⭐</span> {METRICS.userCount} users
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-6 md:px-8 bg-[#FFF5F0] relative overflow-hidden">
        {/* Subtle ambient glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(255,200,170,1) 0%, transparent 70%)' }}
        />
        
        <div className="max-w-5xl mx-auto relative">
          <motion.div 
            className="flex flex-col items-center gap-5 text-center"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <a 
              href="/" 
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              <Image
                src="/images/peek-icon.png"
                alt="Peek"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="font-heading text-lg text-text-primary">Peek</span>
            </a>
            
            <div className="flex gap-6 text-sm text-text-muted">
              <a 
                href="https://peek.money/privacy" 
                className="hover:text-peek-orange transition-colors duration-150"
              >
                Privacy
              </a>
              <a 
                href="https://peek.money/terms" 
                className="hover:text-peek-orange transition-colors duration-150"
              >
                Terms
              </a>
              <a 
                href="mailto:hello@peek.money" 
                className="hover:text-peek-orange transition-colors duration-150"
              >
                Contact
              </a>
            </div>
            
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} Peek
            </p>
          </motion.div>
        </div>
      </footer>
      
      {/* Sticky mobile CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-gray-100 z-50 md:hidden"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1.2, duration: 0.35 }}
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm text-text-primary font-medium">Understand your habits</p>
            <p className="text-xs text-text-muted">Free · 2 min setup</p>
          </div>
          <Button href={APP_STORE_URL} size="medium">{CTA_TEXT.mobile}</Button>
        </div>
      </motion.div>
    </>
  )
}
