import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5226",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error.message || "Request failed"));
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Redirecting to login...");
      localStorage.removeItem("Token");
      window.location.href = "/login";
    }
    return Promise.reject(new Error(error.message || "Request failed"));
  }
);

export default api;
