import { useQuery } from "@tanstack/react-query";

import api from "../config/configAPI";
import { getToken } from "../utils/auth";

export async function fetchQuery({ queryKey }: any) {
  const [_key, { token, endpoint }] = queryKey;

  try {
    const response = await api(token).get(endpoint);
    return response.data ?? [];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data"); // Ensure an error is thrown
  }
}

interface Props {
  variables: { key: string };
  endpoint: string;
  enabled?: boolean;
}

export const useGetAllQuery = ({ variables, endpoint, enabled }: Props) => {
  const token = getToken();
  const isEnabled = enabled || !!token;

  return useQuery({
    queryKey: [`${variables.key}`, { token, endpoint }],
    queryFn: fetchQuery,
    enabled: isEnabled,
  });
};
