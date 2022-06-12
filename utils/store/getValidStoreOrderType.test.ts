import {EOrderType} from '@appTypes/order.type';
import 'react-native';

import {getValidStoreOrderType} from '.';

const storeData: any = {
  isDeliveryEnabled: 1,
  isSelfPickupEnabled: 1,
};
const storeOnlyForPickup: any = {
  isSelfPickupEnabled: 1,
};
const storeOnlyForDelivery: any = {
  isDeliveryEnabled: 1,
};

it('getValidStoreOrderType works well', () => {
  expect(getValidStoreOrderType(storeData, EOrderType.PICKUP)).toBe(
    EOrderType.PICKUP,
  );
  expect(getValidStoreOrderType(storeData, EOrderType.DELIVERY)).toBe(
    EOrderType.DELIVERY,
  );
  expect(getValidStoreOrderType(storeData, null)).toBe(EOrderType.PICKUP);
});

it('getValidStoreOrderType for store only delivery', () => {
  expect(getValidStoreOrderType(storeOnlyForDelivery, EOrderType.PICKUP)).toBe(
    EOrderType.DELIVERY,
  );
  expect(
    getValidStoreOrderType(storeOnlyForDelivery, EOrderType.DELIVERY),
  ).toBe(EOrderType.DELIVERY);
});

it('getValidStoreOrderType for store only pickup', () => {
  expect(getValidStoreOrderType(storeOnlyForPickup, EOrderType.PICKUP)).toBe(
    EOrderType.PICKUP,
  );
  expect(getValidStoreOrderType(storeOnlyForPickup, EOrderType.DELIVERY)).toBe(
    EOrderType.PICKUP,
  );
});
