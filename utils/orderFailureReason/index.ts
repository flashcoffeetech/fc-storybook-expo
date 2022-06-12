import {EOrderFailureReason} from '@appTypes/order.type';

export const getOrderFailureReasonMessage = (
  failureReason: EOrderFailureReason,
): string => {
  return !failureReason || failureReason === EOrderFailureReason.FRAUD
    ? 'Sorry, your payment failed. Please try again later.'
    : failureReason === EOrderFailureReason.TOO_HIGH
    ? 'Sorry your payment failed. The maximum amount allowed is 10,000,000.'
    : failureReason;
};
