import { useGetAllQuery } from "../../../query";

interface Props {
  search?: string;
  unread?: boolean;
}

const useGetAllEmailsQuery = ({ search, unread }: Props) => {
  const { data, isLoading, refetch, isFetching, isError } = useGetAllQuery({
    variables: { key: "email_list" },
    endpoint: `/email?search=${search}&unread=${unread}`,
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
