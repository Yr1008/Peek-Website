'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-[#FFF9F6] via-[#FFF5F0] to-[#FFFBF9]" style={{ height: '400vh' }}>
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
        
        {/* Centered content layout */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 md:px-8">
          {/* Header - at top */}
          <motion.div
            className="text-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-peek-orange font-medium mb-2 text-xs uppercase tracking-[0.2em]">
              How Peek works
            </p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-text-primary leading-tight">
              Understand yourself.{' '}
              <span className="text-peek-orange">Change naturally follows.</span>
            </h2>
          </motion.div>
          
          {/* Centered Phone */}
          <div className="relative flex-shrink-0">
            {/* Soft glow behind phone */}
            <div 
              className="absolute -inset-16 rounded-full blur-3xl opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(254,135,92,0.3) 0%, transparent 70%)' }}
            />
            
            {/* Phone frame */}
            <div className="relative w-[200px] md:w-[240px] lg:w-[260px]">
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
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[70px] h-[20px] bg-black rounded-b-2xl z-10" />
                
                {/* Screen shine */}
                <div 
                  className="absolute inset-[3px] rounded-[2.3rem] pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%)' }}
                />
              </div>
            </div>
          </div>
          
          {/* Feature text below phone */}
          <div className="mt-6 md:mt-8 text-center max-w-md mx-auto h-[140px] md:h-[120px] relative">
            {features.map((feature, index) => (
              <FeatureText 
                key={feature.id} 
                feature={feature} 
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
          
          {/* Progress dots */}
          <div className="flex gap-3 mt-4 md:mt-6">
            {features.map((_, index) => (
              <ScrollDot key={index} index={index} scrollProgress={scrollYProgress} />
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            className="flex flex-col items-center gap-2 mt-6 md:mt-8"
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
      </div>
    </section>
  )
}

// Feature text component with fade animations
function FeatureText({ 
  feature, 
  index, 
  scrollProgress 
}: { 
  feature: typeof features[0]
  index: number
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  // Each feature is active in its scroll range (4 features over 400vh = 0.25 each)
  const ranges = [
    [0, 0.25],
    [0.25, 0.5],
    [0.5, 0.75],
    [0.75, 1],
  ]
  
  // First text starts visible, last text stays visible at end
  const opacity = useTransform(
    scrollProgress,
    index === 0 
      ? [0, ranges[index][1] - 0.08, ranges[index][1]]
      : index === 3
        ? [ranges[index][0], ranges[index][0] + 0.08, 1]
        : [ranges[index][0], ranges[index][0] + 0.08, ranges[index][1] - 0.08, ranges[index][1]],
    index === 0 
      ? [1, 1, 0]
      : index === 3
        ? [0, 1, 1]
        : [0, 1, 1, 0]
  )
  
  // Slight upward movement on enter
  const y = useTransform(
    scrollProgress,
    index === 0 
      ? [0, ranges[index][1] - 0.08, ranges[index][1]]
      : index === 3
        ? [ranges[index][0], ranges[index][0] + 0.08, 1]
        : [ranges[index][0], ranges[index][0] + 0.08, ranges[index][1] - 0.08, ranges[index][1]],
    index === 0 
      ? [0, 0, -20]
      : index === 3
        ? [20, 0, 0]
        : [20, 0, 0, -20]
  )

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-start"
      style={{ opacity, y }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{feature.emoji}</span>
        <h3 className="font-heading text-xl md:text-2xl text-text-primary">
          {feature.title}
        </h3>
      </div>
      <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-3 px-4">
        {feature.description}
      </p>
      <span className="inline-block bg-peek-orange/10 text-peek-orange rounded-full px-4 py-1.5 text-sm font-medium">
        {feature.highlight}
      </span>
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
  // Each feature is active in its scroll range (4 features over 400vh = 0.25 each)
  const ranges = [
    [0, 0.25],
    [0.25, 0.50],
    [0.50, 0.75],
    [0.75, 1],
  ]
  
  // First image starts visible, last image stays visible at end
  const opacity = useTransform(
    scrollProgress,
    index === 0 
      ? [0, ranges[index][1] - 0.05, ranges[index][1]]
      : index === 3
        ? [ranges[index][0], ranges[index][0] + 0.05, 1]
        : [ranges[index][0], ranges[index][0] + 0.05, ranges[index][1] - 0.05, ranges[index][1]],
    index === 0 
      ? [1, 1, 0]
      : index === 3
        ? [0, 1, 1]
        : [0, 1, 1, 0]
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
  // Each feature is active in its scroll range (4 features over 400vh = 0.25 each)
  const ranges = [
    [0, 0.25],
    [0.25, 0.50],
    [0.50, 0.75],
    [0.75, 1],
  ]
  
  // First dot starts active, last dot stays active at end
  const scale = useTransform(
    scrollProgress,
    index === 0 
      ? [0, ranges[index][1] - 0.05, ranges[index][1]]
      : index === 3
        ? [ranges[index][0], ranges[index][0] + 0.05, 1]
        : [ranges[index][0], ranges[index][0] + 0.05, ranges[index][1] - 0.05, ranges[index][1]],
    index === 0 
      ? [1.5, 1.5, 1]
      : index === 3
        ? [1, 1.5, 1.5]
        : [1, 1.5, 1.5, 1]
  )
  
  const bgOpacity = useTransform(
    scrollProgress,
    index === 0 
      ? [0, ranges[index][1] - 0.05, ranges[index][1]]
      : index === 3
        ? [ranges[index][0], ranges[index][0] + 0.05, 1]
        : [ranges[index][0], ranges[index][0] + 0.05, ranges[index][1] - 0.05, ranges[index][1]],
    index === 0 
      ? [1, 1, 0.3]
      : index === 3
        ? [0.3, 1, 1]
        : [0.3, 1, 1, 0.3]
  )

  return (
    <motion.div
      className="w-2 h-2 rounded-full bg-peek-orange"
      style={{ scale, opacity: bgOpacity }}
    />
  )
}
