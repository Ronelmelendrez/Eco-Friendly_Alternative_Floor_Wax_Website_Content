import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, FlaskConical } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '../common/ThemeToggle'
import Button from '../ui/Button'
import { navItems } from '@/data/navigationData'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    setIsOpen(false)
  }, [location])
  
  const handleNavClick = (href: string, section?: string) => {
    if (href === '/' && section && location.pathname === '/') {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
  
  const handleDownloadPDF = () => {
    // In a real implementation, this would download the actual manuscript PDF
    alert('Manuscript PDF download would be available here.')
  }
  
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <FlaskConical className="w-8 h-8 text-coconut-brown dark:text-cream-white group-hover:rotate-12 transition-transform" />
              <div>
                <span className="font-display font-bold text-lg text-coconut-brown dark:text-cream-white">
                  EcoWax
                </span>
                <span className="text-xs block text-gray-500 dark:text-gray-400">Research</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className="text-gray-700 dark:text-gray-200 hover:text-coconut-brown dark:hover:text-cream-white transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <ThemeToggle />
              <Button size="sm" variant="primary" onClick={handleDownloadPDF}>
                Download PDF
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 glass pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className="text-xl text-gray-700 dark:text-gray-200 hover:text-coconut-brown dark:hover:text-cream-white transition-colors font-medium py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="primary" className="w-full mt-4" onClick={handleDownloadPDF}>
                Download PDF
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar