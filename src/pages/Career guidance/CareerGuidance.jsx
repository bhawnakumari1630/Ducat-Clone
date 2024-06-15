import React from "react";
import UserInterested_in from "../../component/UserInterested_in/UserInterested_in";
import { NavLink } from "react-router-dom";

function CareerGuidance() {
  return (
    <div className=" space-y-5 pb-[4%] ">
      <div className="flex justify-between items-center" >
        <div className="px-[5%] pt-4 py-1 ">
          <NavLink to={"/"}>
            <img
              src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=128&q=75"
              alt=""
              className="w-32    "
            />
          </NavLink>
        </div>
        <div className="relative  ">
           <div className="flex gap-1 items-center">
             
           </div>
        </div>
      </div>
      <h2 className=" py-2 bg-blue-900 text-center text-zinc-200 font-normal ">
        {" "}
        Your best match is just 2 minutes away!{" "}
      </h2>
      <h3 className="capitalize font-sans tracking-wide text-zinc-900 text-center text-3xl font-medium ">
        {" "}
        In which course you are interested in ?{" "}
      </h3>
      <div>
        <UserInterested_in />
      </div>
      <div className="w-full fixed px-[7%] md:px-[25%] bg-white bottom-0 py-5 ">
        <button className="w-full rounded-lg bg-blue-900 hover:bg-blue-800 py-1.5 text-zinc-100 text-lg ">
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
}

export default CareerGuidance;
