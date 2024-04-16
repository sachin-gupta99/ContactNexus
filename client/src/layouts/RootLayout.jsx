import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterLayout from "../components/FooterLayout";
import { router } from "../App";

const RootLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === "/") {
      router.navigate("/home");
    }
  }, [path]);

  if (
    path === "/auth?mode=signin" ||
    path === "/auth?mode=signup" ||
    path === "/auth"
  ) {
    return <Outlet />;
  } else {
    return (
      <>
        <div className="min-h-screen">
          <Navbar />
          <Outlet />
        </div>
        <div>
          <FooterLayout />
        </div>
      </>
    );
  }
};

export default RootLayout;

export const rootLoader = () => {
  return import("./RootLayout");
};
