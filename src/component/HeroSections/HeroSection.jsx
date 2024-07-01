import React, { useEffect, useState } from 'react'
import { heroSectionData } from '../../data/HeroSectionData'
import SearchBar_Courses from '../searchBar_Courses/SearchBar_Courses'

function HeroSection() {

  const [data , setData] = useState([])
  // console.log(heroSectionData)


  return (
    <div className='py-[3vh]  lg:py-[2%] px-5 md:px-[9%] flex flex-col-reverse md:grid grid-cols-2 h-full items-center  '>
        <div className='pb-[5%]  space-y-10 md:space-y-[8%] text-center md:text-start '>
          <h2 className=' max-w-[80%] mx-auto md:mx-0 md:max-w-[90%] md:pt-[6%] lg:pt-[1%] text-[1.15rem] sm:text-lg md:text-4xl xl:text-5xl text-zinc-800 font-medium leading-7 md:leading-loose' style={{ wordSpacing: '5px' }}> {heroSectionData[0].title} </h2>
          <SearchBar_Courses />
        </div>
        <div className=' pb-[2%] flex justify-end lg:justify-center '>
          <img src={heroSectionData[0].image} alt="" className=' object-cover h-[40vh] sm:max-h-[rem] md:max-h-[25rem] xl:max-h-[27rem] ' />
        </div>
    </div>
  )
}

export default HeroSection