import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Contacts from "./pages/Contacts";
import AuthPage from "./pages/Auth";
import { AuthLoader } from "./pages/Auth";
import { rootLoader } from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: rootLoader,
    children: [
      {
        path: "auth",
        element: <AuthPage />,
        loader: AuthLoader,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
export { router };
