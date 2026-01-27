'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { APP_STORE_URL, CTA_TEXT } from '@/lib/constants'

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-md rounded-full px-4 py-2 shadow-sm border border-peek-orange/10">
          {/* Logo with Peek character */}
          <motion.a 
            href="/"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/images/peek-icon.png"
              alt="Peek"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-heading text-lg text-text-primary">
              Peek
            </span>
          </motion.a>

          {/* CTA */}
          <motion.a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-peek-orange text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-peek-orange-dark transition-colors duration-200 shadow-sm whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {CTA_TEXT.navbar}
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}
