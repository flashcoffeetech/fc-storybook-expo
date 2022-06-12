import 'react-native';

import {
  EOrderDisplayCode,
  EOrderDisplayLokalise,
  EOrderStatus,
  EPaymentStatus,
  IOrder,
} from '@appTypes/order.type';
import {TransactionType} from '@appTypes/transactionType.type';
// TODO Standardized enum to use EPaymentOption
import {PaymentOption} from '@appTypes/paymentMethod.type';
import * as appTheme from '@assets/custom-theme.json';
import {
  deliveryStatusColor,
  generateOrderDeliveryItems,
  generateOrderItems,
  getDeliveryStatus,
  getOrderStatus,
  getOrderStatusImage,
  getShortOrderId,
  isOrderDelivery,
  orderStatusColor,
  resolveOrderStatus,
} from '.';
import {
  EDeliveryMethod,
  EDeliveryPaymentMethod,
  EDeliveryStatus,
  IOrderDelivery,
} from '@appTypes/delivery.type';

const orderDeliveryData: IOrderDelivery = {
  appVersionName: null,
  appVersionCode: null,
  serviceVersionCode: null,
  id: '119574f1-2bf2-435d-b673-3ed8a7ad9a69',
  createdAt: '2021-07-05T19:47:18.681Z',
  updatedAt: '2021-07-05T19:47:37.000Z',
  orderId: 'c672eccb-9849-41b0-ab75-97ad3643c076',
  partnerOrderId: null,
  fee: 1.5,
  discountFee: 0,
  partnerMeta: {
    id: '0141ec94-c1a8-4bfb-814b-14d1286560ab',
    code: 'PANDAGO',
    name: 'Pandago',
    isActive: true,
    baseUrl: 'https://www.google.com',
  },
  status: EDeliveryStatus.DRAFT,
  senderMeta: {
    name: '1 Extra Shot',
    streetAddress: '1 2nd Street #08-01',
    phoneNumber: '+6500000000',
    latitude: 1.2923742,
    longitude: 103.8486029,
    notes: 'use the left side door',
  },
  recipientMeta: {
    name: '1 Extra Shot',
    streetAddress: '1 2nd Street #08-01',
    phoneNumber: '+6500000000',
    latitude: 1.2923742,
    longitude: 103.8486029,
    notes: 'use the left side door',
  },
  paymentMethod: EDeliveryPaymentMethod.PAID,
  coldbagNeeded: false,
  amount: 15.5,
  estimatedPickupTime: '2020-06-25T01:30:52.000Z',
  estimatedDeliveryTime: '2020-06-25T01:30:52.000Z',
  driverMeta: {
    id: '123',
    name: 'pandago',
    phone_number: '+6500000000',
  },
};

const orderData: any = {
  id: 'id',
  refId: 'refId',
  invoiceNumber: 'invoicexx',
  storeId: 'storeId',
  storeMeta: {
    id: 'storeId',
    storehubId: 'storeHubId',
    storeName: 'storeName',
    streetAddress: 'streetAddress',
    city: 'Jakarta',
    country: 'Indonesia',
    postCode: '12345',
    state: 'DKI Jakarta',
    isNearest: true,
    distance: {
      raw: 300,
      formatted: '300m',
    },
    isOpen: true,
    longitude: 102.333,
    latitude: 23.2222,
    countryCode: 'ID',
    isActive: true,
    timezone: '+7',
    openTime: '07:00',
    closeTime: '22:00',
    storeTime: [],
  },
  customerRefId: 'customerRefId',
  customerMeta: {},
  transactionType: TransactionType.SALE,
  transactionTime: '2020-04-04 11:00:00',
  deliveryMethod: EDeliveryMethod.PICKUP,
  pickupTime: '2020-04-04 12:00:00',
  total: 50000,
  subTotal: 60000,
  discount: 10000,
  tax: 0,
  comment: '',
  items: [
    {
      storehubId: '',
      productId: '',
      productName: '',
      quantity: 1,
      subTotal: 45000,
      product: null,
      total: 38000,
      discount: 7000,
    },
    {
      storehubId: '',
      productId: '',
      productName: '',
      quantity: 1,
      subTotal: 15000,
      product: null,
      total: 12000,
      discount: 3000,
    },
  ],
  phoneNumber: '',
  paymentStatus: EPaymentStatus.PENDING,
  paymentMethod: PaymentOption.CASH,
  status: EOrderStatus.CREATED,
};

const cartItemsForDeliveryItems: any = {
  '1234567890': {
    product: {
      description:
        'Smooth, nutty, and sweet, yet heavy-bodied espresso, brewed with 100% premium Arabica coffee beans.',
      descriptionLocale:
        'Smooth, nutty, and sweet, yet heavy-bodied espresso, brewed with 100% premium Arabica coffee beans.',
      name: 'Espresso (Double Ristretto)',
      price: 2.1,
      shortDescription: 'Brewed with 100% Arabica premium coffee beans.',
      shortDescriptionLocale: 'Brewed with 100% Arabica premium coffee beans.',
      storehubId: 'Espresso',
    },
    qty: 5,
    subTotalPrice: 2.1,
    totalPrice: 44.1,
  },
};

const orderDisplayCodeForTesting = EOrderDisplayCode.OS003;

it('getOrderStatus works well', () => {
  expect(getOrderStatus(EOrderDisplayCode.OS001)).toBe(
    EOrderDisplayLokalise.WAITING_FOR_PAYMENT,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS002)).toBe(
    EOrderDisplayLokalise.WE_GOT_YOUR_ORDER,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS003)).toBe(
    EOrderDisplayLokalise.PREPARING_YOUR_ORDER,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS004)).toBe(
    EOrderDisplayLokalise.DRIVER_PICKUP,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS005)).toBe(
    EOrderDisplayLokalise.READY_FOR_PICKUP,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS006)).toBe(
    EOrderDisplayLokalise.DRIVER_ON_THE_WAY,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS007)).toBe(
    EOrderDisplayLokalise.COMPLETED,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS008)).toBe(
    EOrderDisplayLokalise.COMPLETED,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS009)).toBe(
    EOrderDisplayLokalise.FAILED,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS010)).toBe(
    EOrderDisplayLokalise.REJECTED,
  );
  expect(getOrderStatus(EOrderDisplayCode.OS011)).toBe(
    EOrderDisplayLokalise.CANCELED,
  );
  expect(getOrderStatus('XXXXXX')).toBe(EOrderDisplayLokalise.UNKNOWN);
  expect(getOrderStatus('')).toBe(EOrderDisplayLokalise.UNKNOWN);
  expect(getOrderStatus(null)).toBe(EOrderDisplayLokalise.UNKNOWN);
  expect(getOrderStatus(undefined)).toBe(EOrderDisplayLokalise.UNKNOWN);
});

it('isOrderDelivery works well', () => {
  const sampleOrder: IOrder = {...orderData};
  sampleOrder.deliveryMethod = undefined;

  expect(isOrderDelivery(sampleOrder?.deliveryMethod)).toBe(false);

  sampleOrder.deliveryMethod = EDeliveryMethod.DELIVERY;
  expect(isOrderDelivery(sampleOrder?.deliveryMethod)).toBe(true);

  sampleOrder.deliveryMethod = EDeliveryMethod.PICKUP;
  expect(isOrderDelivery(sampleOrder?.deliveryMethod)).toBe(false);
});

it('resolveOrderStatus works well', () => {
  const sampleOrder: IOrder = {...orderData};
  sampleOrder.status = EOrderStatus.FAILED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.FAILED);

  sampleOrder.status = EOrderStatus.REJECTED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.REJECTED);

  sampleOrder.status = EOrderStatus.NOT_PICKED_UP;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.NOT_PICKED_UP);

  sampleOrder.status = EOrderStatus.CREATED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.CREATED);

  sampleOrder.status = EOrderStatus.PROCESSED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.PROCESSED);

  sampleOrder.status = EOrderStatus.COMPLETED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.COMPLETED);

  sampleOrder.status = EOrderStatus.PAID;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.PAID);

  sampleOrder.status = EOrderStatus.PICKED_UP;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.PICKED_UP);

  sampleOrder.status = EOrderStatus.TRANSFERRED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.TRANSFERRED);

  sampleOrder.status = EOrderStatus.CANCELED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.CANCELED);
});

