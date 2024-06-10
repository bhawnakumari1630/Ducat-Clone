import React, { useEffect, useState } from 'react'
import { heroSectionData } from '../../data/HeroSectionData'
import SearchCourse from '../searchCourse/SearchCourse'

function HeroSection() {

  const [data , setData] = useState([])
  console.log(heroSectionData)
  useEffect(()=>{
    
  },[])

  return (
    <div className='grid grid-cols-2 md:items-center px-[9%] pb-5 '>
        <div className=' md:space-y-[8%] '>
          <h2 className='max-w-[90%] md:pt-[8%] md:text-4xl xl:text-5xl text-zinc-800 font-medium ' style={{ wordSpacing: '5px', lineHeight: '110%' }}> {heroSectionData[0].title} </h2>
          <SearchCourse />
        </div>
        <div className=' flex justify-end lg:justify-center '>
          <img src={heroSectionData[0].image} alt="" className=' object-cover h-[75%] md:h-[65%] max-h-[370px] ' />
        </div>
    </div>
  )
}

export default HeroSection