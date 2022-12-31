import { useMutation, UseMutationResult } from "@tanstack/react-query";

// USAGE
// postRequest - axios request
// onSuccess - function to execute on success
// onError - function to execute on error
// const { mutate, isLoading } = useSendToAPI(postRequest, , onError)
// const handleClick = (data) => {
//   // mutate(url, data)
// }

const useSendToAPI = (
  request,
  onSuccess?,
  onError?
): UseMutationResult<unknown, any, any, unknown> => {
  return useMutation(request, {
    onSuccess: (res: any) => {
      const { isSuccessful } = res?.data;
      if (onSuccess && isSuccessful) {
        onSuccess(res?.data);
      }
      if (onError && !isSuccessful) {
        onError(res?.data);
      }
    },
    onError: (error: any) => {
      if (onError) {
        onError(error);
      }
    },
  });
};

export default useSendToAPI;
