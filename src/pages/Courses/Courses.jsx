import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import EnquiryForm from "../../component/EnquiryForm/EnquiryForm";
import { useParams } from "react-router-dom";
import CourseDetail from "./CourseDetail";
import HomeBar from "../../component/homeBar/HomeBar";
import ExploreCourses from "../../component/exploreCourses/ExploreCourses";

export default function Courses() {
  const [courseData, setCourseData] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    fetch(`http://localhost:3000/course/${id}`)
      .then((res) => res.json())
      .then((res) => setCourseData(res));
  }, [id]);

  return (
    <div className="w-full pb-[5%] " >
      <div className="lg:flex lg:gap-[5%]  py-[5%]  px-[7.5%] " style={{ background : '#E8F7FF' }}>
        { courseData && <CourseDetail details={courseData} /> }
      </div>
      <ExploreCourses />
      <HomeBar />

    </div>
  );
}
