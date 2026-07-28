import React from "react";
import ScrollEffectWrapper from "./ScrollEffectWrapper/ScrollEffectWrapper";
import Logo from "../Logo/Logo";
import NavLink from "@/Components/Navlink/NavLink";
import Search from "../Search/Search";
import Notification from "@/Components/Notification/Notification";
import HeadersBtn from "./HeadersBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const Header = () => {
  // const user = getServerSession(authOptions).JSON.stringify();
  // console.log(user);

  return (
    <ScrollEffectWrapper>
      <div className="md:px-14 sm:px-6 px-4 py-2 bg-blue-50">
        <div className="flex justify-between items-center">
          {/* left-navbar  */}
          <div className="flex items-center gap-3">
            <Logo height={40} width={60} />
            <div className="hidden md:flex gap-3">
              <NavLink />
            </div>
          </div>
          {/* right-navbar  */}
          <div className="relative flex justify-center items-center gap-3">
            <Search />
            <Notification />
            <HeadersBtn />
          </div>
        </div>
      </div>
    </ScrollEffectWrapper>
  );
};

export default Header;
