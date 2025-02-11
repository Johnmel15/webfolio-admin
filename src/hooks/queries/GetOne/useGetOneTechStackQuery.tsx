import { useGetOneQuery } from "../../../query/useGetOneQuery";

const useGetOneTechStackQuery = (id: string) => {
  const { data, isLoading, refetch, isError } = useGetOneQuery({
    variables: { key: "tech_stack_get_one_query", id },
    endpoint: `/tech-stack/${id}`,
  });

  return {
    dataOneTechStack: data || {},
    loadingOneTechStack: isLoading,
    refetchOneTechStack: refetch,
    isErrorOneTechStack: isError,
  };
};

export default useGetOneTechStackQuery;
