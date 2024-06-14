import React, { useState } from "react";
import { ReviewsData } from "../../data/ReviewsData";
import SliderButton from "../SliderButton/SliderButton";

function Reviews() {
  const [showFull, setShowFull] = useState(false);

  const reviews = ReviewsData.map((item) => {
    return (
      <div
        className={`h-fit border border-gray-200 hover:border-gray-300 relative rounded-md min-w-64 md:min-w-[17rem] lg:min-w-96  max-w-96  bg-white shadow-md text-zinc-700 shadow-gray-500 px-10 py-8 `}
      >
        <div>
          <h3 className="text-zinc-800 font-medium text-[16.5px] md:text-lg capitalize pb-2 ">
            {" "}
            {item.name}{" "}
          </h3>
          <div className=" absolute top-2.5 -left-9 h-16 w-16 rounded-full overflow-hidden ">
            <img src={item.image} alt="" className="size-full object-cover " />
          </div>
          <div
            className={`${
              showFull ? "h-fit" : "h-18"
            } overflow-hidden text-[14px] md:text-[15.5px] text-zinc-700 `}
          >
            <p className={`${!showFull && 'line-clamp-3 '}`}> {item.review} </p>
            {/* {review.length} */}
          </div>
          {item.review.length >= 175 && (
            <button
              onClick={() => setShowFull((prev) => !prev)}
              className="w-full pe-5 mt-2 text-sm text-end text-blue-800 underline "
            >
              {" "}
              {showFull ? "Read less" : "Read more"}{" "}
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="relative px-[4%] pt-[4%] space-y-12 ">
        <div className="absolute top-0 right-14 ">
         <SliderButton />
        </div>

        <div className="scrollNone w-full  bg-zinc- overflow-auto px-[6%] md:ps-[4%]">
          <div className="scrollNone w-full ">
            <div className="px-1 w-full h-fit py-[1%] flex space-x-16 ">
              {reviews}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
