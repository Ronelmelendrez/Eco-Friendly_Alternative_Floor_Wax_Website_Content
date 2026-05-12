import React from 'react'
import { motion } from 'framer-motion'
import ResearchTeam from '@/components/sections/ResearchTeam'
import { references } from '@/data/referencesData'
import Card from '@/components/ui/Card'
import SectionTitle from '@/components/common/SectionTitle'

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-8"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-coconut-brown dark:text-cream-white mb-4">
            About This Research
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A capstone project submitted to the College of Forestry and Environmental Sciences, Caraga State University.
          </p>
        </div>
      </div>
      
      <ResearchTeam />
      
      {/* References Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="References" 
            subtitle="Scholarly sources cited in this research"
          />
          
          <div className="max-w-3xl mx-auto">
            <Card hover={false}>
              <ul className="space-y-3">
                {references.map((ref, idx) => (
                  <li key={idx} className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">{ref.authors}</span> ({ref.year}). <span className="italic">{ref.title}</span>. {ref.type}.
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default AboutPage