import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import EnquiryForm from "../../component/EnquiryForm/EnquiryForm";
import Stars from "../../component/Stars/Stars";

function CourseDetail({ details }) {
  console.log(details);

  const { id, title, image, overview } = details;

  return (
    <>
      <div key={id} className="space-y-7  ">
        <div className="flex gap-5 items-center">
          <img src={image} alt="" className="h-14" />
          <h2 className="text-2xl font-semibold  text-zinc-800 capitalize ">
            {title}
          </h2>
        </div>
        <>
         <Stars />
        </>
        <div className="text-zinc-800 leading-7 tracking-wide ">
          <p className="">{overview}</p>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
