'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import { APP_STORE_URL, CTA_TEXT } from '@/lib/constants'

const features = [
  {
    id: 'insights',
    title: 'Spot the patterns',
    description: 'See why you spend, not just what. Stress shopping? Self-care? Finally understand your habits.',
    screenshot: '/images/app-screenshot-insights.png',
  },
  {
    id: 'feed',
    title: 'Your daily check-in',
    description: 'Quick swipes, zero judgment. Review your spending in under 2 minutes a day.',
    screenshot: '/images/app-screenshot.png',
  },
  {
    id: 'chat',
    title: 'Your AI bestie',
    description: 'Ask anything about your money. Get real answers without the lecture.',
    screenshot: '/images/app-screenshot-chat.png',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-8 relative overflow-hidden bg-[#0a0a0a]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a] to-[#0a0a0a]" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header - Apple style */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            All on Peek.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Finally understand your spending habits. Get personalized insights and an AI coach that actually gets you.
          </p>
        </motion.div>
        
        {/* Three phones - Apple style layout */}
        <motion.div 
          className="flex justify-center items-end gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => {
            const isCenter = index === 1
            
            return (
              <motion.div
                key={feature.id}
                className={`relative ${isCenter ? 'z-10' : 'z-0'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Phone container */}
                <div 
                  className={`relative transition-all duration-500 ${
                    isCenter 
                      ? 'w-[200px] md:w-[280px] lg:w-[320px]' 
                      : 'w-[160px] md:w-[220px] lg:w-[260px] opacity-90'
                  }`}
                >
                  {/* Phone frame - realistic iPhone style */}
                  <div 
                    className={`relative rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden bg-[#1a1a1a] ${
                      isCenter ? 'p-[3px] md:p-[4px]' : 'p-[2px] md:p-[3px]'
                    }`}
                    style={{
                      aspectRatio: '9/19.5',
                      boxShadow: isCenter 
                        ? '0 0 0 1px rgba(255,255,255,0.1), 0 25px 80px rgba(0,0,0,0.5)' 
                        : '0 0 0 1px rgba(255,255,255,0.05), 0 15px 40px rgba(0,0,0,0.3)',
                    }}
                  >
                    {/* Screen */}
                    <div className="absolute inset-[3px] md:inset-[4px] rounded-[1.8rem] md:rounded-[2.2rem] lg:rounded-[2.6rem] overflow-hidden bg-black">
                      <Image
                        src={feature.screenshot}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Dynamic Island / Notch */}
                    <div 
                      className={`absolute top-[8px] md:top-[10px] left-1/2 -translate-x-1/2 bg-black rounded-full z-10 ${
                        isCenter 
                          ? 'w-[80px] md:w-[100px] h-[22px] md:h-[28px]' 
                          : 'w-[60px] md:w-[80px] h-[18px] md:h-[22px]'
                      }`}
                    />
                    
                    {/* Side button (right) */}
                    <div 
                      className="absolute right-[-2px] top-[25%] w-[3px] h-[60px] md:h-[80px] bg-[#2a2a2a] rounded-l-sm"
                    />
                    
                    {/* Volume buttons (left) */}
                    <div className="absolute left-[-2px] top-[20%] w-[3px] h-[25px] md:h-[35px] bg-[#2a2a2a] rounded-r-sm" />
                    <div className="absolute left-[-2px] top-[28%] w-[3px] h-[50px] md:h-[70px] bg-[#2a2a2a] rounded-r-sm" />
                    
                    {/* Screen shine */}
                    <div 
                      className="absolute inset-[3px] md:inset-[4px] rounded-[1.8rem] md:rounded-[2.2rem] lg:rounded-[2.6rem] pointer-events-none"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        {/* Feature descriptions - Apple style */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
            >
              <h3 className="font-heading text-xl md:text-2xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Button href={APP_STORE_URL} size="large">
            {CTA_TEXT.primary}
          </Button>
          <p className="text-sm text-gray-500">Free on iOS</p>
        </motion.div>
      </div>
    </section>
  )
}
