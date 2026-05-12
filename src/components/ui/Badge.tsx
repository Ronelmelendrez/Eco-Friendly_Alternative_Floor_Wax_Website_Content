import React from 'react'
import { cn } from '@/lib/utils'
import { BadgeProps } from '@/types/ui.types'

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    default: 'bg-coconut-brown/10 text-coconut-brown dark:bg-cream-white/10 dark:text-cream-white'
  }
  
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-sm font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}

export default Badge