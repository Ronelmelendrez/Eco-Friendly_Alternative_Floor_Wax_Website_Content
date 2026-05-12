import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Lightbulb } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'

const Conclusions: React.FC = () => {
  const conclusions = [
    "Coconut Oil contains Lauric Acid and Myristic Acid, while Cardava Banana Peel contains Potassium, which are useful in floor wax production.",
    "The alternative floor wax demonstrated effectiveness in terms of friction and shininess.",
    "The alternative floor wax obtained comparable results with commercial floor wax.",
    "Statistical analysis revealed that there is no significant difference between the alternative floor wax and commercial floor wax in terms of friction and shininess.",
    "The study supports the feasibility of Coconut Oil with Cardava Banana Peel as an alternative floor wax."
  ]
  
  return (
    <section id="conclusions" className="py-20 bg-gradient-to-br from-cream-white to-cream-dark dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Conclusions" 
          subtitle="Key findings derived from the research analysis"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card hover={false} className="bg-gradient-to-r from-coconut-brown/5 to-forest-green/5">
            <ul className="space-y-4">
              {conclusions.map((conclusion, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-forest-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-200 leading-relaxed">{conclusion}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <Lightbulb className="w-5 h-5 text-soft-yellow" />
            <span className="font-medium">Overall Feasibility: The alternative floor wax is a viable eco-friendly substitute for commercial floor wax.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Conclusions