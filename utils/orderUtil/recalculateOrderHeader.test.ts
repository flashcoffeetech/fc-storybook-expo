import {EDeliveryMethod} from '@appTypes/delivery.type';
import {IOrder, EPaymentStatus, EOrderStatus} from '@appTypes/order.type';
import {PaymentOption} from '@appTypes/paymentMethod.type';
import {TransactionType} from '@appTypes/transactionType.type';
import {recalculateOrderHeader} from '.';

const orderData: IOrder = {
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

it('recalculateOrderHeader works well', () => {
  const sampleOrder: IOrder = {...orderData};

  const calculated: IOrder = recalculateOrderHeader(sampleOrder);
  expect(calculated.subTotal).toBe(60000);
  expect(calculated.total).toBe(50000);
  expect(calculated.discount).toBe(10000);
});

it('recalculateOrderHeader different value works well', () => {
  const sampleOrder: IOrder = {...orderData};

  sampleOrder.subTotal = 58000;
  sampleOrder.total = 50000;
  sampleOrder.discount = 10000;

  const calculated: IOrder = recalculateOrderHeader(sampleOrder);
  expect(calculated.subTotal).toBe(60000);
  expect(calculated.total).toBe(50000);
  expect(calculated.discount).toBe(10000);
});

it('recalculateOrderHeader different value decimal value works well', () => {
  const sampleOrder: IOrder = {...orderData};

  sampleOrder.subTotal = 11.6;
  sampleOrder.total = 5.8;
  sampleOrder.discount = 5.8;
  sampleOrder.items = [
    {
      storehubId: '',
      productId: '',
      productName: '',
      quantity: 1,
      subTotal: 6.8,
      product: null,
      total: 6.8,
      discount: 0,
    },
    {
      storehubId: '',
      productId: '',
      productName: '',
      quantity: 1,
      subTotal: 5.8,
      product: null,
      total: 5.8,
      discount: 0,
    },
  ];

  const calculated: IOrder = recalculateOrderHeader(sampleOrder);
  expect(calculated.subTotal).toBe(12.6);
  expect(calculated.total).toBe(6.8);
  expect(calculated.discount).toBe(5.8);
});

it('recalculateOrderHeader with diff qty different value decimal value works well', () => {
  const sampleOrder: IOrder = {...orderData};

  sampleOrder.subTotal = 43.6;
  sampleOrder.total = 37.8;
  sampleOrder.discount = 5.8;
  sampleOrder.items = [
    {
      storehubId: '',
      productId: '',
      productName: '',
      quantity: 3,
      subTotal: 6.8,
      product: null,
      total: 20.4,
      discount: 0,
    },
    {
      storehubId: '',
      productId: '',
      productName: '',
      quantity: 4,
      subTotal: 5.8,
      product: null,
      total: 23.2,
      discount: 0,
    },
  ];

  const calculated: IOrder = recalculateOrderHeader(sampleOrder);
  expect(calculated.subTotal).toBe(43.6);
  expect(calculated.total).toBe(37.8);
  expect(calculated.discount).toBe(5.8);
});
