import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgress from '../common/ScrollProgress'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout