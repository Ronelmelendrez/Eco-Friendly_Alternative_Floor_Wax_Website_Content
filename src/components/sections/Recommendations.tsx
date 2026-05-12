import React from 'react'
import { motion } from 'framer-motion'
import { Users, Building2, Sprout, Microscope } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import { AnimatedBlob } from '../common/BackgroundElements'

const Recommendations: React.FC = () => {
  const recommendations = [
    {
      audience: "For Students, Janitors, Parents, and Household Cleaners",
      icon: <Users className="w-8 h-8" />,
      text: "The alternative floor wax may be used for polishing cemented floors in classrooms and households."
    },
    {
      audience: "For Commercial Industries",
      icon: <Building2 className="w-8 h-8" />,
      text: "Commercial industries involved in floor wax production may explore the use of Coconut Oil and Cardava Banana Peel as alternative ingredients."
    },
    {
      audience: "For Agricultural Sectors",
      icon: <Sprout className="w-8 h-8" />,
      text: "The study encourages the continued cultivation of coconut and banana plants because of their potential industrial applications."
    },
    {
      audience: "For Future Researchers",
      icon: <Microscope className="w-8 h-8" />,
      text: "Future researchers are encouraged to further improve the formulation and effectiveness of the alternative floor wax for various flooring types."
    }
  ]
  
  return (
    <section id="recommendations" className="relative py-20 bg-gradient-modern overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <AnimatedBlob
          color="rgba(45, 90, 39, 0.08)"
          size="lg"
          position={{ top: '-100px', left: '-100px' }}
          duration={27}
          delay={1}
        />
        <AnimatedBlob
          color="rgba(92, 58, 33, 0.08)"
          size="md"
          position={{ bottom: '-80px', right: '5%' }}
          duration={31}
          delay={3}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="Recommendations" 
          subtitle="Practical applications and directions for future work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec, idx) => (
            <motion.div
              key={rec.audience}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card hover={true} className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-coconut-brown/20 to-forest-green/20 text-coconut-brown dark:text-cream-white">
                    {rec.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-coconut-brown dark:text-cream-white mb-2">{rec.audience}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{rec.text}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommendations