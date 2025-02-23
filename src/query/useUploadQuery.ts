import { useMutation, UseMutationResult } from "@tanstack/react-query";
import api from "../config/configAPI";
import { getToken } from "../utils/auth";

interface UploadArgs {
  endpoint: string;
  formData: FormData;
}

const uploadData = async ({ endpoint, formData }: UploadArgs) => {
  const token = getToken();
  const apiClient = api(token);
  const response = await apiClient.post(endpoint, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const useUploadQuery = (): UseMutationResult<any, Error, UploadArgs> => {
  return useMutation({
    mutationFn: uploadData,
  });
};
