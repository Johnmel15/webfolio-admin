import { FC, useState } from "react";
import { AddTechStackModal, TechStackTable } from "./components";

const Container: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
console.log(isModalOpen)
  return (
    <div className="flex flex-col items-start">
      <TechStackTable setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}/>
      {isModalOpen && <AddTechStackModal setIsModalOpen={setIsModalOpen}/>}
    </div>
  );
};

export default Container;
