import useScreenSize from "../components/ScreenSize";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ReactNode, useEffect, useState } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const { isMobile, isTablet } = useScreenSize();

  useEffect(() => {
    setShowSideBar(true);
    if (isMobile) {
      setShowSideBar(false);
    }
    if (isTablet) {
      setShowSideBar(true);
    }
  }, [isMobile, isTablet]);

  return (
    <div className="bg-[#f8f9fa] w-full h-screen flex overflow-hidden">
      <Sidebar
        isMinimized={isMinimized}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
      <div className="flex flex-col w-full h-full">
        <Header
          toggleMinimized={() => setIsMinimized(!isMinimized)}
          isMinimized={isMinimized}
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
        />
        <div className="px-2 sm:px-2 md:px-2 lg:px-2">
          <div className="px-2 sm:px-2 md:px-2 lg:px-2">
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
