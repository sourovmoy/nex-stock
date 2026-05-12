import React from "react";
import ScrollEffectWrapper from "./ScrollEffectWrapper/ScrollEffectWrapper";
import Logo from "../Logo/Logo";
import NavLink from "@/Components/Navlink/NavLink";

const Header = () => {
  return (
    <ScrollEffectWrapper>
      <div className="xl:px-20 lg:px-16 md:px-10 sm:px-6 px-4">
        <div className="flex justify-between items-center py-1">
          {/* left-navbar  */}
          <div className="flex items-center gap-3">
            <Logo height={40} width={100} />
            <NavLink />
          </div>
          <div className="">actions</div>
          {/* right-navbar  */}
        </div>
      </div>
    </ScrollEffectWrapper>
  );
};

export default Header;
