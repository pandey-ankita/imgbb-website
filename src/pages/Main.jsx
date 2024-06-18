import React from "react";
import Navbar from "../compoents/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      {/* <Page1/> */}
      <Outlet />
    </>
  );
};

export default Main;
