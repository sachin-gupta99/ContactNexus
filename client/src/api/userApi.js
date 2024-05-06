import axiosInstance from "./axiosInstance";

export const getUserByEmailRoute = ({email}) => {
  return axiosInstance.get(`/api/user/${email}`);
};
