import {Alert} from 'react-native';
import {PAYMENT_FAILED_KEY} from '@constants/payments';

interface ErrorMessageResult {
  errorMessage: string;
  defaultErrorMessage: string;
}

export const alertFailureReason = (
  orderData: any,
  t: (untranslated: string, defaultMessage?: string) => string,
) => {
  const {failureReason} = orderData || {};
  Alert.alert(
    t('general.orderFailed'),
    t(failureReason, t(PAYMENT_FAILED_KEY)),
  );
};

export const alertErrorMessage = (
  error: any,
  defaultMessage: string,
  t: (untranslated: string, defaultMessage?: string, options?: any) => string,
) => {
  const {errorParams} = error?.data?.payload || {};
  const {errorMessage, defaultErrorMessage} = generateErrorMessage(
    error,
    defaultMessage,
  );
  Alert.alert(t(errorMessage, t(defaultErrorMessage), errorParams));
};

export const generateErrorMessage = (
  error: any,
  defaultMessage: string,
): ErrorMessageResult => {
  const {errorCode, message} = error?.data?.payload || {};
  if (errorCode && errorCode !== '') {
    let errorMessage = `errorCode.${errorCode}`;
    if (message && message !== '') {
      return {errorMessage, defaultErrorMessage: message};
    } else {
      return {
        errorMessage,
        defaultErrorMessage: defaultMessage,
      };
    }
  }
  if (message && message !== '') {
    return {
      errorMessage: message,
      defaultErrorMessage: message,
    };
  }
  return {
    errorMessage: defaultMessage,
    defaultErrorMessage: defaultMessage,
  };
};
