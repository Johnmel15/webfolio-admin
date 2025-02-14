import { FC } from "react";
import { ConfirmationModal } from "../../../components";
import { useTechStack } from "../../../states";

const DeleteModal: FC = () => {
  const setIsDeleteVisible = useTechStack((state) => state.setIsDeleteVisible);
  const isDeleteVisible = useTechStack((state) => state.isDeleteVisible);

  const handleConfirm = () => {
    console.log("Deleted!");
    setIsDeleteVisible(false);
  };

  const handleCancel = () => {
    setIsDeleteVisible(false);
  };

  if (!isDeleteVisible) return null;

  return (
    <ConfirmationModal
      title="Delete Confirmation"
      message="Are you sure you want to delete this item?"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default DeleteModal;