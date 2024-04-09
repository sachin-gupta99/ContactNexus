import React from "react";
import logo from "../assets/logo.png";
import Navlink from "./Navlink";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-200 shadow-lg bg-opacity-40">
      <div className="w-1/8 hover:drop-shadow-md cursor-pointer">
        <NavLink to="/home">
          <img src={logo} alt="Logo" className="w-70 h-10" />
        </NavLink>
      </div>
      <div className="w-2/5 font-bold">
        <ul className="flex gap-10 justify-center text-red-700">
          <li className="flex items-center gap-2">
            <IoHome />
            <Navlink href="/home">Home</Navlink>
          </li>
          <li className="flex items-center gap-2">
            <IoPerson />
            <Navlink href="/profile">Profile</Navlink>
          </li>
          <li className="flex items-center gap-2">
            <IoMdContacts />
            <Navlink href="/contacts">Contacts</Navlink>
          </li>
          <li className="flex items-center gap-2">
            <IoMdSettings />
            <Navlink href="/settings">Settings</Navlink>
          </li>
        </ul>
      </div>
      <div className="w-1/9">
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
