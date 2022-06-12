import {EDeliveryStatus} from '@appTypes/delivery.type';
import 'react-native';
import {getDeliveryInfo, selectedDeliveryInstructionID} from '.';

const data: any = {
  status: EDeliveryStatus.DELIVERED,
  estimatedPickupTime: '2022-01-10T01:05:38.000Z',
  estimatedDeliveryTime: '2022-01-10T01:25:38.000Z',
  driverMeta: {
    id: '138972',
    name: 'Driver 138972',
    phone_number: '+6500138972',
  },
};

const DELIVERY_INSTRUCTION = [
  {
    id: 1,
    label: 'Meet at door',
  },
  {
    id: 2,
    label: 'Pass to reception',
  },
  {
    id: 3,
    label: 'Leave outside',
  },
  {
    id: 4,
    label: 'Leave with security',
  },
  {
    id: 5,
    label: 'Avoid ringing bell',
  },
];

it('getDeliveryInfo works well', async () => {
  expect(getDeliveryInfo(data).isDriverOnTheWay).toEqual(false);

  expect(
    getDeliveryInfo({
      ...data,
      status: EDeliveryStatus.COURIER_ACCEPTED_DELIVERY,
    }).isDriverOnTheWay,
  ).toEqual(true);

  expect(
    getDeliveryInfo({
      ...data,
      status: EDeliveryStatus.NEAR_VENDOR,
    }).isDriverOnTheWay,
  ).toEqual(true);

  expect(
    getDeliveryInfo({
      ...data,
      status: EDeliveryStatus.PICKED_UP,
    }).isDriverOnTheWay,
  ).toEqual(true);

  expect(
    getDeliveryInfo({
      ...data,
      status: EDeliveryStatus.COURIER_LEFT_VENDOR,
    }).isDriverOnTheWay,
  ).toEqual(true);

  expect(
    getDeliveryInfo({
      ...data,
      status: EDeliveryStatus.NEAR_CUSTOMER,
    }).isDriverOnTheWay,
  ).toEqual(true);

  expect(
    getDeliveryInfo({
      ...data,
      status: EDeliveryStatus.DELAYED,
    }).isDriverOnTheWay,
  ).toEqual(true);

  expect(getDeliveryInfo(data).isDeliveryFailed).toEqual(false);

  expect(getDeliveryInfo(data).isDriverToCustomer).toEqual(false);
});

it('selectedDeliveryInstructionID works well', async () => {
  expect(
    selectedDeliveryInstructionID(DELIVERY_INSTRUCTION, 'Pass to reception'),
  ).toEqual(2);

  expect(selectedDeliveryInstructionID(DELIVERY_INSTRUCTION, '')).toEqual(0);

  expect(
    selectedDeliveryInstructionID(DELIVERY_INSTRUCTION, 'New Instructions'),
  ).toEqual(0);
});
