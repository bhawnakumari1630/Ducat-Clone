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
      <NavLink to={`courses/${item.id}`} key={item.id} as={"div"} className=" w-[30vw] max-w-60 min-h-[4.5rem] flex items-center shadow-md shadow-gray-300 rounded-md overflow-hidden text-zinc-700 " >
        <img src={item.image} alt="" className="w-20 p-3 " />
        <h3 className="flex-1 text-[17px] px-3 h-full flex items-center bg-sky-100/50 ">
          {item.title}
        </h3>
      </NavLink>
    );
  })

  return (
    <div className={`capitalize px-5 md:px-[9%] py-[5%] ${showAll ? 'h-fit' : 'h-[65vh]' } overflow-hidden `}>
      <div className="flex items-center justify-between  mb-12 ">
        <h2 className="text-3xl  text-zinc-800">
          {" "}
          explore top programs{" "}
        </h2>
        <p className="text-sm text-blue-700 hover:underline cursor-pointer " onClick={()=> setShowAll(prev => !prev)} >
          {showAll ? 'view less' : 'view all'}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-[7%] gap-y-[8%]  ">
        {topProgramsCard}
      </div>
    </div>
  );
}

export default TopPrograms;
