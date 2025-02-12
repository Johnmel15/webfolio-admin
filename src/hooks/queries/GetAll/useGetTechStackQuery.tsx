import { useGetAllQuery } from "../../../query";

const useGetTechStackQuery = (page: number, limit: number, search: string) => {
  const { data, isLoading, refetch, isFetching, isError } = useGetAllQuery({
    variables: { key: "tech_stack_list" },
    endpoint: `/tech-stack?page=${page}&limit=${limit}&search=${search}`,
  });

  return {
    dataTechStack: data?.data || [],
    totalTechStack: data?.totalCount || 0,
    currentPage: data?.currentPage || 1,
    totalPages: data?.totalPages || 1,
    loadingTechStack: isLoading,
    refetchTechStack: refetch,
    isFetchingTechStack: isFetching,
    isErrorTechStack: isError,
  };
};

export default useGetTechStackQuery;
