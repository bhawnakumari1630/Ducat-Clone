import React, { useEffect, useRef, useState } from "react";

import BatchesCard from "../BatchesCard/BatchesCard";
import { Batches_Data } from "../../data/Batches_Data";
import SliderButton from "../SliderButton/SliderButton";
import Scroll from "../Scroll/Scroll";

function UpcomingBatches() {
  const [batches, setBatches] = useState([]);
  const [branch, setBranch] = useState("all");

  const [refWidth , setRefWidth] = useState(0)
  const Ref_cardSlider = useRef(null)

  useEffect(() => {
    const data = Batches_Data.filter((item) => branch !== 'all' ? branch == item.branch : Batches_Data );
    setBatches(data);
  }, [branch]);

  useEffect(()=>{
    function handleResize() {
      if(Ref_cardSlider){
        setRefWidth(Ref_cardSlider.current.clientWidth)
        console.log('scroll : ' ,Ref_cardSlider.current.scrollWidth)
        console.log('client : ' ,Ref_cardSlider.current.clientWidth)
      }
    }
    window.addEventListener('resize', handleResize )
   return () => window.removeEventListener('resize', handleResize)
  },[])


  // console.log(batches)
  const Batches_Cards = batches.map((item) => {
    return <BatchesCard key={`upcoming-${item.id}`} batch={item} />;
  })

  return (
    <div className={`capitalize py-[6%] md:py-[6%] lg:py-[3%] overflow-hidden `}>
      <div className="space-y-5 px-[9%] ">
        <h2 className=" text-2xl md:text-3xl  text-zinc-800">Upcoming batches</h2>

        {/* <div> */}
        <p className="text-xl text-zinc-700 "> select a branch </p>

        <div className=" px-3 md:px-6 pe-8 ">
          <select
            name="branch"
            // value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
              console.log(e.target.value);
            }}
            id=""
            className="border text-zinc-600 px-3 py-2 w-48 md:w-64 lg:w-72 rounded-md focus:ring-[2.5px] outline-none ring-blue-200 "
          >
            <option value="all"> all </option>
            <option value="noida sector 16"> Noida sector 16 </option>
            <option value="noida sector 63"> sector 63, noida </option>
            <option value="pitampura"> pitampura </option>
            <option value="gurugram"> gurugram </option>
            <option value="ghaziabad"> ghaziabad </option>
            <option value="south ex."> south ex. </option>
          </select>
        </div>
      </div>
      
      <div className="ps-9 md:ps-[7%] pe-[2%] md:pe-2 mt-[4%] ">
        <Scroll top='5.3rem' CardsToRender={Batches_Cards} />
      </div>
    </div>
  );
}

export default UpcomingBatches;
