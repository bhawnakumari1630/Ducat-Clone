import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import FooterForm from './component/Footer/FooterForm'
import SidebarSocial from './component/SidebarSocial/SidebarSocial'

function Layout() {
  return (
    <div className='relativ'>
        <Header />
        <SidebarSocial />
        <div className=' overflow-auto '>
            <Outlet/>
        </div>
        {/* <FooterForm/> */}
    </div>
  )
}

export default Layout