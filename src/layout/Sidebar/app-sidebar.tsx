import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { sidebars } from "@/utils/sidebars";
import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const AppSidebar: FC = () => {

  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };
  return (
    <Sidebar>
      <div className="px-2 py-4 w-full">
        <Button variant="ghost" className="w-full">
          JMS - WebFolio
        </Button>
      </div>

      <SidebarContent>
        <SidebarGroup className="pt-0">
          <SidebarGroupLabel className="text-[13.13px]">
            Pages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebars.map((item) => {
                const isActive = window.location.pathname === item.path;
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`flex items-center gap-4 px-3 py-2 rounded-md hover:bg-purple-800 hover:text-white ${
                        isActive
                          ? "bg-purple-800 shadow-md text-white focus:bg-purple-800 focus:text-white"
                          : "text-gray-700 hover:bg-purple-800"
                      }`}
                    >
                      <NavLink to={item.path}>
                        {item.icon}
                        <span>{item.label}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <div onClick={handleLogout}>Logout</div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
