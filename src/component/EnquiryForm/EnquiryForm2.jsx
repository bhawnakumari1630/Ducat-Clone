import React, { useEffect, useState } from "react";
import course from "../../data/CoursesData";

function EnquiryForm2({formWidth}) {
  const [enquiryDetail, setEnquiryDetail] = useState({
    name: "",
    email: "",
    phone: "",
    center: "",
    course: "",
    companyName: "",
    anyQuery: "",
  });
  const [showCourses, setShowCourses] = useState(false);
  const [showCenter, setShowCenter] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryDetail((prev) => ({ ...prev, [name]: value.trim() }));
  };

  // useEffect(()=>{
  //     console.log(enquiryDetail)
  // },[enquiryDetail])

  return (
    <div className={` ${formWidth ? ' mx-auto max-w-4xl pt-0 pb-[1%] ' : 'max-w-md py-[5%] px-[5%] space-y-7 text-[13.5px] ' }  shadow-md shadow-gray-500 bg-white   font-normal text-slate-800 capitalize rounded-xl overflow-hidden `}>
        <div className={`text-center uppercase text-lg font-bold font-sans text-zinc-800 ${formWidth && 'hidden'} `}>
            <h2 className=" border-b-4 border-orange-400 inline  pb-1  "> enquiry now </h2>
        </div>
        <div className={` ${formWidth ? 'block' : 'hidden' } text-center bg-blue-900/85 py-3 text-2xl capitalize font-medium text-zinc-50 tracking-wide font-sans `}>
            <h2> online registration form </h2>
        </div> 
        

      <form className={` ${formWidth ? 'space-y-5 px-[5%] py-[4%] ' : 'space-y-3' } enquiryForm2 `}>
        <div className=" grid grid-cols-2 gap-3 ">
          <div className="space-y-3">
            <div className="">
              <label> name </label>
              <input
                type="text"
                value={enquiryDetail.name}
                name="name"
                onChange={(e) => handleChange(e)}
                placeholder="Name Number"
                className="w-full mt-0.5 border border-zinc-300 px-3 py-1.5 rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-400  focus:ring-[3px] ring-blue-200 outline-none transition-all duration-300 "
              />
            </div>
            <div className="">
              <label> phone </label>
              <input
                type="text"
                value={enquiryDetail.phone}
                name="phone"
                onChange={(e) => handleChange(e)}
                placeholder="Phone"
                className="w-full mt-0.5 border border-zinc-300 px-3 py-1.5 rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-400  focus:ring-[3px] ring-blue-200 outline-none transition-all duration-300 "
              />
            </div>
          </div>
          <div className="space-y-3">
            <div className="">
              <label> email </label>
              <input
                type="text"
                value={enquiryDetail.email}
                name="email"
                onChange={(e) => handleChange(e)}
                placeholder="email address"
                className="w-full mt-0.5 border border-zinc-300 px-3 py-1.5 rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-400  focus:ring-[3px] ring-blue-200 outline-none transition-all duration-300 "
              />
            </div>
            <div className=" mt-2">
              <label> center </label>
              <select
                name="center"
                value={enquiryDetail.center}
                onChange={(e) => handleChange(e)}
                // onChange={(e) => {
                //  setEnquiryDetail(prev => ({...prev, center : e.target.value }) )}}
                className="capitalize w-full mt-0.5 border border-zinc-300 px-2 py-[7px] rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-400  focus:ring-[3px] ring-blue-200 outline-none transition-all duration-300 "
              >
                <option value="select a branch"> Select a branch </option>
                <option value="noida sector 16"> Noida sector 16 </option>
                <option value="noida sector 63"> sector 63, noida </option>
                <option value="pitampura"> pitampura </option>
                <option value="gurugram"> gurugram </option>
                <option value="ghaziabad"> ghaziabad </option>
                <option value="south ex."> south ex. </option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <label> Select a course </label>
          <select
            name="course"
            value={enquiryDetail.course }
            onChange={(e) => handleChange(e)}
            className="w-full mt-0.5 border border-zinc-300 px-2 py-[7px] rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-400  focus:ring-[3px] ring-blue-200 outline-none transition-all duration-300 relative "
          >
            <option value="select a course"> Select a course </option>
            {course.map((item) => (
                <>
                    <option value={item.title}>{item.title}</option>
                </>
                ))}
            {/* </div> */}
          </select>
        </div>
        <div className="">
          <label> company name </label>
          <input
            type="text"
            value={enquiryDetail.companyName}
            name="company"
            onChange={(e) => handleChange(e)}
            placeholder="company Name"
            className="w-full mt-0.5 border border-zinc-300 px-3 py-1.5 rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-400  focus:ring-[3px] ring-blue-200 outline-none transition-all duration-300 "
          />
        </div>
        <div className="">
          <label> Any query </label>
          <textarea
            type="text"
            value={enquiryDetail.anyQuery}
            name="anyQuery"
            onChange={(e) => handleChange(e)}
            placeholder="message..."
            className="w-full mt-0.5 border border-zinc-300 px-3 py-1.5 rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-400  focus:ring-[3px] ring-blue-200 outline-none transition-all duration-300 "
          />
        </div>
        {/* <div> */}
            <button className="py-2 rounded-lg hover:text-zinc-900 hover:bg-orange-400 bg-sky-800 text-zinc-50 w-full transition-all duration-300 "> submit </button>
        {/* </div> */}
      </form>
    </div>
  );
}

export default EnquiryForm2;
