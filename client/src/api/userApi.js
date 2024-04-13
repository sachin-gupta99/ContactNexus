import axiosInstance from "./axiosInstance";

export const getUserRoute = () => {
  return axiosInstance.get("/api/user");
};
