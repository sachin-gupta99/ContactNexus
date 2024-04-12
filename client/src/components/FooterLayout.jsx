import React from "react";
import { Footer } from "flowbite-react";

const FooterLayout = () => {
  return (
    <Footer container className="bg-gray-900 shadow-lg">
      <Footer.Copyright
        href="#"
        by="Contact Nexus"
        year={new Date().getFullYear()}
        className="text-white font-bold"
      />
      <Footer.LinkGroup className="text-red-500 font-bold hover:no-underline">
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
};

export default FooterLayout;
