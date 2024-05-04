import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { router } from "../App";
import { getBackgroundRoute } from "../api/generalApi";

const Auth = () => {
  const [params] = useSearchParams();
  const mode = params.get("mode");

  const [background, setBackground] = useState("");
  // const background = "https://source.unsplash.com/1600x900/?nature,water";

  const [error, setError] = useState(false);

  // const setToast = (message, type) => {
  //   setError(true);
  //   setToastMessage(message);

  //   if (type === "error") {
  //     setToastType("error");
  //   } else if (type === "success") {
  //     setToastType("success");
  //   }
  // };

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
      <div className="w-[50%] mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {mode === "signin" && <SignInForm />}
        {mode === "signup" && <SignUpForm />}
      </div>
    </div>
  );
};

export default Auth;

export const AuthLoader = () => {
  return import("./Auth");
};
