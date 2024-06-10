import React from 'react'
import HeroSection from '../../component/HeroSection/HeroSection'
import HomeBar from '../../component/homeBar/HomeBar'
import TopPrograms from '../../component/TopPrograms/TopPrograms'
import WorkAt from '../../component/WorkAt/WorkAt'
import PlacementPartners from '../../component/PlacementPartner/PlacementPartners'
import UpcomingBatches from '../../component/UpcomingBatches/UpcomingBatches'

function Home() {
  return (
    <div className=''>
      <HeroSection />
      <HomeBar />
      <TopPrograms />
      <WorkAt />
      <UpcomingBatches />
      <PlacementPartners />
    </div>
  )
}

export default Home