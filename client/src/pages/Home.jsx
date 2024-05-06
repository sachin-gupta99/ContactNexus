import React, { useEffect } from "react";
import HomePageLogo from "../assets/HomePagePic.jpg";
import MeetingDifferentPeople from "../assets/MeetingDifferentPeople.jpg";
import SaveContacts from "../assets/SaveContacts.jpg";
import ShareContact from "../assets/ShareContact.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";

const Home = () => {
  useEffect(() => {
    document.title = "Contact Nexus - Home";
  }, []);

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
        <div className="flex flex-col items-center gap-4 border-r-2 border-red-500 px-8">
          <span className="text-3xl font-bold text-red-500">1M+</span>
          <span className="text-xl font-bold text-gray-500">
            Contacts shared
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 border-r-2 border-red-500 px-8">
          <span className="text-3xl font-bold text-red-500">95%</span>
          <span className="text-xl font-bold text-gray-500">
            User Satisfaction
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 px-8">
          <span className="text-3xl font-bold text-red-500">10k</span>
          <span className="text-xl font-bold text-gray-500">Active Users</span>
        </div>
      </div>

      <StandardProcedure />

      <div className="mt-12 m-4">
        <PortalReachSpecifics />

        <div className="flex justify-center mt-12 gap-4">
          <Button gradientMonochrome="failure" className="font-bold">
            <div className="flex items-center gap-2 text-md">
              Get Started - It's Free <FaArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

const StandardProcedure = () => {
  return (
    <div className="mt-12 m-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold text-red-500">Standard Procedure</h1>
        <p className="text-xl text-gray-500 text-center mb-7">
          The standard procedure to use Contact Nexus is as follows.
        </p>
      </div>

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
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={featureImage}
    >
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {feature}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
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
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};
