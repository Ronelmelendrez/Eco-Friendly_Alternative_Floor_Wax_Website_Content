import React from 'react'
import { motion } from 'framer-motion'
import { Target, Lightbulb, Shield, AlertCircle, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { AnimatedBlob } from '../common/BackgroundElements'
import { researchData } from '@/data/researchData'

const AboutStudy: React.FC = () => {
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section id="about" className="relative py-20 bg-gradient-modern overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <AnimatedBlob
          color="rgba(45, 90, 39, 0.08)"
          size="lg"
          position={{ top: '-100px', right: '-80px' }}
          duration={26}
          delay={0}
        />
        <AnimatedBlob
          color="rgba(244, 208, 63, 0.08)"
          size="md"
          position={{ bottom: '-60px', left: '5%' }}
          duration={30}
          delay={3}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="About the Study" 
          subtitle="Understanding the research background and objectives"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Background Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            transition={{ duration: 0.6 }}
          >
            <Card hover={true} className="h-full group bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white">Background of the Study</h3>
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <ArrowRight className="w-5 h-5 text-forest-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-coconut-brown to-forest-green rounded-full mb-4" />
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {researchData.background}
              </p>
            </Card>
          </motion.div>
          
          {/* Problem Statement Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            transition={{ duration: 0.6 }}
          >
            <Card hover={true} className="h-full group bg-gradient-to-br from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white">Statement of the Problem</h3>
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <AlertCircle className="w-5 h-5 text-forest-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-forest-green to-soft-yellow rounded-full mb-4" />
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {researchData.problem}
              </p>
            </Card>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Objectives */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="p-3 bg-gradient-to-br from-coconut-brown/20 to-forest-green/20 rounded-full"
                >
                  <Target size={24} className="text-coconut-brown" />
                </motion.div>
                <h3 className="text-2xl font-bold text-coconut-brown dark:text-cream-white">Objectives of the Study</h3>
              </div>

              {/* General Objective */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-6 bg-gradient-to-r from-coconut-brown/10 via-transparent to-transparent dark:from-coconut-brown/5 rounded-xl border-l-4 border-coconut-brown"
              >
                <Badge variant="info">General Objective</Badge>
                <p className="text-gray-600 dark:text-gray-300 mt-3 font-medium">
                  To determine the feasibility of Coconut Oil with Cardava Banana Peel as an alternative floor wax.
                </p>
              </motion.div>

              {/* Specific Objectives */}
              <div>
                <p className="font-semibold text-forest-green mb-4 flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity }}
                  >
                    ⚙️
                  </motion.span>
                  Specific Objectives
                </p>
                <motion.ul
                  className="space-y-3"
                  variants={container}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {researchData.objectives.map((obj, idx) => (
                    <motion.li key={idx} variants={item} className="flex items-start gap-3 group">
                      <motion.span
                        className="text-forest-green mt-1 font-bold flex-shrink-0"
                        whileHover={{ scale: 1.3 }}
                      >
                        {idx + 1}.
                      </motion.span>
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-forest-green transition-colors">
                        {obj}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>

          {/* Hypothesis */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="p-3 bg-gradient-to-br from-soft-yellow/30 to-forest-green/20 rounded-full"
                >
                  <Lightbulb size={24} className="text-soft-yellow" />
                </motion.div>
                <h3 className="text-2xl font-bold text-coconut-brown dark:text-cream-white">Research Hypothesis</h3>
              </div>

              {/* Null Hypothesis */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-6 bg-gradient-to-br from-blue-50 to-blue-50/30 dark:from-blue-900/20 dark:to-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">H₀</span>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">Null Hypothesis</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                  "{researchData.hypothesis.null}"
                </p>
              </motion.div>

              {/* Interpretation */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-6 bg-gradient-to-br from-green-50 to-green-50/30 dark:from-green-900/20 dark:to-green-900/10 rounded-xl border border-green-200 dark:border-green-800/30"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-forest-green text-white text-xs font-bold rounded-full">📊</span>
                  <p className="font-semibold text-green-900 dark:text-green-100">Interpretation</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {researchData.hypothesis.interpretation}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Significance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="p-3 bg-gradient-to-br from-coconut-brown/20 to-soft-yellow/20 rounded-full"
                >
                  <Shield size={24} className="text-coconut-brown" />
                </motion.div>
                <h3 className="text-2xl font-bold text-coconut-brown dark:text-cream-white">Significance of the Study</h3>
              </div>

              <motion.ul
                className="space-y-3"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {researchData.significance.map((significanceItem, idx) => (
                  <motion.li
                    key={idx}
                    variants={item}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/30 hover:bg-white/80 dark:hover:bg-gray-800/50 transition-all group cursor-pointer"
                  >
                    <motion.div
                      className="flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <CheckCircle className="w-5 h-5 text-forest-green" />
                    </motion.div>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-coconut-brown dark:group-hover:text-cream-white transition-colors">
                      {significanceItem}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* Scope and Limitations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className="p-3 bg-gradient-to-br from-soft-yellow/30 to-forest-green/20 rounded-full"
                >
                  <AlertCircle size={24} className="text-soft-yellow" />
                </motion.div>
                <h3 className="text-2xl font-bold text-coconut-brown dark:text-cream-white">Scope & Limitations</h3>
              </div>

              {/* Scope Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-5 bg-gradient-to-br from-purple-50 to-purple-50/30 dark:from-purple-900/20 dark:to-purple-900/10 rounded-xl border-l-4 border-purple-400 dark:border-purple-600"
              >
                <p className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Scope
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {researchData.scope}
                </p>
              </motion.div>

              {/* Limitations Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-5 bg-gradient-to-br from-orange-50 to-orange-50/30 dark:from-orange-900/20 dark:to-orange-900/10 rounded-xl border-l-4 border-orange-400 dark:border-orange-600"
              >
                <p className="font-semibold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Limitations
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {researchData.limitations}
                </p>
              </motion.div>

              {/* Research Locale */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-gradient-to-r from-forest-green/10 to-coconut-brown/10 dark:from-forest-green/5 dark:to-coconut-brown/5 rounded-lg border border-forest-green/30 dark:border-forest-green/20"
              >
                <div className="flex items-center gap-3 text-forest-green dark:text-soft-yellow">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide opacity-75">Research Locale</p>
                    <p className="text-sm font-medium">{researchData.locale}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutStudy