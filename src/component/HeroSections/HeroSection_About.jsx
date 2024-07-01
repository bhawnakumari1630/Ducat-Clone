import React from 'react'

function HeroSection_About() {
  return (
    <div className='w-full h-[45vh] md:h-[85vh] relative '>
        <img src="https://www.ducatindia.com/static/images/context-us.jpeg" alt="" className='size-full object-cover object-center ' />
        <div className=' absolute top-0 h-full w-full flex justify-center items-center bg-black/30 text-zinc-200 drop-shadow-sm '>
            <h2 className='text-4xl font-bold text-center max-w-sm md:max-w-2xl tracking-wide leading-snug '> Our #1 Highest Priority is on
            Building Your Job oriented Skills </h2>
        </div>
    </div>
  )
}

export default HeroSection_About