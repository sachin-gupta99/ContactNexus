import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import logo_red from "../assets/logo_red.png";
import TextField from "./TextField";

const SignInForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <div className="flex flex-col gap-4">
          <img src={logo_red} alt="Logo" width={200} className="self-center" />

          <h1 className="text-xl font-bold text-center text-gray-500">Sign In</h1>
            
        </div>
        <form className="mt-6">
          <TextField
            name="username"
            label="Email"
            placeholder="johndoe@gmail.com"
            icon={HiMail}
          />

          <TextField
            name="password"
            label="Password"
            placeholder="Strong password"
            icon={RiLockPasswordFill}
          />

          <Link to="/auth?mode=signin" className="text-white font-bold">
            <Button gradientMonochrome="failure" className="font-bold w-full">
              Sign In
            </Button>
          </Link>
          <p className="flex justify-between p-2">
            Don't have an account?
            <span>
              <Link to="/auth?mode=signup" className="text-blue-500">
                Sign Up
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
