import React from "react";
import WorkAtData from "../../data/WorkAtData";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { BiDotsHorizontal } from "react-icons/bi";

function CompaniesSlider() {
  // console.log(WorkAtData);

  const slider = WorkAtData.map((item) => {
    return (
      <div key={`company-${item.id}`} className=" absolut w-24 md:min-w-28 w-30">
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
        </div>
      </div>


      <div className="absolute flex justify-between -top-3.5 h-full w-full text-2xl text-zinc-500">
          <button className=" hover:text-zinc-700 h-full border-r border-gray-100 bg:border-gray-200 hover:bg-gray-100 transition-all duration-100 ease-linear bg-white ">  <CgChevronLeft /> </button>
          <button className=" hover:text-zinc-700 h-full border-l border-gray-100 bg:border-gray-200 hover:bg-gray-100 transition-all duration-100 ease-linear  bg-white ">  <CgChevronRight /> </button>
      </div>
      
    </div>
  );
}

export default CompaniesSlider;
