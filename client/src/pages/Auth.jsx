import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { router } from "../App";
import axios from "axios";
import { HiExclamation } from "react-icons/hi";
import { Toast } from "flowbite-react";

const Auth = () => {
  const [params] = useSearchParams();
  const mode = params.get("mode");

  const [background, setBackground] = useState("");
  // const background = "https://source.unsplash.com/1600x900/?nature,water";

  const [error, setError] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const setToast = (message) => {
    setError(true);
    setToastMessage(message);
  };

  useEffect(() => {
    document.title = "Sign In - Contact Nexus";
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }

    return () => {
      clearTimeout();
    };
  }, [error]);

  useEffect(() => {
    const func = async () => {
      const result = await axios.get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: "sQqjtnQeEie7RuCcWwvN6RZzv2WzRb3m6Aeb8yrhaqs",
          query: "nature,water",
        },
      });
      setBackground(result.data.urls.full);
    };

    func();
  }, []);

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
      {error && (
        <Toast className="absolute bottom-2 right-2 transition-all duration-200">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <HiExclamation className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{toastMessage}</div>
          <Toast.Toggle />
        </Toast>
      )}
      <div className="w-[50%] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {mode === "signin" && <SignInForm setToast={setToast} />}
        {mode === "signup" && <SignUpForm setToast={setToast} />}
      </div>
    </div>
  );
};

export default Auth;

export const AuthLoader = () => {
  return import("./Auth");
};
