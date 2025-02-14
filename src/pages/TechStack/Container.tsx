import { FC, useState } from "react";
import { AddTechStackModal, TechStackDeleteModal, TechStackTable } from "./components";
import { useGetTechStackQuery } from "../../hooks/queries";
import { CustomModal, Pagination } from "../../components";
import { useTechStack } from "../../states";

const Container: FC = () => {
  const id = useTechStack((state) => state.id);
  const setId = useTechStack((state) => state.setId);
  const isModalOpen = useTechStack((state) => state.isModalOpen);
  const setIsModalOpen = useTechStack((state) => state.setIsModalOpen);
  
  // Pagination states
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const limit = 10; // Define how many items per page

  // Fetch data with pagination
  const { dataTechStack, loadingTechStack, totalPages } = useGetTechStackQuery(
    page,
    limit,
    searchTerm
  );

  const handleEdit = (id: string) => {
    setId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-start w-full">
      <TechStackTable
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        data={dataTechStack}
        isLoading={loadingTechStack}
        handleEdit={handleEdit}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      
      />

      {/* Pagination Controls */}
      <div className="flex justify-center w-full">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>

      {isModalOpen && (
        <CustomModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`${id ? "Edit" : "Create"} Tech Stack`}
        >
          <AddTechStackModal
            setIsModalOpen={setIsModalOpen}
            id={id}
            setId={setId}
          />
        </CustomModal>
      )}
      <TechStackDeleteModal />
    </div>
  );
};

export default Container;
