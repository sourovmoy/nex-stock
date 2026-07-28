import HeroSection from "@/Components/Home/HeroSection";
import IndustrySection from "@/Components/Home/IndustrySection";
import React from "react";
import Pricing from "../pricing/page";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <HeroSection />
      </div>
      <IndustrySection />
      <div className="bg-gray-100">
        <Pricing />
      </div>
    </>
  );
};

export default Home;
