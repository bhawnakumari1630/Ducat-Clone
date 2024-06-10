import React, { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdArrowDropup,
} from "react-icons/io";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const [courses, setCourses] = useState([]);
  const [listShow, setListShow] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/course")
      .then((res) => res.json())
      .then((res) => setCourses(res));
  }, []);

  const courseList = courses.map((item) => {
    return (
      <p
        className=" hover:bg-slate-300 px-2 py-0.5 hover:text-zinc-800 rounded-md capitalize "
        onClick={() => setListShow((prev) => !prev)}
      >
        <NavLink to={`courses/${item.id}`} as={""} key={item.id}>
          {item.title}
        </NavLink>
      </p>
    );
  });

  return (
    <>
      <p className="px-1 hover:text-zinc-700 ">
        <NavLink to={"/"}> Home </NavLink>
      </p>
      <p className="px-1 relative ">
        <NavLink>
          <div
            className="flex items-center gap-1  hover:text-zinc-700  "
            onClick={() => setListShow((prev) => !prev)}
          >
            <p> Courses </p>
            {listShow ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
          <div
            className={`absolute z-20 top-8 -left-1 px-2 py-2 w-[370%] text-[14.5px] bg-white border border-gray-300 shadow rounded-md overflow-auto ${
              listShow ? "inline" : "hidden"
            } `}
          >
            {" "}
            {courseList}{" "}
          </div>
        </NavLink>
      </p>
      <p className="px-1 hover:text-zinc-700 ">
        <NavLink to={"/corporate-training"}> Corporate Training </NavLink>
      </p>
      <p className="px-1 hover:text-zinc-700 ">
        <NavLink to={"/placement"}> Placements </NavLink>
      </p>
      <p className=" relative px-1 hover:text-zinc-700 text-center -mt-6 ">
        <NavLink to={"/career-guidance"} as={""}>
          <div className=" inline-flex gap-[2px] items-center tracking-wider  rounded-full px-2 py-1 text-zinc-100 text-xs bg-orange-500 border border-orange-400 ">
            <AiFillThunderbolt />
            <span className=" text-[10px] uppercase font-sans font-semibold ">
              {" "}
              AI-powered{" "}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Fbadge.webp&w=32&q=75"
              alt=""
              className="size-6"
            />
            <span> Career Guidance </span>
          </div>
        </NavLink>
      </p>
      <p className="px-1 hover:text-zinc-700 ">
        <NavLink to={"/blog"}> Blog </NavLink>
      </p>
      <p className="px-1 hover:text-zinc-700 ">
        <NavLink to={"/others"}> Others </NavLink>
      </p>
    </>
  );
}

export default NavLinks;
