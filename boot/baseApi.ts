import axios from "axios";

// Create an Axios instance with default configuration
const axiosConfig = {
  baseURL: "https://robinhood.mn/back/api/v1",
  timeout: 30000,
};

export const api = axios.create(axiosConfig);

// Function to get the subdomain
export const getSubDomain = () => {
  const url = window.location.host.replace(/https?:\/\/(www\.)?/, "");
  const temp = url.split("/");
  if (temp.length > 0) {
    const subdomainParts = temp[0].split(".");
    return subdomainParts.length > 2 ? subdomainParts[0] : "";
  }
  return "";
};

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`; // Ensure it's a Bearer token
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data, 
  (error) => {
    const { response } = error;
    if (response) {
      switch (response.status) {
        case 404:
          window.location.assign(`/notFound`);
          break;
        case 401:
          window.location.assign("/login");
          break;
        default:
          alert("An error occurred: " + (response.data.msg || "Unknown error"));
      }
    } else {
      alert("Network error: Please check your connection");
    }
    return Promise.reject(error);
  }
);