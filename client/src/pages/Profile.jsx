import React from "react";
import ProfilePicture from "../assets/contact.jpg";
import { Card } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user?.user);

  const likesInterests = [
    { label: "Likes", value: user?.likes },
    { label: "Movie", value: user?.movie },
    { label: "Interests", value: user?.interests },
  ];

  const contactInformation = [
    { label: "Email", value: user?.email },
    { label: "Phone", value: "+91-" + user?.phone },
    { label: "Address", value: user?.street + ", " + user?.area + ", " + user?.city + ", " + user?.state},
  ];

  const socialMedia = [
    { label: "Github", value: user?.github },
    { label: "LinkedIn", value: user?.linkedin },
    { label: "Instragram", value: user?.instagram },
  ];

  return (
    <div className="m-4 h-screen">
      <div className="flex gap-4">
        {/* Profile Picture */}
        <Card
          className="w-1/6 bg-gray-900"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={user?.image}
        >
          <h5 className="text-3xl font-bold tracking-tight text-red-500 dark:text-white">
            {user?.name}
          </h5>
          <p className="text-md text-white font-bold dark:text-gray-400">
            {user?.work}
          </p>
        </Card>

        {/* Profile Details */}
        <div className="border border-red-500 rounded-lg w-2/3 shadow-xl flex flex-col gap-2">
          <div className="p-4 text-center">
            <h1 className="text-3xl font-bold text-red-500">
              {user?.bioHeading || "Bio Heading"}
            </h1>
            <p className="text-lg text-gray-500">
              {user?.bioDescription || "Bio Description"}
            </p>
          </div>

          {/* Personal Details */}
          <div className="flex gap-4 px-4">
            {/* Contact Information */}
            <DetailsCard
              heading="Contact Information"
              details={contactInformation}
            />

            {/* Social Media */}
            <DetailsCard heading="Social Media" details={socialMedia} />

            {/* Likes and Interests */}
            <DetailsCard
              heading="Likes and Interests"
              details={likesInterests}
            />
          </div>

          {/* Favourite Contacts */}
          <div className="p-4">
            <Card className="">
              <div className="flex justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Favourite Contacts
                </h5>
                <Link to="/contacts">
                  <Button gradientMonochrome="failure" className="font-bold">
                    View All Contacts
                  </Button>
                </Link>
              </div>

              <div className="flex gap-4">
                <FavouriteContact name="Sachin Gupta" image={ProfilePicture} />
                <FavouriteContact name="Sachin Gupta" image={ProfilePicture} />
                <FavouriteContact name="Sachin Gupta" image={ProfilePicture} />
              </div>
            </Card>
          </div>
        </div>

        {/* Edit or Delete Profile */}
        <div className="flex flex-col gap-4 w-1/6">
          <Card className="p-4 h-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Edit Profile
            </h5>
            <p className="text-md text-gray-700">
              Update your profile details and information
            </p>
            <Button gradientMonochrome="failure" className="font-bold">
              Edit Profile
            </Button>
          </Card>

          <Card className="p-4 h-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Delete Profile
            </h5>
            <p className="text-md text-gray-700">
              Delete your profile and all associated data
            </p>
            <Button gradientMonochrome="failure" className="font-bold">
              Delete Profile
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const DetailsCard = ({ heading, details }) => {
  return (
    <>
      <div className="max-w-sm p-6 bg-white rounded-lg w-1/3 border shadow-md">
        <h5 className="text-lg font-bold mb-2 border-b-2">{heading}</h5>
        <div className="flex flex-col gap-4">
          <DetailsCardValue label={details[0].label} value={details[0].value} />
          <DetailsCardValue label={details[1].label} value={details[1].value} />
          <DetailsCardValue label={details[2].label} value={details[2].value} />
        </div>
      </div>
    </>
  );
};

const DetailsCardValue = ({ label, value }) => {
  return (
    <p className="text-md flex gap-1 items-center">
      <span className="text-red-500 font-bold self-start">{label}:</span>
      <span className="text-gray-700 text-sm p-[0.1rem]">{value}</span>
    </p>
  );
};

const FavouriteContact = ({ name, image }) => {
  return (
    <div className="flex flex-col gap-2 border-2 border-red-400 p-2 rounded-lg shadow-lg">
      <Avatar img={image} />
      <span className="text-gray-700 font-bold">{name}</span>
    </div>
  );
};
