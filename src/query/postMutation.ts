import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "../config/configAPI";

interface MutationArgs {
  endpoint: string;
  variables: any;
  token?: string;
}

const postData = async ({ endpoint, variables, token }: MutationArgs) => {
  const apiClient = api(token);
  const response = await apiClient.post(endpoint, variables);
  return response.data;
};

export const usePostMutation = (): UseMutationResult<
  any,
  Error,
  MutationArgs
> => {
  return useMutation({
    mutationFn: postData,
  });
};
