import React from 'react'
import WorkAtData from '../../data/WorkAtData'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg'

function CompaniesSlider() {
  
    console.log(WorkAtData)

    const slider = WorkAtData.map(item => {
        return (
            <div className=' absolut min-w-28 w-28'>
                <img src={item.image} alt="" className='size-full' />
            </div>
        )
    })

  return (
    <div className=' scrollNone mt-14 overflow-auto relative h-28 '>
      <div id="companiesSlider" className=' flex gap-10 absolute  top-0 overflow-hidde '>
        {slider}
        {slider}
      </div>
      <div className='text-6xl absolute -left-6'> 
        
      </div>
      <button className=' absolute  top-0 left-0 text-2xl bg-z text-zinc-500 bg-zinc-50 hover:text-zinc-600 h-full '> <CgChevronLeft /> </button>
      <button className=' absolute top-0 right-0 text-2xl bg-zinc-50 text-zinc-500 hover:text-zinc-600 h-full '> <CgChevronRight /> </button>
     </div>
  )
}

export default CompaniesSlider