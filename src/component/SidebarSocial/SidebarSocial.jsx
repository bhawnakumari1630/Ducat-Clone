import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoIosCall } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'

function SidebarSocial() {
  return (
    <div className='fixed z-50 right-4 top-1/2 transform -translate-y-[100%] bg-blue-800/95 text-zinc-100 space-y-2 text-[26px] py-3.5 pe-1.5 ps-3 rounded-s-xl '>
        <IoIosCall className='' />
        <FaWhatsapp className='' />
        <MdOutlineEmail className='' />
    </div>
  )
}

export default SidebarSocial