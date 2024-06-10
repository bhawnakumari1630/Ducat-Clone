import React from 'react'
import CompaniesSlider from '../CompaniesSlider/CompaniesSlider'

function PlacementPartners() {
  return (
    <div className='px-[9%] py-[5%] pb-[2%] text-center space-y-5'>
        <h2 className='text-3xl font-semibold  text-zinc-800'> Our placement partners </h2>

        <div className='relative'>
            <CompaniesSlider />
        </div>
    </div>
  )
}

export default PlacementPartners