import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroCarousel from "../components/Herocarousel/HeroCarousel";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousel/>
      {props.children}
    </>
  );
};

export default DefaultLayout;
