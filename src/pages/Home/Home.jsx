import React from 'react'
import HeroSection from '../../component/HeroSection/HeroSection'
import HomeBar from '../../component/homeBar/HomeBar'
import TopPrograms from '../../component/TopPrograms/TopPrograms'
import WorkAt from '../../component/WorkAt/WorkAt'
import PlacementPartners from '../../component/PlacementPartner/PlacementPartners'
import UpcomingBatches from '../../component/UpcomingBatches/UpcomingBatches'
import StudentReviews from '../../component/StudentReview/StudentReviews'
import RightCourse from '../../component/RightCourse/RightCourse'
import Footer from '../../component/Footer/Footer'

function Home() {
  return (
    <div className=''>
      <HeroSection />
      <HomeBar />
      <TopPrograms />
      <WorkAt />
      <UpcomingBatches />
      <StudentReviews />
      <RightCourse />
      <PlacementPartners />
      <Footer />
    </div>
  )
}

export default Home