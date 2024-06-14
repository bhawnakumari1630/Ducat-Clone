import React from 'react'
import { ReviewsData } from '../../data/ReviewsData'
import Reviews from '../ReviewCards/Reviews'

function StudentReviews() {

    const reviews = ReviewsData.map(item => <Reviews data={item} /> )

  return (
    <div className=' pt-[7%] pb-0  md:py-[6%] md:pb-[3%] space-y-5 md:space-y-2 px-[1%] md:px-[4%] '>
        <h2 className='px-[8%] text-3xl  text-zinc-800 capitalize '> hundreds of happy students </h2>
        
        <div className=''>
         <Reviews />
        </div>
    </div>
  )
}

export default StudentReviews