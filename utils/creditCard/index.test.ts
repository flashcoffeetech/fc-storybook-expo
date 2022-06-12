import {ICreditCard} from '@appTypes/creditCard.type';
import {ECreditCardType, EPaymentProvider} from '@appTypes/creditCardType.type';
import {
  COUNTRY_INDONESIA,
  COUNTRY_SINGAPORE,
  COUNTRY_TAIWAN,
} from '@constants/country.const';
import 'react-native';
import crypto from 'crypto-js';
import {
  countryCreditCardList,
  countrySelectedCreditCard,
  decryptCardToken,
} from '.';

const data = [
  {
    createdAt: '2021-06-10T03:35:52.419Z',
    holderName: 'holder tw',
    id: 'U2FsdGVkX1+ZFbdFTV+ugRIAjw8VqAF/k2ISLu3XfVTO3a8xqaQR7THYTV1rQRjs',
    maskedCardNumber: 'XXXXXXXXXXXX4242',
    paymentProvider: EPaymentProvider.TAPPAY,
    pspReference: '882623296150948B',
    selected: false,
    status: 'Authorised',
    type: ECreditCardType.VISA,
    country: {
      code: 'TW',
      currencies: ['TWD'],
      currency: 'TWD',
      name: 'Taiwan',
      zones: ['Asia/Taipei'],
    },
  },
  {
    type: ECreditCardType.VISA,
    id: '60c6ca1e02488e0020d327b5',
    paymentProvider: EPaymentProvider.XENDIT,
    maskedCardNumber: '400000XXXXXX0002',
    status: 'VERIFIED',
    selected: false,
    createdAt: 'Mon Jun 14 2021 11:16:46 GMT+0800',
    country: {
      code: 'ID',
      currencies: ['IDR'],
      currency: 'IDR',
      name: 'Indonesia',
      zones: ['Asia/Jakarta'],
    },
  },
  {
    createdAt: '2021-06-15T10:30:45.768Z',
    holderName: 'holder sg',
    id: 'U2FsdGVkX1+gwGHDSRxG2MZ5ZujDpA1QdcA0eckkMaoz0kh88JxHge/bjjRRfYRT',
    maskedCardNumber: 'XXXXXXXXXXXX5454',
    paymentProvider: EPaymentProvider.ADYEN,
    pspReference: '852623753044676B',
    selected: true,
    status: 'Authorised',
    type: ECreditCardType.MASTER_CARD,
    country: {
      code: 'SG',
      currencies: ['SGD'],
      currency: 'SGD',
      name: 'Singapore',
      zones: ['Asia/Singapore'],
    },
  },
];

it('countryCreditCardList works well', () => {
  const creditCardList: any = [...data];
  const creditCardListExpectedID: ICreditCard[] = [
    {
      type: ECreditCardType.VISA,
      id: '60c6ca1e02488e0020d327b5',
      paymentProvider: EPaymentProvider.XENDIT,
      maskedCardNumber: '400000XXXXXX0002',
      status: 'VERIFIED',
      selected: false,
      createdAt: 'Mon Jun 14 2021 11:16:46 GMT+0800',
      country: {
        code: 'ID',
        currencies: ['IDR'],
        currency: 'IDR',
        name: 'Indonesia',
        zones: ['Asia/Jakarta'],
      },
    },
  ];
  const creditCardListExpectedSG: ICreditCard[] = [
    {
      createdAt: '2021-06-15T10:30:45.768Z',
      holderName: 'holder sg',
      id: 'U2FsdGVkX1+gwGHDSRxG2MZ5ZujDpA1QdcA0eckkMaoz0kh88JxHge/bjjRRfYRT',
      maskedCardNumber: 'XXXXXXXXXXXX5454',
      paymentProvider: EPaymentProvider.ADYEN,
      pspReference: '852623753044676B',
      selected: true,
      status: 'Authorised',
      type: ECreditCardType.MASTER_CARD,
      country: {
        code: 'SG',
        currencies: ['SGD'],
        currency: 'SGD',
        name: 'Singapore',
        zones: ['Asia/Singapore'],
      },
    },
  ];
  const creditCardListExpectedTW: ICreditCard[] = [
    {
      createdAt: '2021-06-10T03:35:52.419Z',
      holderName: 'holder tw',
      id: 'U2FsdGVkX1+ZFbdFTV+ugRIAjw8VqAF/k2ISLu3XfVTO3a8xqaQR7THYTV1rQRjs',
      maskedCardNumber: 'XXXXXXXXXXXX4242',
      paymentProvider: EPaymentProvider.TAPPAY,
      pspReference: '882623296150948B',
      selected: false,
      status: 'Authorised',
      type: ECreditCardType.VISA,
      country: {
        code: 'TW',
        currencies: ['TWD'],
        currency: 'TWD',
        name: 'Taiwan',
        zones: ['Asia/Taipei'],
      },
    },
  ];

  expect(
    countryCreditCardList(creditCardList, COUNTRY_INDONESIA),
  ).toStrictEqual(creditCardListExpectedID);

  expect(
    countryCreditCardList(creditCardList, COUNTRY_SINGAPORE),
  ).toStrictEqual(creditCardListExpectedSG);

  expect(countryCreditCardList(creditCardList, COUNTRY_TAIWAN)).toStrictEqual(
    creditCardListExpectedTW,
  );

  expect(countryCreditCardList(null, COUNTRY_INDONESIA)).toStrictEqual([]);
});

it('countrySelectedCreditCard works well', () => {
  const creditCardList: any = [...data];

  const selectedCreditCardExpected: ICreditCard = {
    createdAt: '2021-06-15T10:30:45.768Z',
    holderName: 'holder sg',
    id: 'U2FsdGVkX1+gwGHDSRxG2MZ5ZujDpA1QdcA0eckkMaoz0kh88JxHge/bjjRRfYRT',
    maskedCardNumber: 'XXXXXXXXXXXX5454',
    paymentProvider: EPaymentProvider.ADYEN,
    pspReference: '852623753044676B',
    selected: true,
    status: 'Authorised',
    type: ECreditCardType.MASTER_CARD,
    country: {
      code: 'SG',
      currencies: ['SGD'],
      currency: 'SGD',
      name: 'Singapore',
      zones: ['Asia/Singapore'],
    },
  };

  expect(
    countrySelectedCreditCard(creditCardList, COUNTRY_SINGAPORE),
  ).toStrictEqual(selectedCreditCardExpected);
});

describe('decryptCardToken', () => {
  it('should be success', async () => {
    const mockCryptoAESDecrypt = jest
      .spyOn(crypto.AES, 'decrypt')
      .mockReturnThis();

    await decryptCardToken(
      'data-111',
      'sub-111111111111',
      'maskedCardNumber-111',
      'secretPhrase-111',
    );

    expect(mockCryptoAESDecrypt).toHaveBeenCalled();
  });
});
