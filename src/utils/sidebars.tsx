import { CodeXml, FileUser, FolderKanban, History, LayoutDashboard, Mail, Settings, SquareLibrary } from "lucide-react";

export const sidebars = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  { label: "About", path: "/about", icon: <FileUser size={20} /> },
  { label: "Experience", path: "/experience", icon: <History size={20} /> },
  { label: "Projects", path: "/projects", icon: <FolderKanban size={20} /> },
  { label: "Emails", path: "/emails", icon: <Mail size={20} /> },
  { label: "Tech Stack", path: "/tech-stack", icon: <CodeXml size={20} /> },
  { label: "Leads", path: "/leads", icon: <SquareLibrary size={20} /> },
  { label: "Settings", path: "/settings", icon: <Settings size={20} /> },
]