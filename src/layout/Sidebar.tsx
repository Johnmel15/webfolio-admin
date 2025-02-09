import { CodeXml, FileUser, LayoutDashboard } from "lucide-react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  isMinimized: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isMinimized }) => {
  const sidebars = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    { label: "About", path: "/about", icon: <FileUser size={20} /> },
    { label: "Tech Stack", path: "/tech-stack", icon: <CodeXml size={20} /> },
  ];

  return (
    <div
      className={`bg-white h-screen p-3 shadow-lg  flex-col transition-all duration-300 ${
        isMinimized ? "w-[83px]" : "w-[250px]"
      }`}
    >
      {/* Sidebar Header */}
      <div
        className={`flex items-center px-3 py-2 ${
          isMinimized ? "justify-center" : "justify-between"
        }`}
      >
        <h1 className="font-bold">{isMinimized ? "WF" : "WF WebFolio"}</h1>
      </div>
      <hr className="h-px mt-[0.76rem] bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      {/* Navigation Links */}
      <div className="flex flex-col gap-2 mt-4">
        {sidebars.map((item, idx) => {
          const isActive = window.location.pathname === item.path;

          return (
            <NavLink
              to={item.path}
              key={idx}
              className={`group items-center gap-4 px-3 py-2 rounded-md transition-all ${
                isActive
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-700 hover:bg-white hover:shadow-md"
              } ${isMinimized ? "w-fit" : "flex w-[100%]"}`}
            >
              {/* Icon with Hover Effect */}
              <div
                className={`p-2 rounded-md transition-all w-fit ${
                  isMinimized ? "flex items-center justify-center" : ""
                } ${
                  isActive
                    ? "bg-gradient-to-br from-purple-300 via-purple-600 to-purple-900 text-white"
                    : "bg-white shadow-md text-gray-900 group-hover:bg-gradient-to-br from-purple-300 via-purple-600 to-purple-900 group-hover:text-white"
                }`}
              >
                {item.icon}
              </div>

              {/* Label (Hidden when minimized) */}
              <span
                className={`text-sm font-medium transition-all ${
                  isMinimized ? "opacity-0 w-0 hidden" : "opacity-100 w-auto"
                } ${
                  isActive
                    ? "font-[700]"
                    : "group-hover:bg-white group-hover:font-bold"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