it('resolveOrderStatus works well for order delivery', () => {
  const sampleOrder: IOrder = {...orderData};
  sampleOrder.deliveryMethod = EDeliveryMethod.DELIVERY;
  sampleOrder.orderDelivery = {
    ...orderDeliveryData,
  };

  sampleOrder.status = EOrderStatus.FAILED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.FAILED);

  sampleOrder.status = EOrderStatus.REJECTED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.REJECTED);

  sampleOrder.status = EOrderStatus.NOT_PICKED_UP;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.NOT_PICKED_UP);

  sampleOrder.status = EOrderStatus.CANCELED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.CANCELED);

  sampleOrder.status = EOrderStatus.CREATED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.CREATED);

  sampleOrder.status = EOrderStatus.PAID;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.PAID);

  sampleOrder.status = EOrderStatus.PROCESSED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.PROCESSED);

  sampleOrder.status = EOrderStatus.COMPLETED;
  sampleOrder.orderDelivery.status = EDeliveryStatus.DRAFT;
  expect(resolveOrderStatus(sampleOrder)).toBe(EDeliveryStatus.DRAFT);

  sampleOrder.status = EOrderStatus.PICKED_UP;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.PICKED_UP);

  sampleOrder.status = EOrderStatus.TRANSFERRED;
  expect(resolveOrderStatus(sampleOrder)).toBe(EOrderStatus.TRANSFERRED);
});

it('getShortOrderId works well', () => {
  const randomDigit = 123456;
  const orderId = '119574f1-2bf2-435d-b673-3ed8a7ad9a69';
  const sampleOrder: IOrder = {...orderData};
  sampleOrder.deliveryMethod = EDeliveryMethod.DELIVERY;
  sampleOrder.orderDelivery = {
    ...orderDeliveryData,
  };

  sampleOrder.randomDigit = randomDigit;
  sampleOrder.id = orderId;

  expect(getShortOrderId(sampleOrder)).toBe(`${randomDigit}`);

  delete sampleOrder.randomDigit;
  const expectShortId = 'D9A69';

  expect(getShortOrderId(sampleOrder)).toBe(expectShortId);

  delete sampleOrder.id;
  expect(getShortOrderId(sampleOrder)).toBe(undefined);
});

it('orderStatusColor works well', () => {
  expect(orderStatusColor(orderDisplayCodeForTesting)).toBe(
    appTheme['color-primary-500'],
  );
});

it('getOrderStatusImage works well', () => {
  getOrderStatusImage(orderDisplayCodeForTesting);
});

it('getDeliveryStatus works well', () => {
  expect(getDeliveryStatus(orderDisplayCodeForTesting)).toBe('general.unknown');
});

it('deliveryStatusColor works well', () => {
  const colorToBeExpected = appTheme['color-primary-500'];
  const defaultColorToBeExpected = appTheme['color-hint'];

  expect(deliveryStatusColor('DELIVERED')).toBe(appTheme['color-downy']);
  expect(deliveryStatusColor('DRAFT')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('NEW')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('RECEIVED')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('WAITING_FOR_TRANSPORT')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('ASSIGNED_TO_TRANSPORT')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('COURIER_ACCEPTED_DELIVERY')).toBe(
    colorToBeExpected,
  );
  expect(deliveryStatusColor('NEAR_VENDOR')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('PICKED_UP')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('COURIER_LEFT_VENDOR')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('NEAR_CUSTOMER')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('DELAYED')).toBe(colorToBeExpected);
  expect(deliveryStatusColor('')).toBe(defaultColorToBeExpected);
});

it('generateOrderDeliveryItems works well', () => {
  generateOrderDeliveryItems(cartItemsForDeliveryItems);
});

it('generateOrderItems works well', () => {
  generateOrderItems(cartItemsForDeliveryItems);
});
