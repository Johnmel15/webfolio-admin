import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "../config/configAPI";
import { getToken } from "../utils/auth";

interface DeleteArgs {
  endpoint: string;
}

const deleteData = async ({ endpoint }: DeleteArgs) => {
  const token = getToken();
  const apiClient = api(token);
  const response = await apiClient.delete(endpoint);
  return response.data;
};

export const useDeleteQuery = (): UseMutationResult<any, Error, DeleteArgs> => {
  return useMutation({
    mutationFn: deleteData,
  });
};
