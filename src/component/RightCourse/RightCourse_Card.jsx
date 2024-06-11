import React from "react";
import Stars from "../Stars/Stars";

function RightCourse_Card({ data }) {
  console.log(data);
  const { id, title, image, duration, eligibility } = data;
  // const  cards =
  return (
    <div className=" min-w-60 w-60  pb-6  shadow-md shadow-gray-400 rounded-md overflow-hidden text-zinc-800 ">
      <div className="relative h-28 border-b border-gray-300 w-full pt-5 bg-sky-200/80 ">
        <img src={image} alt="" className=" h-20 mx-auto object-cover " />
        <div className="absolute top-2 right-2 text-[10px] bg-sky-500 px-2 py-[2px] rounded-sm text-zinc-100 ">
            <p> best in industry </p>
        </div>
      </div>

      <div className="px-[8%] space-y-2 pt-3 text-cente text-[13px]  ">
        <h3 className=" text-lg font-semibold line-clamp-1 "> {title} </h3>
        
        <Stars className="" />

        <div className="text-start pt-1 space-y-1 tracking-wide text-zinc-700 min-h-24 ">
          <p>
            {" "}
            <span className="tracking-wide font-medium text-zinc-800 ">
              {" "}
              duration:{" "}
            </span>{" "}
            {duration}{" "}
          </p>
          <p>
            {" "}
            <span className="tracking-wide font-medium text-zinc-800 ">
              {" "}
              eligibility :
            </span>{" "}
            {eligibility}{" "}
          </p>
        </div>
        <button className="bg-blue-700 w-full mt-4 py-2 rounded-md text-zinc-50 tracking-wide capitalize hover:ring focus:ring ">
          download brochure
        </button>
      </div>
    </div>
  );
}

export default RightCourse_Card;
