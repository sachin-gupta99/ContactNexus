import React, { useEffect, useRef } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import Navlink from "./Navlink";
import { Link, NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import Dropdown from "./Dropdown";
import { Button } from "flowbite-react";
import { getAuthToken } from "../util/helper";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const token = getAuthToken();
    if (token) setIsAuthenticated(true);
  }, []);

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
    <div className="flex justify-between items-center p-3 bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="w-1/8 hover:drop-shadow-md cursor-pointer">
        <NavLink to="/home">
          <img src={logo} alt="Logo" className="w-50 h-10" />
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
        {!isAuthenticated && (
          <Link to="/auth?mode=signin" className="text-white font-bold">
            <Button gradientMonochrome="failure" className="font-bold">
              Login
            </Button>
          </Link>
        )}
        {isAuthenticated && (
          <div className="w-1/9 relative" ref={dropdownRef}>
            <Dropdown isOpen={isOpen} toggleDropdown={toggleDropdown} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
