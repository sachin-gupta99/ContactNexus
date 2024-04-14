import React from "react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import logo_red from "../assets/logo_red.png";
import TextField from "./TextField";
import { IoIosPerson } from "react-icons/io";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaStreetView } from "react-icons/fa";
import { TiChartArea } from "react-icons/ti";
import { FaCity } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import { TbMapPinCode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { MdInterests } from "react-icons/md";
import ImagePicker from "./ImagePicker";
import { BsPersonBadgeFill } from "react-icons/bs";
import { TbFileDescription } from "react-icons/tb";

const SignUpForm = () => {
  const Form1Next = () => {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Address Details <hr />";

    form1.classList.add("hidden");
    form2.classList.remove("hidden");
  };

  const Form2Prev = () => {
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Personal Details <hr />";

    form1.classList.remove("hidden");
    form2.classList.add("hidden");
  };

  const Form2Next = () => {
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Social Media, Likes & Interests <hr />";

    form2.classList.add("hidden");
    form3.classList.remove("hidden");
  };

  const Form3Prev = () => {
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");

    form2.classList.remove("hidden");
    form3.classList.add("hidden");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Address Details <hr />";
  };

  const Form3Next = () => {
    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");
    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Profile Picture and Bio <hr />";

    form3.classList.add("hidden");
    form4.classList.remove("hidden");
  };

  const Form4Prev = () => {
    const form3 = document.getElementById("form3");
    const form4 = document.getElementById("form4");

    form3.classList.remove("hidden");
    form4.classList.add("hidden");

    const heading = document.getElementById("form-heading");

    heading.innerHTML = "Social Media, Likes & Interests <hr />";
  };

  return (
    <div className="bg-white p-8 rounded shadow-lg m-4">
      <div className="flex flex-col gap-2 justify-center">
        <img src={logo_red} alt="Logo" width={200} className="self-center" />

        <h1 className="text-xl font-bold text-center text-gray-500">Sign Up</h1>
        <h1
          className="text-xl font-bold text-center text-red-500 p-2"
          id="form-heading"
        >
          Personal Details <hr />
        </h1>
      </div>
      <form className="mt-4">
        {/* Form 1 */}
        <div className="" id="form1">
          <div className="flex gap-4">
            <TextField
              name="username"
              label="Email"
              placeholder="johndoe@gmail.com"
              icon={HiMail}
              className="w-1/2"
            />
            <TextField
              name="name"
              label="Name"
              placeholder="John Doe"
              icon={IoIosPerson}
              className="w-1/2"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="password"
              label="Password"
              placeholder="Strong password"
              icon={RiLockPasswordFill}
              className="w-1/2"
            />
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Strong password"
              icon={RiLockPasswordFill}
              className="w-1/2"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="work"
              label="Work"
              placeholder="Student, Software Engineer, etc."
              icon={IoIosPerson}
              className="w-1/2"
            />
            <TextField
              name="phone"
              label="Phone"
              placeholder="1234567890"
              icon={FaPhoneAlt}
              className="w-1/2"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form1Next}
            >
              <div className="flex items-center gap-2">
                Next <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>

        {/* Form 2 */}
        <div className="hidden transition-all duration-300" id="form2">
          <div className="flex gap-4">
            <TextField
              name="street-name"
              label="House/Flat No., Street Name"
              placeholder="Address Line 1"
              icon={FaStreetView}
              className="w-full"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="area"
              label="Area"
              placeholder="Area"
              icon={TiChartArea}
              className="w-1/2"
            />
            <TextField
              name="city"
              label="City"
              placeholder="City"
              icon={FaCity}
              className="w-1/2"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="country"
              label="Country"
              placeholder="Country"
              icon={BiWorld}
              className="w-1/2"
            />
            <TextField
              name="pincode"
              label="Pincode"
              placeholder="123456"
              icon={TbMapPinCode}
              className="w-1/2"
            />
          </div>

          <div className="flex justify-center w-full gap-4">
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form2Prev}
            >
              <div className="flex items-center gap-2">
                <FaArrowLeft />
                Prev
              </div>
            </Button>
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form2Next}
            >
              <div className="flex items-center gap-2">
                Next <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>

        {/* Form 3 */}
        <div className="hidden transition-all duration-300" id="form3">
          <div className="flex gap-4">
            <TextField
              name="github_profile"
              label="Github Profile ID"
              placeholder="hardy-coder99"
              icon={FaGithub}
              className="w-1/3"
            />
            <TextField
              name="linkedin_profile"
              label="LinkedIn Profile ID"
              placeholder="hardy-influencer99"
              icon={FaLinkedin}
              className="w-1/3"
            />
            <TextField
              name="instagram_profile"
              label="Instagram Profile ID"
              placeholder="hardy-fashionista99"
              icon={FaInstagramSquare}
              className="w-1/3"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="likes"
              label="Likes"
              placeholder="Coding, Sleeping, etc."
              icon={FaCity}
              className="w-1/2"
            />
            <TextField
              name="movie"
              label="Movie"
              placeholder="The Shawshank Redemption"
              icon={MdMovie}
              className="w-1/2"
            />
          </div>
          <div className="flex gap-4">
            <TextField
              name="interests"
              label="Interests"
              placeholder="Web Development, Machine Learning, etc."
              icon={MdInterests}
              className="w-full"
            />
          </div>

          <div className="flex justify-center w-full gap-4">
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form3Prev}
            >
              <div className="flex items-center gap-2">
                <FaArrowLeft />
                Prev
              </div>
            </Button>
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form3Next}
            >
              <div className="flex items-center gap-2">
                Next
                <FaArrowRight />
              </div>
            </Button>
          </div>
        </div>

        {/* Form 4 */}
        <div className="hidden transition-all duration-300" id="form4">
          <ImagePicker label="Profile Picture" name="image" />

          <div className="flex gap-4">
            <TextField
              name="bio_heading"
              label="Bio Heading"
              placeholder="Heading to be displayed for bio"
              icon={BsPersonBadgeFill}
              className="w-full"
            />
          </div>

          <div className="flex gap-4">
            <TextField
              name="bio"
              label="Bio Description"
              placeholder="A short bio about yourself"
              icon={TbFileDescription}
              className="w-full"
            />
          </div>

          <div className="flex justify-center w-full gap-4">
            <Button
              type="button"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
              onClick={Form4Prev}
            >
              <div className="flex items-center gap-2">
                <FaArrowLeft />
                Prev
              </div>
            </Button>
            <Button
              type="submit"
              gradientMonochrome="failure"
              className="font-bold w-1/5"
            >
              Submit
            </Button>
          </div>
        </div>

        <p className="flex justify-between p-2">
          Already have an account?
          <span>
            <Link to="/auth?mode=signin" className="text-blue-500">
              Sign In
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
