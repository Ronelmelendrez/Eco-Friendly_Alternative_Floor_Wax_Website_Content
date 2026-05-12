import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Github, Twitter, Linkedin } from 'lucide-react'
import { universityInfo } from '@/data/teamData'

const Footer: React.FC = () => {
  return (
    <footer className="bg-coconut-brown/10 dark:bg-gray-800/30 pt-12 pb-6 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-forest-green" />
              <span className="font-display font-bold text-xl text-coconut-brown dark:text-cream-white">
                EcoWax Research
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Advancing sustainable alternatives through scientific innovation in natural resource utilization.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              Based on capstone manuscript: "The Feasibility of Coconut Oil with Cardava Banana Peel as an Alternative Floor Wax"
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-coconut-brown dark:text-cream-white mb-4">Research</h4>
            <ul className="space-y-2">
              <li><Link to="/#methodology" className="text-gray-600 dark:text-gray-400 hover:text-coconut-brown transition-colors">Methodology</Link></li>
              <li><Link to="/results" className="text-gray-600 dark:text-gray-400 hover:text-coconut-brown transition-colors">Results</Link></li>
              <li><Link to="/#conclusions" className="text-gray-600 dark:text-gray-400 hover:text-coconut-brown transition-colors">Conclusions</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-coconut-brown dark:text-cream-white mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-coconut-brown transition-colors">Research Team</Link></li>
              <li><span className="text-gray-600 dark:text-gray-400">{universityInfo.name}</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">{universityInfo.college}</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-coconut-brown/20 dark:border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {universityInfo.name} - {universityInfo.college}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-coconut-brown transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-coconut-brown transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-coconut-brown transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer