import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";

const Dropdown = ({ isOpen, toggleDropdown }) => {
  return (
    <div className="relative">
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="rounded-full w-10 h-10 cursor-pointer"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="absolute right-2 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-max-content p-2">
          <ul className="py-1 ">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center gap-2 relative dropdown-items">
              <IoPerson />
              Profile
            </li>
            <hr />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center gap-2 relative dropdown-items">
              <FaAddressCard />
              Contact Card
            </li>
            <hr />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center gap-2 relative dropdown-items">
              <IoMdSettings />
              Settings
            </li>
            <hr />
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center gap-2 relative dropdown-items">
              <IoLogOut />
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
