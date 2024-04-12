import React from "react";
import ContactCard from "../components/ContactCard";
import contact from "../assets/contact.jpg";
import { Pagination } from "flowbite-react";
import { useState } from "react";

const Contacts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="m-4 h-screen">
      <h1 className="text-2xl text-red-400 p-4 text-center mt-4 font-bold">
        See all your contacts in one place
      </h1>

      <div className="flex gap-10 justify-center mt-5 flex-wrap">
        <ContactCard
          image={contact}
          name="Sachin Gupta"
          work="Software Engineer"
          number="1234567890"
        />
        <ContactCard
          image={contact}
          name="Sachin Gupta"
          work="Software Engineer"
          number="1234567890"
        />
        <ContactCard
          image={contact}
          name="Sachin Gupta"
          work="Software Engineer"
          number="1234567890"
        />
        <ContactCard
          image={contact}
          name="Sachin Gupta"
          work="Software Engineer"
          number="1234567890"
        />
        <ContactCard
          image={contact}
          name="Sachin Gupta"
          work="Software Engineer"
          number="1234567890"
        />
      </div>
      <div className="flex overflow-x-auto sm:justify-center mt-20">
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={onPageChange}
          className="font-bold"
          showIcons
        />
      </div>
    </div>
  );
};

export default Contacts;
