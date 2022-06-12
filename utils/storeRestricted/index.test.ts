import 'react-native';

import {restrictionSorted, notRestrictionSorted} from '.';

const storeData: any = [
  {
    id: '39e65bdb-26ad-47da-b68b-b34464c1487a',
    storeName: 'Dev City 1',
    config: {
      maxQtyDelivery: '5',
      baristaPrepTime: '15',
      leadDeliveryTime: '10',
      recommendedTitle: 'Favorite product',
      restrictionEmail: '@mailinator.com',
      estimatedPickupTime: '10',
      deliveryDelayWarning: 'none',
      leadLastDeliveryTime: '45',
      defaultPickupTimeAddVar: '10',
    },
  },
  {
    id: '39e65bdb-26ad-47da-b68b-b34464c1487a',
    storeName: 'Dev City 2',
    config: {
      maxQtyDelivery: '5',
      baristaPrepTime: '15',
      leadDeliveryTime: '10',
      recommendedTitle: 'Favorite product',
      restrictionEmail: '',
      estimatedPickupTime: '10',
      deliveryDelayWarning: 'none',
      leadLastDeliveryTime: '45',
      defaultPickupTimeAddVar: '10',
    },
  },
];

const userEmail = 'user@mailinator.com';

it('restrictionSorted works well', () => {
  const restrictedStore = restrictionSorted(storeData, userEmail);
  expect(restrictedStore).toEqual(storeData);
});

it('notRestrictionSorted works well', () => {
  expect(notRestrictionSorted(storeData)).toEqual([storeData[1]]);
});
