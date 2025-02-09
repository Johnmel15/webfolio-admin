import { FC } from "react";
import { AboutTable } from "./components";

const Container: FC = () => {
  return (
    <div className="flex flex-col items-start">
      <AboutTable />
    </div>
  );
};

export default Container;
