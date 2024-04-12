import React from "react";
import { Card } from "flowbite-react";

const ContactCard = ({ name, work, image, number }) => {
  return (
    <Card className="max-w-sm text-sm" imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <span className="font-bold">Designation:</span> <span className="italic">{work}</span>
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      <span className="font-bold">Contact No.:</span> {number}
      </p>
    </Card>

    // <div className="max-w-sm rounded overflow-hidden shadow-lg">
    //   <img className="w-full" src={image} alt="Person" />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{name}</div>
    //     <p className="text-gray-700 text-base mb-2">{work}</p>
    //     <p className="text-gray-700 text-base">{number}</p>
    //   </div>
    // </div>
  );
};

export default ContactCard;
