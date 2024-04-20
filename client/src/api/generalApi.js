import axiosInstance from "./axiosInstance";

export const getBackgroundRoute = () => {
  return axiosInstance.get("/api/helper/background");
};
