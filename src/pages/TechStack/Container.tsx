import { FC, useState } from "react";
import { AddTechStackModal, TechStackTable } from "./components";
import { useGetTechStackQuery } from "../../hooks/queries";

const Container: FC = () => {
  const { dataTechStack, loadingTechStack } = useGetTechStackQuery();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const handleEdit = (id: string) => {
    setId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-start">
      <TechStackTable
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        data={dataTechStack}
        isLoading={loadingTechStack}
        handleEdit={handleEdit}
      />
      {isModalOpen && (
        <AddTechStackModal
          setIsModalOpen={setIsModalOpen}
          id={id}
          setId={setId}
        />
      )}
    </div>
  );
};

export default Container;
