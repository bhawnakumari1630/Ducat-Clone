import React from "react";
import { PlacementRecord_Data } from "../../data/PlacementData";

function PlacementRecord() {
  const PlacementCard = PlacementRecord_Data.map((item) => {
    console.log(item);
    return (
      <div
        key={item.id}
        className="flex flex-row md:pt-20 lg:pt-16 lg:h-64 w-full md:w-[22rem] lg:w-sm md:flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 relative "
      >
        <img
          src={item.image}
          className="object-cover max-w-40 w-40  md:max-w-36 md:w-36 lg:w-[8rem] h-44 w-46 md:h-36 lg:h-[8rem]  md:rounded-full  md:absolute -top-14 ring  "
          alt=""
        />
        <div className="flex flex-col justify-between text-center md:px-6 md:py-5 md:mt-2 leading-normal space-y-1">
          <h5 className="mb-2 capitalize text-xl font-bold tracking-tight text-gray-800 dark:text-white">
            {item.name}
          </h5>
          <dl className="grid grid-cols-2 gap-y-1.5 text-sm ">
            <dt className=" text-zinc-700 font-medium "> job profile - </dt>
            <dd className=" text-zinc-600 "> {item.profile} </dd>

            <dt className=" text-zinc-700 font-medium "> package - </dt>
            <dd className=" text-zinc-600 "> {item.package} </dd>

            <dt className=" text-zinc-700 font-medium "> company - </dt>
            <dd className=" text-zinc-600 "> {item.company} </dd>
          </dl>
        </div>
      </div>
    );
  });

  return <>{PlacementCard}</>;
}

export default PlacementRecord;
