import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'

function SidebarSocial() {
  return (
    <div className='fixed z-50 right-0 sm:right-2 top-1/2 transform -translate-y-[100%] bg-blue-800/95 text-zinc-100 space-y-2 text-md md:text-[26px] py-2 pe-1 ps-1.5 md:py-3.5 md:pe-1.5 md:ps-3 rounded-s-xl '>
        <IoIosCall className='' />
        <FaWhatsapp className='' />
        <MdOutlineEmail className='' />
    </div>
  )
}

export default SidebarSocial