import React from 'react'
import ResultsDashboard from '@/components/sections/ResultsDashboard'
import { motion } from 'framer-motion'

const ResultsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-8"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-coconut-brown dark:text-cream-white mb-4">
            Research Results
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive statistical analysis and performance evaluation of the alternative floor wax compared to commercial products.
          </p>
        </div>
      </div>
      <ResultsDashboard />
    </motion.div>
  )
}

export default ResultsPage