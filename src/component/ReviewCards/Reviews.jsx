import React, { useState } from "react";
import { ReviewsData } from "../../data/ReviewsData";
import SliderButton from "../SliderButton/SliderButton";
import Stars from "../Stars/Stars";
import Scroll from "../Scroll/Scroll";

function Reviews( {showStar} ) {
  // alert(showStar)
  const [showFull, setShowFull] = useState(false);

  const reviews = ReviewsData.map((item) => {
    return (
      <div
        key={`review-${item.id}`}
        className={`h-fit border ms-7 border-gray-200 hover:border-gray-300 relative rounded-md min-w-64 md:min-w-[19rem] lg:min-w-96  max-w-96  bg-white shadow-md text-zinc-700 shadow-gray-500 px-10 py-8 `}
      >
        <div className="absolute -top-5 right-5 scale-x-[-1] ">
          <img src="https://www.ducatindia.com/static/corporate/Inverted-Comma.svg" alt="" className="h-8 " />
        </div>
        <div>
          <h3 className={`text-zinc-800 font-medium text-[16.5px] md:text-lg capitalize pb-2 ${showStar == 'true' && 'pb-0'} `}>
            {" "}
            {item.name}{" "}
          </h3>
          <div className={`${showStar == 'true' ? 'inline' : 'hidden' }pb-5 -mt-1 mb-2  `}>
            <Stars />
          </div>
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
      <div className="relative ms-5 mt-[8%] lg:mt-[4.5%]  py-[4%] md:py-5 ps-[5%] pe-[4%] pt-[7%] space-y-1 ">
          <Scroll top='5rem'  gap={10} CardsToRender={reviews} />
      </div>
    </>
  );
}

export default Reviews;
