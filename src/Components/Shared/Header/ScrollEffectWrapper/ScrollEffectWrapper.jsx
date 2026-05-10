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
          ? "bg-white/60 backdrop-blur-sm shadow-md"
          : "bg-white/30 backdrop-blur-none shadow-sm"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollEffectWrapper;
