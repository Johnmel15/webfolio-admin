import { FC } from "react";
import { ConfirmationModal } from "../../../components";
import { useEmail } from "../../../states";
import { useContactMutation } from "@/hooks/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const DeleteModal: FC = () => {
  const cache = useQueryClient();
  const { deleteEmail } = useContactMutation();
  const setIsShowDelete = useEmail((state) => state.setIsShowDelete);
  const isShowDelete = useEmail((state) => state.isShowDelete);
  const id = useEmail((state) => state.id);
  const clearEmailState = useEmail((state) => state.clearEmailState);

  const { toast } = useToast();

  const handleConfirm = async () => {
    const response = await deleteEmail(id);

    if (response.code === 200) {
      toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        title: "Confirmation",
        description: `${response.message}`,
      });
      setIsShowDelete(false);
      clearEmailState();
      cache.invalidateQueries({ queryKey: ["email_list"] });
    } else {
      toast({
        title: "Error",
        description: `${response.message}`,
      });
    }
  };

  const handleCancel = () => {
    setIsShowDelete(false);
  };

  if (!isShowDelete) return null;

  return (
    <ConfirmationModal
      title="Delete Confirmation"
      message="Are you sure you want to delete this email?"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default DeleteModal;
