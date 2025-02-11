import { AlignRight, CircleUser, LogOut, Menu } from "lucide-react";
import { FC, useState } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface HeaderProps {
  toggleMinimized: () => void;
  isMinimized: boolean;
}

const Header: FC<HeaderProps> = ({ toggleMinimized, isMinimized }) => {
  const { logout } = useAuthStore();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => ({
    label: segment
      .split("-") // Split by hyphen
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "), // Join back with space
    path: `/${pathSegments.slice(0, index + 1).join("/")}`,
  }));

  return (
    <div className="px-6 py-3 flex items-center justify-between relative">
      <div className="flex items-center gap-10">
        <div className="flex flex-col items-start">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-[#344767]">
            <NavLink
              to="/"
              className="hover:text-[#344767] hover:font-[600] text-[12px] text-gray-400"
            >
              Pages
            </NavLink>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center">
                <span className="mx-2">/</span>
                <NavLink
                  to={crumb.path}
                  className="hover:text-gray-800 text-[12px] text-[#344767] font-[600]"
                >
                  {crumb.label}
                </NavLink>
              </span>
            ))}
          </div>
          <h3 className="text-[14px] text-[#344767] font-[600]">
            {breadcrumbs[0]?.label || "Dashboard"}
          </h3>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleMinimized}
          className="cursor-pointer text-gray-600 hover:text-gray-700"
        >
          {isMinimized ? <Menu /> : <AlignRight />}
        </button>
      </div>

      {/* Profile Section with Dropdown */}
      <div className="relative">
        <div
          className="flex items-center justify-center rounded-full bg-blue-400 w-[40px] h-[40px] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <p className="text-white font-semibold">JS</p>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg py-2 z-50">
            <NavLink
              to="/account"
              className="flex items-center gap-2 text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
            >
              <CircleUser className="w-[15px] h-[15px]" />
              Account
            </NavLink>
            <div
              onClick={handleLogout}
              className="flex items-center gap-2 text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm cursor-pointer"
            >
              <LogOut className="w-[15px] h-[15px]" />
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
