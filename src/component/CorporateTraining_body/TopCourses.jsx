import React from "react";
import course from "../../data/CoursesData";

function TopCourses() {
  const topCourses = course.map((item) => <div className="py-2 px-4 border border-zinc-400 rounded-[5px] text-blue-800/90 font-medium shadow-sm shadow-blue-300 lg:text-center capitalize hover:text-zinc-50 hover:bg-blue-900/95 ">{item.title}</div>);

  return (
    <div className=" space-y-12 px-[3%] md:px-[8%] py-[4%] ">
      <div className="text-center">
        <h2 className=" border-b-4 border-orange-400 inline  pb-1 text-3xl text-zinc-900 font-semibold capitalize ">
          top courses
        </h2>
      </div>
      <div className=" px-[8%] lg:px-2 grid gap-5 items-center lg:grid-cols-4 ">
        {topCourses}
      </div>
    </div>
  );
}

export default TopCourses;
