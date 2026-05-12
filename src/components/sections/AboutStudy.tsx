import React from 'react'
import { motion } from 'framer-motion'
import { Target, Lightbulb, Shield, AlertCircle, MapPin } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import { researchData } from '@/data/researchData'

const AboutStudy: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="About the Study" 
          subtitle="Understanding the research background and objectives"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Card hover={false}>
              <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white mb-4">Background of the Study</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {researchData.background}
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card hover={false}>
              <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white mb-4">Statement of the Problem</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {researchData.problem}
              </p>
            </Card>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white mb-4 flex items-center gap-2">
              <Target size={22} /> Objectives of the Study
            </h3>
            <div className="mb-6">
              <p className="font-semibold text-forest-green mb-2">General Objective:</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">To determine the feasibility of Coconut Oil with Cardava Banana Peel as an alternative floor wax.</p>
            </div>
            <p className="font-semibold text-forest-green mb-2">Specific Objectives:</p>
            <ul className="space-y-3">
              {researchData.objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                  <span className="text-forest-green mt-1">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white mb-4 flex items-center gap-2">
              <Lightbulb size={22} /> Hypothesis
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-cream-dark/50 dark:bg-gray-800/50 rounded-xl">
                <p className="text-sm font-semibold text-coconut-brown dark:text-cream-white mb-2">Null Hypothesis (H₀):</p>
                <p className="text-gray-600 dark:text-gray-300">{researchData.hypothesis.null}</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-forest-green/10 rounded-xl">
              <p className="text-sm font-semibold text-forest-green mb-2">Interpretation:</p>
              <p className="text-gray-600 dark:text-gray-300">{researchData.hypothesis.interpretation}</p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white mb-4 flex items-center gap-2">
              <Shield size={22} /> Significance of the Study
            </h3>
            <ul className="space-y-3">
              {researchData.significance.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                  <span className="text-forest-green mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white mb-4 flex items-center gap-2">
              <AlertCircle size={22} /> Scope and Limitations
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-cream-dark/50 dark:bg-gray-800/50 rounded-xl">
                <p className="font-semibold text-coconut-brown dark:text-cream-white mb-2">Scope:</p>
                <p className="text-gray-600 dark:text-gray-300">{researchData.scope}</p>
              </div>
              <div className="p-4 bg-cream-dark/50 dark:bg-gray-800/50 rounded-xl">
                <p className="font-semibold text-coconut-brown dark:text-cream-white mb-2">Limitations:</p>
                <p className="text-gray-600 dark:text-gray-300">{researchData.limitations}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">Research Locale: {researchData.locale}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutStudy