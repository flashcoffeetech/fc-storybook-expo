import moment from 'moment';
import 'react-native';

import {availablePickupTimes} from '.';

const storeData: any = {
  config: {
    leadDeliveryTime: '10',
    estimatedPickupTime: '10',
    leadLastDeliveryTime: '45',
    defaultPickupTimeAddVar: '10',
    defaultDeliveryTimeAddVar: '10',
  },
  closeTime: '19:00',
  openTime: '07:00',
  deliveryOpenTime: '07:10',
  deliveryCloseTime: '18:15',
};

const dawnTime = '04.00';
const morningTime = '08.00';
const middayTime = '12.00';
const eveningTime = '15.00';
const nightTime = '19.00';
const midnightTime = '00.00';

const dawnTimeExpected = [
  '07:20',
  '07:35',
  '07:50',
  '08:05',
  '08:20',
  '08:35',
  '08:50',
  '09:05',
  '09:20',
  '09:35',
  '09:50',
  '10:05',
  '10:20',
  '10:35',
  '10:50',
  '11:05',
  '11:20',
  '11:35',
  '11:50',
  '12:05',
  '12:20',
  '12:35',
  '12:50',
  '13:05',
  '13:20',
  '13:35',
  '13:50',
  '14:05',
  '14:20',
  '14:35',
  '14:50',
  '15:05',
  '15:20',
  '15:35',
  '15:50',
  '16:05',
  '16:20',
  '16:35',
  '16:50',
  '17:05',
  '17:20',
  '17:35',
  '17:50',
  '18:05',
  '18:20',
  '18:35',
  '18:50',
];

const morningTimeExpected = [
  '08:20',
  '08:35',
  '08:50',
  '09:05',
  '09:20',
  '09:35',
  '09:50',
  '10:05',
  '10:20',
  '10:35',
  '10:50',
  '11:05',
  '11:20',
  '11:35',
  '11:50',
  '12:05',
  '12:20',
  '12:35',
  '12:50',
  '13:05',
  '13:20',
  '13:35',
  '13:50',
  '14:05',
  '14:20',
  '14:35',
  '14:50',
  '15:05',
  '15:20',
  '15:35',
  '15:50',
  '16:05',
  '16:20',
  '16:35',
  '16:50',
  '17:05',
  '17:20',
  '17:35',
  '17:50',
  '18:05',
  '18:20',
  '18:35',
  '18:50',
];

const middayTimeExpected = [
  '12:20',
  '12:35',
  '12:50',
  '13:05',
  '13:20',
  '13:35',
  '13:50',
  '14:05',
  '14:20',
  '14:35',
  '14:50',
  '15:05',
  '15:20',
  '15:35',
  '15:50',
  '16:05',
  '16:20',
  '16:35',
  '16:50',
  '17:05',
  '17:20',
  '17:35',
  '17:50',
  '18:05',
  '18:20',
  '18:35',
  '18:50',
];

const eveningTimeExpected = [
  '15:20',
  '15:35',
  '15:50',
  '16:05',
  '16:20',
  '16:35',
  '16:50',
  '17:05',
  '17:20',
  '17:35',
  '17:50',
  '18:05',
  '18:20',
  '18:35',
  '18:50',
];

const nightTimeExpected = 0;

const midnightTimeExpected = [
  '07:20',
  '07:35',
  '07:50',
  '08:05',
  '08:20',
  '08:35',
  '08:50',
  '09:05',
  '09:20',
  '09:35',
  '09:50',
  '10:05',
  '10:20',
  '10:35',
  '10:50',
  '11:05',
  '11:20',
  '11:35',
  '11:50',
  '12:05',
  '12:20',
  '12:35',
  '12:50',
  '13:05',
  '13:20',
  '13:35',
  '13:50',
  '14:05',
  '14:20',
  '14:35',
  '14:50',
  '15:05',
  '15:20',
  '15:35',
  '15:50',
  '16:05',
  '16:20',
  '16:35',
  '16:50',
  '17:05',
  '17:20',
  '17:35',
  '17:50',
  '18:05',
  '18:20',
  '18:35',
  '18:50',
];

it('availablePickupTimes works well', () => {
  const currentTime = moment(dawnTime, 'HH:mm');
  const result = availablePickupTimes(storeData, 10, currentTime);
  expect(result.length).toBeGreaterThan(0);

  expect(availablePickupTimes(null, null)).toEqual([]);
});

it('availablePickupTimes dawnTime works well', () => {
  const currentTime = moment(dawnTime, 'HH:mm');

  const result = availablePickupTimes(storeData, 10, currentTime);
  result.map(value => {
    const time = moment(value).format('HH:mm');
    expect(dawnTimeExpected).toContain(time);
  });
});

it('availablePickupTimes morningTime works well', () => {
  const currentTime = moment(morningTime, 'HH:mm');

  const result = availablePickupTimes(storeData, 10, currentTime);
  result.map(value => {
    const time = moment(value).format('HH:mm');
    expect(morningTimeExpected).toContain(time);
  });
});

it('availablePickupTimes middayTime works well', () => {
  const currentTime = moment(middayTime, 'HH:mm');

  const result = availablePickupTimes(storeData, 10, currentTime);
  result.map(value => {
    const time = moment(value).format('HH:mm');
    expect(middayTimeExpected).toContain(time);
  });
});

it('availablePickupTimes eveningTime works well', () => {
  const currentTime = moment(eveningTime, 'HH:mm');

  const result = availablePickupTimes(storeData, 10, currentTime);
  result.map(value => {
    const time = moment(value).format('HH:mm');
    expect(eveningTimeExpected).toContain(time);
  });
});

it('availablePickupTimes nightTime works well', () => {
  const currentTime = moment(nightTime, 'HH:mm');

  const result = availablePickupTimes(storeData, 10, currentTime);

  expect(result.length).toBe(nightTimeExpected);
});

it('availablePickupTimes midnightTime works well', () => {
  const currentTime = moment(midnightTime, 'HH:mm');

  const result = availablePickupTimes(storeData, 10, currentTime);
  result.map(value => {
    const time = moment(value).format('HH:mm');
    expect(midnightTimeExpected).toContain(time);
  });
});
