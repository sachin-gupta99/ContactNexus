import React from "react";
import HomePageLogo from "../assets/HomePagePic.jpg";
import MeetingDifferentPeople from "../assets/MeetingDifferentPeople.jpg";
import SaveContacts from "../assets/SaveContacts.jpg";
import ShareContact from "../assets/ShareContact.jpg";
import { FaArrowRight } from "react-icons/fa";

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

      <StandardProcedure />

      <div className="mt-12 m-4">
        <PortalReachSpecifics />

        <div className="flex justify-center mt-12 gap-4">
          <button className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl flex items-center gap-2">
            Get Started - It's Free <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="flex justify-center bg-red-500 text-white p-4">
        <p className="text-center">
          © {new Date().getFullYear()} Contact Nexus. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Home;

const StandardProcedure = () => {
  return (
    <div className="mt-12 m-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-red-500">
        Standard Procedure
      </h1>

      <div className="flex justify-center gap-8 w-4/5 mx-auto">
        <StandardProcedureCards
          feature="Meet with different people"
          description="Meeting with different people can help you to learn new things and improve your skills."
          featureImage={MeetingDifferentPeople}
        />
        <StandardProcedureCards
          feature="Save Contacts on Contact Nexus"
          description="Saving contacts on Contact Nexus can help you to manage your contacts easily."
          featureImage={SaveContacts}
        />
        <StandardProcedureCards
          feature="Share Contacts with others"
          description="Sharing contacts plays a vital role in building a strong network."
          featureImage={ShareContact}
        />
      </div>
    </div>
  );
};

const StandardProcedureCards = ({ feature, description, featureImage }) => {
  return (
    <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-red-400 shadow-md shadow-red-300 w-1/3 overflow-hidden">
      <div className="bg-red-400 text-white font-bold text-xl py-4 w-full text-center">
        {feature}
      </div>
      <div className="p-3 flex flex-col items-center gap-4">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img
            src={featureImage}
            alt="Feature"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-base text-red-600 text-center">{description}</p>
      </div>
    </div>
  );
};

const PortalReachSpecifics = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-red-500">Feature Specifics</h1>
        <p className="text-xl text-gray-500 text-center">
          Contact Nexus provides you with the following feature specifics.
        </p>
      </div>
      <div className="flex justify-center gap-8">
        <PortalReachSpecificsCard
          title="Secure storage"
          description="Store your contacts securely and access them from anywhere."
        />
        <PortalReachSpecificsCard
          title="Business Card Sharing"
          description="Share your business card with others and grow your network."
        />
        <PortalReachSpecificsCard
          title="Mark as Favourite"
          description="Mark your favourite contacts and access them quickly."
        />
      </div>
    </div>
  );
};

const PortalReachSpecificsCard = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border-2 border-red-400 shadow-md shadow-red-300 w-1/3 p-4">
      <h1 className="text-2xl font-bold text-red-500">{title}</h1>
      <p className="text-lg text-gray-500">{description}</p>
    </div>
  );
};
