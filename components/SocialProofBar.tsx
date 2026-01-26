'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Simulated real-time activity (Apple Store lines effect)
const activities = [
  { name: 'Sarah', action: 'just started her journey', location: 'New York', time: '2m ago' },
  { name: 'Marcus', action: 'saved $127 this week', location: 'LA', time: '5m ago' },
  { name: 'Priya', action: 'hit a 21-day streak', location: 'Chicago', time: '8m ago' },
  { name: 'Alex', action: 'just downloaded Peek', location: 'Austin', time: '12m ago' },
  { name: 'Jordan', action: 'reached their savings goal', location: 'Seattle', time: '15m ago' },
]

export default function SocialProofBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const current = activities[currentIndex]

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40 max-w-xs"
      initial={{ opacity: 0, y: 20, x: -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.div
        className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255,255,255,0.6)',
        }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Activity indicator */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-peek-orange to-peek-orange-light flex items-center justify-center text-white font-semibold text-sm">
            {current.name.charAt(0)}
          </div>
          {/* Live dot */}
          <motion.div
            className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <p className="text-sm text-text-primary font-medium truncate">
            {current.name} from {current.location}
          </p>
          <p className="text-xs text-text-muted truncate">
            {current.action} · {current.time}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
