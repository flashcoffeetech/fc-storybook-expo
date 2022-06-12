import 'react-native';

import {EOrderDisplayCode} from '@appTypes/order.type';
import {pickupOrderData} from '.';

const orderPickupWithDSC: any = {
  displayStatusCode: EOrderDisplayCode.OS001,
  paymentStatus: 'COMPLETED',
  paymentMethod: 'CreditCard',
  deliveryMethod: 'Pickup',
  status: 'PICKED_UP',
};
const orderPickupWithoutDSC: any = {
  paymentStatus: 'COMPLETED',
  paymentMethod: 'CreditCard',
  deliveryMethod: 'Pickup',
  status: 'PICKED_UP',
};

const orderDelivery: any = {
  deliveryMethod: 'Delivery',
  displayStatusCode: 'OS007',
};

it('pickupOrderData with displayStatusCode is defined works well', () => {
  const result = pickupOrderData(orderPickupWithDSC);
  const statusCode = result?.displayStatusCode;
  expect(statusCode).toBe(EOrderDisplayCode.OS001);
});

it('pickupOrderData with displayStatusCode is undefined works well', () => {
  const result = pickupOrderData(orderPickupWithoutDSC);
  const statusCode = result?.displayStatusCode;
  expect(statusCode).toBe(EOrderDisplayCode.OS008);
});

it('pickupOrderData order type delivery works well', () => {
  const result = pickupOrderData(orderDelivery);
  const statusCode = result?.displayStatusCode;
  expect(statusCode).toBe(EOrderDisplayCode.OS007);
});
