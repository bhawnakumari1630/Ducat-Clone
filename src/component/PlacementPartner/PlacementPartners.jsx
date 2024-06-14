import React from 'react'

import WorkAtData from '../../data/WorkAtData'

function PlacementPartners() {
  console.log(WorkAtData)

  const companies = WorkAtData.map(item => {
    return <div className=' relative rounded-md overflow-hidden border border-slate-400 h-28 w-40  transition-all duration-200 ease-linear '>
      <div className=' absolute top-0 bg-white h-full w-full bg-blac px-3 py-1 hover:opacity-0 duration-150 '>
        <img src={item.image} alt="" className=' w-36 ' />
      </div>
      <div className='flex justify-center items-center h-full w-full bg-sky-800 text-zinc-50 px-4 capitalize  '>
        <p className='tracking-wide text-center text-lg leading-6 font-normal '> {item.title} </p>
      </div>
    </div>
  } )

  return (
    <div className='py-[7%] pb-[10%]  px-5 md:px-[7%] md:pb-[8%] lg:pb-[5%] space-y-8 capitalize'>
        <h2 className=' px-3 text-3xl text-zinc-800 '> Our placement partners </h2>

        <div className=' px-[2%] grid grid-cols-4 lg:grid-cols-5 place-items-center gap-5 '>
          {
            WorkAtData &&  companies
          }
        </div>
    </div>
  )
}

export default PlacementPartners