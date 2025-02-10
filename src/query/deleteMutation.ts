import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/config/configAPI";

interface DeleteArgs {
  endpoint: string;
  token?: string;
}

const deleteData = async ({ endpoint, token }: DeleteArgs) => {
  const apiClient = api(token);
  const response = await apiClient.delete(endpoint);
  return response.data;
};

export const useDeleteMutation = (): UseMutationResult<
  any,
  Error,
  DeleteArgs
> => {
  return useMutation({
    mutationFn: deleteData,
  });
};
