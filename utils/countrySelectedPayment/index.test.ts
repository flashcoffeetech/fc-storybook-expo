import {PaymentOption} from '@appTypes/paymentMethod.type';
import {COUNTRY_HONG_KONG, COUNTRY_SINGAPORE} from '@constants/country.const';
import 'react-native';
import {validateCountrySelectedPayment} from '.';

const paymentOptions: any = {
  FlashPoint: 'FlashPoint',
  CreditCard: [
    {
      createdAt: '2021-06-10T03:35:52.419Z',
      holderName: 'fido tw',
      id: 'U2FsdGVkX1+ZFbdFTV+ugRIAjw8VqAF/k2ISLu3XfVTO3a8xqaQR7THYTV1rQRjs',
      maskedCardNumber: 'XXXXXXXXXXXX5454',
      paymentProvider: 'ADYEN',
      pspReference: '882623296150948B',
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
      type: 'Visa',
      id: '60c6ca1e02488e0020d327b5',
      paymentProvider: 'xendit',
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
      createdAt: '2021-06-16T14:10:23.079Z',
      holderName: 'Fido',
      id: 'U2FsdGVkX186KiLY29U7w6GDkNAzucaGkS9xnaKelG0x5+3veouoBavVU9hY5Cfc',
      maskedCardNumber: 'XXXXXXXXXXXX5454',
      paymentProvider: 'ADYEN',
      pspReference: '862623852621422A',
      selected: false,
      status: 'Authorised',
      type: 'Mastercard',
      country: {
        code: 'TH',
        currencies: ['THB'],
        currency: 'THB',
        name: 'Thailand',
        zones: ['Asia/Bangkok'],
      },
    },
    {
      createdAt: '2021-06-25T00:01:39.477Z',
      holderName: 'Test',
      id: 'U2FsdGVkX19MBYWKvacmAyjq/PiHuEmG1FWsGWRQiRSf5JTG37t4DVWCpgBr+ySo6LQMLpWVvh+VwQblok38RGJA8VxXZE46tpvV/YlLF6ucpUbLKoqFdBFK+vNZ9ShWPuI4vpqJtrvFxw5hMbnYoDpJLcU36emM3Lg4QEdPgSoFEXumj4cXQXmFEsebYZowu/rDGqB64yZ7sF7947QqaUUOUPjvQsA8AEBIebzVo/8=',
      maskedCardNumber: 'xxxxxxxxxxxx5454',
      paymentProvider: 'tappay',
      selected: false,
      status: 'Success',
      type: 'MasterCard',
      country: {
        code: 'TW',
        currencies: ['TWD'],
        currency: 'TWD',
        name: 'Taiwan',
        zones: ['Asia/Taipei'],
      },
    },
    {
      createdAt: '2021-09-21T02:12:04.402Z',
      holderName: 'Fido',
      id: 'U2FsdGVkX190z4kJGQplYgE6+9euNGv1CDLdPgpRstbYN/fn+pJSoBgaKblWuz3U',
      maskedCardNumber: 'XXXXXXXXXXXX5454',
      paymentProvider: 'ADYEN',
      pspReference: '862632190323529H',
      selected: true,
      status: 'Authorised',
      type: 'Mastercard',
      country: {
        code: 'HK',
        currencies: ['HKD'],
        currency: 'HKD',
        name: 'Hong Kong',
        zones: ['Asia/Hong_Kong'],
      },
    },
  ],
  OVO: '+6282247XXXXXX',
  GoPay: '+6282247XXXXXX',
  Dana: '+6282247XXXXXX',
  ShopeePay: '+6282247XXXXXX',
  GrabPay: '+6282247XXXXXX',
  MolPay: '+6282247XXXXXX',
  MOLPay: '+6282247XXXXXX',
  Cash: '+6282247XXXXXX',
  'th_adyen_molpay-ebanking': '+6282247XXXXXX',
};

it('validateCountrySelectedPayment works well', async () => {
  expect(
    validateCountrySelectedPayment(
      paymentOptions,
      PaymentOption.CREDIT_CARD,
      COUNTRY_HONG_KONG,
    ),
  ).toBe(true);

  expect(
    validateCountrySelectedPayment(
      paymentOptions,
      PaymentOption.CREDIT_CARD,
      COUNTRY_SINGAPORE,
    ),
  ).toBe(false);

  expect(
    validateCountrySelectedPayment(
      null,
      PaymentOption.CREDIT_CARD,
      COUNTRY_HONG_KONG,
    ),
  ).toBe(false);

  expect(
    validateCountrySelectedPayment(paymentOptions, null, COUNTRY_HONG_KONG),
  ).toBe(false);

  expect(
    validateCountrySelectedPayment(
      paymentOptions,
      PaymentOption.CREDIT_CARD,
      null,
    ),
  ).toBe(false);

  expect(validateCountrySelectedPayment(null, null, COUNTRY_HONG_KONG)).toBe(
    false,
  );

  expect(validateCountrySelectedPayment(null, null, null)).toBe(false);
});
