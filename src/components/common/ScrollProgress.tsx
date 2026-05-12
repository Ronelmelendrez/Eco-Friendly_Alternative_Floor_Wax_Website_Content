import React from 'react'
import { motion } from 'framer-motion'
import { useScroll } from '@/hooks/useScroll'

const ScrollProgress: React.FC = () => {
  const { scrollProgress } = useScroll()
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-coconut-brown to-forest-green z-50"
      style={{ scaleX: scrollProgress / 100, transformOrigin: '0%' }}
    />
  )
}

export default ScrollProgress