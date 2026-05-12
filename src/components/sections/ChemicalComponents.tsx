import React from 'react'
import { motion } from 'framer-motion'
import { Droplet, Apple, Beaker, CheckCircle } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const ChemicalComponents: React.FC = () => {
  const components = [
    {
      title: "Coconut Oil (Cocos nucifera)",
      icon: <Droplet className="w-12 h-12 text-coconut-brown" />,
      description: "Coconut oil was used as one of the primary ingredients in producing the alternative floor wax.",
      compounds: [
        { name: "Lauric Acid", property: "Can be used in cleaning and furniture care products" },
        { name: "Myristic Acid", property: "Functions as a surfactant and lubricant in manufacturing" }
      ],
      role: "These properties make coconut oil a suitable ingredient for floor wax production."
    },
    {
      title: "Cardava Banana Peel (Musa acuminata × balbasiana)",
      icon: <Apple className="w-12 h-12 text-soft-yellow" />,
      description: "Cardava banana peel extract was used as another major ingredient in the alternative floor wax.",
      compounds: [
        { name: "Potassium", property: "Contributes to polishing and waxing effectiveness" }
      ],
      role: "The banana peel contains potassium and possesses slippery properties that contribute to polishing and waxing effectiveness. Because of these characteristics, banana peel extract may be used as an alternative ingredient for floor wax production."
    }
  ]
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }
  
  return (
    <section id="ingredients" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Ingredients & Chemical Components" 
          subtitle="Natural compounds that make this alternative floor wax effective"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {components.map((comp, idx) => (
            <motion.div
              key={comp.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card hover={true} className="h-full">
                <div className="flex items-center gap-4 mb-4">
                  {comp.icon}
                  <h3 className="text-2xl font-bold text-coconut-brown dark:text-cream-white">{comp.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">{comp.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-forest-green mb-2">Chemical Components:</h4>
                  <ul className="space-y-2">
                    {comp.compounds.map((c) => (
                      <li key={c.name} className="flex items-start gap-2">
                        <CheckCircle size={18} className="text-forest-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-coconut-brown dark:text-cream-white">{c.name}</span>
                          <span className="text-gray-600 dark:text-gray-300"> — {c.property}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4 pt-4 border-t border-coconut-brown/20">
                  <Badge variant="info">Importance</Badge>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{comp.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChemicalComponents