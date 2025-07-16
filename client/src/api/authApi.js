import axiosInstance from "./axiosInstance";

export const registerRoute = (user) => {
  return axiosInstance.post("/api/auth/register", user);
};

export const loginRoute = (user) => {
  return axiosInstance.post("/api/auth/login", user);
};

export const signUpRoute = (data) => {

  return axiosInstance.post(`/api/auth/addUser`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const verifyTokenRoute = () => {
  return axiosInstance.post("/api/user/verifyToken");
};

export const logoutRoute = (userId) => {
  return axiosInstance.get(`/api/auth/logout/${userId}`);
};
