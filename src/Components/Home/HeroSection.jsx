import Image from "next/image";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import Button from "../Shared/Buttons/Button";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-15 mt-15 px-5 md:px-20 gap-10 md:gap-1">
      <div className="flex-1 max-w-xl mx-auto space-y-8">
        <h2 className="text-3xl font-medium text-gray-700">
          Master Your Inventory with Precision.
        </h2>
        <p className="text-md text-gray-500">
          Unified point-of-sale and inventory management for modern retail,
          high- volume restaurants, and pharmacies. Scale faster with real-time
          analytics and automated supply chain logic.
        </p>
        <div className="flex gap-5 items-center ">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-800">
            Get Started Free
          </Button>
          <Button className="flex items-center hover:bg-gray-400">
            <IoPlayCircleOutline />
            View Demo
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          src={"/left-banner.png"}
          alt={"left banner"}
          width={350}
          height={350}
          loading="eager"
          className="w-auto h-auto outline-8 outline-gray-500 bg-black rounded-2xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
