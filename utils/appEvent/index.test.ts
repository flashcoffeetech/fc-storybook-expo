import 'react-native';
import {ICartModifier} from '@appTypes/cart.type';
import {ICountry} from '@appTypes/location.type';
import {ILoggedProduct} from '@appTypes/product.type';
import {EOrderStatus, EPaymentStatus, IOrder} from '@appTypes/order.type';
import {EDeliveryMethod} from '@appTypes/delivery.type';
import {PaymentOption} from '@appTypes/paymentMethod.type';
import {TransactionType} from '@appTypes/transactionType.type';
import {EDiscountType} from '@appTypes/triggeredCampaign.type';
import {fcStoreSetItem} from '@utils/fcStorage';
import {getCurrency, getLoggedOrderData, getLoggedProductData} from './';
import {ILoggedOrder} from '@appTypes/loggedOrder.type';

const hkCountry: ICountry = {
  code: 'HK',
  currencies: ['HKD'],
  currency: 'HKD',
  name: 'Hong Kong',
  zones: ['Asia/Hong_Kong'],
};

const idCountry: ICountry = {
  code: 'ID',
  currencies: ['IDR'],
  currency: 'IDR',
  name: 'Indonesia',
  zones: ['Asia/Jakarta'],
};

const idStgCountry: ICountry = {
  code: 'STG_ID',
  currencies: ['IDR'],
  currency: 'IDR',
  name: 'Indonesia',
  zones: ['Asia/Jakarta'],
};

const jpCountry: ICountry = {
  code: 'JP',
  currencies: ['JPY'],
  currency: 'JPY',
  name: 'Japan',
  zones: ['Asia/Tokyo'],
};

const sgCountry: ICountry = {
  code: 'SG',
  currencies: ['SGD'],
  currency: 'SGD',
  name: 'Singapore',
  zones: ['Asia/Singapore'],
};

const thCountry: ICountry = {
  code: 'TH',
  currencies: ['THB'],
  currency: 'THB',
  name: 'Thailand',
  zones: ['Asia/Bangkok'],
};

const twCountry: ICountry = {
  code: 'TW',
  currencies: ['TWD'],
  currency: 'TWD',
  name: 'Taiwan',
  zones: ['Asia/Taiwan'],
};

const unknownCountry: ICountry = {
  code: 'TWX',
  currencies: ['TWD'],
  currency: 'TWD',
  name: 'Taiwan',
  zones: ['Asia/Taiwan'],
};

const cartModifier: ICartModifier = {
  optionPrice: 0,
  product: {
    _lang: {},
    shortDescriptionLocale: 'Espresso and hot water.',
    outOfStock: false,
    availabilityBool: true,
    shortDescription: 'Espresso and hot water.',
    availability: 1,
    sku: 'ESS021',
    storehubId: '5df75c1e0085ec35fced6396',
    id: '1573df03-23d5-4535-84b8-d0dabd4e856e',
    sic: 'ESL0001',
    image: '',
    sellingPrice: 0,
    subCategory: '',
    priceType: '',
    storePrice: 0,
    cost: 0,
    trackStockLevel: true,
    isParentProduct: false,
    category: {
      categoryName: 'Essentials',
      isVisible: true,
      categoryOrder: 2,
      updatedAt: '2022-02-13 03:28:49.443310',
      id: 'f1f5b651-6724-48e5-a36a-6449da590574',
      createdAt: '2020-04-13 09:43:32.916490',
    },
    description: 'Espresso and hot water.',
    tags: [],
    price: 8000,
    variants: [],
    descriptionLocale: 'Espresso and hot water.',
    name: 'Americano Storehub',
    isAvailableForDelivery: true,
    isSelling: true,
  },
  variantNo: 1,
  qty: 6,
};

const loggedProduct: ILoggedProduct = {
  id: '1573df03-23d5-4535-84b8-d0dabd4e856e',
  name: 'Americano Storehub',
  outOfStock: false,
  availabilityBool: true,
  availability: 1,
  isAvailableForDelivery: true,
  isSelling: true,
  qty: 6,
};

