'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const tiktokVideos = [
  { 
    thumbnail: '/images/tiktok/tiktok-1.jpg',
    url: 'https://www.tiktok.com/t/ZP8fEo2UK/',
  },
  { 
    thumbnail: '/images/tiktok/tiktok-2.jpg',
    url: 'https://www.tiktok.com/t/ZP8fodtGv/',
  },
  { 
    thumbnail: '/images/tiktok/tiktok-3.jpg',
    url: 'https://www.tiktok.com/t/ZP8fEKTEY/',
  },
  { 
    thumbnail: '/images/tiktok/tiktok-4.jpg',
    url: 'https://www.tiktok.com/t/ZP8foUh7u/',
  },
  { 
    thumbnail: '/images/tiktok/tiktok-5.jpg',
    url: 'https://www.tiktok.com/t/ZP8foxTpt/',
  },
]

export default function SocialBuzzSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [20, -20])

  return (
    <section ref={sectionRef} className="pt-6 md:pt-8 pb-12 md:pb-16 lg:pb-20 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF9] via-[#FFF8F5] to-white" />
      
      {/* Ambient orbs - GPU accelerated */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large center peach glow */}
        <motion.div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(255,180,140,0.3) 0%, rgba(255,200,170,0.12) 40%, transparent 70%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Left pink accent */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(255,150,200,0.18) 0%, transparent 60%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Right purple accent */}
        <motion.div 
          className="absolute top-1/2 -right-20 w-[500px] h-[500px] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle, rgba(180,160,255,0.15) 0%, transparent 60%)', willChange: 'transform' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-100/50 mb-5"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-lg">🔥</span>
            <span className="text-sm font-medium text-text-primary">Going viral</span>
          </motion.div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            People are <span className="text-peek-orange">loving Peek</span>
          </h2>
          <p className="text-base text-text-secondary max-w-md mx-auto">
            Join thousands discovering a better way to understand their money
          </p>
        </motion.div>
        
        {/* TikTok Video Grid - iPhone aspect ratio */}
        <motion.div
          className="grid grid-cols-5 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto"
          style={{ y }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tiktokVideos.map((video, i) => (
            <motion.a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[9/19.5] rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-shadow duration-200 transform-gpu hover:scale-[1.03] hover:-translate-y-1"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.06 * i }}
            >
              {/* Thumbnail image */}
              <Image
                src={video.thumbnail}
                alt={`TikTok video ${i + 1}`}
                fill
                className="object-cover"
                loading={i < 3 ? "eager" : "lazy"}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              
              {/* TikTok logo */}
              <div className="absolute top-3 right-3">
                <div className="w-7 h-7 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
              </div>
              
            </motion.a>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  )
}
