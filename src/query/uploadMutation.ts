import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "@/config/configAPI";

interface UploadArgs {
  endpoint: string;
  formData: FormData;
  token?: string;
}

const uploadData = async ({ endpoint, formData, token }: UploadArgs) => {
  const apiClient = api(token);
  const response = await apiClient.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const useUploadMutation = (): UseMutationResult<
  any,
  Error,
  UploadArgs
> => {
  return useMutation({
    mutationFn: uploadData,
  });
};
