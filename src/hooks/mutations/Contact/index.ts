import { usePostQuery } from "../../../query/usePostQuery";

const useContactMutation = () => {
  const post = usePostQuery();

  const sendEmail = async (variables: any) => {
    return post.mutateAsync({
      endpoint: "/send-email",
      variables,
    });
  };

  return { sendEmail };
};

export default useContactMutation;
