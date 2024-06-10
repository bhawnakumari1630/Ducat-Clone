import React from 'react'

function FooterForm() {
  return (
    <div className='fixed z-10 hidden sm:block w-full bottom-0 px-[5%] py-8 bg- bg-sky-800 '>
        <form className='flex items-center justify-between gap-3 '>
            <div className='flex-1'>
            <input type="text" id="first_name" className="bg-zinc-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div className='flex-1'>
            <input type="text" id="first_name" className="bg-zinc-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div className='flex-1'>
            <input type="text" id="first_name" className="bg-zinc-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div className='flex-1'>
            <input type="text" id="first_name" className="bg-zinc-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div className='flex-1'>
            <input type="text" id="first_name" className="bg-zinc-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
            </div>
            <div className='w-auto flex-[0.4] text-center bg-yellow-500 text-zinc-950 px-5 py-1.5 rounded-lg ring-yellow-400 hover:ring font-semibold '>
            {/* <input type="submit" className="bg-zinc-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required /> */}
            <button className=' '> submit </button>
            </div>
        </form>
    </div>
  )
}

export default FooterForm