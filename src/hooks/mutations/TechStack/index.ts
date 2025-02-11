import { usePostQuery, usePutQuery } from "../../../query";
import { CreateTechStackArgs } from "../../../types/Args";

const useTechStackMutation = () => {
  const post = usePostQuery();
  const put = usePutQuery();

  const createTechStack = async (
    variables: Omit<CreateTechStackArgs, "id">
  ) => {
    return post.mutateAsync({
      endpoint: "/tech-stack",
      variables,
    });
  };

  const updateTechStack = async (variables: CreateTechStackArgs) => {
    return put.mutateAsync({
      endpoint: "/tech-stack",
      variables,
    });
  };

  return { createTechStack, updateTechStack };
};

export default useTechStackMutation;
