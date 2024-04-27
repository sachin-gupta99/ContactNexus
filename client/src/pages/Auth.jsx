import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { router } from "../App";
import { HiCheck, HiExclamation } from "react-icons/hi";
import { Toast } from "flowbite-react";
import { getBackgroundRoute } from "../api/generalApi";
import { removeAuthToken } from "../util/helper";

const Auth = () => {
  const [params] = useSearchParams();
  const mode = params.get("mode");

  const [background, setBackground] = useState("");
  // const background = "https://source.unsplash.com/1600x900/?nature,water";

  const [error, setError] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("error");

  const setToast = (message, type) => {
    setError(true);
    setToastMessage(message);

    if (type === "error") {
      setToastType("error");
    } else if (type === "success") {
      setToastType("success");
    }
  };

  useEffect(() => {
    document.title = "Authentication - Contact Nexus";
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
      try {
        const background = await getBackgroundRoute();
        setBackground(background.data.urls.full);
      } catch (error) {
        setToast("Failed to load background. Please reload!", "error");
      }
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
        <Toast className="absolute bottom-2 right-2 transition-all duration-200 z-50">
          {toastType === "success" && (
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-700 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
          )}

          {toastType === "error" && (
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
          )}
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
