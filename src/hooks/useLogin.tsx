import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import api from "../config/configAPI";
import Cookies from "js-cookie";

const useLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const login = useAuthStore((state) => state.login); // Zustand login function

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await api().post("/auth/login", formData);
      const { token } = response.data;

      Cookies.set("token", token);
      login(token); // Save token in Zustand store
      window.location.href = "/dashboard"; // Redirect on success
    } catch (err: any) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    formData,
    loading,
    error,
    showPassword,
    handleChange,
    handleSubmit,
    togglePassword,
  };
};

export default useLogin;
