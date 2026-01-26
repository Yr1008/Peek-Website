'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'large' | 'medium'
  className?: string
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'default',
  className = '',
}: ButtonProps) {

  const baseStyles = 'inline-flex items-center justify-center font-body font-medium rounded-full transition-all duration-200'
  
  const variants = {
    primary: 'bg-peek-orange text-white hover:bg-peek-orange-dark shadow-[0_0_20px_rgba(254,135,92,0.4),0_4px_15px_rgba(254,135,92,0.3)] hover:shadow-[0_0_30px_rgba(254,135,92,0.5),0_6px_20px_rgba(254,135,92,0.4)]',
    secondary: 'bg-transparent text-text-primary border border-gray-200 hover:border-peek-orange/30 hover:bg-peek-orange/5 hover:shadow-[0_0_15px_rgba(254,135,92,0.2)]'
  }
  
  const sizes = {
    medium: 'px-4 py-2 text-sm',
    default: 'px-5 py-2.5 text-sm',
    large: 'px-6 py-3 text-base'
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    className: combinedStyles,
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2, type: 'spring', stiffness: 400 },
  }

  if (href) {
    return (
      <motion.a 
        {...motionProps}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button {...motionProps}>
      {children}
    </motion.button>
  )
}
