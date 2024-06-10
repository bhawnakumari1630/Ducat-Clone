import React from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <div className="sticky top-0 px-[5%] lg:px-[5%] py-[2%] bg-slate-50 flex justify-between items-center lg:justify-around flex-row-reverse lg:flex-row gap-3 transition-all duration-300 ease-linear ">
      <div className=" ">
        <NavLink to={"/"}>
          <img
            src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=128&q=75"
            alt=""
            className="w-32    "
          />
        </NavLink>
      </div>

      <div className="lg:hidden inline text-zinc-500 border-2 hover:border-gray-400 focus:border-gray-400 transition-all duration-300 rounded-md text-3xl">
        <BiMenu/>
      </div>

      <div className=" flex-[0.85] lg:flex justify-between hidden items-center  text-zinc-500 font-normal ">
         <NavLinks />
      </div>
    </div>
  );
}
