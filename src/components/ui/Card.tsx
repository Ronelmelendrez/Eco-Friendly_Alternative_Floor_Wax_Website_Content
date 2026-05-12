import React from 'react'
import { cn } from '@/lib/utils'
import { CardProps } from '@/types/ui.types'

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={cn(
        'glass-card p-6 transition-all duration-300',
        hover && 'hover:shadow-2xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card