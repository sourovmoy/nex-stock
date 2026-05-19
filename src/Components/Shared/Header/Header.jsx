import React from "react";
import ScrollEffectWrapper from "./ScrollEffectWrapper/ScrollEffectWrapper";
import Logo from "../Logo/Logo";
import NavLink from "@/Components/Navlink/NavLink";
import Search from "../Search/Search";
import Notification from "@/Components/Notification/Notification";
import { Button } from "@headlessui/react";

const Header = () => {
  return (
    <ScrollEffectWrapper>
      <div className="md:px-14 sm:px-6 px-4 py-2">
        <div className="flex justify-between items-center">
          {/* left-navbar  */}
          <div className="flex items-center gap-3">
            <Logo height={40} width={60} />
            <NavLink />
          </div>
          {/* right-navbar  */}
          <div className=" flex justify-center items-center gap-3">
            <Search />
            <Notification />
            <Button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-indigo-800 data-open:bg-gray-700">
              New Order
            </Button>
          </div>
        </div>
      </div>
    </ScrollEffectWrapper>
  );
};

export default Header;
