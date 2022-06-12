import {EOrderDisplayCode} from '@appTypes/order.type';

export const getOrderCurrentStep = (
  orderDisplayStatusCode: EOrderDisplayCode | string,
): number => {
  const code = orderDisplayStatusCode || '';

  switch (code) {
    case EOrderDisplayCode.OS001:
      return 1;
    case EOrderDisplayCode.OS002:
      return 2;
    case EOrderDisplayCode.OS003:
      return 3;
    case EOrderDisplayCode.OS004:
    case EOrderDisplayCode.OS005:
      return 4;

    case EOrderDisplayCode.OS006:
    case EOrderDisplayCode.OS008:
      return 5;

    case EOrderDisplayCode.OS007:
      return 6;

    default:
      return 0;
  }
};
