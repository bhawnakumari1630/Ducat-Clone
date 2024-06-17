import React, { useState } from "react";
import course from "../../data/CoursesData";

function ContactForm() {
  const [enquiryDetail, setEnquiryDetail] = useState({
    name: "",
    email: "",
    phone: "",
    center: "",
    course: "",
    howCanHelp: "",
  });
  const [showCourses, setShowCourses] = useState(false);
  const [showCenter, setShowCenter] = useState(false);

  const allBranches = [
    "Select a branch ",
    "Noida sector 16",
    "pitampura",
    "noida sector 63",
    "noida sector 16",
    "ghaziabad",
    "gurugram",
    "ghaziabad",
    "south ex.",
  ];

  const Branches = allBranches.map((item) => {
    return <option value={item}> {item} </option>;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryDetail((prev) => ({ ...prev, [name]: value.trim() }));
  };
  return (
    <div className="  mx-auto max-w-[85%] p-[3%] md:px-0 md:max-w-xl lg:max-w-4xl ">
      <div className="  shadow-md shadow-gray-300 space-y-5 md:space-y-4 px-10 md:px-8 py-7 rounded-xl bg-white/70 ">
        <div className="text-center ">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-900 capitalize "> connect with Us </h2>
          <p className="mx-auto mt-3 lg:max-w-[80%]semibold text-xs md:text-sm max-w-[75%] tracking-wide text-zinc-800 ">
            {" "}
            For further questions, including partnership opportunities, please
            email mail to: <span className="text-zinc-950 text-[15px] font-medium"> info@ducatindia.com </span> or contact using
            our contact form.{" "}
          </p>
        </div>
        <form
          className={` space-y-4 enquiryForm2 `}
        >
          <div className=" grid md:grid-cols-2 gap-3 ">
            <div className="space-y-3">
              <div className="">
                <label className="font-sans font-semibold text-xs text-zinc-950 tracking-wide capitalize ps-1"> name </label>
                <input
                  type="text"
                  value={enquiryDetail.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                  placeholder="Name Number"
                  className="bg-white w-full mt-0.5 border border-zinc-300 px-3 py-2 tracking-wide rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-300  focus:ring-[3px] outline-none transition-all duration-300 "
                />
              </div>
              <div className="">
                <label className="font-sans font-semibold text-xs text-zinc-950 tracking-wide capitalize ps-1"> phone </label>
                <input
                  type="text"
                  value={enquiryDetail.phone}
                  name="phone"
                  onChange={(e) => handleChange(e)}
                  placeholder="Phone"
                  className="bg-white w-full mt-0.5 border border-zinc-300 px-3 py-2 tracking-wide rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-300  focus:ring-[3px] outline-none transition-all duration-300 "
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="">
                <label className="font-sans font-semibold text-xs text-zinc-950 tracking-wide capitalize ps-1"> email </label>
                <input
                  type="text"
                  value={enquiryDetail.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                  placeholder="email address"
                  className="bg-white w-full mt-0.5 border border-zinc-300 px-3 py-2 tracking-wide rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-300  focus:ring-[3px] outline-none transition-all duration-300 "
                />
              </div>
              <div className=" mt-2">
                <label className="font-sans font-semibold text-xs text-zinc-950 tracking-wide capitalize ps-1"> center </label>
                <select
                  name="center"
                  value={enquiryDetail.center}
                  onChange={(e) => handleChange(e)}
                  // onChange={(e) => {
                  //  setEnquiryDetail(prev => ({...prev, center : e.target.value }) )}}
                  className="capitalize bg-white w-full mt-0.5 border border-zinc-300 px-2 py-2.5 tracking-wide rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-300  focus:ring-[3px] outline-none transition-all duration-300 "
                >
                  {Branches}
                </select>
              </div>
            </div>
          </div>

          <div className="">
            <label className="font-sans font-semibold text-xs text-zinc-950 tracking-wide capitalize ps-1"> course </label>
            <input
              type="text"
              value={enquiryDetail.course}
              name="company"
              onChange={(e) => handleChange(e)}
              placeholder="course name"
              className="bg-white tracking-wide w-full mt-0.5 border border-zinc-300 px-3 py-2 r2 tracking-wideded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-300  focus:ring-[3px] outline-none transition-all duration-300 rounded-lg"
            />
          </div>
          <div className="">
            <label className="font-sans font-semibold text-xs text-zinc-950 tracking-wide capitalize ps-1"> How can we help you ? </label>
            <textarea
              type="text"
              value={enquiryDetail.howCanHelp}
              name="anyQuery"
              onChange={(e) => handleChange(e)}
              placeholder="message..."
              rows={4}
              className="  tracking-wider bg-white w-full mt-0.5 border border-zinc-300 px-3 py-2 rounded-lg placeholder:capitalize placeholder:text-zinc-500 text-zinc-600 text-[12.5px] bg-transparent focus:border-blue-300  focus:ring-[3px] outline-none transition-all duration-300 "
            />
          </div>
          <div className="w-full flex justify-center">
          <button className="py-3 capitalize w-[85%] rounded-lg bg-gradient-to-br from-blue-950/85 to-blue-950 text-white  transition-all duration-300 ">
            send message
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
