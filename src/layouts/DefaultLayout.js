import React from "react";
import Navbar from "../components/Navbar/Navbar";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default DefaultLayout;
