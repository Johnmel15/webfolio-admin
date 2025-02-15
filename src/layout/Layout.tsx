import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./Sidebar/app-sidebar";
import Breadcrumb from "./Breadcrumb";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <main className="flex flex-col w-full">
          <div className="flex items-center py-4 px-4">
            <SidebarTrigger />
            <Breadcrumb/>
          </div>
          <Separator />
          <div className="px-6 py-4 overflow-auto w-full max-w-screen-xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
