import {ECreditCardType} from '@appTypes/creditCardType.type';
import {PaymentOption} from '@appTypes/paymentMethod.type';
import {assets} from '@assets/assets';
import {
  COUNTRY_HONG_KONG,
  COUNTRY_INDONESIA,
  COUNTRY_JAPAN,
  COUNTRY_SINGAPORE,
  COUNTRY_TAIWAN,
  COUNTRY_THAILAND,
} from '@constants/country.const';
import 'react-native';
import {Platform} from 'react-native';
import {
  getLogo,
  isDefaultPaymentAvailableInCountry,
  isPaymentMethodAvailableForPlatform,
} from '.';

describe('isDefaultPaymentAvailableInCountry works well', () => {
  it('make sure isDefaultPaymentAvailableInCountry indonesia work accordingly', () => {
    const indonesia = [COUNTRY_INDONESIA];
    const paymentMethodsSpesificIndo = [
      PaymentOption.OVO,
      PaymentOption.DANA,
      PaymentOption.ID_XENDIT_OVO,
      PaymentOption.ID_XENDIT_DANA,
      PaymentOption.SHOPEEPAY,
      PaymentOption.GOPAY,
      PaymentOption.CREDIT_CARD,
      PaymentOption.CASH,
      PaymentOption.FlashPoint,
      PaymentOption.FREE,
    ];
    for (const countryCode of indonesia) {
      for (const paymentMethod of Object.values(PaymentOption)) {
        expect(
          isDefaultPaymentAvailableInCountry(countryCode, paymentMethod),
        ).toBe(paymentMethodsSpesificIndo.includes(paymentMethod));
      }
    }
  });
  it('make sure isDefaultPaymentAvailableInCountry singapore work accordingly', () => {
    const singapore = [COUNTRY_SINGAPORE];
    const paymentMethodsSpesificSg = [
      PaymentOption.CREDIT_CARD,
      PaymentOption.CASH,
      PaymentOption.FlashPoint,
      PaymentOption.FREE,
      PaymentOption.SG_ADYEN_APPLEPAY,
      PaymentOption.SG_ADYEN_PAYWITHGOOGLE,
    ];
    for (const countryCode of singapore) {
      for (const paymentMethod of Object.values(PaymentOption)) {
        expect(
          isDefaultPaymentAvailableInCountry(countryCode, paymentMethod),
        ).toBe(paymentMethodsSpesificSg.includes(paymentMethod));
      }
    }
  });
  it('make sure isDefaultPaymentAvailableInCountry thailand work accordingly', () => {
    const thailand = [COUNTRY_THAILAND];
    const paymentMethodsSpesificTh = [
      PaymentOption.CREDIT_CARD,
      PaymentOption.CASH,
      PaymentOption.FlashPoint,
      PaymentOption.FREE,
      PaymentOption.PANDAGO_CASH_ON_DELIVERY,
      PaymentOption.TH_SHOPEEPAY_SHOPEEPAY,
      PaymentOption.TH_ADYEN_MOLPAY,
      PaymentOption.TH_TRUEMONEY_TRUEMONEY,
      PaymentOption.TH_ADYEN_PAYWITHGOOGLE,
    ];
    for (const countryCode of thailand) {
      for (const paymentMethod of Object.values(PaymentOption)) {
        expect(
          isDefaultPaymentAvailableInCountry(countryCode, paymentMethod),
        ).toBe(paymentMethodsSpesificTh.includes(paymentMethod));
      }
    }
  });
  it('make sure isDefaultPaymentAvailableInCountry taiwan work accordingly', () => {
    const paymentMethodsSpesificTw = [
      PaymentOption.CREDIT_CARD,
      PaymentOption.CASH,
      PaymentOption.FlashPoint,
      PaymentOption.FREE,
      PaymentOption.TW_TAPPAY_JKOPAY,
      PaymentOption.TW_TAPPAY_LINEPAY,
      PaymentOption.TW_TAPPAY_APPLEPAY,
      PaymentOption.TW_TAPPAY_GOOGLEPAY,
    ];
    for (const paymentMethod of Object.values(PaymentOption)) {
      expect(
        isDefaultPaymentAvailableInCountry(COUNTRY_TAIWAN, paymentMethod),
      ).toBe(paymentMethodsSpesificTw.includes(paymentMethod));
    }
  });
  it('make sure isDefaultPaymentAvailableInCountry japan work accordingly', () => {
    const paymentMethodsSpesificJp = [
      PaymentOption.CREDIT_CARD,
      PaymentOption.CASH,
      PaymentOption.FlashPoint,
      PaymentOption.FREE,
      PaymentOption.JP_RAPYD_CARD,
      PaymentOption.JP_ADYEN_APPLEPAY,
    ];
    for (const paymentMethod of Object.values(PaymentOption)) {
      expect(
        isDefaultPaymentAvailableInCountry(COUNTRY_JAPAN, paymentMethod),
      ).toBe(paymentMethodsSpesificJp.includes(paymentMethod));
    }
  });
  it('make sure isDefaultPaymentAvailableInCountry hongkong work accordingly', () => {
    const paymentMethodsSpesificHk = [
      PaymentOption.CREDIT_CARD,
      PaymentOption.CASH,
      PaymentOption.FlashPoint,
      PaymentOption.FREE,
      PaymentOption.HK_ADYEN_ALIPAYHK,
      PaymentOption.HK_ADYEN_WECHATPAY,
      PaymentOption.HK_ADYEN_APPLEPAY,
      PaymentOption.HK_COD_ALIPAYHK,
      PaymentOption.HK_HSBC_PAYME,
      PaymentOption.HK_HKT_TAPANDGO,
      PaymentOption.HK_ADYEN_PAYWITHGOOGLE,
    ];
    for (const paymentMethod of Object.values(PaymentOption)) {
      expect(
        isDefaultPaymentAvailableInCountry(COUNTRY_HONG_KONG, paymentMethod),
      ).toBe(paymentMethodsSpesificHk.includes(paymentMethod));
    }
  });
});

