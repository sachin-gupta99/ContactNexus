import axiosInstance from "./axiosInstance";

export const getUserRoute = () => {
  return axiosInstance.get("/api/user");
};

export const newUserRoute = (data) => {
  return axiosInstance.post("/api/user/add", data);
};
