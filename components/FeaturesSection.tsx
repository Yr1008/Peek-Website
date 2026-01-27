'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import { APP_STORE_URL, CTA_TEXT } from '@/lib/constants'

const features = [
  {
    id: 'feed',
    emoji: '📱',
    title: '5 minutes a day',
    description: 'No spreadsheets. No overwhelm. Just the moments worth noticing—an impulse buy, a habit forming, a subscription you forgot.',
    highlight: 'Only what matters',
    screenshot: '/images/app-screenshot.png',
  },
  {
    id: 'labeling',
    emoji: '🏷️',
    title: 'Know the why, not just the what',
    description: 'Your bank shows what you spent. Peek shows why—the stress takeout, the celebration dinner, the autopilot coffee run.',
    highlight: 'Impulse • Intentional • Autopilot',
    screenshot: '/images/app-screenshot-insights.png',
  },
  {
    id: 'experiments',
    emoji: '🧪',
    title: 'Tiny experiments, real change',
    description: 'Skip the strict budgets. Try small tests instead: pause an impulse for 48 hours, swap takeout for something you actually want.',
    highlight: 'Change that sticks',
    screenshot: '/images/app-screenshot-goals.png',
  },
  {
    id: 'story',
    emoji: '📖',
    title: 'Your money, your story',
    description: 'Watch patterns emerge over time. "$647 on Food & Dining" becomes a story you actually recognize—and can change.',
    highlight: 'See the bigger picture',
    screenshot: '/images/app-screenshot-chat.png',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden bg-gradient-to-b from-[#FFF9F6] via-[#FFF5F0] to-[#FFFBF9]">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,180,140,0.25) 0%, rgba(255,200,170,0.1) 40%, transparent 70%)' }}
        />
        <div 
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.15) 0%, transparent 60%)' }}
        />
        <div 
          className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(180,160,255,0.12) 0%, transparent 60%)' }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-peek-orange font-medium mb-3 text-xs uppercase tracking-[0.2em]">
            How Peek works
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
            Understand yourself.
            <br />
            <span className="text-peek-orange">Change naturally follows.</span>
          </h2>
        </motion.div>
        
        {/* Phone + Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Phone - Left side on desktop, top on mobile */}
          <motion.div 
            className="flex justify-center lg:justify-end order-1 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Soft glow behind phone */}
              <div 
                className="absolute -inset-12 rounded-full blur-3xl opacity-40"
                style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.3) 0%, transparent 70%)' }}
              />
              
              {/* Phone frame */}
              <div className="relative w-[220px] md:w-[260px] lg:w-[280px]">
                <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-black p-[3px] shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
                  {/* Screen */}
                  <div className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden bg-white">
                    <Image
                      src="/images/app-screenshot.png"
                      alt="Peek App"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Notch */}
                  <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[70px] h-[20px] bg-black rounded-b-2xl z-10" />
                  
                  {/* Screen shine */}
                  <div 
                    className="absolute inset-[3px] rounded-[2.3rem] pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%)' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Features - Right side on desktop, bottom on mobile */}
          <div className="order-2 lg:order-2 space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-100/80 shadow-sm hover:shadow-md transition-shadow duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{feature.emoji}</span>
                  <div>
                    <h3 className="font-heading text-lg text-text-primary mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-2">
                      {feature.description}
                    </p>
                    <span className="inline-block bg-peek-orange/10 text-peek-orange rounded-full px-3 py-1 text-xs font-medium">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button href={APP_STORE_URL} size="large">
            {CTA_TEXT.primary}
          </Button>
          <p className="text-xs text-text-muted">Free on iOS · No credit card needed</p>
        </motion.div>
      </div>
    </section>
  )
}