const order: IOrder = {
  appliedVoucher: undefined,
  cleanHubDonationAmount: 0,
  comment: '',
  customerMeta: {
    app_registered_country: 'Singapore',
    apple_id: null,
    apple_meta: null,
    default_payment_option: PaymentOption.OVO,
    email: 'billy.chrisnawan@flash-coffee.com',
    email_verified: true,
    facebook_id: null,
    facebook_meta: null,
    google_id: null,
    google_meta: null,
    idp_id: 'ap-southeast-1:d93dacc2-f3ca-42f4-aae9-b05ad9853195',
    last_verified_email: 'billy.chrisnawan@flash-coffee.com',
    name: 'BillyDev',
    payment_options: {
      Cash: '+6511188683523',
      CreditCard: [Array],
      Dana: '+6511188683523',
      FlashPoint: 'FlashPoint',
      GoPay: '+6511188683523',
      OVO: '+6511188683523',
      ShopeePay: '+6511188683523',
      hk_adyen_alipayhk: '+6511188683523',
      hk_adyen_applepay: '+6511188683523',
      hk_adyen_wechatpay: '+6511188683523',
      hk_hsbc_payme: '+6511188683523',
      hk_adyen_paywithgoogle: '+6511188683523',
      id_xendit_dana: '+6511188683523',
      id_xendit_ovo: '+6511188683523',
      jp_adyen_applepay: '+6511188683523',
      sg_adyen_applepay: '+6511188683523',
      sg_adyen_paywithgoogle: '+6511188683523',
      tw_tappay_jkopay: '+6511188683523',
      tw_tappay_linepay: '+6511188683523',
      th_adyen_paywithgoogle: '+6511188683523',
    },
    phone_number: '+6511188683523',
    phone_number_verified: true,
    sub: '9f03327a-5dd8-45a5-8cec-25e689aeea5d',
  },
  customerRefId: '9f03327a-5dd8-45a5-8cec-25e689aeea5d',
  decimalSubTotal: 12000,
  decimalTotal: 6000,
  deliveryMethod: EDeliveryMethod.PICKUP,
  discount: 6000,
  id: '83bdece3-4854-4709-926c-c6ad4391f75d',
  invoiceNumber: '83bdece3-4854-4709-926c-c6ad4391f75d',
  items: [
    {
      discount: 0,
      price: 12000,
      product: {
        _lang: {},
        availability: 1,
        availabilityBool: true,
        category: {
          categoryName: 'Essentials',
          categoryOrder: 2,
          createdAt: '2020-04-13T09:43:32.916Z',
          id: 'f1f5b651-6724-48e5-a36a-6449da590574',
          isVisible: true,
          updatedAt: '2022-02-13T03:28:49.443Z',
        },
        cost: null,
        description: 'Espresso and hot water.',
        descriptionLocale: 'Espresso and hot water.',
        id: '1573df03-23d5-4535-84b8-d0dabd4e856e',
        image:
          'https://images.ctfassets.net/xqnmwkrakjp5/3bHPP3hPgBcEb9fi1h2f6z/0c5517482e19bf8c568a6884089350bc/512px-americano.png',
        isAvailableForDelivery: true,
        isRecommended: true,
        isSelling: true,
        name: 'Americano Storehub',
        outOfStock: false,
        price: 8000,
        sellingPrice: 0,
        subCategory: '',
        priceType: '',
        storePrice: 0,
        shortDescription: 'Espresso and hot water.',
        shortDescriptionLocale: 'Espresso and hot water.',
        sic: 'ESL0001',
        sku: 'ESS021',
        storehubId: '5df75c1e0085ec35fced6396',
        tags: [],
        trackStockLevel: false,
        isParentProduct: false,
        variants: [
          {
            id: '7a43e2aa-9ef9-4d93-bff7-eea1c1338bf5',
            isDirty: true,
            isMultiple: false,
            isRequired: true,
            isWithIcon: false,
            name: 'Size',
            nameLocale: 'Size',
            options: [],
            upsizeOptions: [],
            regularOptions: [],
          },
          {
            id: '469bdbe9-29a1-4673-92cf-637cbb13945d',
            isDirty: true,
            isMultiple: false,
            isRequired: false,
            isWithIcon: true,
            name: 'Available In',
            nameLocale: '',
            options: [],
            upsizeOptions: [],
            regularOptions: [],
          },
          {
            id: 'c5cde65b-d8df-4e7d-91ed-3e5ecf151e2f',
            isDirty: true,
            isMultiple: false,
            isRequired: true,
            isWithIcon: false,
            name: 'Sugar Level',
            nameLocale: '',
            options: [],
            upsizeOptions: [],
            regularOptions: [],
          },
          {
            id: '4d098c94-f922-4482-86a0-219ac7bf698e',
            isDirty: true,
            isMultiple: false,
            isRequired: false,
            isWithIcon: false,
            name: 'Extra Espresso',
            nameLocale: '',
            options: [],
            upsizeOptions: [],
            regularOptions: [],
          },
        ],
      },
      productId: '1573df03-23d5-4535-84b8-d0dabd4e856e-1',
      productName: 'Americano Storehub',
      quantity: 1,
      storehubId: '5df75c1e0085ec35fced6396',
      subTotal: 12000,
      total: 12000,
    },
  ],
  paymentAmount: 6000,
  paymentMethod: PaymentOption.OVO,
  paymentStatus: EPaymentStatus.PENDING,
  phoneNumber: '+6511188683523',
  pickupTime: '2022-03-18T10:31:51.829Z',
  redirectUrl: 'fcappdev://Order/83bdece3-4854-4709-926c-c6ad4391f75d/',
  refId: '83bdece3-4854-4709-926c-c6ad4391f75d',
  status: EOrderStatus.CREATED,
  storeId: '39e65bdb-26ad-47da-b68b-b34464c1487a',
  storeMeta: {
    _lang: {
      city: {},
      country: {},
      name: {},
      state: {},
      streetAddress: {},
    },
    city: 'South Jakarta',
    closeTime: '23:59',
    config: {
      defaultPickupTimeAddVar: 10,
      leadDeliveryTime: 10,
      leadLastDeliveryTime: 45,
      maxQtyDelivery: 5,
      recommendedTitle: 'Recommended Item',
      restrictionEmail: '',
    },
    country: 'Indonesia',
    countryCode: '10',
    createdAt: '2020-04-11T06:58:53.000Z',
    deliveryCloseTime: '23:14',
    deliveryNotes: null,
    deliveryOpenTime: '11:10',
    deliveryPartner: {
      baseUrl: 'localhost://',
      code: 'gojek',
      id: '449f0005-cfe4-4429-9549-44eeca86ec4c',
      isActive: false,
      name: 'GOJEKKK',
    },
    distance: {
      formatted: '580m',
      raw: 580,
    },
    forceClose: 0,
    id: '39e65bdb-26ad-47da-b68b-b34464c1487a',
    isActive: true,
    isClosedToday: false,
    isDeliveryEnabled: false,
    isHidden: false,
    isOpen: true,
    isSelfPickupEnabled: true,
    latitude: -6.22316,
    longitude: 106.81,
    openTime: '11:00',
    phoneNumber: '+6285288889999',
    postCode: '12190',
    state: 'Jakarta',
    storeCode: '9000',
    storeName: 'Dev GoWork Pacific Place',
    storeTime: [],
    storehubId: '5e5635131eea2117297ff763',
    streetAddress:
      'Jl. Jend. Sudirman No.52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190, Indonesia',
    temporaryClose: false,
    timezone: 'Asia/Jakarta',
    updatedAt: '2022-03-15T04:07:48.358Z',
    isNearest: true,
  },
  subTotal: 12000,
  tax: 0,
  total: 6000,
  transactionTime: '2022-03-18T10:21:51.829Z',
  transactionType: TransactionType.SALE,
  triggeredPromotions: [
    {
      discount: 6000,
      discountType: EDiscountType.ITEM,
      displayName: undefined,
      id: 768,
      name: 'ID DEV - Flash Coffee Employee Disc',
      nameLocale: 'Employee Discount',
      ruleName: 'If the Customer is Flash Coffee Employee',
      triggeredByCoupon: undefined,
    },
  ],
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
  smallOrderFee: 0,
};

