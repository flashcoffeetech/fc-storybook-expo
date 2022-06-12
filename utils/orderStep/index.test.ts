import 'react-native';

import {EOrderDisplayCode} from '@appTypes/order.type';
import {getOrderCurrentStep} from '.';

it('getOrderCurrentStep works well', () => {
  expect(getOrderCurrentStep(EOrderDisplayCode.OS001)).toBe(1);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS002)).toBe(2);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS003)).toBe(3);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS004)).toBe(4);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS005)).toBe(4);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS006)).toBe(5);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS007)).toBe(6);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS008)).toBe(5);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS009)).toBe(0);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS010)).toBe(0);
  expect(getOrderCurrentStep(EOrderDisplayCode.OS011)).toBe(0);
  expect(getOrderCurrentStep('')).toBe(0);
  expect(getOrderCurrentStep(null)).toBe(0);
  expect(getOrderCurrentStep(undefined)).toBe(0);
});
