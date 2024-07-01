import React, { createContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import NavLinks from "./NavLinks";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { AiFillThunderbolt } from "react-icons/ai";

export const ShowCourse = createContext()

export default function Header() {
  const [showMenuItem, setShowMenuItem] = useState(false);
  const [smMenuCross , setSmMenuCross] = useState(false)

  return (
    <ShowCourse.Provider value={{showMenuItem , setShowMenuItem}}>
      
      <div className="sticky top-0 z-50 py-5  bg-slate-50 flex gap-[2%] justify-between items-center flex-row-revers lg:flex-row px-8 sm:ps-[8%]  md:pe-[2%] lg:ps-[5%]  sm:py-[3%]  transition-all duration-300 ease-linear ">


        <div
          onClick={() =>{ 
            setShowMenuItem((prev) => !prev)
            setSmMenuCross(prev => !prev)
          }}
          className="lg:hidden inline text-zinc-500 border-2 hover:border-gray-400 focus:border-gray-400 transition-all duration-500 rounded-md text-2xl  sm:text-3xl"
        >
          <div className="hidden sm:inline"><BiMenu /> </div>
          <div className="sm:hidden">
          {
            smMenuCross ? <RxCross2 />  : <BiMenu />  
          }
          </div>
        </div>

        <div className="ps-[3%] ">
          <NavLink to={"/"}>
            <img
              src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=128&q=75"
              alt=""
              className=" w-20 sm:w-32    "
            />
          </NavLink>
        </div>


        {/* menu slider */}
        <div id="sm_menuSlider"
          className={`${
            showMenuItem ? " left-0 " : " -left-full sm:left-[-60%] "
          } lg:hidden  fixed sm:h-[90vh] h-[40%] top-20 px-5 pt-2 text-xs bg-sky-200/95 backdrop-blur-sm sm:max-w-96 sm:top-[5.5rem] sm:ps-[5%] sm:pe-7 sm:p-3 space-y-3 sm:space-y-4 w-full sm:w-[80%]  sm:bg-slate-50 lg:left-[90%]  text-zinc-500 font-normal transition-all duration-[400ms] ease-linear  `}
        >
          <div
            onClick={() => setShowMenuItem(false)}
            className=" flex justify-end "
          >
            <div className=" hidden sm:flex  w-4 h-4 sm:w-6 md:h-6 justify-center items-center border rounded-md hover:border-zinc-400 hover:text-zinc-600 ">
              <RxCross2 />
            </div>
          </div>
          <NavLinks />
        </div>
        {/* end menu slider */}

        <NavLink to={"/career-guidance"} as={""} className="sm:hidden">
        <p className=" flex flex-col-reverse gap-1 items-center  hover:text-zinc-800 ">
          <div className="text-[0.7rem] text-sky-600 flex items-center gap-1">
            <img
              src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Fbadge.webp&w=32&q=75"
              alt=""
              className="size-4 sm:size-4 lg:size-6"
            />
            <span> Career Guidance </span>
          </div>
          <div className=" text-[0.7rem] px-[0.4rem] py-[0.18rem]  inline-flex gap-[1.5px] items-center tracking-wider  rounded-full text-zinc-100  bg-orange-500 border border-orange-400 ">
            <AiFillThunderbolt />
            <span className=" text-[0.5rem] uppercase font-sans font-semibold ">
              {" "}
              AI-powered{" "}
            </span>
          </div>
        </p>
      </NavLink>

        {/* lg: navbar */}
        <div className=" capitalize hidden lg:static flex-1 lg:flex-[0.85] lg:flex justify-around items-center  text-zinc-500  font-sans ">
          <NavLinks />
        </div>
        {/* end lg: navbar */}
      </div>

    </ShowCourse.Provider>
  );
}
