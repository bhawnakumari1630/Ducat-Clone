import React from 'react'
import Footer from '../../component/Footer/Footer'
import EnquiryForm2 from '../../component/EnquiryForm/EnquiryForm2'

function OnlineRegistration() {
  return (
    <div className='pb-0'>
        {/* <div className='text-center bg-blue-900/85 py-4 text-2xl capitalize font-medium text-zinc-50 tracking-wide font-sans '>
            <h2> online registration form </h2>
        </div> */}
        <div className='px-[5%] py-10 md:py-[4%] '>
        <EnquiryForm2 formWidth="full" />
        </div>
        <Footer />
    </div>
  )
}

export default OnlineRegistration