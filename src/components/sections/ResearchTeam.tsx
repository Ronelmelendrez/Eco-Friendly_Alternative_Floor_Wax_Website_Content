import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import { AnimatedBlob } from '../common/BackgroundElements'
import { researchTeam, universityInfo } from '@/data/teamData'

const ResearchTeam: React.FC = () => {
  return (
    <section id="team" className="relative py-20 bg-gradient-modern overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <AnimatedBlob
          color="rgba(244, 208, 63, 0.08)"
          size="lg"
          position={{ top: '50%', left: '-150px' }}
          duration={25}
          delay={0}
        />
        <AnimatedBlob
          color="rgba(45, 90, 39, 0.06)"
          size="md"
          position={{ top: '-80px', right: '5%' }}
          duration={29}
          delay={4}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="Research Team" 
          subtitle="The researchers behind this capstone project"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {researchTeam.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card hover={true} className="text-center h-full">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-coconut-brown to-forest-green flex items-center justify-center text-white text-2xl font-bold">
                  {member.initials}
                </div>
                <h3 className="font-bold text-coconut-brown dark:text-cream-white">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Card hover={false} className="inline-block w-full max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <GraduationCap className="w-12 h-12 text-coconut-brown" />
              <div>
                <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white">{universityInfo.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{universityInfo.college}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-sm text-gray-500">
                  <MapPin size={14} />
                  <span>{universityInfo.location}</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchTeam