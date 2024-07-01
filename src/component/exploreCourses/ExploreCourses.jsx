import React from 'react'

function ExploreCourses() {

    const exploreCourses = ['Manual testing', 'manual + selenium' , 'JAVA WITH SELENIUM', 'PYTHON WITH SELENIUM' ,'FULL STACK QA']

    const card = exploreCourses.map(item => <div className='flex-1 h-32 rounded-md flex justify-center items-center max-w-80 bg-white shadow-gray-300 shadow-md hover:border border-zinc-500 hover:ring ring-gray-100 '>
        <p className='text-xs uppercase px-2 text-center '> {item} </p>
        </div> )

  return (
    <div className=' px-8 py-[10%] md:py-[8%] lg:py-[5%]  md:px-[9%] space-y-8 '>
        <h2 className="text-2xl font-semibold  text-zinc-800 capitalize ">
            explore courses
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-[4%] '>
            {card}
        </div>
    </div>
  )
}

export default ExploreCourses