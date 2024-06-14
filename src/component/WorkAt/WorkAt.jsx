import React from 'react'
import CompaniesSlider from '../CompaniesSlider/CompaniesSlider'

function WorkAt() {
  return (
    <div className='py-[7%] px-[5%] md:px-[9%] md:py-[6%] md:pb-[4%] lg:py-[5%] text-center space-y-5 '>
        <h2 className='text-3xl font-semibold  text-zinc-800'> Our Learners Work At </h2>
        <p className=' text-xl max-w-[90%] lg:text-[23px] lg:max-w-[75%] text-zinc-500 leading-8 mx-auto '> Ducat learners work at some of the leading and innovative organizations of today, solving core business problems. </p>
      
        <div className='relative'>
            <CompaniesSlider />
        </div>
    </div>
  )
}

export default WorkAt