const loggedOrder: ILoggedOrder = {
  appliedVoucher: undefined,
  cleanHubDonationAmount: 0,
  comment: '',
  customerRefId: '9f03327a-5dd8-45a5-8cec-25e689aeea5d',
  decimalSubTotal: 12000,
  decimalTotal: 6000,
  deliveryMethod: EDeliveryMethod.PICKUP,
  discount: 6000,
  id: '83bdece3-4854-4709-926c-c6ad4391f75d',
  invoiceNumber: '83bdece3-4854-4709-926c-c6ad4391f75d',
  items: [
    {
      availability: 1,
      availabilityBool: true,
      itemId: '1573df03-23d5-4535-84b8-d0dabd4e856e-1',
      isAvailableForDelivery: true,
      isSelling: true,
      name: 'Americano Storehub',
      outOfStock: false,
    },
  ],
  paymentAmount: 6000,
  paymentMethod: PaymentOption.OVO,
  paymentStatus: EPaymentStatus.PENDING,
  phoneNumber: '+6511188683523',
  pickupTime: '2022-03-18T10:31:51.829Z',
  redirectUrl: 'fcappdev://Order/83bdece3-4854-4709-926c-c6ad4391f75d/',
  refId: '83bdece3-4854-4709-926c-c6ad4391f75d',
  status: EOrderStatus.CREATED,

  storeMeta: {
    closeTime: '23:59',
    config: {
      defaultPickupTimeAddVar: 10,
      leadDeliveryTime: 10,
      leadLastDeliveryTime: 45,
      maxQtyDelivery: 5,
      recommendedTitle: 'Recommended Item',
      restrictionEmail: '',
    },
    deliveryCloseTime: '23:14',
    deliveryOpenTime: '11:10',
    distance: {
      formatted: '580m',
      raw: 580,
    },
    forceClose: 0,
    isClosedToday: false,
    isDeliveryEnabled: false,
    isOpen: true,
    isSelfPickupEnabled: true,
    openTime: '11:00',
    storeId: 'Dev GoWork Pacific Place',
    storeName: '39e65bdb-26ad-47da-b68b-b34464c1487a',
    storeTime: [],
    temporaryClose: false,
    timezone: 'Asia/Jakarta',
  },
  subTotal: 12000,
  tax: 0,
  total: 6000,
  transactionTime: '2022-03-18T10:21:51.829Z',
  transactionType: TransactionType.SALE,
  triggeredPromotions: [
    {
      discount: 6000,
      discountType: EDiscountType.ITEM,
      displayName: undefined,
      id: 768,
      name: 'ID DEV - Flash Coffee Employee Disc',
      nameLocale: 'Employee Discount',
      ruleName: 'If the Customer is Flash Coffee Employee',
      triggeredByCoupon: undefined,
    },
  ],
  userAgent:
    'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
  smallOrderFee: 0,
};

