import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search } from 'lucide-react'
import Button from '@/components/ui/Button'

const NotFound: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex items-center justify-center px-4"
    >
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-coconut-brown/20 to-forest-green/20 mb-6">
          <Search className="w-12 h-12 text-coconut-brown" />
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-bold text-coconut-brown dark:text-cream-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg" icon={<Home size={18} />}>
            Back to Home
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default NotFound