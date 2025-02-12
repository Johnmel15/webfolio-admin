import useScreenSize from "../components/ScreenSize";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ReactNode, useState } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const { isMobile, isTablet } = useScreenSize();

  console.log(isMobile);
  console.log(isTablet);

  return (
    <div className="bg-[#f8f9fa] w-full h-screen flex overflow-hidden">
      <Sidebar isMinimized={isMinimized} showSideBar={showSideBar} />
      <div className="flex flex-col w-full h-full">
        <Header
          toggleMinimized={() => setIsMinimized(!isMinimized)}
          isMinimized={isMinimized}
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
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
