import React from "react";
import WorkAtData from "../../data/WorkAtData";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

function ForCorporates() {
  const company = WorkAtData.map((item) => (
    <div
      key={item.title}
      className="py-2 outline outline-orange-500 rounded-lg px-2 bg-white "
    >
      <img src={item.image} alt="" className="h-14 " />
    </div>
  ));
  return (
    <div
      className="px-[3%] md:px-[8%] py-[6%] grid grid-cols-1 gap-14 md:gap-0 md:grid-cols-2 bg-cover bg-no-repeat "
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/gradient-bokeh-digital-business-wallpaper_53876-110796.jpg?t=st=1718477356~exp=1718480956~hmac=da3495113ebb49f7a6c3b5fbe49fb935fe56b42e9fc6fab15cdaf22a08f1d8e1&w=740')", 
      }}
    >
      <div className=" space-y-9 ">
        <div>
          <h2 className=" text-zinc-50 text-4xl font-semibold">
            DUCAT FOR CORPORATES
          </h2>
          <hr className="w-[50%] mt-2 h-0 border-b border-zinc-50  " />
        </div>
        <p className="text-xl text-yellow-400 ">Corporate Training Solution that Accelerates Business!</p>
        <p className=" drop-shadow-sm text-zinc-200">We believe in interactive learning that is 7 times more effective than passive learning. Today, every company requires digital transformation and they are looking for effective ways to minimize the skills gap. We help corporates with best training programs to align cutting-edge technologies and employees together.</p>

        <div>
            <button className="flex items-center uppercase gap-2 text-xl text-zinc-50 border-2 border-white py-2 px-8 bg-orange-500 -skew-x-12 font-medium "> Ask a demo <BiArrowFromLeft /> </button>
            <button className="flex items-center uppercase gap-2 text-xl text-blue-500 border-2 border-white py-2 px-8 -skew-x-12 font-medium "> explore more  <BiArrowFromLeft /> </button>
        </div>
      </div>
      <div className=" py-[14%] flex flex-wrap gap-5 justify-center items-center">{company}</div>
    </div>
  );
}

export default ForCorporates;
