import React, { useEffect, useRef } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import Navlink from "./Navlink";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-3 bg-gray-200 shadow-lg sticky top-0">
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
            <IoMdContacts />
            <Navlink href="/contacts">Contacts</Navlink>
          </li>
        </ul>
      </div>

      <div className="flex justify-center gap-8 items-center w-1/8">
        <button className="border-2 border-red-400 px-4 py-1 rounded-md bg-red-400 text-white font-bold shadow shadow-red-400 hover:shadow-md hover:shadow-red-200">
          Login
        </button>
        <div className="w-1/9 relative" ref={dropdownRef}>
          <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
