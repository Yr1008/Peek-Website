import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'narrow' | 'wide'
}

export default function Container({ 
  children, 
  className = '',
  size = 'default' 
}: ContainerProps) {
  const sizes = {
    narrow: 'max-w-3xl',
    default: 'max-w-5xl',
    wide: 'max-w-7xl'
  }

  return (
    <div className={`mx-auto px-6 sm:px-8 lg:px-12 ${sizes[size]} ${className}`}>
      {children}
    </div>
  )
}
