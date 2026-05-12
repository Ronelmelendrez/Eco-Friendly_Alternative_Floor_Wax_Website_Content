import React from 'react'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-coconut-brown dark:text-cream-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-gradient-to-r from-coconut-brown to-forest-green rounded-full mt-4 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}

export default SectionTitle