import {
  CodeXml,
  FileUser,
  FolderKanban,
  History,
  LayoutDashboard,
  Mail,
  Settings,
  SquareLibrary,
} from "lucide-react";

export const sidebars = {
  navMain: [
    {
      title: "Pages",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "About",
          url: "/about",
          icon: FileUser,
        },
        {
          title: "Experience",
          url: "/experience",
          icon: History,
        },
        {
          title: "Projects",
          url: "/projects",
          icon: FolderKanban,
        },
        {
          title: "Emails",
          url: "/emails",
          icon: Mail,
        },
        {
          title: "Tech Stack",
          url: "/tech-stack",
          icon: CodeXml,
        },
        {
          title: "Leads",
          url: "/leads",
          icon: SquareLibrary,
        },
        {
          title: "Settings",
          url: "/settings",
          icon: Settings,
        },
      ],
    },
  ],
};
