import React from "react";
import PlacementRecord from "../../component/PlacementRecord/PlacementRecord";

function Placements() {
  return (
    <div className="flex flex-col  ">
      <div className=" w-full md:px-[9%] py-6 bg-sky-300 ">
        <h2
          className="text-xl md:text-4xl xl:text-5xl text-zinc-800 font-medium "
          style={{ wordSpacing: "5px", lineHeight: "110%" }}
        >
          {" "}
          Best placements offered{" "}
        </h2>
        <p> We provide best career Guidance Along with suitable placements </p>
      </div>

      <div>
        <PlacementRecord />
      </div>
    </div>
  );
}

export default Placements;
