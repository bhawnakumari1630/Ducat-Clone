import React, { useEffect, useRef, useState } from "react";

import BatchesCard from "../BatchesCard/BatchesCard";
import { Batches_Data } from "../../data/Batches_Data";
import SliderButton from "../SliderButton/SliderButton";

function UpcomingBatches() {
  const [batches, setBatches] = useState([]);
  const [branch, setBranch] = useState("all");
  const Ref_cardSlider = useRef(null)

  useEffect(() => {
    const data = Batches_Data.filter((item) => branch !== 'all' ? branch == item.branch : Batches_Data );
    setBatches(data);
  }, [branch]);

  useEffect(()=>{
    if(Ref_cardSlider) {
      console.log(Ref_cardSlider.current.ScrollWidth)
    }
  }, [])

  // console.log(batches)

  return (
    <div className={`capitalize  py-[2%]  overflow-hidden `}>
      <div className="space-y-5 px-[9%] ">
        <h2 className="text-3xl  text-zinc-800">Upcoming batches</h2>

        {/* <div> */}
        <p className="text-xl text-zinc-800 "> select a branch </p>

        <div className=" px-6 pe-8 flex  justify-between items-center ">
          <select
            name="branch"
            // value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
              console.log(e.target.value);
            }}
            id=""
            className="border text-zinc-600 px-3 py-2 w-64 lg:w-72 rounded-md focus:ring-[2.5px] outline-none ring-blue-200 "
          >
            <option value="all"> all </option>
            <option value="noida sector 16"> Noida sector 16 </option>
            <option value="noida sector 63"> sector 63, noida </option>
            <option value="pitampura"> pitampura </option>
            <option value="gurugram"> gurugram </option>
            <option value="ghaziabad"> ghaziabad </option>
            <option value="south ex."> south ex. </option>
          </select>

          <SliderButton />
        </div>
        {/* </div> */}
      </div>

      <div className="px-5 md:px-[9%] pt-[4%] ">
        <div className="px-5 py-8 overflow-auto scrollNone  ">
          <div ref={Ref_cardSlider} className=" flex gap-5 ">
            { 
              batches.map((item) => {
                return <BatchesCard batch={item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingBatches;
