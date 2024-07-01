import React from "react";
import EnquiryForm2 from "../EnquiryForm/EnquiryForm2";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function EmpowerWorkforce() {
  return (
    <div
      className="py-[10%] px-5 md:[5%] md:ps-[9%] md:pe-[3%] grid grid-cols-1  md:grid-cols-2 h-full place-items-center  gap-y-16 md:gap-0 relative "
      style={{
        backgroundImage: `url('https://www.ducatindia.com/_next/static/media/empower.306d8e75.webp')`,
      }}
    >
      <div className="  text-zinc-100 drop-shadow-sm tracking-wide  px-[5%] max-w-full lg:max-w-[85%] relative ">
        <h2 className="capitalize text-3xl font-semibold text-orange-400 ">
          Ready to empower your Workforce?
        </h2>
        <div className="mt-3 font-sans text-zinc-200 ">
          <p>
            Fill the details in the form to know all about our Corporate
            Training Solutions and Take your first step towards the success with
            the world-leading IT training company in Noida where employees not
            only acquire the skills but we help them to become future-ready.
          </p>
        </div>

        <div className="flex items-center justify-between mt-7">
          <div className=" space-y-2">
            <div className="bg-gradient-to-b from-yellow-400 to-orange-500 h-10 w-10 rounded-full flex items-center justify-center ">
              <IoIosCall className="text-xl fill-zinc-800" />
            </div>
            <p className=" capitalize  font-medium text-orange-400 "> phone number </p>
            <p className="text-sm font-light"> 0120-4155255 </p>
          </div>
          <div className=" space-y-2">
            <div className="bg-gradient-to-b from-yellow-400 to-orange-500 h-10 w-10 rounded-full flex items-center justify-center ">
              <MdEmail className="text-xl fill-zinc-800"  />
            </div>
            <p className=" capitalize  font-medium text-orange-400 "> e-mail </p>
            <p className="text-sm font-light"> team-corporate@ducat.com </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end md:ps-[8%]">
        <EnquiryForm2 />
      </div>
    </div>
  );
}

export default EmpowerWorkforce;
