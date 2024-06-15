import React from "react";
import HeroSection_Corporate from "../../component/HeroSections/HeroSection_Corporate";
import CompaniesSlider from "../../component/CompaniesSlider/CompaniesSlider";
import WhyChoose from "../../component/CorporateTraining_body/WhyChoose";
import EmployeeEmpowered from "../../component/CorporateTraining_body/EmployeeEmpowered";
import WhatIs from "../../component/CorporateTraining_body/WhatIs";
import WhyImportant from "../../component/CorporateTraining_body/WhyImportant";
import WhatWeOffer from "../../component/CorporateTraining_body/WhatWeOffer";
import Footer from "../../component/Footer/Footer";
import BenefitsOfChoosing from "../../component/CorporateTraining_body/BenefitsOfChoosing";
import ForCorporates from "../../component/CorporateTraining_body/ForCorporates";
import TopCourses from "../../component/CorporateTraining_body/TopCourses";
import OurSuccess from "../../component/CorporateTraining_body/OurSuccess";
import EmpowerWorkforce from "../../component/CorporateTraining_body/EmpowerWorkforce";
import FAQ from "../../component/CorporateTraining_body/FAQ";

function CorporateTraining() {
  return (
    <div>
      <HeroSection_Corporate />
      <div className=" text-center py-[5%]  space-y-5 md:space-y-10 px-[1%] md:px-[4%] ">
        <h2 className=" border-b-4 border-orange-400 inline  pb-1 text-3xl text-zinc-900 font-semibold capitalize ">
          {" "}
          our placement partners{" "}
        </h2>
        <CompaniesSlider />
      </div>
      <div className=" lg:px-0 ">
      <WhyChoose />
      <EmployeeEmpowered />
      <WhatIs />
      <WhyImportant />
      <WhatWeOffer />
      <BenefitsOfChoosing />
      <ForCorporates />
      <TopCourses />
      <OurSuccess />
      <EmpowerWorkforce />
      <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default CorporateTraining;
