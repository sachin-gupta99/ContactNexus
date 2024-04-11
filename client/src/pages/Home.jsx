import React from "react";
import HomePageLogo from "../assets/HomePagePic.jpg";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-around p-4 m-4 bg-gradient-to-r from-red-300 to-red-500 rounded-lg shadow-lg">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-5xl font-bold text-white">
            One place for all your contacts
          </h1>
          <p className="text-xl text-gray-100">
            Manage and browse through all your contacts with a few clicks.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={HomePageLogo}
            alt="Home Page Logo"
            className="w-96 rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-4 border-r-2 px-8">
          <span className="text-3xl font-bold text-red-500">1M+</span>
          <span className="text-xl font-bold text-gray-500">
            Contacts shared
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 border-r-2 px-8">
          <span className="text-3xl font-bold text-red-500">95%</span>
          <span className="text-xl font-bold text-gray-500">
            User Satisfaction
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 border-r-2 px-8">
          <span className="text-3xl font-bold text-red-500">10k</span>
          <span className="text-xl font-bold text-gray-500">Active Users</span>
        </div>
      </div>

      <div className="mt-12 m-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-500">
          Standard Procedure
        </h1>
        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center gap-6 p-4 rounded-lg bg-red-400">
            <img
              src="https://via.placeholder.com/150"
              alt="Feature 1"
              className="w-30 h-30 rounded-full"
            />
            <h1 className="text-xl font-bold text-white">Feature 1</h1>
            <p className="text-lg text-red-500 text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in lobortis lorem.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Feature 2"
              className="w-40 h-40 rounded-full"
            />
            <h2 className="text-xl font-bold text-red-500">Feature 2</h2>
            <p className="text-lg text-red-500 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in lobortis lorem.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Feature 3"
              className="w-40 h-40 rounded-full"
            />
            <h2 className="text-xl font-bold text-red-500">Feature 3</h2>
            <p className="text-lg text-red-500 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in lobortis lorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
