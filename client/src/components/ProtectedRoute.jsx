import React, { useEffect } from "react";
import { useState } from "react";
import { getAuthToken, removeAuthToken } from "../util/helper";
import { router } from "../App";
import { verifyTokenRoute } from "../api/authApi";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const token = getAuthToken();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!token) {
          setLoading(false);
          return router.navigate("/auth");
        } else {
          const response = await verifyTokenRoute();
          if (!response.data) {
            removeAuthToken();
            return router.navigate("/auth");
          } else setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        removeAuthToken();
        router.navigate("/auth");
      }
    };
    verifyToken();
  }, [token]);

  return loading ? <div>Loading...</div> : children;
};

export default ProtectedRoute;
