import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterLayout from "../components/FooterLayout";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterLayout />
    </>
  );
};

export default RootLayout;
