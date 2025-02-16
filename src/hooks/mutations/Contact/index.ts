import { useDeleteQuery } from "@/query";

const useContactMutation = () => {
  const deleteOne = useDeleteQuery();

  const deleteEmail = async (id: string) => {
    return deleteOne.mutateAsync({
      endpoint: `/email/${id}`,
    });
  };

  return { deleteEmail };
};

export default useContactMutation;
