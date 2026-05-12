import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical, Leaf, BarChart } from 'lucide-react'
import Button from '../ui/Button'
import { AnimatedBlob, GradientMesh, OrbitingParticles } from '../common/BackgroundElements'
import { frictionData, shininessData } from '@/data/chartData'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0">
        <GradientMesh 
          colors={['#5C3A21', '#2D5A27', '#F4D03F']} 
          opacity={0.4}
        />
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Blobs */}
        <AnimatedBlob
          color="rgba(244, 208, 63, 0.15)"
          size="xl"
          position={{ top: '-200px', right: '-200px' }}
          duration={25}
          delay={0}
        />
        <AnimatedBlob
          color="rgba(45, 90, 39, 0.12)"
          size="lg"
          position={{ bottom: '-150px', left: '-150px' }}
          duration={30}
          delay={2}
        />
        <AnimatedBlob
          color="rgba(92, 58, 33, 0.1)"
          size="md"
          position={{ top: '50%', left: '10%' }}
          duration={22}
          delay={4}
        />

        {/* Orbiting Particles */}
        <div className="absolute top-1/3 right-1/4">
          <OrbitingParticles
            count={12}
            radius={150}
            duration={40}
            particleSize={2}
            color="rgba(92, 58, 33, 0.4)"
          />
        </div>
      </div>

      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream-white/30 dark:to-gray-900/40" />
      
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