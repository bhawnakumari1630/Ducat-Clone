import React from "react";
import WorkAtData from "../../data/WorkAtData";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { BiDotsHorizontal } from "react-icons/bi";

function CompaniesSlider() {
  console.log(WorkAtData);

  const slider = WorkAtData.map((item) => {
    return (
      <div className=" absolut min-w-28 w-30">
        <img src={item.image} alt="" className="size-full object-cover " />
      </div>
    );
  });

  return (
    <div className=" mt-14 relative h-28 ">
      <div className="scrollNone relative px-7 w-full h-full overflow-auto">
        <div
          id="companiesSlider"
          className=" flex gap-10 absolute  top-0 overflow-hidde "
        >
          {slider}
          {/* {slider} */}
        </div>
      </div>

      {/* <div className="absolut bg-black ">
        <BiDotsHorizontal />
      </div> */}

      <div className="absolute flex justify-between -top-3.5 h-full w-full text-2xl text-zinc-500">
          <button className=" hover:text-zinc-700 h-full border-r border-gray-100 bg:border-gray-200 hover:bg-gray-100 transition-all duration-100 ease-linear bg-white ">  <CgChevronLeft /> </button>
          <button className=" hover:text-zinc-700 h-full border-l border-gray-100 bg:border-gray-200 hover:bg-gray-100 transition-all duration-100 ease-linear  bg-white ">  <CgChevronRight /> </button>
      </div>

      {/* <button className=" absolute  top-0 left-0 text-2xl bg-z text-zinc-500 bg-zinc-50 hover:text-zinc-600 h-full ">
        {" "}
        <CgChevronLeft />{" "}
      </button>
      <button className=" absolute top-0 right-0 text-2xl bg-zinc-50 text-zinc-500 hover:text-zinc-600 h-full ">
        {" "}
        <CgChevronRight />{" "}
      </button> */}
    </div>
  );
}

export default CompaniesSlider;
