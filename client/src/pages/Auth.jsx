import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { router } from "../App";
import axios from "axios";

const Auth = () => {
  const [params] = useSearchParams();
  const mode = params.get("mode");
  const background = "https://source.unsplash.com/1600x900/?nature";

  useEffect(() => {
    if (mode !== "signin" && mode !== "signup") {
      router.navigate("/auth?mode=signin");
    }
  }, [mode]);

  return (
    <div>
      <div
        className={`h-screen bg-cover relative`}
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      <div className="w-[50%] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {mode === "signin" && <SignInForm />}
        {mode === "signup" && <SignUpForm />}
      </div>
    </div>
  );
};

export default Auth;

export const AuthLoader = () => {
  console.log("AuthLoader");
  return import("./Auth");
};
