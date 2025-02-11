import { FC } from "react";
import { NavLink } from "react-router-dom";
import { sidebars } from "../utils/sidebars";

interface SidebarProps {
  isMinimized: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isMinimized }) => {
  return (
    <div
      className={`bg-white h-screen p-3 shadow-lg flex-col   ${
        isMinimized ? "w-[83px]" : "w-[250px]"
      }`}
    >
      {/* Sidebar Header */}
      <div className={`flex justify-center items-center px-3 py-2 `}>
        <h1 className={`font-bold ${isMinimized ? "flex" : "hidden"}`}>WF</h1>
        <h1 className={`font-bold ${isMinimized ? "hidden" : "flex"}`}>
          WebFolio
        </h1>
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
              className={`group items-center gap-4 px-3 py-2 rounded-md  ${
                isActive
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-700 hover:bg-white hover:shadow-md"
              } ${isMinimized ? "w-fit" : "flex w-[100%]"}`}
            >
              {/* Icon with Hover Effect */}
              <div
                className={`p-2 rounded-md w-fit ${
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
              {!isMinimized && (
                <span
                  className={`text-sm ${
                    isActive
                      ? "font-[700]"
                      : "group-hover:bg-white group-hover:font-bold"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
