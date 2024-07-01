import React from "react";
import { BenefitsOfChoosing_Data } from "../../data/BenefitsOfChoosing_Data";

function BenefitsOfChoosing() {
  const benefitsCard = BenefitsOfChoosing_Data.map((item) => (
    <div className=" cardShadow2 w-full lg:max-w-[14.5rem] text-center border  border-orange-300 shadow-md shadow-orange-400 rounded-xl px-[4%] py-7 pb-10 space-y-3  ">
      <img
        src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fcorporate%2FChangingAdministration.png&w=64&q=75"
        alt=""
        className="h-[3.4rem] mx-auto"
      />
      <h3 className="text-xl font-bold text-orange-600/80 "> Lorem, ipsum. </h3>
      <p className="text-[15px] text-zinc-800 ">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
        minima, porro dignissimos quod consequatur accusamus.{" "}
      </p>
    </div>
  ));

  return (
    <div className=" space-y-14 px-3 py-[2%] pb-10 md:pb-[6%] ">
      <div className=" px-[3%] md:px-[8%] space-y-8 ">
        <div className="text-center">
          <h2 className=" border-b-4 border-orange-400 inline  pb-1 leading-loose md:leading-normal text-2xl md:text-3xl text-zinc-900 font-semibold capitalize ">
            BENEFITS OF CHOOSING DUCAT INDIA
          </h2>
        </div>
        <ul className=" list-disc ps-4 space-y-1 text-zinc-800 ">
          <li>
            {" "}
            <span className=" font-semibold ">
              Customized Training Programs:{" "}
            </span>{" "}
            Tailored to your organization`s specific needs.
          </li>
          <li>
            {" "}
            <span className=" font-semibold ">
              Experienced Instructors:
            </span>{" "}
            Over 17 years of expertise in corporate training.{" "}
          </li>
          <li>
            {" "}
            <span className=" font-semibold ">Proven Track Record:</span>{" "}
            Success in various IT courses and corporate training programs.{" "}
          </li>
          <li>
            {" "}
            <span className=" font-semibold ">Interactive Learning:</span>{" "}
            Ensuring that training is always engaging and productive.{" "}
          </li>
        </ul>
        <p>
          By choosing Ducat India, you are investing in your organization`s
          future success. Our seminars and training sessions are designed to
          transform employees into experts and certified professionals,
          improving confidence and ensuring long-term growth.
        </p>
      </div>
      <div className=" px-[5%] gap-7 lg:gap-y-12 gap-5 flex flex-wrap items-center justify-center ">
        {benefitsCard}
      </div>
    </div>
  );
}

export default BenefitsOfChoosing;
