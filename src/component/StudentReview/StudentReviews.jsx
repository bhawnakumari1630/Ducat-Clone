import React from 'react'
import { ReviewsData } from '../../data/ReviewsData'
import Reviews from '../ReviewCards/Reviews'

function StudentReviews() {

    const reviews = ReviewsData.map(item => <Reviews data={item} /> )

  return (
    <div className='pt-[5%] pb-[2%]  lg:pt-[2%] lg:pb-0 min-h-fit   px-5 md:px-[4%] space-y-0 '>
        <h2 className='px-[5%] text-3xl  text-zinc-800 capitalize '> hundreds of happy students </h2>
        
        <div>
        <Reviews />
        </div>
    </div>
  )
}

export default StudentReviews