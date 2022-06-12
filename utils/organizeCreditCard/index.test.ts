import 'react-native';

import {organizeCreditCard} from '.';
import {ICreditCard} from '@appTypes/creditCard.type';
import {ECreditCardType, EPaymentProvider} from '@appTypes/creditCardType.type';

const data = [
  {
    createdAt: '2021-05-27T05:01:37.041Z',
    holderName: 'Fido',
    id: 'U2FsdGVkX1/QKyaX54s8bsJMo+XNRksyUhZ1qPGFdnEF1VW1SdOi193DEMAd5WLF',
    maskedCardNumber: 'XXXXXXXXXXXX4242',
    paymentProvider: 'tappay',
    pspReference: '853622091695877B',
    selected: false,
    status: 'Authorised',
    type: 'Mastercard',
    country: {
      code: 'TW',
      currencies: ['TWD'],
      currency: 'TWD',
      name: 'Taiwan',
      zones: ['Asia/Taipei'],
    },
  },
  {
    type: 'Mastercard',
    id: '60b2748228b731002236fcb1',
    paymentProvider: 'xendit',
    maskedCardNumber: '545454XXXXXX4545',
    status: 'VERIFIED',
    selected: false,
    createdAt: 'Sun May 30 2021 01:06:10 GMT+0800',
    country: {
      code: 'ID',
      currencies: ['IDR'],
      currency: 'IDR',
      name: 'Indonesia',
      zones: ['Asia/Jakarta'],
    },
  },
  {
    type: 'Visa',
    id: '60b274d828b731002236fcb5',
    paymentProvider: 'xendit',
    maskedCardNumber: '400000XXXXXX0002',
    status: 'VERIFIED',
    selected: false,
    createdAt: 'Sun May 30 2021 01:07:37 GMT+0800',
    country: {
      code: 'ID',
      currencies: ['IDR'],
      currency: 'IDR',
      name: 'Indonesia',
      zones: ['Asia/Jakarta'],
    },
  },
  {
    type: 'Mastercard',
    id: '60b36a5328b731002236fec7',
    paymentProvider: 'xendit',
    maskedCardNumber: '520000XXXXXX0007',
    status: 'VERIFIED',
    selected: false,
    createdAt: 'Sun May 30 2021 18:35:00 GMT+0800',
    country: {
      code: 'ID',
      currencies: ['IDR'],
      currency: 'IDR',
      name: 'Indonesia',
      zones: ['Asia/Jakarta'],
    },
  },
  {
    createdAt: '2021-06-02T09:49:05.253Z',
    holderName: 'Test',
    id: 'U2FsdGVkX1/i33n/GK+MhvheqkHCL5Cz8LCwXk2DYuqxf5vsrxLH3Whgd4MpNX+w',
    maskedCardNumber: 'XXXXXXXXXXXX0000',
    paymentProvider: 'ADYEN',
    pspReference: '882622627343920F',
    selected: false,
    status: 'Authorised',
    type: 'Visa',
    country: {
      code: 'TH',
      currencies: ['THB'],
      currency: 'THB',
      name: 'Thailand',
      zones: ['Asia/Bangkok'],
    },
  },
  {
    createdAt: '2021-06-04T07:57:28.048Z',
    holderName: 'Fido',
    id: 'U2FsdGVkX1+RL+M4mYtzvQlOf4pFs2ln1dL/fMQVdWQ2xsjKFuf2ly3MfzBxGy5O',
    maskedCardNumber: 'XXXXXXXXXXXX5454',
    paymentProvider: 'ADYEN',
    pspReference: '882622793446246B',
    selected: true,
    status: 'Authorised',
    type: 'Mastercard',
    country: {
      code: 'SG',
      currencies: ['SGD'],
      currency: 'SGD',
      name: 'Singapore',
      zones: ['Asia/Singapore'],
    },
  },
  {
    createdAt: '2021-06-06T12:18:58.784Z',
    holderName: 'Fido',
    id: 'U2FsdGVkX1+smmZuIQ09MT30fPFre2vx0oUd1gDnUtAZ1MnS6Yj7MbzYmdxz8lwU',
    maskedCardNumber: 'XXXXXXXXXXXX1111',
    paymentProvider: 'ADYEN',
    pspReference: '882622981937889F',
    selected: false,
    status: 'Authorised',
    type: 'Visa',
    country: {
      code: 'SG',
      currencies: ['SGD'],
      currency: 'SGD',
      name: 'Singapore',
      zones: ['Asia/Singapore'],
    },
  },
];

it('organizeCreditCard works well', () => {
  const creditCard: ICreditCard = {
    createdAt: '2021-06-06T13:30:12.600Z',
    holderName: 'Fido',
    id: 'U2FsdGVkX1+zqQcr50Q/jlQqZHxauZreiOnr0kCJhGoQiW4xJuHNOCH7Dase63+Y',
    maskedCardNumber: 'XXXXXXXXXXXX0000',
    paymentProvider: EPaymentProvider.ADYEN,
    pspReference: '862622986211712H',
    selected: true,
    status: 'Authorised',
    type: ECreditCardType.VISA,
    country: {
      code: 'SG',
      currencies: ['SGD'],
      currency: 'SGD',
      name: 'Singapore',
      zones: ['Asia/Singapore'],
    },
  };

  const country = {
    code: 'SG',
    currencies: ['SGD'],
    currency: 'SGD',
    name: 'Singapore',
    zones: ['Asia/Singapore'],
  };

  const dataToOrganize = {
    newCreditCard: creditCard,
    creditCardOptions: data,
    paymentProvider: EPaymentProvider.ADYEN,
    currentCountry: country,
  };

  organizeCreditCard(dataToOrganize);
});
