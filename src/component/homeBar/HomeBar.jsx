import React from 'react'

function HomeBar() {
  return (
    <div className='w-full flex items-center justify-between bg-blue-700 text-zinc-100 px-[8%] py-5 text-[14.5px] '>
        <div className='flex items-center gap-2'>
            <img src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Finsurance-02.png&w=48&q=75" alt="" className='h-11' />
            <p className='max-w-28 leading-5 '> Learn The Essential Skills </p>
        </div>
        <div className='flex items-center gap-2'>
            <img src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Finsurance-01.png&w=48&q=75" alt="" className='h-10' />
            <p className='max-w-28 leading-5 '> Earn Certificates And Degrees </p>
        </div>
        <div className='flex items-center gap-2'>
            <img src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Finsurance-04.png&w=48&q=75" alt="" className='h-10' />
            <p className='max-w-28 leading-5 '> Get Ready for The Next Career </p>
        </div>
        <div className='flex items-center gap-2'>
            <img src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Finsurance-03.png&w=48&q=75" alt="" className='h-10' />
            <p className='max-w-28 leading-5 '> Master at Different Areas </p>
        </div>
    </div>
  )
}

export default HomeBar