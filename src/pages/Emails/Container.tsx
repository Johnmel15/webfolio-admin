import { FC } from "react";
import { Content, EmailList } from "./components";

const Container: FC = () => {
  
  return (
    <div className="flex border w-full px-4 py-3 h-[88vh]">
      <EmailList />
      <Content />
    </div>
  );
};

export default Container;
