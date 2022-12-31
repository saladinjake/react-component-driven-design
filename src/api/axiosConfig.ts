import axios from "axios";
import { deleteToken } from "../utils/tokenConfig";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_NERVE_API_URL,
  headers: {
    "Content-Type": "application/json",
    clientId: process.env.REACT_APP_CLIENT_ID,
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
   
    return config;
  },
  (error) => {
    return error;
  }
);

// DELETE EXPIRED TOKEN
axiosInstance.interceptors.response.use(
  function (response) {
    if (response.status === 401) {
      deleteToken();
    }

    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      deleteToken();
      window.location.href = "/login";
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
