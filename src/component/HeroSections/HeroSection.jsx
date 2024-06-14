import React, { useEffect, useState } from 'react'
import { heroSectionData } from '../../data/HeroSectionData'
import SearchBar_Courses from '../searchBar_Courses/SearchBar_Courses'

function HeroSection() {

  const [data , setData] = useState([])
  console.log(heroSectionData)
  useEffect(()=>{
    
  },[])

  return (
    <div className='py-[3vh]  lg:py-[2%] px-5 md:px-[9%] grid grid-cols-2 h-full items-center  '>
        <div className='pb-[5%]  space-y-10 md:space-y-[8%] '>
          <h2 className='max-w-[90%] md:pt-[6%] lg:pt-[1%] text-xl md:text-4xl xl:text-5xl text-zinc-800 font-medium ' style={{ wordSpacing: '5px', lineHeight: '110%' }}> {heroSectionData[0].title} </h2>
          <SearchBar_Courses />
        </div>
        <div className=' pb-[2%] flex justify-end lg:justify-center '>
          <img src={heroSectionData[0].image} alt="" className=' object-cover h-[80vh] max-h-[20rem] md:max-h-[25rem] xl:max-h-[27rem] ' />
        </div>
    </div>
  )
}

export default HeroSection