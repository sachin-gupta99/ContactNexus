import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import logo_red from "../assets/logo_red.png";
import TextField from "./TextField";
import { loginRoute } from "../api/authApi";
import { setAuthToken } from "../util/helper";
import { router } from "../App";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toastActions } from "../store/toast";

const SignInForm = ({ setToast }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      dispatch(
        toastActions.setToast({
          message: "Signing in...",
          type: "info",
        })
      );

      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);

      const response = await loginRoute(formData);
      if (response.data.token) {
        setAuthToken(response.data.token);
        router.navigate("/home");
        dispatch(
          toastActions.setToast({
            message: "Successfully logged in",
            type: "success",
          })
        );
      } else {
        dispatch(
          toastActions.setToast({
            message: "Something went wrong",
            type: "error",
          })
        );
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }
    } catch (error) {
      dispatch(
        toastActions.setToast({ message: "Invalid credentials", type: "error" })
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <div className="flex flex-col gap-4">
          <img src={logo_red} alt="Logo" width={200} className="self-center" />

          <h1 className="text-xl font-bold text-center text-gray-500">
            Sign In
          </h1>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Email"
            placeholder="johndoe@gmail.com"
            icon={HiMail}
            type="email"
            ref={emailRef}
          />

          <TextField
            name="password"
            label="Password"
            placeholder="Strong password"
            icon={RiLockPasswordFill}
            type="password"
            ref={passwordRef}
          />

          <Button
            gradientMonochrome="failure"
            className="font-bold w-full text-white"
            type="submit"
          >
            Sign In
          </Button>

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
