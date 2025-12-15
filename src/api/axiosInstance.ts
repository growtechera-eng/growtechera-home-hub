import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // backend base URL
  //withCredentials: true,
});

// Add token to headers
API.interceptors.request.use((req: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
