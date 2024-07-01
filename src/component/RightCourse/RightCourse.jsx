import React from 'react'
import { RightCourse_Data } from '../../data/RightCourse_Data'
import RightCourse_Card from './RightCourse_Card'
import Scroll from '../Scroll/Scroll'

function RightCourse() {
    
    const rightCourses = RightCourse_Data.map(item => <RightCourse_Card key={`right-course-${item.id}`} data={item} /> )

  return (
    <div className={`capitalize py-[6%] pb-[2%] md:py-[6%] lg:py-[3%] lg:pb-[1%] overflow-hidden `}>
      <div className="space-y-20 ps-[6%] ">
        <h2 className="text-2xl md:text-3xl ps-4 px-[3%] text-zinc-800"> find the right course for you  </h2>

        <div className=' ms-3 pe-[2%] '>
        <Scroll top='4rem' CardsToRender={rightCourses} />
        </div>
    </div>
    </div>
  )
}

export default RightCourse