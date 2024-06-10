import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function TopPrograms() {
  const [topPrograms, setTopPrograms] = useState([]);
  const [showAll , setShowAll] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/course")
      .then((res) => res.json())
      .then((res) => setTopPrograms(res));
  }, []);

  return (
    <div className={`capitalize px-[9%] py-[5%] ${showAll ? 'h-fit' : 'h-[65vh]' } overflow-hidden `}>
      <div className="flex items-center justify-between  mb-12 ">
        <h2 className="text-3xl  text-zinc-800">
          {" "}
          explore top programs{" "}
        </h2>
        <p className="text-sm text-blue-700 hover:underline cursor-pointer " onClick={()=> setShowAll(prev => !prev)} >
          {showAll ? 'view less' : 'view all'}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-y-9  ">
        {topPrograms.map((item) => {
          return (
            <NavLink to={`courses/${item.id}`} key={item.id} as={"div"} className=" w-[30vw] max-w-56 min-h-18 flex items-center shadow-md shadow-gray-300 rounded-md overflow-hidden text-zinc-700 " >
              <img src={item.image} alt="" className="w-16 py-1  " />
              <h3 className="flex-1 text-[17px] px-3 h-full flex items-center bg-sky-100/50 ">
                {item.title}
              </h3>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default TopPrograms;
