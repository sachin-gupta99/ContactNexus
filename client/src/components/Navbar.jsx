import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-200 shadow-lg bg-opacity-40">
      <div className="w-1/8 hover:drop-shadow-md cursor-pointer">
        <img src={logo} alt="Logo" className="w-70 h-10" />
      </div>
      <div className="w-2/5 font-bold">
        <ul className="flex gap-10 justify-center text-red-700">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-1/9">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="rounded-full w-12 h-12"
        />
      </div>
    </div>
  );
};

export default Navbar;
