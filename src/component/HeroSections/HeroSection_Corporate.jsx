import React from "react";
import { FaDownload } from "react-icons/fa";
import EnquiryForm from "../EnquiryForm/EnquiryForm";
import EnquiryForm2 from "../EnquiryForm/EnquiryForm2";

function HeroSection_Corporate() {
  return (
    <div
      className="py-[5%] ps-[9%] pe-[3%] grid grid-cols-1  md:grid-cols-2 h-full place-items-center  gap-y-16 md:gap-0 relative "
      style={{
        backgroundImage: `url('https://www.ducatindia.com/_next/static/media/CorporateBanner.25313518.jpg')`,
      }}
    >

      <div className="  text-zinc-100 drop-shadow-sm tracking-wide  px-[5%] max-w-full lg:max-w-[85%] relative ">
        <div className="text-[39px] font-bold tracking-wide font-sans leading-[2.8rem] ">
          <h2 className="capitalize">
            Level Up Your <span className=" " style={{color: '#FDF300'}}>
              workforce,{" "}
            </span>{" "}
          </h2>
          <h2 className="capitalize">
            Invest In Skills For a{" "}
            <span className="" style={{color: '#FDF300'}}> Future-Proof Growth </span>{" "}
          </h2>
        </div>
        <div className="mt-3 text-[1.7rem] leading-8 tracking-wide font-medium text-zinc-200 ">
          <p> By investing in your team`s skills today, </p>
          <p> you`re building a strong foundation </p>
          <p> for future success. </p>
        </div>

        <button className="mt-5 flex gap-2  items-center uppercase border-2 text-zinc-50 border-zinc-50 bg-orange-500 tracking-wide py-1 px-4 text-lg font-semibold font-sans ">
          <FaDownload /> download brochure{" "}
        </button>
      </div>
      <div className=" flex justify-end md:ps-[8%]">
        <EnquiryForm2 />
      </div>
    </div>
  );
}

export default HeroSection_Corporate;
