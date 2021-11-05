import React from "react";
import {
  BiChevronDown,
  BiChevronRight,
  BiMenu,
  BiSearch,
} from "react-icons/bi";

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
const NavMd = () => {
  return (
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded my-2">
      <BiSearch className="text-gray-600 w-4 h-4" />
      <input
        type="search"
        className="w-full focus:outline-none"
        placeholder="Search for Movies, Events, Plays, Sports and Activities"
      />
    </div>
  );
};

// Desktop Screen
const NavLg = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between">
      <div className="w-1/2 flex items-center gap-4">
        <div className="cursor-pointer">
          <img src="logo.svg" alt="Book My show Logo" />
        </div>
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded my-2">
          <BiSearch className="text-gray-600 w-4 h-4" />
          <input
            type="search"
            className="w-full focus:outline-none"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-300 text-xs flex items-center hover:text-white cursor-pointer duration-150 ease-in">
          Chennai
          <BiChevronDown />
        </span>
        <button className="bg-buttonCol-primary text-white text-sm rounded px-4 py-1">
          Sign in
        </button>
        <div className="w-8 h-8 text-gray-200 cursor-pointer">
          <BiMenu className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

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
          <NavMd />
        </div>
        <div className="hidden lg:flex">
          {/* Desktop Screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
