import React from 'react'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

function SliderButton() {
  return (
    <div className='text-xl text-gray-500 space-x-2 block '>
        <button className='hover:text-gray-700 hover:border-gray-700 border-2 border-gray-400 inline-flex items-center justify-center h-10 w-10 rounded-full '> <CgChevronLeft /> </button>
        <button className='hover:text-gray-700 hover:border-gray-700 border-2 border-gray-400 inline-flex items-center justify-center h-10 w-10 rounded-full '> <CgChevronRight /> </button>
    </div>
  )
}

export default SliderButton