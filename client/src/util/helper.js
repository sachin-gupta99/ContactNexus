export const setAuthToken = (token) => {
  localStorage.setItem("contact-nexus-user-token", token);
};

export const removeAuthToken = () => {
  localStorage.removeItem("contact-nexus-user-token");
};

export const getAuthToken = () => {
  return localStorage.getItem("contact-nexus-user-token");
};
