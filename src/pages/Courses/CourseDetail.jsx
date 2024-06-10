import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import EnquiryForm from "../../component/EnquiryForm/EnquiryForm";

function CourseDetail({ details }) {
  console.log(details);

  const { id, title, image, overview } = details;

  return (
    <>
      <div key={id} className="space-y-7  flex-1  ">
        <div className="flex gap-5 items-center">
          <img src={image} alt="" className="h-14" />
          <h2 className="text-2xl font-semibold  text-zinc-800 capitalize ">
            {title}
          </h2>
        </div>
        <div className="flex gap-[2px] items-center text-xs md:text-sm text-yellow-500 ">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf className="fill-gray-600" />
          <BsStarFill className="fill-gray-600" />
        </div>
        <div className="text-zinc-800 leading-7 tracking-wide ">
          <p className="">{overview}</p>
        </div>
      </div>

      <div className=" mx-auto lg:mx-0 lg:flex-1 max-w-[22rem] ">
        <EnquiryForm />
      </div>
    </>
  );
}

export default CourseDetail;
