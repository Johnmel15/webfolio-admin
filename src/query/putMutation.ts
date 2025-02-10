import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/config/configAPI";

interface MutationArgs {
  endpoint: string;
  variables: any;
  token?: string;
}

const putData = async ({ endpoint, variables, token }: MutationArgs) => {
  const apiClient = api(token); // ✅ Call api() to get Axios instance
  const response = await apiClient.put(endpoint, variables);
  return response.data;
};

export const usePutMutation = (): UseMutationResult<
  any,
  Error,
  MutationArgs
> => {
  return useMutation({
    mutationFn: putData,
  });
};
