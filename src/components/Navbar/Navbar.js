import React from "react";
import { BiChevronRight, BiSearch } from "react-icons/bi";

// Mobile Screen
const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">It All Starts Here!</h3>
          <span className="text-gray-300 text-xs flex items-center">
            Chennai
            <BiChevronRight />
          </span>
        </div>
        <div className="text-2xl text-gray-300">
          <BiSearch />
        </div>
      </div>
    </>
  );
};

// Tablet Screen
const NavMd = () => {};

// Desktop Screen
const NavLg = () => {};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navCol-primary px-4 py-2">
        <div className="md:hidden">
          {/* Mobile Screen */}
          <NavSm />
        </div>
        <div className="hidden lg:hidden md:flex">
          {/* tablet Screen */}
          {/* <NavMd /> */}
        </div>
        <div className="hidden lg:flex">
          {/* Desktop Screen */}
          {/* <NavLg /> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

