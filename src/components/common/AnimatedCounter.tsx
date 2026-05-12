import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, suffix = '', prefix = '', decimals = 3 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()
  const [count, setCount] = React.useState(0)
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      let start = 0
      const duration = 1500
      const step = value / (duration / 16)
      
      const timer = setInterval(() => {
        start += step
        if (start >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value, controls])
  
  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="text-3xl md:text-4xl font-bold text-coconut-brown dark:text-cream-white"
    >
      {prefix}{count.toFixed(decimals)}{suffix}
    </motion.span>
  )
}

export default AnimatedCounter