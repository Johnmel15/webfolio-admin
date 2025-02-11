import Cookies from "js-cookie";

export const getToken = () => Cookies.get("token") || "";

export const getGlobakKey = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const secretKey = import.meta.env.VITE_SECREY_KEY;

  return `ApiKey=${apiKey}&SecretKey=${secretKey}`;
};
