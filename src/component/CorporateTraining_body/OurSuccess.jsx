import React from "react";

function OurSuccess() {
  return (
    <div className=" space-y-12  py-[4%] ">
      <div className="text-center">
        <h2 className=" border-b-4 border-orange-400 inline  pb-1 text-3xl text-zinc-900 font-semibold capitalize ">
          our success
        </h2>
      </div>
      <div className="py-28 grid gap-y-5 md:gap-y-0 md:grid-cols-3 place-items-center bg-gradient-to-b from-sky-900  to-blue-400 " >
        <div>
            <p className="text-5xl text-center font-bold text-orange-500 "> 10+ </p>
            <p className="text-white mt-2"> Years of Corporate Training </p>
        </div>
        <div>
            <p className="text-5xl text-center font-bold text-orange-500 "> 62000+ </p>
            <p className="text-white mt-2"> Professionals Trained </p>
        </div>
        <div>
            <p className="text-5xl text-center font-bold text-orange-500 "> 1000+ </p>
            <p className="text-white mt-2"> Workshops </p>
        </div>
      </div>
    </div>
  );
}

export default OurSuccess;
