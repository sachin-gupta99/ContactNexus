import React, { useEffect } from "react";
import ContactCard from "../components/ContactCard";
import contact from "../assets/contact.jpg";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Contacts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  useEffect(() => {
  }, [searchTerm]);

  useEffect(() => {
  }, [currentPage]);

  useEffect(() => {
    document.title = "Contacts - Contact Nexus";
  }, []);

  return (
    <div className="m-4">
      <div className="flex justify-end items-center">
        <div className="flex justify-between w-3/5">
          <h1 className="text-2xl text-red-400 p-4 text-center font-bold">
            See all your contacts in one place
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex items-center overflow-hidden"
          >
            <button
              type="submit"
              className="bg-gray-900 text-white px-2 py-3.5 flex items-center rounded-l-lg focus:outline-none"
            >
              <FaSearch className="mx-1" />
              <span className="hidden sm:inline"></span>
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              className="px-4 py-2 flex-1 outline-none rounded-r-lg focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
            />
          </form>
        </div>
      </div>

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
