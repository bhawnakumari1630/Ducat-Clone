import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import NavLinks from "./NavLinks";
import { RxCross1, RxCross2 } from "react-icons/rx";

export default function Header() {
  const [showMenuItem , setShowMenuItem] = useState(false)

  return (
    <div className="sticky top-0 z-50 px-[8%] lg:px-[5%] py-[2%] bg-slate-50 flex justify-between items-center lg:justify-around flex-row-reverse lg:flex-row gap-3 transition-all duration-300 ease-linear ">
      <div className=" ">
        <NavLink to={"/"}>
          <img
            src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=128&q=75"
            alt=""
            className="w-32    "
          />
        </NavLink>
      </div>

      <div onClick={()=> setShowMenuItem(prev => !prev)} className="lg:hidden inline text-zinc-500 border-2 hover:border-gray-400 focus:border-gray-400 transition-all duration-500 rounded-md text-3xl" >
        {/* { showMenuItem ? <RxCross2 /> : <BiMenu/> } */}
        <BiMenu />
      </div>

      {/* lg: navbar */}
      <div className=" hidden lg:static flex-[0.85] lg:flex justify-between items-center  text-zinc-500 font-normal ">
         <NavLinks />
      </div>
      {/* end lg: navbar */}

      {/* menu slider */}
      <div className={`${showMenuItem ? ' left-0 ' : ' left-[-50%] '} absolute h-[90vh]  top-[5.5rem] lg:hidden ps-[5%] pe-7 p-3 space-y-4 w-full sm:w-[40%] sm:max-w-96 bg-slate-50 lg:left-[90%]  text-zinc-500 font-normal transition-all duration-[400ms] ease-linear `}>
         <div onClick={()=> setShowMenuItem(false)} className=" flex justify-end " >
           <div className=" w-6 h-6  flex justify-center items-center border rounded-md hover:border-zinc-400 hover:text-zinc-600 ">
             <RxCross2 />
           </div>
         </div>
         <NavLinks />
      </div>
      {/* end menu slider */}
    </div>
  );
}
