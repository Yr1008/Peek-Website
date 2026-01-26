'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const founders = [
  {
    name: 'Sherry',
    role: 'CEO',
    image: '/images/sherry.png',
    linkedin: 'https://www.linkedin.com/in/sherryjiang/',
    highlight: 'Google Pay · 0→100M',
    emoji: '🚀',
  },
  {
    name: 'Jeff',
    role: 'COO',
    image: '/images/jeff.png',
    linkedin: 'https://www.linkedin.com/in/jeffmin/',
    highlight: '2x Founder · Builder',
    emoji: '⚡',
  },
]

export default function TeamSection() {
  return (
    <section id="about" className="py-12 md:py-16 px-6 md:px-8 lg:px-12 relative overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Compact header with Peek */}
        <motion.div
          className="flex flex-col items-center text-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Peek character as the face of the section */}
          <motion.div
            className="relative w-16 h-16 mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/images/10.png"
              alt="Peek"
              fill
              className="object-contain"
            />
          </motion.div>
          
          <h2 className="font-heading text-2xl md:text-3xl text-text-primary mb-2">
            Built by people who <span className="text-peek-orange">get it</span>.
          </h2>
          <p className="text-sm text-text-muted max-w-sm">
            Finance pros who believe money should feel simple, not scary.
          </p>
        </motion.div>

        {/* Creative founder display - horizontal cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch mb-8">
          {founders.map((founder, i) => (
            <motion.a
              key={founder.name}
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer flex-1 max-w-xs"
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
              transition={{ duration: 0.35, delay: i * 0.1 }}
              whileHover={{ 
                y: -3, 
                boxShadow: '0 8px 30px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                transition: { duration: 0.2 } 
              }}
            >
              {/* Photo */}
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-peek-orange-light to-peek-purple-soft shadow-md flex-shrink-0 ring-2 ring-white">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-heading text-lg text-text-primary">{founder.name}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-peek-orange-light/30 text-peek-orange font-medium">
                    {founder.role}
                  </span>
                </div>
                <p className="text-xs text-text-muted mt-0.5 flex items-center gap-1">
                  <span>{founder.emoji}</span>
                  {founder.highlight}
                </p>
              </div>
              
              {/* LinkedIn arrow */}
              <motion.div
                className="text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={{ x: -5 }}
                whileHover={{ x: 0 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Simple mission tagline */}
        <motion.p
          className="text-center text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          On a mission to make Gen Z the <span className="text-peek-orange font-medium">main character</span> in their money story.
        </motion.p>
      </div>
    </section>
  )
}
