import React, { useEffect } from "react";
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Avatar } from "flowbite-react";
import { getAuthToken, removeAuthToken } from "../util/helper";
import { router } from "../App";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { getUserByEmailRoute } from "../api/userApi";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";

const Dropdown = ({ isOpen, toggleDropdown }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const onLogout = () => {
    removeAuthToken();
    router.navigate("/auth");
  };

  useEffect(() => {
    const getUser = async () => {
      const token = getAuthToken();
      const decodedToken = jwtDecode(token);

      const response = await getUserByEmailRoute({ email: decodedToken.sub });

      if (response.data) {
        dispatch(userActions.setUser(response.data));
      }
    };

    getUser();
  }, []);

  return (
    <div className="relative z-50">
      <Avatar
        img={user?.image || "https://via.placeholder.com/150"}
        alt="User Avatar"
        rounded
        status="online"
        className="hover:cursor-pointer"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="absolute right-2 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-max-content p-3">
          <div className="p-3 border-b-2 border-red-200">
            <span className="block text-xs text-gray-900 font-bold">
              {user?.name || "Name"}
            </span>
            <span className="block truncate text-xs text-gray-500 font-medium">
              {user?.email || "Email ID"}
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
            <li
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer rounded-lg flex items-center gap-2 relative dropdown-items"
              onClick={onLogout}
            >
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
