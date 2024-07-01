import React from 'react'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

function SliderButton({top, handlePrev , handleNext}) {
  return (
    <div className={` absolute -top-14 md:-top-[${top}] right-6 md:right-20 text-xl text-gray-500 space-x-2 block `}>
        <button onClick={handlePrev} className='hover:text-gray-600 hover:border-gray-700 border-2 border-gray-400 inline-flex items-center justify-center h-9 w-9 md:h-11 md:w-11 rounded-full '> <CgChevronLeft /> </button>
        <button onClick={handleNext} className='hover:text-gray-600 hover:border-gray-700 border-2 border-gray-400 inline-flex items-center justify-center h-9 w-9 md:h-11 md:w-11 rounded-full '> <CgChevronRight /> </button>
    </div>
  )
}

export default SliderButton