jest.mock('@utils/fcStorage', () => {
  let countryData: any;
  return {
    fcStoreSetItem: (key: string, value: any): void => {
      countryData = {
        [key]: value,
      };
    },
    fcStoreGetItem: async (key: string): Promise<any> => {
      return key === 'country' ? JSON.stringify(countryData[key]) : null;
    },
  };
});

it('currency code for SG', async () => {
  await fcStoreSetItem('country', sgCountry);
  const currency = await getCurrency();
  expect(currency).toBe('SGD');
});

it('currency code for TH', async () => {
  await fcStoreSetItem('country', thCountry);
  const currency = await getCurrency();
  expect(currency).toBe('THB');
});

it('currency code for HK', async () => {
  await fcStoreSetItem('country', hkCountry);
  const currency = await getCurrency();
  expect(currency).toBe('HKD');
});

it('currency code for ID', async () => {
  await fcStoreSetItem('country', idCountry);
  const currency = await getCurrency();
  expect(currency).toBe('IDR');
});

it('currency code for STG_ID', async () => {
  await fcStoreSetItem('country', idStgCountry);
  const currency = await getCurrency();
  expect(currency).toBe('IDR');
});

it('currency code for JP', async () => {
  await fcStoreSetItem('country', jpCountry);
  const currency = await getCurrency();
  expect(currency).toBe('JPY');
});

it('currency code for TW', async () => {
  await fcStoreSetItem('country', twCountry);
  const currency = await getCurrency();
  expect(currency).toBe('TWD');
});

it('currency code for unknown country', async () => {
  await fcStoreSetItem('country', unknownCountry);
  const currency = await getCurrency();
  expect(currency).toBe('IDR');
});

it('getLoggedProductData works well', () => {
  expect(getLoggedProductData(cartModifier)).toStrictEqual(loggedProduct);
});

it('getLoggedOrderData works well', () => {
  expect(getLoggedOrderData(order)).toStrictEqual(loggedOrder);
});
