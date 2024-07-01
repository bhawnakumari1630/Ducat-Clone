import React from 'react'
import HeroSection_About from '../../component/HeroSections/HeroSection_About'
import OurMission from '../../component/AboutUs_body/OurMission'
import OurVision from '../../component/AboutUs_body/OurVision'
import WhatDo from '../../component/AboutUs_body/WhatDo'
import Mission2 from '../../component/AboutUs_body/Mission2'
import Footer from "../../component/Footer/Footer";


function About_Us() {
  return (
    <div className='w-full pb-0 '>
      <HeroSection_About />
      <div className=' space-y-3 md:space-y-1 py-5 px-5 md:py-0 '>
        <OurMission />
        <OurVision />
        <WhatDo />
        <Mission2 />
      </div>
      <Footer />
    </div>
  )
}

export default About_Us