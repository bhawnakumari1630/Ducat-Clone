import React from "react";
import PlacementRecord from "../../component/PlacementRecord/PlacementRecord";
import PlacementPartners from "../../component/PlacementPartner/PlacementPartners";
import CompaniesSlider from "../../component/CompaniesSlider/CompaniesSlider";
import Footer from "../../component/Footer/Footer";


function Placements() {
  return (
    <div className="flex flex-col space-y-8 pt-[6%] lg:py-[5%] ">
      <div className=" text-center w-full py-5 px-[4%] md:px-[9%] md:py-6 bg-sky-200 capitalize space-y-1.5 ">
        <h2
          className="text-2xl md:text-4xl xl:text-5xl font-medium text-blue-900 "
          style={{ wordSpacing: "5px", lineHeight: "110%" }}
        >
          {" "}
          Best placements offered{" "}
        </h2>
        <p className=" text-zinc-600 font-medium text-[18px] md:text-lg ">
          {" "}
          We provide best career Guidance Along with suitable placements{" "}
        </p>
      </div>

      <div className=" flex-1 ">
        <div className="  px-[5%] pt-[7%] pb-[4%] grid grid-cols-2 lg:grid-cols-3 md:gap-x-6 lg:gap-x-5 gap-y-24 place-items-center ">
          <PlacementRecord />
        </div>
        <div className=" text-center py-[5%]  space-y-5 md:space-y-10 px-[1%] md:px-[4%] ">
          <h2 className="text-3xl text-zinc-900 font-semibold capitalize "> our placement partners </h2>
        <CompaniesSlider />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Placements;
