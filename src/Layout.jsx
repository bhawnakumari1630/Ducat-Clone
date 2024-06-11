import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import FooterForm from './component/Footer/FooterForm'

function Layout() {
  return (
    <div className=''>
        <Header />
        {/* px-[5%] */}
        <div className='pb-48 sm:pb-11 md:pb-12 lg:pb-10 min-h-[72vh] overflow-auto '>
            <Outlet/>
        </div>
        <FooterForm/>
    </div>
  )
}

export default Layout