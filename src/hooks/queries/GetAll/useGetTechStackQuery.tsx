import { useGetAllQuery } from "../../../query";

const useGetTechStackQuery = () => {
  const { data, isLoading, refetch, isFetching, isError } = useGetAllQuery({
    variables: { key: "tech_stack_list" },
    endpoint: `/tech-stack`,
  });

  return {
    dataTechStack: (data as any[]) || [],
    // countTechStack: data?.count || 0,
    loadingTechStack: isLoading,
    refetchTechStack: refetch,
    isFetchingTechStack: isFetching,
    isErrorTechStack: isError,
  };
};

export default useGetTechStackQuery;
