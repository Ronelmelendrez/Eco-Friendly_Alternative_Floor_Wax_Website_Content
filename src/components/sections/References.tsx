import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Copy, ExternalLink, ChevronDown } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'
import Card from '../ui/Card'
import { AnimatedBlob } from '../common/BackgroundElements'
import { references, referenceCategories } from '@/data/referencesData'
import { Reference } from '@/types/reference.types'

const References: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All References')
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [copiedId, setCopiedId] = useState<number | null>(null)

  // Filter references based on search query and selected category
  const filteredReferences = useMemo(() => {
    return references.filter(ref => {
      const matchesSearch = 
        ref.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ref.source.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All References' || ref.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Generate APA-style citation
  const generateAPACitation = (ref: Reference): string => {
    return `${ref.authors} (${ref.year}). ${ref.title}. ${ref.source}.`
  }

  // Copy citation to clipboard
  const handleCopyCitation = (ref: Reference) => {
    const citation = generateAPACitation(ref)
    navigator.clipboard.writeText(citation)
    setCopiedId(ref.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Get category color
  const getCategoryColor = (category: string): string => {
    const categoryObj = referenceCategories.find(c => c.name === category)
    const colorMap: { [key: string]: string } = {
      gray: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100',
      yellow: 'bg-soft-yellow/20 text-soft-yellow dark:text-soft-yellow',
      amber: 'bg-amber-100/50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-200',
      orange: 'bg-orange-100/50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-200',
      blue: 'bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200',
      red: 'bg-red-100/50 dark:bg-red-900/30 text-red-700 dark:text-red-200',
      purple: 'bg-purple-100/50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-200'
    }
    return colorMap[categoryObj?.color || 'gray'] || colorMap.gray
  }

  return (
    <section id="references" className="relative py-20 bg-gradient-modern overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <AnimatedBlob
          color="rgba(92, 58, 33, 0.08)"
          size="lg"
          position={{ top: '100px', right: '-150px' }}
          duration={26}
          delay={0}
        />
        <AnimatedBlob
          color="rgba(244, 208, 63, 0.06)"
          size="md"
          position={{ bottom: '0px', left: '-100px' }}
          duration={30}
          delay={2}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Title */}
        <SectionTitle 
          title="References" 
          subtitle="Academic journals, scientific articles, and supporting literature used in the study"
        />

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by author, title, or source..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-soft-yellow focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex flex-wrap gap-2 justify-center"
        >
          {referenceCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.name
                  ? 'bg-soft-yellow text-gray-900 shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Citation Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-bold text-soft-yellow">{filteredReferences.length}</span> reference{filteredReferences.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* References Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredReferences.length > 0 ? (
              filteredReferences.map((reference, idx) => (
                <motion.div
                  key={reference.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Card
                    hover={true}
                    className="h-full flex flex-col bg-white dark:bg-gray-800/50 border-2 border-gray-100 dark:border-gray-700 hover:border-soft-yellow/50 transition-all"
                  >
                    {/* Reference Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(reference.category)}`}>
                          {reference.category}
                        </span>
                        <span className="text-sm font-bold text-soft-yellow">{reference.year}</span>
                      </div>
                      
                      <h4 className="text-base font-bold text-gray-900 dark:text-white leading-tight hover:text-soft-yellow transition-colors">
                        {reference.title}
                      </h4>
                    </div>

                    {/* Authors and Source */}
                    <div className="space-y-3 flex-grow">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Authors:</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold">
                          {reference.authors}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Source:</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {reference.source}
                        </p>
                      </div>

                      {reference.details && (
                        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                            {reference.details}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopyCitation(reference)}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-soft-yellow/20 hover:bg-soft-yellow/40 text-soft-yellow dark:text-soft-yellow transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                        <span className="text-xs font-semibold">
                          {copiedId === reference.id ? 'Copied!' : 'Copy Citation'}
                        </span>
                      </motion.button>

                      {reference.link && (
                        <motion.a
                          href={`https://${reference.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-100/20 dark:bg-blue-900/30 hover:bg-blue-100/40 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-xs font-semibold">Visit</span>
                        </motion.a>
                      )}
                    </div>

                    {/* Expand Section */}
                    <motion.button
                      onClick={() => setExpandedId(expandedId === reference.id ? null : reference.id)}
                      className="mt-3 w-full flex items-center justify-center gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400 hover:text-coconut-brown dark:hover:text-cream-white transition-colors"
                    >
                      <span>{expandedId === reference.id ? 'Hide APA Citation' : 'View APA Citation'}</span>
                      <motion.div
                        animate={{ rotate: expandedId === reference.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </motion.button>

                    {/* APA Citation Display */}
                    <AnimatePresence>
                      {expandedId === reference.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700"
                        >
                          <div className="bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg">
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-mono">
                              {generateAPACitation(reference)}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-12"
              >
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No references found matching your search criteria.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reference Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Card hover={false} className="inline-block bg-gradient-to-r from-soft-yellow/10 to-forest-green/10 border-2 border-soft-yellow/30">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-soft-yellow">{references.length}</div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white">Total References</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Curated academic sources</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default References
