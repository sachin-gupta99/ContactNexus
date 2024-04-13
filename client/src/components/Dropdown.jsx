import React from "react";
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Avatar } from "flowbite-react";

const Dropdown = ({ isOpen, toggleDropdown }) => {
  return (
    <div className="relative z-50">
      <Avatar
        img="https://via.placeholder.com/150"
        alt="User Avatar"
        rounded
        status="online"
        className="hover:cursor-pointer"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="absolute right-2 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-max-content p-3">
          <div className="p-3 border-b-2 border-red-200">
            <span className="block text-sm text-gray-900 font-bold">Sachin Gupta</span>
            <span className="block truncate text-sm text-gray-500 font-medium">
              sachin@gupta.com
            </span>
          </div>
          <ul className="p-1">
            <Link to="/profile">
              <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center gap-2 relative dropdown-items">
                <IoPerson />
                Profile
              </li>
            </Link>
            <hr />
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center gap-2 relative dropdown-items">
              <FaAddressCard />
              Contact Card
            </li>
            <hr />
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center gap-2 relative dropdown-items">
              <IoMdSettings />
              Settings
            </li>
            <hr />
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center gap-2 relative dropdown-items">
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
