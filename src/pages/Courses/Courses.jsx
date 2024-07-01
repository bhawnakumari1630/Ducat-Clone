import React, { useEffect, useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import EnquiryForm from "../../component/EnquiryForm/EnquiryForm";
import { useParams } from "react-router-dom";
import CourseDetail from "./CourseDetail";
import HomeBar from "../../component/homeBar/HomeBar";
import ExploreCourses from "../../component/exploreCourses/ExploreCourses";
import Reviews from "../../component/ReviewCards/Reviews";
import Footer from "../../component/Footer/Footer";

export default function Courses() {
  const [courseData, setCourseData] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    // fetch(`http://localhost:3000/course/${id}`)
    fetch(`https://ducat-data-1.onrender.com/course/${id}`)
      .then((res) => res.json())
      .then((res) => setCourseData(res));
  }, [id]);

  return (
    <div className="w-full pb-[%]  " >
      <div className="lg:grid grid-cols-3 gap-[4%] py-10 md:py-[5%]  px-[6%]  " style={{ background : '#E8F7FF' }}>
        <div className="lg:flex lg:gap-[5%] col-span-2 " >
          { courseData && <CourseDetail details={courseData} /> }
        </div>

        <div className=" mx-auto mt-[6%] lg:mt-0 lg:mx-0 min-w-[20rem] max-w-[23rem]">
          <EnquiryForm />
        </div>
      </div>
      <ExploreCourses />
      <HomeBar />
      <div className="pb-[4%] pt-[7%] md:pt-[5%]  ">
       <Reviews />
      </div>
      <Footer />

    </div>
  );
}