it('getLogo works well', () => {
  expect(getLogo(PaymentOption.CASH)).toBe(assets.logo.cash);
  expect(
    getLogo(PaymentOption.CREDIT_CARD, {
      cardBrand: ECreditCardType.AMERICAN_EXPRESS,
    }),
  ).toBe(assets.logo.americanExpress);
  expect(
    getLogo(PaymentOption.CREDIT_CARD, {
      cardBrand: ECreditCardType.DINERS_CLUB,
    }),
  ).toBe(assets.logo.dinersClub);
  expect(
    getLogo(PaymentOption.CREDIT_CARD, {
      cardBrand: ECreditCardType.DISCOVER,
    }),
  ).toBe(assets.logo.discover);
  expect(
    getLogo(PaymentOption.CREDIT_CARD, {
      cardBrand: ECreditCardType.MAESTRO,
    }),
  ).toBe(assets.logo.maestro);
  expect(
    getLogo(PaymentOption.CREDIT_CARD, {
      cardBrand: ECreditCardType.MASTER_CARD,
    }),
  ).toBe(assets.logo.masterCard);
  expect(
    getLogo(PaymentOption.CREDIT_CARD, {
      cardBrand: ECreditCardType.VISA,
    }),
  ).toBe(assets.logo.visa);
  expect(getLogo(PaymentOption.DANA)).toBe(assets.logo.dana);
  expect(getLogo(PaymentOption.FlashPoint)).toBe(assets.logo.flash);
  expect(getLogo(PaymentOption.GOPAY)).toBe(assets.logo.goPay);
  expect(getLogo(PaymentOption.ID_XENDIT_DANA)).toBe(assets.logo.dana);
  expect(getLogo(PaymentOption.ID_XENDIT_OVO)).toBe(assets.logo.ovo);
  expect(getLogo(PaymentOption.OVO)).toBe(assets.logo.ovo);
  expect(getLogo(PaymentOption.SHOPEEPAY)).toBe(assets.logo.shopeePay);
  expect(getLogo(PaymentOption.HK_ADYEN_ALIPAYHK)).toBe(
    assets.logo.hk_adyen_alipay,
  );
  expect(getLogo(PaymentOption.HK_HSBC_PAYME)).toBe(assets.logo.hsbcPayme);
  expect(getLogo('other')).toBe(assets.logo.flash);
});

describe('isPaymentMethodAvailableForPlatform works well', () => {
  it('IOS Only Payment method: ApplePay', () => {
    Platform.OS = 'ios';

    const applePay = isPaymentMethodAvailableForPlatform(
      PaymentOption.SG_ADYEN_APPLEPAY || PaymentOption.JP_ADYEN_APPLEPAY,
    );
    const googlePay = isPaymentMethodAvailableForPlatform(
      PaymentOption.SG_ADYEN_PAYWITHGOOGLE ||
        PaymentOption.TH_ADYEN_PAYWITHGOOGLE,
    );
    expect(applePay).toBeTruthy();
    expect(googlePay).toBeFalsy();
  });

  it('Android Only Payment method: GooglePay', () => {
    Platform.OS = 'android';

    const applePay = isPaymentMethodAvailableForPlatform(
      PaymentOption.SG_ADYEN_APPLEPAY,
    );
    const googlePay = isPaymentMethodAvailableForPlatform(
      PaymentOption.SG_ADYEN_PAYWITHGOOGLE ||
        PaymentOption.TH_ADYEN_PAYWITHGOOGLE ||
        PaymentOption.HK_ADYEN_PAYWITHGOOGLE,
    );
    expect(applePay).toBeFalsy();
    expect(googlePay).toBeTruthy();
  });

  it('All platform Payment method: IOS HSBC Payme', () => {
    Platform.OS = 'ios';
    const hsbc = isPaymentMethodAvailableForPlatform(
      PaymentOption.HK_HSBC_PAYME,
    );
    expect(hsbc).toBeTruthy();
  });

  it('All platform Payment method: Android HSBC Payme', () => {
    Platform.OS = 'android';
    const hsbc = isPaymentMethodAvailableForPlatform(
      PaymentOption.HK_HSBC_PAYME,
    );
    expect(hsbc).toBeTruthy();
  });
});
