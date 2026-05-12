import React from 'react'
import Hero from '@/components/sections/Hero'
import AboutStudy from '@/components/sections/AboutStudy'
import ChemicalComponents from '@/components/sections/ChemicalComponents'
import Methodology from '@/components/sections/Methodology'
import ResultsDashboard from '@/components/sections/ResultsDashboard'
import Conclusions from '@/components/sections/Conclusions'
import Recommendations from '@/components/sections/Recommendations'
import ResearchTeam from '@/components/sections/ResearchTeam'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutStudy />
      <ChemicalComponents />
      <Methodology />
      <ResultsDashboard />
      <Conclusions />
      <Recommendations />
      <ResearchTeam />
    </>
  )
}

export default Home