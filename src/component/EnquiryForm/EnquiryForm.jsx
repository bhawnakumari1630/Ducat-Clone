import React from "react";

function EnquiryForm() {
  return (
    <div className=" -mt-5 shadow-lg bg-zinc-50 shadow-gray-400 rounded-lg overflow-hidden">
      <form className="space-y-4">
        <h2 className="bg-blue-600 text-zinc-50 text-center capitalize py-2.5 "> enquiry now </h2>
        <div className="space-y-5 px-5 pt-3 pb-5 ">
          <div className="flex-1">
            <input
              type="text"
              id="first_name"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              id="first_name"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              id="first_name"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              id="first_name"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              id="first_name"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-2.5 dark:bg-gray-700 dark:border-gray-600 outline-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div className="w-auto flex-[0.4] text-center bg-blue-900 text-zinc-50 px-5 py-1.5 rounded-lg ring-blue-400 hover:ring font-normal tracking-wide ">
            <button className=" "> submit </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;
