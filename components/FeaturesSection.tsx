'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Button from './ui/Button'
import { APP_STORE_URL, CTA_TEXT } from '@/lib/constants'

const features = [
  {
    id: 'feed',
    emoji: '📱',
    title: '5 minutes a day',
    description: 'Most finance apps dump everything on you. Peek only surfaces the moments worth noticing: an impulse buy, a habit creeping up, a subscription you forgot.',
    highlight: 'Just the stuff that needs attention',
    screenshot: '/images/app-screenshot.png',
  },
  {
    id: 'labeling',
    emoji: '🏷️',
    title: 'Emotional labeling',
    description: 'Your bank statement shows what you spent, not why. Peek knows the difference between the celebratory dinner, the stress takeout, and the coffee ritual.',
    highlight: 'Impulse • Intentional • Autopilot',
    screenshot: '/images/app-screenshot-insights.png',
  },
  {
    id: 'experiments',
    emoji: '🧪',
    title: 'Small experiments',
    description: "You're not bad at budgeting. Budgeting is bad at understanding you. Try small tests instead: pause an impulse buy for 48 hours, swap takeout for something you've wanted.",
    highlight: 'Change that actually sticks',
    screenshot: '/images/app-screenshot-goals.png',
  },
  {
    id: 'story',
    emoji: '📖',
    title: 'Your spending story',
    description: 'Over time, Peek builds a picture of you and your money. The disconnected "$647 on Food & Dining" becomes a story you actually recognize.',
    highlight: 'An autobiography of your financial life',
    screenshot: '/images/app-screenshot-chat.png',
  },
]

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Map scroll progress to feature index (0-3)
  const featureIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 1, 2, 3])

  return (
    <section ref={containerRef} className="relative" style={{ height: '400vh' }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9F6] via-[#FFF5F0] to-[#FFFBF9]" />
        
        {/* Ambient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,180,140,0.35) 0%, rgba(255,200,170,0.15) 40%, transparent 70%)' }}
          />
          <motion.div 
            className="absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.25) 0%, transparent 60%)' }}
          />
          <motion.div 
            className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(180,160,255,0.2) 0%, transparent 60%)' }}
          />
        </div>
        
        <div className="relative h-full flex items-center px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left - Content */}
              <div className="order-2 lg:order-1">
                {/* Header */}
                <motion.div
                  className="mb-8"
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
                
                {/* Feature cards - stacked */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <FeatureCard 
                      key={feature.id} 
                      feature={feature} 
                      index={index}
                      scrollProgress={scrollYProgress}
                    />
                  ))}
                </div>
                
                {/* CTA */}
                <motion.div
                  className="flex flex-col items-start gap-3 mt-10"
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
              
              {/* Right - Phone */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  {/* Soft glow behind phone */}
                  <div 
                    className="absolute -inset-16 rounded-full blur-3xl opacity-40"
                    style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.3) 0%, transparent 70%)' }}
                  />
                  
                  {/* Phone frame */}
                  <div className="relative w-[240px] md:w-[280px] lg:w-[300px]">
                    <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-black p-[3px] shadow-[0_25px_80px_rgba(0,0,0,0.15)]">
                      {/* Screen */}
                      <div className="absolute inset-[3px] rounded-[2.3rem] overflow-hidden bg-white">
                        {features.map((feature, index) => (
                          <ScreenImage 
                            key={feature.id}
                            src={feature.screenshot}
                            alt={feature.title}
                            index={index}
                            scrollProgress={scrollYProgress}
                          />
                        ))}
                      </div>
                      
                      {/* Notch */}
                      <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-b-2xl z-10" />
                      
                      {/* Screen shine */}
                      <div 
                        className="absolute inset-[3px] rounded-[2.3rem] pointer-events-none"
                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Scroll progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {features.map((_, index) => (
            <ScrollDot key={index} index={index} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Feature card component
function FeatureCard({ 
  feature, 
  index, 
  scrollProgress 
}: { 
  feature: typeof features[0]
  index: number
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  // Each feature is active in its scroll range
  const ranges = [
    [0, 0.25],
    [0.25, 0.5],
    [0.5, 0.75],
    [0.75, 1],
  ]
  
  const opacity = useTransform(
    scrollProgress,
    [ranges[index][0], ranges[index][0] + 0.05, ranges[index][1] - 0.05, ranges[index][1]],
    [0.4, 1, 1, 0.4]
  )
  
  const scale = useTransform(
    scrollProgress,
    [ranges[index][0], ranges[index][0] + 0.05, ranges[index][1] - 0.05, ranges[index][1]],
    [0.98, 1, 1, 0.98]
  )

  return (
    <motion.div
      className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm"
      style={{ opacity, scale }}
    >
      <div className="flex items-start gap-4">
        <span className="text-2xl flex-shrink-0">{feature.emoji}</span>
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
  )
}

// Screen image component with scroll-based visibility
function ScreenImage({
  src,
  alt,
  index,
  scrollProgress,
}: {
  src: string
  alt: string
  index: number
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const ranges = [
    [0, 0.25],
    [0.25, 0.5],
    [0.5, 0.75],
    [0.75, 1],
  ]
  
  const opacity = useTransform(
    scrollProgress,
    [ranges[index][0], ranges[index][0] + 0.05, ranges[index][1] - 0.05, ranges[index][1]],
    [0, 1, 1, 0]
  )

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </motion.div>
  )
}

// Scroll progress dot
function ScrollDot({
  index,
  scrollProgress,
}: {
  index: number
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const ranges = [
    [0, 0.25],
    [0.25, 0.5],
    [0.5, 0.75],
    [0.75, 1],
  ]
  
  const scale = useTransform(
    scrollProgress,
    [ranges[index][0], ranges[index][0] + 0.05, ranges[index][1] - 0.05, ranges[index][1]],
    [1, 1.5, 1.5, 1]
  )
  
  const bgOpacity = useTransform(
    scrollProgress,
    [ranges[index][0], ranges[index][0] + 0.05, ranges[index][1] - 0.05, ranges[index][1]],
    [0.3, 1, 1, 0.3]
  )

  return (
    <motion.div
      className="w-2 h-2 rounded-full bg-peek-orange"
      style={{ scale, opacity: bgOpacity }}
    />
  )
}
