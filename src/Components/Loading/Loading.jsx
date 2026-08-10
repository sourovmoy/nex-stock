import Lottie from "lottie-react";
import React from "react";
import animation from "@/asset/loading.json";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-64 h-64">
        <Lottie animationData={animation} loop={true} autoplay={true} />
      </div>
      <p className="mt-4 text-gray-600 font-medium">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
