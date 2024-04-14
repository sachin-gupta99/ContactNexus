import React from "react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import logo_red from "../assets/logo_red.png";
import TextField from "./TextField";
import { IoIosPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const SignUpForm = () => {
  return (
    <div className="bg-white p-8 rounded shadow-lg m-4">
      <div className="flex flex-col gap-4 justify-center">
        <img src={logo_red} alt="Logo" width={500} className="self-center" />

        <h1 className="text-3xl font-bold text-center text-gray-500">
          Sign Up
        </h1>
      </div>
      <form className="mt-6">
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

        <Link to="/auth?mode=signin" className="text-white font-bold">
          <Button gradientMonochrome="failure" className="font-bold w-full">
            Sign Up
          </Button>
        </Link>
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
