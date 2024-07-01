import React from "react";
import { ReviewsData } from "../../data/ReviewsData";
import Reviews from "../ReviewCards/Reviews";
import Scroll from "../Scroll/Scroll";

function StudentReviews() {
  const reviews = ReviewsData.map((item) => <Reviews data={item} />);

  return (
    <>
      <div className=" pt-[5%] pb-5  md:py-[6%] md:pb-[3%]  lg:py-[3%] lg:pb-[1%] md:space-y-2 px-[1%] md:px-[4%] ">
        <h2 className="px-[5%] ps-9 md:ps-0 text-2xl md:text-3xl text-zinc-800 capitalize ">
          {" "}
          hundreds of happy students{" "}
        </h2>
      </div>
      <div className="m-0 p-0 ">
        <Reviews />
      </div>
    </>
  );
}

export default StudentReviews;
