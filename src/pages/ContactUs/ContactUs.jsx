import React from "react";
import ContactForm from "../../component/Contact_Us/ContactForm";
import OurBranches from "./OurBranches";
import Footer from "../../component/Footer/Footer";
import Map from "../../component/Contact_Us/Map";

function ContactUs() {
  return (
    <div className=" relative  ">
      <div className=" w-full relative ">
        <img
          src="https://www.ducatindia.com/static/images/context-us.jpeg"
          alt=""
          className="w-full h-[65vh] object-cover object-top "
        />
      <div className="  w-full h-auto absolute top-[25%] md:top-[25%] ">
        <ContactForm />
      </div>
      </div>
      <div className=" h-[65vh] md:h-[45vh] lg:h-[40vh] "></div>
      <OurBranches />
      <Map />
      <Footer />
    </div>
  );
}

export default ContactUs;
