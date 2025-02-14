import { FC, useState } from "react";
import {
  AddTechStackModal,
  TechStackDeleteModal,
  TechStackTable,
} from "./components";
import { useGetTechStackQuery } from "../../hooks/queries";
import { CustomModal } from "../../components";
import { useTechStack } from "../../states";
import CustomPagination from "@/components/custom/CustomPagination";

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
      <div className="flex justify-center w-full mt-4 space-x-2">
        <CustomPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(page) => setPage(page)}
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
