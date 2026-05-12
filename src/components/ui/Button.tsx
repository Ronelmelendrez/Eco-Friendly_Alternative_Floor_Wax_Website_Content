import React from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types/ui.types'

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
  icon
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-coconut-brown to-forest-green text-white hover:shadow-lg hover:scale-105 focus:ring-coconut-brown',
    secondary: 'bg-cream-dark dark:bg-gray-700 text-coconut-brown dark:text-cream-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-400',
    outline: 'border-2 border-coconut-brown text-coconut-brown dark:border-cream-white dark:text-cream-white hover:bg-coconut-brown hover:text-white dark:hover:bg-cream-white dark:hover:text-coconut-brown focus:ring-coconut-brown',
    ghost: 'text-coconut-brown dark:text-cream-white hover:bg-coconut-brown/10 dark:hover:bg-white/10 focus:ring-coconut-brown'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-7 py-3.5 text-lg gap-2.5'
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </button>
  )
}

export default Button