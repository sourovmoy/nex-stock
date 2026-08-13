import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-20 pt-25 transition-colors duration-300">
      {children}
    </div>
  );
};

export default Container;
