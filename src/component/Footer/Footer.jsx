import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";

function Footer() {
  return (
    <div className="footer w-full bottom-0 px-[5%] py-[5%] bg-blue-950 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:text-base text-zinc-300 font-light xl:gap-[5%]  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 space-y-10 md:space-y-0 text-sm  md:gap-[7%]  ">
          <div>
            <h3 className=" font-medium text-xl pb-3 capitalize text-zinc-200 ">
              {" "}
              our popular courses{" "}
            </h3>
            <div className="grid grid-cols-2 gap-5 ">
              <ul className=" space-y-1 ">
                <li> Java FullStack </li>
                <li> Python Full Stack </li>
                <li> .Net Full Stack </li>
                <li> Mern Stack </li>
                <li> Mean Stack </li>
                <li> PHP Full Stack </li>
              </ul>

              <ul className=" space-y-1 ">
                <li> UI/UX Course</li>
                <li> Data Analytics</li>
                <li> Cyber Security</li>
                <li> Ethical Hacking</li>
                <li> Aws</li>
                <li> Cloud Computing</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className=" font-medium text-xl pb-3 capitalize text-zinc-200 ">
              {" "}
              other top courses{" "}
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <ul className=" space-y-1 ">
                <li> Other Top Courses</li>
                <li> SAP Hana Fico</li>
                <li> Salesforce</li>
                <li> CCNA</li>
                <li> AutoCAD</li>
                <li> Graphic Designing</li>
                <li> Multimedia & Animation</li>
              </ul>

              <ul className=" space-y-1 ">
                <li> Manual + Selenium Testing</li>
                <li> Full Stack QA</li>
                <li> React Native</li>
                <li> React</li>
                <li> Angular</li>
                <li> Devops</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 pt-5 items-center lg:items-start lg:pt-0 lg:ps-[5%] ">
          <div className="text-sm">
            <h3 className=" font-medium text-xl pb-3 capitalize text-zinc-200 ">
              {" "}
              policies{" "}
            </h3>
            <div className="grid ">
              <ul className=" space-y-1 ">
                <li> Privacy Policy</li>
                <li> Refund Policy</li>
                <li> Terms and Conditions</li>
                <li> Blog</li>
                <li> TUTORIALS</li>
              </ul>
            </div>
          </div>
          <div className="text-center  ">
            <h3 className=" font-medium text- pb-3 capitalize text-zinc-200 ">
              {" "}
              follow us{" "}
            </h3>
            <div className="inline-flex   justify-between gap-1 text-2xl  text-zinc-200">
              <FaInstagram className=" hover:text-white " />
              <FaFacebookF className=" hover:text-white " />
              <TfiYoutube className=" hover:text-white " />
              <FaLinkedinIn className=" hover:text-white " />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
