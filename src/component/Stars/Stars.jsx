import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function Stars() {
  return (
    <>
      <div className="flex gap-[2px] items-center text-xs md:text-sm text-yellow-500 ">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf className="fill" />
        <BsStarFill className="fill-gray-600" />
      </div>
    </>
  );
}

export default Stars;
