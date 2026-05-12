import React from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import { frictionData, shininessData, tTestResults, frictionTrials, shininessTrials } from '@/data/chartData'

const ResultsDashboard: React.FC = () => {
  return (
    <section id="results" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Results Dashboard" 
          subtitle="Statistical analysis and performance comparison with commercial floor wax"
        />
        
        {/* Friction Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card hover={false}>
              <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white mb-4 text-center">Friction Test Results</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={frictionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="name" tick={{ fill: 'currentColor' }} />
                  <YAxis domain={[0, 2.5]} tick={{ fill: 'currentColor' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '8px' }}
                    formatter={(value: number) => value.toFixed(3)}
                  />
                  <Legend />
                  <Bar dataKey="value" name="Mean Friction (seconds)" radius={[8, 8, 0, 0]}>
                    {frictionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
                <div className="p-3 bg-cream-dark/50 dark:bg-gray-800/50 rounded-lg">
                  <p className="font-semibold">Alternative Wax Mean</p>
                  <p className="text-2xl font-bold text-coconut-brown">{frictionTrials.alternative.mean}</p>
                </div>
                <div className="p-3 bg-cream-dark/50 dark:bg-gray-800/50 rounded-lg">
                  <p className="font-semibold">Commercial Wax Mean</p>
                  <p className="text-2xl font-bold text-forest-green">{frictionTrials.commercial.mean}</p>
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* Shininess Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card hover={false}>
              <h3 className="text-xl font-bold text-coconut-brown dark:text-cream-white mb-4 text-center">Shininess Test Results</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={shininessData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                  <XAxis dataKey="name" tick={{ fill: 'currentColor' }} />
                  <YAxis domain={[0, 16]} tick={{ fill: 'currentColor' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: '8px' }}
                    formatter={(value: number) => `${value} lux`}
                  />
                  <Legend />
                  <Bar dataKey="value" name="Mean Shininess (lux)" radius={[8, 8, 0, 0]}>
                    {shininessData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
                <div className="p-3 bg-cream-dark/50 dark:bg-gray-800/50 rounded-lg">
                  <p className="font-semibold">Alternative Wax Mean</p>
                  <p className="text-2xl font-bold text-coconut-brown">{shininessTrials.alternativeMean} lux</p>
                </div>
                <div className="p-3 bg-cream-dark/50 dark:bg-gray-800/50 rounded-lg">
                  <p className="font-semibold">Commercial Wax Mean</p>
                  <p className="text-2xl font-bold text-forest-green">{shininessTrials.commercialMean} lux</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* T-Test Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card hover={false}>
              <h3 className="text-lg font-bold text-coconut-brown dark:text-cream-white mb-3">Friction T-Test Analysis</h3>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">T-value:</span>
                  <span className="font-mono">{tTestResults.friction.tValue}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">P-value:</span>
                  <span className="font-mono">{tTestResults.friction.pValue}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Interpretation:</span>
                  <span className="text-forest-green font-medium">{tTestResults.friction.interpretation}</span>
                </div>
              </div>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card hover={false}>
              <h3 className="text-lg font-bold text-coconut-brown dark:text-cream-white mb-3">Shininess T-Test Analysis</h3>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">T-value:</span>
                  <span className="font-mono">{tTestResults.shininess.tValue}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium">P-value:</span>
                  <span className="font-mono">{tTestResults.shininess.pValue}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Interpretation:</span>
                  <span className="text-forest-green font-medium">{tTestResults.shininess.interpretation}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
        
        {/* Detailed Trial Data */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Card hover={false}>
            <h3 className="text-lg font-bold text-coconut-brown dark:text-cream-white mb-4 text-center">Detailed Trial Results</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2">Test</th>
                    <th className="text-center">Trial 1</th>
                    <th className="text-center">Trial 2</th>
                    <th className="text-center">Trial 3</th>
                    <th className="text-center">Mean</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-medium">Friction (Alt, 19°)</td>
                    <td className="text-center">3.29s</td>
                    <td className="text-center">2.16s</td>
                    <td className="text-center">1.63s</td>
                    <td className="text-center">2.36s</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-medium">Friction (Alt, 25°)</td>
                    <td className="text-center">1.19s</td>
                    <td className="text-center">1.04s</td>
                    <td className="text-center">1.06s</td>
                    <td className="text-center">1.096s</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-medium">Friction (Comm, 19°)</td>
                    <td className="text-center">3.19s</td>
                    <td className="text-center">2.20s</td>
                    <td className="text-center">1.72s</td>
                    <td className="text-center">2.37s</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-2 font-medium">Friction (Comm, 25°)</td>
                    <td className="text-center">1.17s</td>
                    <td className="text-center">1.08s</td>
                    <td className="text-center">1.14s</td>
                    <td className="text-center">1.13s</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Shininess (Alt)</td>
                    <td className="text-center">13 lux</td>
                    <td className="text-center">14 lux</td>
                    <td className="text-center">12 lux</td>
                    <td className="text-center">13 lux</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Shininess (Comm)</td>
                    <td className="text-center">12 lux</td>
                    <td className="text-center">11 lux</td>
                    <td className="text-center">11 lux</td>
                    <td className="text-center">11.333 lux</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ResultsDashboard