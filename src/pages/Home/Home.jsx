import React from "react";
import HeroSection from "../../component/HeroSection/HeroSection";
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
      <div className=" flex-1 ">
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
      <div className="lg:h-24 h-[10.5rem] ">
        <FooterForm />
      </div>
    </div>
  );
}

export default Home;
