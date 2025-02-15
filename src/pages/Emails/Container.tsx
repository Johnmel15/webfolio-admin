import { FC } from "react";
import { Content, EmailList } from "./components";
import { Card } from "@/components/ui/card";

const Container: FC = () => {
  return (
    <div className="flex border w-full px-4 py-3 h-full">
      <EmailList />
      <Content />
    </div>
  );
};

export default Container;
