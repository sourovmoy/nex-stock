import React from "react";
import ScrollEffectWrapper from "./ScrollEffectWrapper/ScrollEffectWrapper";

const Header = () => {
  return (
    <ScrollEffectWrapper>
      <div className="xl:px-20 lg:px-16 md:px-10 sm:px-6 px-4">
        <div className="flex justify-between items-center py-1">
          {/* left-navbar  */}
          <h1>logo</h1>
          <div className="flex items-center gap-5">links</div>
          {/* Center-navbar */}
          <div className="">actions</div>
          {/* right-navbar  */}
        </div>
      </div>
    </ScrollEffectWrapper>
  );
};

export default Header;
