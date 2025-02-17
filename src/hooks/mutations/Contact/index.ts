import { useDeleteQuery, usePatchQuery } from "@/query";

const useContactMutation = () => {
  const deleteOne = useDeleteQuery();
  const patchOne = usePatchQuery();

  const deleteEmail = async (id: string) => {
    return deleteOne.mutateAsync({
      endpoint: `/email/${id}`,
    });
  };

  const readEmail = async (variables: any, id: string) => {
    return patchOne.mutateAsync({
      endpoint: `/email/${id}/read`,
      variables,
    });
  };

  return { deleteEmail, readEmail };
};

export default useContactMutation;
