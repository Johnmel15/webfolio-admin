import { FC } from "react";
import { TechStackTable } from "./components";

const Container: FC = () => {
  return (
    <div className="flex flex-col items-start">
      <TechStackTable />
    </div>
  );
};

export default Container;
