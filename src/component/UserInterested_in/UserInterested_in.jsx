import React from 'react'
import course from '../../data/CoursesData'

function UserInterested_in() {
  console.log(course)

  const card = course.map(item => {
    return (
        <div className=' w-[9.5rem] h-[6.2rem]   flex flex-col justify-center items-center rounded-xl shadow-md shadow-gray-400 border border-blue-100 space-y-1.5 '>
          <img src={item.image} alt="" className='h-10 w-10 object-cover ' />
          <p className='text-[12px] text-center px-4 text-blue-800 capitalize'> {item.title} </p>
        </div>
    )
  })
  return (
    <div className=' px-[7%] pt-[3%] pb-[6%] flex flex-wrap gap-[1.5%] gap-y-6 justify-center  '>
        {card}
    </div>
  )
}

export default UserInterested_in