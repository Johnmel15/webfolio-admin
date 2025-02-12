import { FC, useState } from "react";
import { AddTechStackModal, TechStackTable } from "./components";
import { useGetTechStackQuery } from "../../hooks/queries";
import { CustomModal, Pagination } from "../../components";

const Container: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

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
    </div>
  );
};

export default Container;
