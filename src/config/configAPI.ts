import axios, { AxiosResponse } from "axios";

const api = (
  token = "",
  headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
) => {
  const apiConfig = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  // ✅ Correct response interceptor
  apiConfig.interceptors.response.use(
    (response: AxiosResponse) => response, // Return the full response
    (error) => {
      console.error(
        "API Error:",
        error.response?.data?.message || error.message
      );
      return Promise.reject(error);
    }
  );

  return apiConfig;
};

export default api;
