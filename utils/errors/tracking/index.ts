interface IGenerateErrorObjectParams {
  errorFrom?: string | null;
  error?: any;
  status?: string;
  message?: string;
}
export const generateErrorObject = ({
  errorFrom,
  error,
  status = '500',
  message = 'FAILED',
}: IGenerateErrorObjectParams = {}) => {
  return {
    ...(errorFrom && {
      data: {
        errorFrom,
      },
    }),
    errorObject: JSON.stringify({
      status: error?.status || status,
      message: error?.data?.payload?.message || error?.data?.message || message,
      data: error?.data?.payload || error?.data || {},
    }),
  };
};
