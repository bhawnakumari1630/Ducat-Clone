import React from 'react'
import { RightCourse_Data } from '../../data/RightCourse_Data'
import RightCourse_Card from './RightCourse_Card'

function RightCourse() {
    
    const rightCourses = RightCourse_Data.map(item => <RightCourse_Card key={`right-course-${item.title}`} data={item} /> )

  return (
    <div className={`capitalize py-[7%] pb-[2%] md:py-[6%] lg:py-[3%] lg:pb-[1%] overflow-hidden `}>
      <div className="space-y-10 px-[6%] ">
        <h2 className="text-3xl px-[3%] text-zinc-800"> find the right course for you  </h2>

        <div className="  ">
        <div className="px-[3%] py-[1%] overflow-auto scrollNone  ">
          <div className=" flex gap-5 ">
           {rightCourses}
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default RightCourse