import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedBlobProps {
  color: string
  size: 'sm' | 'md' | 'lg' | 'xl'
  delay?: number
  duration?: number
  position: { top?: string; bottom?: string; left?: string; right?: string }
  blur?: boolean
}

const sizeMap = {
  sm: 'w-40 h-40',
  md: 'w-64 h-64',
  lg: 'w-96 h-96',
  xl: 'w-[500px] h-[500px]',
}

export const AnimatedBlob: React.FC<AnimatedBlobProps> = ({
  color,
  size,
  delay = 0,
  duration = 20,
  position,
  blur = true,
}) => {
  const variants = {
    animate: {
      scale: [1, 1.1, 1],
      x: [0, 30, 0],
      y: [0, 50, 0],
      rotate: [0, 90, 180],
    },
  }

  return (
    <motion.div
      className={`absolute rounded-full ${sizeMap[size]} ${blur ? 'blur-3xl' : ''} pointer-events-none`}
      style={{
        background: color,
        ...position,
        opacity: 0.6,
      }}
      variants={variants}
      animate="animate"
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  )
}

interface GradientMeshProps {
  colors: string[]
  opacity?: number
}

export const GradientMesh: React.FC<GradientMeshProps> = ({ colors, opacity = 0.5 }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
        </filter>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors[0]} stopOpacity={opacity} />
          <stop offset="100%" stopColor={colors[1]} stopOpacity={opacity * 0.5} />
        </linearGradient>
        <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors[1]} stopOpacity={opacity} />
          <stop offset="100%" stopColor={colors[2] || colors[0]} stopOpacity={opacity * 0.5} />
        </linearGradient>
      </defs>

      <rect width="1200" height="800" fill="url(#grad1)" />
      <circle cx="200" cy="200" r="400" fill="url(#grad2)" filter="url(#blur)" opacity={opacity} />
      <circle cx="1000" cy="600" r="350" fill={colors[2] || colors[0]} filter="url(#blur)" opacity={opacity * 0.4} />
    </svg>
  )
}

interface OrbitingParticlesProps {
  count?: number
  radius?: number
  duration?: number
  particleSize?: number
  color?: string
}

export const OrbitingParticles: React.FC<OrbitingParticlesProps> = ({
  count = 8,
  radius = 200,
  duration = 30,
  particleSize = 3,
  color = 'rgba(93, 58, 33, 0.3)',
}) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    angle: (i / count) * 360,
  }))

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particleSize,
            height: particleSize,
            background: color,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              transform: `translateY(-${radius}px)`,
              left: '50%',
              top: '50%',
              marginLeft: `-${particleSize / 2}px`,
              marginTop: `-${particleSize / 2}px`,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

interface FloatingShapesProps {
  count?: number
  shapes?: ('circle' | 'square' | 'triangle')[]
  speed?: 'slow' | 'medium' | 'fast'
}

export const FloatingShapes: React.FC<FloatingShapesProps> = ({
  count = 5,
  shapes = ['circle', 'square'],
  speed = 'medium',
}) => {
  const speedMap = { slow: 15, medium: 10, fast: 5 }
  const duration = speedMap[speed]

  const items = Array.from({ length: count }, (_, i) => ({
    id: i,
    shape: shapes[i % shapes.length],
    delay: (i / count) * duration,
    size: Math.random() * 40 + 20,
  }))

  const renderShape = (shape: string, size: number) => {
    const className = `w-${Math.round(size / 4)} h-${Math.round(size / 4)} opacity-30`
    switch (shape) {
      case 'circle':
        return <div className={`${className} rounded-full bg-coconut-brown`} />
      case 'square':
        return <div className={`${className} bg-forest-green`} />
      case 'triangle':
        return (
          <div
            className={`${className} bg-soft-yellow`}
            style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          initial={{
            x: Math.random() * 800 - 400,
            y: Math.random() * 600 - 300,
            opacity: 0,
          }}
          animate={{
            y: [null, -100, 100, -50],
            opacity: [0, 0.5, 0.3, 0],
          }}
          transition={{
            duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {renderShape(item.shape, item.size)}
        </motion.div>
      ))}
    </div>
  )
}
