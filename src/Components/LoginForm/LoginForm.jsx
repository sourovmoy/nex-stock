"use client";

import React from "react";

const LoginForm = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handelSubmit} className=" pt-6">
      <div className="space-y-3">
        {/* Email Field */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            className="border-b border-gray-300 py-2 outline-none transition-all
                   focus:border-indigo-600 focus:ring-0 placeholder:text-gray-400"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="border-b border-gray-300 py-2 outline-none transition-all
                   focus:border-indigo-600 focus:ring-0 placeholder:text-gray-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="border-2 border-indigo-600 text-indigo-600 font-bold py-3 px-6 rounded-lg transition-all hover:bg-indigo-50 active:scale-95 w-full"
        >
          Access Nex Stock
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
