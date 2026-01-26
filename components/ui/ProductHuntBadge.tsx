'use client'

import { motion } from 'framer-motion'

export default function ProductHuntBadge() {
  return (
    <motion.a
      href="https://www.producthunt.com/products/peek-15"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Product Hunt logo */}
      <svg className="w-4 h-4" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#DA552F"
        />
        <path
          d="M22.667 20H17.333V13.333H22.667C24.507 13.333 26 14.827 26 16.667C26 18.507 24.507 20 22.667 20Z"
          fill="white"
        />
        <path
          d="M22.667 10H14V30H17.333V23.333H22.667C26.347 23.333 29.333 20.347 29.333 16.667C29.333 12.987 26.347 10 22.667 10Z"
          fill="white"
        />
      </svg>
      
      <div className="flex flex-col">
        <span className="text-[10px] text-text-muted leading-none">Product Hunt</span>
        <span className="text-xs font-semibold text-text-primary leading-tight">#1 Product of the Month</span>
      </div>
      
      {/* Sparkle - no rotation, just scale */}
      <motion.span
        className="text-sm"
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        ✨
      </motion.span>
    </motion.a>
  )
}
