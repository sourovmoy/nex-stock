"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInButtons = () => {
  return (
    <div className="flex justify-between gap-5 mt-4">
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        type="button"
        className="group flex items-center justify-center w-full max-w-sm px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
      >
        <FcGoogle size={25} />
      </button>
      <button
        type="button"
        className="group flex items-center justify-center w-full max-w-sm px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
      >
        <FaFacebook size={25} />
      </button>
    </div>
  );
};

export default SignInButtons;
