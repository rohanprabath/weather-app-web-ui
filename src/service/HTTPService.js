import axios from "axios";
const serverUrl = require("../Config").get(process.env.NODE_ENV).serverUrl;

const axiosInstance = axios;

axiosInstance.defaults.headers.common = {
  "Access-Control-Allow-Origin": "*"
};

// axiosInstance.defaults.withCredentials = false;

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response) {
      //TODO: hnadle api call errors      
    }
    return Promise.reject(error);
  }
);

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete
};
