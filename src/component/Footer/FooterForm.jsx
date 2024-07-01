import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

function FooterForm() {
  return (
    <div className=" fixed py-3 rounded-t-xl md:rounded-none  md:py-9 z-10  sm:block w-full bottom-0 px-[2%]  bg-sky-800 ">
      <div className=" hidden md:block ">
      <form className=" grid grid-cols-3 mb-5 md:mb-0 md:flex items-center justify-between gap-3 ">
        <div className="flex-1">
          <input
            type="text"
            id="first_name"
            className="bg-zinc-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="full name"
            required
          />
        </div>
        <div className="flex-1">
          <input
            type="email"
            id="first_name"
            className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email address"
            required
          />
        </div>
        <div className="flex-1">
          <input
            type="number"
            id="first_name"
            className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="phone number"
            required
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            id="first_name"
            className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="selected course"
            required
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            id="first_name"
            className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="select a branch"
            required
          />
        </div>
        <div className="hidden md:inline w-auto flex-1 md:flex-[0.45] text-center  bg-yellow-400 hover:bg-yellow-500 px-5 py-2.5 rounded-lg ring-yellow-300  hover:ring  font-semibold text-zinc-950   ">
          <button className=" "> submit </button>
        </div>
      </form>
      <div className="md:hidden w-full inlin px-12  text-center  py-2.5 rounded-lg  hover:ring font-semibold bg-yellow-400 hover:bg-yellow-500 ring-yellow-300   text-zinc-950  ">
        <button className=""> submit </button>
      </div>
      </div>
      <div className=" py-1.5 h-[3rem] flex text-3xl text-white ">
        <IoIosCall className='flex-1' />
        <MdEmail className='flex-1' />
      </div>
    </div>
  );
}

export default FooterForm;
