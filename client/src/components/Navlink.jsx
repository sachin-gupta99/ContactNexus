import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navlink = ({ href, children }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <span className={`link ${path.startsWith(href) ? "active" : ""}`}>
        <NavLink to={href}>{children}</NavLink>
      </span>
    </>
  );
};

export default Navlink;
