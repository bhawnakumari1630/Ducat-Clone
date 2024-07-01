import React from 'react'
import { Branches_Data } from '../../data/Branches_Data'

function OurBranches() {

    const branchCard = Branches_Data.map(item => {
        return(
            <div className='bg-sky-200/45 px-7 py-5 rounded-xl text-zinc-800 '>
                <h3 className='text-lg text-blue-900/90 font-semibold '> {item.branch} </h3>
                <dl className='grid grid-cols-4  '>
                   <dt className='  '> phone </dt> 
                   <dd className=' col-span-3 '> {item.phone} </dd>
                   <dt className='  '> email </dt>  
                   <dd className=' col-span-3 '> {item.email} </dd>
                   <dt className='  '> address </dt>  
                   <dd className=' col-span-3 '> {item.address} </dd>
                </dl>
            </div>
        )
    })

  return (
    <div className='space-y-8 pt-[3%] lg:pt-[5%] pb-[10%] md:pb-[12%] lg:pb-[9%] px-[8%] md:px-[5%] lg:px-[10%] '>
        <h2 className=' text-center capitalize text-3xl tracking-wider text-slate-700 '> Our branches </h2>
        <div className='grid items-center md:grid-cols-2 gap-y-5 md:gap-y-[4%]  gap-x-5 lg:gap-x-[5%] '>
            {branchCard }
        </div>
    </div>
  )
}

export default OurBranches