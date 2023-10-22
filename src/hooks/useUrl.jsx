import axios from "axios";
const useUrl = () => {
  const axiosSecure = axios.create({
    // baseURL: "http://localhost:8001",
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
  });

  return axiosSecure;
};

export default useUrl;
