import React, { useState } from "react";
import { ReviewsData } from "../../data/ReviewsData";
import SliderButton from "../SliderButton/SliderButton";

function Reviews() {
  const [showFull, setShowFull] = useState(false);

  const reviews = ReviewsData.map((item) => {
    return (
      <div
        className={`h-fit relative rounded-md min-w-72 lg:min-w-96  max-w-96  bg-white shadow-md text-zinc-700 shadow-gray-500 px-10 py-8 `}
      >
        <div>
          <h3 className="text-zinc-800 font-medium text-lg capitalize pb-2 ">
            {" "}
            {item.name}{" "}
          </h3>
          <div className=" absolute top-2.5 -left-9 h-16 w-16 rounded-full overflow-hidden ">
            <img src={item.image} alt="" className="size-full object-cover " />
          </div>
          <div
            className={`${
              showFull ? "h-fit" : "h-24"
            } overflow-hidden text-[15.5px] `}
          >
            <p className={` `}> {item.review} </p>
            {/* {review.length} */}
          </div>
          {item.review.length >= 175 && (
            <button
              onClick={() => setShowFull((prev) => !prev)}
              className="w-full pe-5 mt-5 text-end text-blue-800 underline "
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
      <div className="relative px-[4%] pb-[7%] pt-[5%] ">
        <div className="absolute top-0 right-14 ">
        <SliderButton />
        </div>

        <div className="scrollNone w-full  bg-zinc- overflow-auto ps-[4%]">
          <div className="scrollNone w-full overflow- ">
            <div className="px-1 w-full h-fit py-[2%] flex space-x-16 ">
              {reviews}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
