import { useQuery } from "@tanstack/react-query";
import api from "../config/configAPI";
import { getToken } from "../utils/auth";

export async function fetchQuery({ queryKey }: any) {
  const token = getToken();
  const [_key, { endpoint }] = queryKey;

  try {
    const response = await api(token).get(endpoint);
    return response.data ?? {}; // Ensure default value is returned
  } catch (error) {
    console.error("Error fetching data:", error);
    return {}; // Return empty object instead of undefined
  }
}

interface Props {
  variables: { key: string; id: number | string };
  endpoint: string;
  isEnabled?: boolean;
}

export const useGetOneQuery = ({ variables, endpoint, isEnabled }: Props) => {
  return useQuery({
    queryKey: [variables.key, { endpoint, id: variables.id }],
    queryFn: fetchQuery,
    enabled: isEnabled ?? true,
  });
};
