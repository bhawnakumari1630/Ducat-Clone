import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function TopPrograms() {
  const [topPrograms, setTopPrograms] = useState([]);
  const [showAll , setShowAll] = useState(false)

  useEffect(() => {
    fetch("https://ducat-data-1.onrender.com/course")
      .then((res) => res.json())
      .then((res) => setTopPrograms(res));
  }, []);

  const topProgramsCard = topPrograms.map((item) => {
    return (
      <NavLink to={`courses/${item.id}`} key={item.id} as={"div"} className=" w-[39vw] md:w-[25vw] md:max-w-[13rem] lg:w-[30vw] lg:max-w-60 min-h-20 lg:min-h-20 lg:max-h-20 flex items-center shadow-md shadow-gray-400 rounded-md overflow-hidden text-zinc-700 bg-sky-100/80" >
        <div className=" py-1 bg-white">
        <img src={item.image} alt="" className="w-16 lg:w-20 p-3 mt-1 " />
        </div>
        <h3 className="flex-1 text-sm md:text-[15px] lg:text-[17px] px-3 h-full flex items-center  ">
          {item.title}
        </h3>
      </NavLink>
    );
  })

  return (
    // ${showAll ? 'h-full' : ' h-[70vh] md:h-[65vh]' } overflow-hidden 
    <div className={`capitalize py-[12%] sm:py-[7%] px-7 sm:px-[5%] md:px-[9%] md:py-[6%] lg:pt-[6%]  lg:py-[3%] `}>
      <div className="flex items-center justify-between mb-8 sm:mb-[6%] lg:mb-12 ">
        <h2 className=" ps-3 md:ps-0 text-2xl md:text-3xl  text-zinc-800">
          {" "}
          explore top programs{" "}
        </h2>
        <p className="text-sm text-blue-700 hover:underline cursor-pointer " onClick={()=> setShowAll(prev => !prev)} >
          {showAll ? 'view less' : 'view all'}
        </p>
      </div>

      <div className={`relative place-items-center grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 px-0.5 md:px-2 pt-[1%] lg:gap-x-[5%] gap-y-10 lg:gap-y-10   ${showAll ? ' overflow-visible' : ' h-[50vh] sm:h-[57vh] md:h-[65vh] lg:h-[50vh] overflow-hidden' } cursor-pointer `}>
        {topProgramsCard}
      </div>
    </div>
  );
}

export default TopPrograms;
