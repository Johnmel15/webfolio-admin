import { useGetAllQuery } from "../../../query";

const useGetAllEmailsQuery = (search?: string) => {
  const { data, isLoading, refetch, isFetching, isError } = useGetAllQuery({
    variables: { key: "email_list" },
    endpoint: `/email?search=${search}`,
  });

  return {
    dataEmail: data?.data || [],
    loadingEmail: isLoading,
    refetchEmail: refetch,
    isFetchingEmail: isFetching,
    isErrorEmail: isError,
  };
};

export default useGetAllEmailsQuery;
