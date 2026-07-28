"use client";
import React, { useState, useEffect } from "react";

const ScrollEffectWrapper = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handelScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 top-0 md:top-0 md:bottom-auto z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-blue/60 backdrop-blur-sm shadow-md md:px-30 sm:px-6 px-4 py-3 bg-blue-100"
          : "bg-blue/30 backdrop-blur-none md:mx-30 sm:mx-6 mx-4 py-2 px-5 bg-blue-100 rounded-4xl mt-5"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollEffectWrapper;
