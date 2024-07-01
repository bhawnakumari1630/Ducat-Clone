import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import FooterForm from './component/Footer/FooterForm'
import SidebarSocial from './component/SidebarSocial/SidebarSocial'

function Layout() {
  return (
    <div className='scrollNone2'>
        <Header />
        <SidebarSocial />
        <div className=' scrollNone overflow-auto  '>
            <Outlet/>
        </div>
        {/* <FooterForm/> */}
    </div>
  )
}

export default Layout