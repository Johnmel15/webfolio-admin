import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "../config/configAPI";
import { getToken } from "../utils/auth";
interface MutationArgs {
  endpoint: string;
  variables: any;
}

const postData = async ({ endpoint, variables }: MutationArgs) => {
  const token = getToken();
  const apiClient = api(token);
  const response = await apiClient.post(endpoint, variables);
  return response.data;
};

export const usePostQuery = (): UseMutationResult<any, Error, MutationArgs> => {
  return useMutation({
    mutationFn: postData,
  });
};
