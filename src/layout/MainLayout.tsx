import Header from "./Header";
import Sidebar from "./Sidebar";
import { ReactNode, useState } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="bg-[#f8f9fa] w-full h-screen flex overflow-hidden">
      <Sidebar isMinimized={isMinimized} />
      <div className="flex flex-col w-full h-full">
        <Header
          toggleMinimized={() => setIsMinimized(!isMinimized)}
          isMinimized={isMinimized}
        />
        <div className="px-4">
          <div className="px-4">
            <hr className="mt-0 bg-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
          </div>
        </div>

        <div className="px-6 py-4 overflow-auto w-full max-w-screen-xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
