'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'default' | 'large' | 'medium'
  className?: string
  icon?: React.ReactNode
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'default',
  className = '',
  icon,
}: ButtonProps) {

  const baseStyles = 'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-full transition-all duration-300 whitespace-nowrap'
  
  const variants = {
    primary: 'bg-peek-orange text-white shadow-lg shadow-peek-orange/25 hover:shadow-xl hover:shadow-peek-orange/30 hover:bg-peek-orange-dark',
    secondary: 'bg-white text-text-primary border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-gray-100/50'
  }
  
  const sizes = {
    medium: 'px-5 py-2.5 text-sm',
    default: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base'
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    className: combinedStyles,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15, ease: 'easeOut' },
  }

  const content = (
    <>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a 
        {...motionProps}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button {...motionProps}>
      {content}
    </motion.button>
  )
}
