import React from "react";
import { Card } from "flowbite-react";

const ContactCard = ({ name, work, image, number }) => {
  return (
    <Card className="max-w-sm text-sm" imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Designation:</span>{" "}
        <span className="italic">{work}</span>
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Contact No.:</span> {number}
      </p>
    </Card>
  );
};

export default ContactCard;
