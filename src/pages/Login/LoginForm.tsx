import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import useLogin from "../../hooks/useLogin";

const LoginPage = () => {
  const {
    formData,
    loading,
    error,
    showPassword,
    handleChange,
    handleSubmit,
    togglePassword,
  } = useLogin();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-start text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative flex flex-col justify-center">
              <Mail className="absolute left-3 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                className="pl-10 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-start text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock className="absolute left-3 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="pl-10 pr-10 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-3 text-gray-400 w-5 h-5"
                onClick={togglePassword}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
