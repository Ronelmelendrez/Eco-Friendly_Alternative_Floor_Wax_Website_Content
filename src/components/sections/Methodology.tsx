import React from 'react'
import { motion } from 'framer-motion'
import { Beaker, FlaskConical, TestTube, Gauge, Sun, BarChart, Leaf, Droplet } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import { AnimatedBlob } from '../common/BackgroundElements'
import { methodologySteps } from '@/data/methodologyData'

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  Droplet: <Droplet className="w-6 h-6" />,
  Beaker: <Beaker className="w-6 h-6" />,
  TestTube: <TestTube className="w-6 h-6" />,
  Gauge: <Gauge className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
  BarChart: <BarChart className="w-6 h-6" />
}

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="relative py-20 bg-gradient-modern overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <AnimatedBlob
          color="rgba(244, 208, 63, 0.08)"
          size="lg"
          position={{ top: '-100px', right: '-100px' }}
          duration={28}
          delay={0}
        />
        <AnimatedBlob
          color="rgba(45, 90, 39, 0.08)"
          size="md"
          position={{ bottom: '-80px', left: '5%' }}
          duration={32}
          delay={3}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="Research Methodology" 
          subtitle="A systematic approach to developing and testing the alternative floor wax"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologySteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card hover={true} className="h-full text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coconut-brown/20 to-forest-green/20 flex items-center justify-center text-coconut-brown dark:text-cream-white">
                    {iconMap[step.icon] || <Beaker className="w-6 h-6" />}
                  </div>
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-coconut-brown text-white text-sm font-bold mb-3">
                  {step.id}
                </div>
                <h3 className="text-lg font-bold text-coconut-brown dark:text-cream-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <BarChart size={18} className="text-forest-green" />
            <span className="text-sm font-medium">Research Design: Experimental</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Methodology