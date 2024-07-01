import React from "react";
import Stars from "../Stars/Stars";

function BatchesCard( {batch}) {
    const { id , title , branch, image, start_Date  } = batch
  return (
    <>
      <div className=" min-w-52 md:min-w-60 w-60 pt-5 pb-6 border border-gray-100 hover:border-gray-300 shadow-md shadow-gray-400 rounded-md text-zinc-800 ">
        <div className=" h-24 md:h-28 border-b border-gray-300 w-full">
          <img
            src={image}
            alt=""
            className=" h-16 md:h-20 mx-auto object-cover "
          />
        </div>

        <div className="px-[8%] pt-3 text-center text-[13px]  ">
          <h3 className=" text-lg font-semibold line-clamp-1 "> {title} </h3>
          <div className=" py-1 pb-3 flex justify-center ">
            {" "}
            <Stars className="inline  " />{" "}
          </div>
          <p> branch: {branch} </p>
          <p> starting date: {start_Date} </p>

          <button className="bg-blue-700 w-full mt-4 py-2 rounded-md text-zinc-50 tracking-wide capitalize hover:ring focus:ring ">
            {" "}
            request a call back{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default BatchesCard;
