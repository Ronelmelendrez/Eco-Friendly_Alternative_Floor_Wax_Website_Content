import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import Home from '@/pages/Home'
import ResultsPage from '@/pages/Results'
import AboutPage from '@/pages/About'
import NotFound from '@/pages/NotFound'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default AppRoutes