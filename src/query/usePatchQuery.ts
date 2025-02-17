import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "../config/configAPI";
import { getToken } from "../utils/auth";

interface MutationArgs {
  endpoint: string;
  variables: any;
  token?: string;
}

const patchData = async ({ endpoint, variables }: MutationArgs) => {
  const token = getToken();
  const apiClient = api(token); // ✅ Call api() to get Axios instance
  const response = await apiClient.patch(endpoint, variables);
  return response.data;
};

export const usePatchQuery = (): UseMutationResult<any, Error, MutationArgs> => {
  return useMutation({
    mutationFn: patchData,
  });
};
