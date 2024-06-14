import React from "react";
import HeroSection from "../../component/HeroSections/HeroSection";
import HomeBar from "../../component/homeBar/HomeBar";
import TopPrograms from "../../component/TopPrograms/TopPrograms";
import WorkAt from "../../component/WorkAt/WorkAt";
import PlacementPartners from "../../component/PlacementPartner/PlacementPartners";
import UpcomingBatches from "../../component/UpcomingBatches/UpcomingBatches";
import StudentReviews from "../../component/StudentReview/StudentReviews";
import RightCourse from "../../component/RightCourse/RightCourse";
import Footer from "../../component/Footer/Footer";
import FooterForm from "../../component/Footer/FooterForm";

function Home() {
  return (
    <div className="flex flex-col  ">
      <div className=" flex-1 pb-7 md:pb-0 ">
        <HeroSection />
        <HomeBar />
        <TopPrograms />
        <WorkAt />
        <UpcomingBatches />
        <StudentReviews />
        <RightCourse />
        <PlacementPartners />
        <Footer />
      </div>
      <div className="md:h-28  h-[11rem] ">
        <FooterForm />
      </div>
    </div>
  );
}

export default Home;
