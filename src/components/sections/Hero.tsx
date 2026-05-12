import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical, Leaf, BarChart } from 'lucide-react'
import Button from '../ui/Button'
import { researchData } from '@/data/researchData'
import { frictionData, shininessData } from '@/data/chartData'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-white via-cream-dark to-coconut-brown/10 dark:from-gray-900 dark:via-gray-800 dark:to-forest-green/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-soft-yellow/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-forest-green/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-coconut-brown dark:text-cream-white mb-6">
              <FlaskConical size={16} />
              Capstone Research Project 2024
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-coconut-brown dark:text-cream-white mb-6"
          >
            Eco-Friendly Alternative
            <span className="text-gradient block">Floor Wax</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            A scientific innovation using Coconut Oil (Cocos nucifera) and Cardava Banana Peel (Musa acuminata × balbasiana) as a sustainable alternative to commercial floor wax.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Explore Research
            </Button>
            <Button variant="outline" size="lg" icon={<BarChart size={18} />}>
              View Results
            </Button>
          </motion.div>
          
          {/* Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          >
            <div className="glass-card p-4 text-center">
              <BarChart className="w-8 h-8 text-coconut-brown mx-auto mb-2" />
              <div className="text-2xl font-bold text-coconut-brown dark:text-cream-white">{frictionData[0].value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Mean Friction (Alternative)</div>
            </div>
            <div className="glass-card p-4 text-center">
              <BarChart className="w-8 h-8 text-coconut-brown mx-auto mb-2" />
              <div className="text-2xl font-bold text-coconut-brown dark:text-cream-white">{shininessData[0].value} lux</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Mean Shininess (Alternative)</div>
            </div>
            <div className="glass-card p-4 text-center">
              <Leaf className="w-8 h-8 text-forest-green mx-auto mb-2" />
              <div className="text-sm font-semibold text-coconut-brown dark:text-cream-white">100% Natural</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Eco-Friendly Ingredients</div>
            </div>
            <div className="glass-card p-4 text-center">
              <FlaskConical className="w-8 h-8 text-soft-yellow mx-auto mb-2" />
              <div className="text-sm font-semibold text-coconut-brown dark:text-cream-white">Comparable Performance</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">No significant difference</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero