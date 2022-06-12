import 'react-native';
import {getOrderFailureReasonMessage} from '.';
import {EOrderFailureReason} from '@appTypes/order.type';

it('getOrderFailureReasonMessage works well', () => {
  expect(getOrderFailureReasonMessage(EOrderFailureReason.FRAUD)).toBe(
    'Sorry, your payment failed. Please try again later.',
  );
});
