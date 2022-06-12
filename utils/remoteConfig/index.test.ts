/* eslint-disable sonarjs/no-identical-functions */
import 'react-native';
import {ICountry} from '@appTypes/location.type';

import remoteConfigUtil, {
  fetchRemoteConfig,
  getDefaultPickupTimeAddVar,
  getDeveloperMode,
  getIsShowNeutralColorPrice,
  getMinimumDistanceGeocoding,
  getExrateFlashPoint,
  getEnablePayment,
  getLowerLimitPayment,
  getUpperLimitPayment,
  getIsShowRecommendedProducts,
  getIsShowCurrency,
  getIsEnabledDelivery,
  getIsPreorderEnabled,
  getShowItemNote,
  getShowFreeDeliveryProgressBar,
  getOriginWhitelistInicis,
} from '.';
import {PaymentOption} from '@appTypes/paymentMethod.type';

const hkCountry: ICountry = {
  code: 'HK',
  currencies: ['HKD'],
  currency: 'HKD',
  name: 'Hongkong',
  zones: ['Asia/Hong_Kong'],
};

const idCountry: ICountry = {
  code: 'ID',
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

const krCountry: ICountry = {
  code: 'KR',
  currencies: ['KRW'],
  currency: 'KRW',
  name: 'Korea',
  zones: ['Asia/Seoul'],
};

const sgCountry: ICountry = {
  code: 'SG',
  currencies: ['SGD'],
  currency: 'SGD',
  name: 'Singapore',
  zones: ['Asia/Singapore'],
};

const southKoreaCountry: ICountry = {
  code: 'KR',
  currencies: ['KRW'],
  currency: 'KRW',
  name: 'South Korea',
  zones: ['Asia/Seoul'],
};

const thCountry: ICountry = {
  code: 'TH',
  currencies: ['TBH'],
  currency: 'TBH',
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

it('fetchRemoteConfig works well', async () => {
  fetchRemoteConfig();
});

// GLOBAL
it('getDeveloperMode works well', () => {
  getDeveloperMode();
});

it('getIsShowNeutralColorPrice works well', () => {
  getIsShowNeutralColorPrice();
});

it('getIsShowCurrency works well', () => {
  getIsShowCurrency();
});

it('getMinimumDistanceGeocoding works well', () => {
  getMinimumDistanceGeocoding();
});

it('getShowItemNote works well', () => {
  getShowItemNote(hkCountry.code);
  getShowItemNote(idCountry.code);
  getShowItemNote(jpCountry.code);
  getShowItemNote(sgCountry.code);
  getShowItemNote(southKoreaCountry.code);
  getShowItemNote(thCountry.code);
  getShowItemNote(twCountry.code);
});

it('getShowFreeDeliveryProgressBar works well', () => {
  getShowFreeDeliveryProgressBar(hkCountry.code);
  getShowFreeDeliveryProgressBar(idCountry.code);
  getShowFreeDeliveryProgressBar(jpCountry.code);
  getShowFreeDeliveryProgressBar(sgCountry.code);
  getShowFreeDeliveryProgressBar(southKoreaCountry.code);
  getShowFreeDeliveryProgressBar(thCountry.code);
  getShowFreeDeliveryProgressBar(twCountry.code);
});

it('getLimitPaymentCash works well', () => {
  getUpperLimitPayment(hkCountry.code, PaymentOption.CASH);
  getUpperLimitPayment(idCountry.code, PaymentOption.CASH);
  getUpperLimitPayment(jpCountry.code, PaymentOption.CASH);
  getUpperLimitPayment(sgCountry.code, PaymentOption.CASH);
  getUpperLimitPayment(southKoreaCountry.code, PaymentOption.CASH);
  getUpperLimitPayment(thCountry.code, PaymentOption.CASH);
  getUpperLimitPayment(twCountry.code, PaymentOption.CASH);
});

it('getLimitPaymentCC works well', () => {
  getLowerLimitPayment(hkCountry.code, PaymentOption.CREDIT_CARD);
  getLowerLimitPayment(idCountry.code, PaymentOption.CREDIT_CARD);
  getLowerLimitPayment(jpCountry.code, PaymentOption.CREDIT_CARD);
  getLowerLimitPayment(sgCountry.code, PaymentOption.CREDIT_CARD);
  getLowerLimitPayment(southKoreaCountry.code, PaymentOption.CREDIT_CARD);
  getLowerLimitPayment(thCountry.code, PaymentOption.CREDIT_CARD);
  getLowerLimitPayment(twCountry.code, PaymentOption.CREDIT_CARD);
});

it('getEnablePaymentCash works well', () => {
  getEnablePayment(hkCountry.code, PaymentOption.CASH);
  getEnablePayment(idCountry.code, PaymentOption.CASH);
  getEnablePayment(jpCountry.code, PaymentOption.CASH);
  getEnablePayment(sgCountry.code, PaymentOption.CASH);
  getEnablePayment(southKoreaCountry.code, PaymentOption.CASH);
  getEnablePayment(thCountry.code, PaymentOption.CASH);
  getEnablePayment(twCountry.code, PaymentOption.CASH);
});

it('getExrateFlashPoint works well', () => {
  getExrateFlashPoint(hkCountry);
  getExrateFlashPoint(idCountry);
  getExrateFlashPoint(jpCountry);
  getExrateFlashPoint(sgCountry);
  getExrateFlashPoint(southKoreaCountry);
  getExrateFlashPoint(thCountry);
  getExrateFlashPoint(twCountry);
});

it('getDefaultPickupTimeAddVar works well', () => {
  getDefaultPickupTimeAddVar(hkCountry.code);
  getDefaultPickupTimeAddVar(idCountry.code);
  getDefaultPickupTimeAddVar(jpCountry.code);
  getDefaultPickupTimeAddVar(sgCountry.code);
  getDefaultPickupTimeAddVar(southKoreaCountry.code);
  getDefaultPickupTimeAddVar(thCountry.code);
  getDefaultPickupTimeAddVar(twCountry.code);
});

it('getIsEnabledDelivery works well', () => {
  getIsEnabledDelivery(hkCountry.code);
  getIsEnabledDelivery(idCountry.code);
  getIsEnabledDelivery(jpCountry.code);
  getIsEnabledDelivery(sgCountry.code);
  getIsEnabledDelivery(thCountry.code);
  getIsEnabledDelivery(twCountry.code);
});

it('getIsPreorderEnabled works well', () => {
  expect(getIsPreorderEnabled(hkCountry.code)).toBe(true);
  expect(getIsPreorderEnabled(idCountry.code)).toBe(false);
  expect(getIsPreorderEnabled(jpCountry.code)).toBe(true);
  expect(getIsPreorderEnabled(sgCountry.code)).toBe(false);
  expect(getIsPreorderEnabled(thCountry.code)).toBe(false);
  expect(getIsPreorderEnabled(twCountry.code)).toBe(true);
  expect(getIsPreorderEnabled(krCountry.code)).toBe(true);
});

it('getIsShowRecommendedProducts works well', () => {
  getIsShowRecommendedProducts(hkCountry.code);
  getIsShowRecommendedProducts(idCountry.code);
  getIsShowRecommendedProducts(jpCountry.code);
  getIsShowRecommendedProducts(sgCountry.code);
  getIsShowRecommendedProducts(thCountry.code);
  getIsShowRecommendedProducts(twCountry.code);
});

it('getInicisWhiteList works well', () => {
  getOriginWhitelistInicis(krCountry.code, PaymentOption.CASH);
});

describe('using remoteConfigUtil object works well', () => {
  it('remoteConfig DeveloperMode works well', () => {
    expect(remoteConfigUtil.getDeveloperMode()).toBe(true);
  });

  it('remoteConfig IsShowNeutralColorPrice works well', () => {
    expect(remoteConfigUtil.getIsShowNeutralColorPrice()).toBe(true);
  });

  it('remoteConfig IsShowCurrency works well', () => {
    expect(remoteConfigUtil.getIsShowCurrency()).toBe(true);
  });

  it('remoteConfig getMinimumDistanceGeocoding works well', () => {
    expect(remoteConfigUtil.getMinimumDistanceGeocoding()).toBe(100);
  });

  describe('remoteConfigUtils HK works well', () => {
    it('get cash upper limit works well', () => {
      expect(
        remoteConfigUtil.getUpperLimitPayment(
          hkCountry.code,
          PaymentOption.CASH,
        ),
      ).toBe(300);
    });

    it('get cc lower limit works well', () => {
      expect(
        remoteConfigUtil.getLowerLimitPayment(
          hkCountry.code,
          PaymentOption.CREDIT_CARD,
        ),
      ).toBe(1);
    });

    it('get enabled cash works well', () => {
      expect(
        remoteConfigUtil.getEnablePayment(hkCountry.code, PaymentOption.CASH),
      ).toBe(false);
    });

    it('get enabled cc works well', () => {
      expect(
        remoteConfigUtil.getEnablePayment(
          hkCountry.code,
          PaymentOption.CREDIT_CARD,
        ),
      ).toBe(false);
    });

    it('getExrateFlashPoint works well', () => {
      expect(remoteConfigUtil.getExrateFlashPoint(hkCountry)).toBe(5000);
    });

    it('getDefaultPickupTimeAddVar works well ', () => {
      expect(remoteConfigUtil.getDefaultPickupTimeAddVar(hkCountry.code)).toBe(
        0,
      );
    });

    it('get enabled HK_ADYEN_ALIPAYHK works well', () => {
      expect(
        remoteConfigUtil.getEnablePayment(
          hkCountry.code,
          PaymentOption.HK_ADYEN_ALIPAYHK,
        ),
      ).toBe(false);
    });

    it('get upper limit HK_ADYEN_ALIPAYHK works well', () => {
      expect(
        remoteConfigUtil.getUpperLimitPayment(
          hkCountry.code,
          PaymentOption.HK_ADYEN_ALIPAYHK,
        ),
      ).toBe(1000000);
    });

    it('get lower limit HK_ADYEN_ALIPAYHK works well', () => {
      expect(
        remoteConfigUtil.getLowerLimitPayment(
          hkCountry.code,
          PaymentOption.HK_ADYEN_ALIPAYHK,
        ),
      ).toBe(1);
    });

    it('get enabled HK_ADYEN_APPLEPAY works well', () => {
      expect(
        remoteConfigUtil.getEnablePayment(
          hkCountry.code,
          PaymentOption.HK_ADYEN_APPLEPAY,
        ),
      ).toBe(false);
    });

    it('get upper limit HK_ADYEN_APPLEPAY works well', () => {
      expect(
        remoteConfigUtil.getUpperLimitPayment(
          hkCountry.code,
          PaymentOption.HK_ADYEN_APPLEPAY,
        ),
      ).toBe(100000);
    });

    it('get lower limit HK_ADYEN_APPLEPAY works well', () => {
      expect(
        remoteConfigUtil.getLowerLimitPayment(
          hkCountry.code,
          PaymentOption.HK_ADYEN_APPLEPAY,
        ),
      ).toBe(1);
    });

    it('get enabled HK_ADYEN_WECHATPAY works well', () => {
      expect(
        remoteConfigUtil.getEnablePayment(
          hkCountry.code,
          PaymentOption.HK_ADYEN_WECHATPAY,
        ),
      ).toBe(true);
    });

    it('get upper limit HK_ADYEN_WECHATPAY works well', () => {
      expect(
        remoteConfigUtil.getUpperLimitPayment(
          hkCountry.code,
          PaymentOption.HK_ADYEN_WECHATPAY,
        ),
      ).toBe(10000000);
    });

    it('get lower limit HK_ADYEN_WECHATPAY works well', () => {
      expect(
        remoteConfigUtil.getLowerLimitPayment(
          hkCountry.code,
          PaymentOption.HK_ADYEN_WECHATPAY,
        ),
      ).toBe(1);
    });
  });

  it('get enabled HK_HSBC_PAYME works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        hkCountry.code,
        PaymentOption.HK_HSBC_PAYME,
      ),
    ).toBe(false);
  });

  it('get upper limit HK_HSBC_PAYME works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        hkCountry.code,
        PaymentOption.HK_HSBC_PAYME,
      ),
    ).toBe(10000000);
  });

  it('get lower limit HK_HSBC_PAYME works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        hkCountry.code,
        PaymentOption.HK_HSBC_PAYME,
      ),
    ).toBe(1);
  });

  it('get enabled HK_ADYEN_PAYWITHGOOGLE works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        hkCountry.code,
        PaymentOption.HK_ADYEN_PAYWITHGOOGLE,
      ),
    ).toBe(false);
  });

  it('get upper limit HK_ADYEN_PAYWITHGOOGLE works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        hkCountry.code,
        PaymentOption.HK_ADYEN_PAYWITHGOOGLE,
      ),
    ).toBe(10000);
  });

  it('get lower limit HK_ADYEN_PAYWITHGOOGLE works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        hkCountry.code,
        PaymentOption.HK_ADYEN_PAYWITHGOOGLE,
      ),
    ).toBe(1);
  });
});

describe('remoteConfigUtils ID works well', () => {
  it('get cash upper limit works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(idCountry.code, PaymentOption.CASH),
    ).toBe(1234);
  });

  it('get cc lower limit works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        idCountry.code,
        PaymentOption.CREDIT_CARD,
      ),
    ).toBe(91234);
  });

  it('get enabled cash works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(idCountry.code, PaymentOption.CASH),
    ).toBe(false);
  });

  it('get enabled cc works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        idCountry.code,
        PaymentOption.CREDIT_CARD,
      ),
    ).toBe(false);
  });

  it('getExrateFlashPoint works well', () => {
    expect(remoteConfigUtil.getExrateFlashPoint(idCountry)).toBe(1);
  });

  it('getDefaultPickupTimeAddVar works well ', () => {
    expect(remoteConfigUtil.getDefaultPickupTimeAddVar(idCountry.code)).toBe(0);
  });

  it('get enabled DANA works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(idCountry.code, PaymentOption.DANA),
    ).toBe(true);
  });

  it('get enabled GOPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(idCountry.code, PaymentOption.GOPAY),
    ).toBe(true);
  });

  it('get upper limit GOPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        idCountry.code,
        PaymentOption.GOPAY,
      ),
    ).toBe(10000000);
  });

  it('get enabled SHOPEE works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        idCountry.code,
        PaymentOption.SHOPEEPAY,
      ),
    ).toBe(true);
  });

  it('get enabled OVO works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(idCountry.code, PaymentOption.OVO),
    ).toBe(true);
  });

  it('get show recommended products works well', () => {
    expect(remoteConfigUtil.getIsShowRecommendedProducts(idCountry.code)).toBe(
      false,
    );
  });
});

describe('remoteConfigUtils JP works well', () => {
  it('get cash upper limit works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(jpCountry.code, PaymentOption.CASH),
    ).toBe(4000);
  });

  it('get enabled cash works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(jpCountry.code, PaymentOption.CASH),
    ).toBe(false);
  });

  it('get rapyd card lower limit works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        jpCountry.code,
        PaymentOption.JP_RAPYD_CARD,
      ),
    ).toBe(1);
  });

  it('get enabled rapyd card works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        jpCountry.code,
        PaymentOption.JP_RAPYD_CARD,
      ),
    ).toBe(false);
  });

  it('getExrateFlashPoint works well', () => {
    expect(remoteConfigUtil.getExrateFlashPoint(jpCountry)).toBe(5000);
  });

  it('getDefaultPickupTimeAddVar works well ', () => {
    expect(remoteConfigUtil.getDefaultPickupTimeAddVar(jpCountry.code)).toBe(0);
  });

  it('get enabled [PAYMENT_METHOD] works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        hkCountry.code,
        PaymentOption.HK_ADYEN_ALIPAYHK,
      ),
    ).toBe(false);
  });

  it('get upper limit [PAYMENT_METHOD] works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        hkCountry.code,
        PaymentOption.HK_ADYEN_ALIPAYHK,
      ),
    ).toBe(1000000);
  });

  it('get lower limit [PAYMENT_METHOD] works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        hkCountry.code,
        PaymentOption.HK_ADYEN_ALIPAYHK,
      ),
    ).toBe(1);
  });

  it('get show recommended products works well', () => {
    expect(remoteConfigUtil.getIsShowRecommendedProducts(hkCountry.code)).toBe(
      false,
    );
  });

  it('get enabled JP_ADYEN_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        jpCountry.code,
        PaymentOption.JP_ADYEN_APPLEPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit JP_ADYEN_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        jpCountry.code,
        PaymentOption.JP_ADYEN_APPLEPAY,
      ),
    ).toBe(10000);
  });

  it('get lower limit JP_ADYEN_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        jpCountry.code,
        PaymentOption.JP_ADYEN_APPLEPAY,
      ),
    ).toBe(1);
  });

  it('get enabled validation JP_ADYEN_APPLEPAY works well', () => {
    expect(remoteConfigUtil.getEnableValidationApplePay(jpCountry.code)).toBe(
      false,
    );
  });

  it('get supported network JP_ADYEN_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getSupportedNetworkApplePayUrl(jpCountry.code),
    ).toBe('default_url');
  });
});

describe('remoteConfigUtils SG works well', () => {
  it('get cash upper limit works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(sgCountry.code, PaymentOption.CASH),
    ).toBe(12345);
  });

  it('get enabled cash works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(sgCountry.code, PaymentOption.CASH),
    ).toBe(false);
  });

  it('get cc lower limit works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        sgCountry.code,
        PaymentOption.CREDIT_CARD,
      ),
    ).toBe(912345);
  });

  it('get enabled cc works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        sgCountry.code,
        PaymentOption.CREDIT_CARD,
      ),
    ).toBe(false);
  });

  it('getExrateFlashPoint works well', () => {
    expect(remoteConfigUtil.getExrateFlashPoint(sgCountry)).toBe(0.0002);
  });

  it('getDefaultPickupTimeAddVar works well ', () => {
    expect(remoteConfigUtil.getDefaultPickupTimeAddVar(sgCountry.code)).toBe(0);
  });

  it('get enabled SG_ADYEN_GRABPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        sgCountry.code,
        PaymentOption.SG_ADYEN_GRABPAY,
      ),
    ).toBe(false);
  });
  it('get enabled SG_ADYEN_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        sgCountry.code,
        PaymentOption.SG_ADYEN_APPLEPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit SG_ADYEN_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        sgCountry.code,
        PaymentOption.SG_ADYEN_APPLEPAY,
      ),
    ).toBe(100000);
  });

  it('get lower limit SG_ADYEN_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        sgCountry.code,
        PaymentOption.SG_ADYEN_APPLEPAY,
      ),
    ).toBe(1);
  });

  it('get show recommended products works well', () => {
    expect(remoteConfigUtil.getIsShowRecommendedProducts(sgCountry.code)).toBe(
      false,
    );
  });
});

describe('remoteConfigUtils KR works well', () => {
  it('get cash upper limit works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        southKoreaCountry.code,
        PaymentOption.CASH,
      ),
    ).toBe(912345678);
  });

  it('get enabled cash works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        southKoreaCountry.code,
        PaymentOption.CASH,
      ),
    ).toBe(false);
  });

  it('get rapyd card lower limit works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_RAPYD_CARD,
      ),
    ).toBe(1);
  });

  it('get enabled rapyd card works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        southKoreaCountry.code,
        PaymentOption.KR_RAPYD_CARD,
      ),
    ).toBe(false);
  });

  it('getExrateFlashPoint works well', () => {
    expect(
      remoteConfigUtil.getDefaultPickupTimeAddVar(southKoreaCountry.code),
    ).toBe(0);
  });

  it('getDefaultPickupTimeAddVar works well ', () => {
    expect(remoteConfigUtil.getDefaultPickupTimeAddVar(jpCountry.code)).toBe(0);
  });

  it('get enabled KR_RAPYD_KAKAOPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        southKoreaCountry.code,
        PaymentOption.KR_RAPYD_KAKAOPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit KR_RAPYD_KAKAOPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_RAPYD_KAKAOPAY,
      ),
    ).toBe(100000);
  });

  it('get lower limit KR_RAPYD_KAKAOPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_RAPYD_KAKAOPAY,
      ),
    ).toBe(1);
  });

  it('get enabled KR_INICIS_NAVERPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_NAVERPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit KR_INICIS_NAVERPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_NAVERPAY,
      ),
    ).toBe(100000);
  });

  it('get lower limit KR_INICIS_NAVERPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_NAVERPAY,
      ),
    ).toBe(10);
  });

  it('get origin whitelist KR_INICIS_NAVERPAY works well', () => {
    expect(
      remoteConfigUtil.getOriginWhitelistInicis(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_NAVERPAY,
      ),
    ).toBe('default_string');
  });

  it('get enabled KR_INICIS_SAMSUNGPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_SAMSUNGPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit KR_INICIS_SAMSUNGPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_SAMSUNGPAY,
      ),
    ).toBe(100000);
  });

  it('get lower limit KR_INICIS_SAMSUNGPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_SAMSUNGPAY,
      ),
    ).toBe(10);
  });

  it('get origin whitelist KR_INICIS_SAMSUNGPAY works well', () => {
    expect(
      remoteConfigUtil.getOriginWhitelistInicis(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_SAMSUNGPAY,
      ),
    ).toBe('default_string');
  });

  it('get enabled KR_INICIS_KAKAOPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_KAKAOPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit KR_INICIS_KAKAOPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_KAKAOPAY,
      ),
    ).toBe(100000);
  });

  it('get lower limit KR_INICIS_KAKAOPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_KAKAOPAY,
      ),
    ).toBe(10);
  });

  it('get origin whitelist KR_INICIS_KAKAOPAY works well', () => {
    expect(
      remoteConfigUtil.getOriginWhitelistInicis(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_KAKAOPAY,
      ),
    ).toBe('default_string');
  });

  it('get enabled KR_INICIS_CARD works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_CREDITCARD,
      ),
    ).toBe(false);
  });

  it('get origin whitelist KR_INICIS_CREDITCARD works well', () => {
    expect(
      remoteConfigUtil.getOriginWhitelistInicis(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_CREDITCARD,
      ),
    ).toBe('default_string');
  });

  it('get upper limit KR_INICIS_CREDITCARD works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_CREDITCARD,
      ),
    ).toBe(100000);
  });

  it('get lower limit KR_INICIS_CREDITCARD works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_INICIS_CREDITCARD,
      ),
    ).toBe(10);
  });

  it('get enabled KR_RAPYD_SAMSUNGPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        southKoreaCountry.code,
        PaymentOption.KR_RAPYD_SAMSUNGPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit KR_RAPYD_SAMSUNGPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_RAPYD_SAMSUNGPAY,
      ),
    ).toBe(100000);
  });

  it('get lower limit KR_RAPYD_SAMSUNGPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        southKoreaCountry.code,
        PaymentOption.KR_RAPYD_SAMSUNGPAY,
      ),
    ).toBe(1);
  });

  it('get show recommended products works well', () => {
    expect(
      remoteConfigUtil.getIsShowRecommendedProducts(southKoreaCountry.code),
    ).toBe(false);
  });
});

describe('remoteConfigUtils TH works well', () => {
  it('get cash upper limit works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(thCountry.code, PaymentOption.CASH),
    ).toBe(123456);
  });

  it('get cc lower limit works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        thCountry.code,
        PaymentOption.CREDIT_CARD,
      ),
    ).toBe(9123456);
  });

  it('get enabled cash works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(thCountry.code, PaymentOption.CASH),
    ).toBe(false);
  });

  it('get enabled cc works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        thCountry.code,
        PaymentOption.CREDIT_CARD,
      ),
    ).toBe(false);
  });

  it('getExrateFlashPoint works well', () => {
    expect(remoteConfigUtil.getExrateFlashPoint(thCountry)).toBe(78);
  });

  it('getDefaultPickupTimeAddVar works well ', () => {
    expect(remoteConfigUtil.getDefaultPickupTimeAddVar(thCountry.code)).toBe(0);
  });

  it('get enabled TH_SHOPEEPAY_SHOPEEPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        thCountry.code,
        PaymentOption.TH_SHOPEEPAY_SHOPEEPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit TH_SHOPEEPAY_SHOPEEPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        thCountry.code,
        PaymentOption.TH_SHOPEEPAY_SHOPEEPAY,
      ),
    ).toBe(100000);
  });

  it('get lower limit TH_SHOPEEPAY_SHOPEEPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        thCountry.code,
        PaymentOption.TH_SHOPEEPAY_SHOPEEPAY,
      ),
    ).toBe(0.01);
  });

  it('get enabled TH_TRUEMONEY_TRUEMONEY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        thCountry.code,
        PaymentOption.TH_TRUEMONEY_TRUEMONEY,
      ),
    ).toBe(false);
  });

  it('get upper limit TH_TRUEMONEY_TRUEMONEY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        thCountry.code,
        PaymentOption.TH_TRUEMONEY_TRUEMONEY,
      ),
    ).toBe(100000);
  });

  it('get lower limit TH_TRUEMONEY_TRUEMONEY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        thCountry.code,
        PaymentOption.TH_TRUEMONEY_TRUEMONEY,
      ),
    ).toBe(0.01);
  });

  it('get enabled TH_ADYEN_MOLPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        thCountry.code,
        PaymentOption.TH_ADYEN_MOLPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit TH_ADYEN_MOLPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        thCountry.code,
        PaymentOption.TH_ADYEN_MOLPAY,
      ),
    ).toBe(100000);
  });

  it('get lower limit TH_ADYEN_MOLPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        thCountry.code,
        PaymentOption.TH_ADYEN_MOLPAY,
      ),
    ).toBe(0.01);
  });

  it('get enabled TH_ADYEN_PAYWITHGOOGLE works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        thCountry.code,
        PaymentOption.TH_ADYEN_PAYWITHGOOGLE,
      ),
    ).toBe(false);
  });

  it('get upper limit TH_ADYEN_PAYWITHGOOGLE works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        thCountry.code,
        PaymentOption.TH_ADYEN_PAYWITHGOOGLE,
      ),
    ).toBe(10000);
  });

  it('get lower limit TH_ADYEN_PAYWITHGOOGLE works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        thCountry.code,
        PaymentOption.TH_ADYEN_PAYWITHGOOGLE,
      ),
    ).toBe(1);
  });

  it('get show recommended products works well', () => {
    expect(remoteConfigUtil.getIsShowRecommendedProducts(thCountry.code)).toBe(
      false,
    );
  });

  it('get pandago cash on delivery lower limit works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        thCountry.code,
        PaymentOption.PANDAGO_CASH_ON_DELIVERY,
      ),
    ).toBe(0.01);
  });

  it('get enable pandago cash on delivery works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        thCountry.code,
        PaymentOption.PANDAGO_CASH_ON_DELIVERY,
      ),
    ).toBe(false);
  });
});

describe('remoteConfigUtils TW works well', () => {
  it('get cash upper limit works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(twCountry.code, PaymentOption.CASH),
    ).toBe(1234567);
  });

  it('get cc lower limit works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        twCountry.code,
        PaymentOption.CREDIT_CARD,
      ),
    ).toBe(1);
  });

  it('get enabled cash works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(twCountry.code, PaymentOption.CASH),
    ).toBe(false);
  });

  it('get enabled cc works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        twCountry.code,
        PaymentOption.CREDIT_CARD,
      ),
    ).toBe(false);
  });

  it('getExrateFlashPoint works well', () => {
    expect(remoteConfigUtil.getExrateFlashPoint(twCountry)).toBe(15);
  });

  it('getDefaultPickupTimeAddVar works well ', () => {
    expect(remoteConfigUtil.getDefaultPickupTimeAddVar(twCountry.code)).toBe(
      30,
    );
  });

  it('get enabled TW_TAPPAY_JKOPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        twCountry.code,
        PaymentOption.TW_TAPPAY_JKOPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit TW_TAPPAY_JKOPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        twCountry.code,
        PaymentOption.TW_TAPPAY_JKOPAY,
      ),
    ).toBe(1000000);
  });

  it('get lower limit TW_TAPPAY_JKOPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        twCountry.code,
        PaymentOption.TW_TAPPAY_JKOPAY,
      ),
    ).toBe(1);
  });

  it('get enabled TW_TAPPAY_LINEPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        twCountry.code,
        PaymentOption.TW_TAPPAY_LINEPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit TW_TAPPAY_LINEPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        twCountry.code,
        PaymentOption.TW_TAPPAY_LINEPAY,
      ),
    ).toBe(1000000);
  });

  it('get lower limit TW_TAPPAY_LINEPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        twCountry.code,
        PaymentOption.TW_TAPPAY_LINEPAY,
      ),
    ).toBe(1);
  });
  it('get enabled TW_TAPPAY_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getEnablePayment(
        twCountry.code,
        PaymentOption.TW_TAPPAY_APPLEPAY,
      ),
    ).toBe(false);
  });

  it('get upper limit TW_TAPPAY_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getUpperLimitPayment(
        twCountry.code,
        PaymentOption.TW_TAPPAY_APPLEPAY,
      ),
    ).toBe(1000000);
  });

  it('get lower limit TW_TAPPAY_APPLEPAY works well', () => {
    expect(
      remoteConfigUtil.getLowerLimitPayment(
        twCountry.code,
        PaymentOption.TW_TAPPAY_APPLEPAY,
      ),
    ).toBe(1);
  });
});

it('default getExrateFlashPoint was ID', () => {
  expect(remoteConfigUtil.getExrateFlashPoint(unknownCountry)).toBe(
    remoteConfigUtil.getExrateFlashPoint(idCountry),
  );
});

it('getFreeShipping works well', () => {
  expect(remoteConfigUtil.getFreeShipping(hkCountry)).toBe(false);
  expect(remoteConfigUtil.getFreeShipping(idCountry)).toBe(false);
  expect(remoteConfigUtil.getFreeShipping(jpCountry)).toBe(false);
  expect(remoteConfigUtil.getFreeShipping(krCountry)).toBe(false);
  expect(remoteConfigUtil.getFreeShipping(sgCountry)).toBe(true);
  expect(remoteConfigUtil.getFreeShipping(thCountry)).toBe(false);
  expect(remoteConfigUtil.getFreeShipping(twCountry)).toBe(false);
});

it('getIsShowCleanHubBanner works well', () => {
  expect(remoteConfigUtil.getIsShowCleanHubBanner(hkCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCleanHubBanner(idCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCleanHubBanner(jpCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCleanHubBanner(krCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCleanHubBanner(sgCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCleanHubBanner(thCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCleanHubBanner(twCountry.code)).toBe(false);
});

it('getIsShowCleanHubServiceBanner works well', () => {
  expect(remoteConfigUtil.getIsShowCleanHubServiceBanner(hkCountry.code)).toBe(
    false,
  );
  expect(remoteConfigUtil.getIsShowCleanHubServiceBanner(idCountry.code)).toBe(
    false,
  );
  expect(remoteConfigUtil.getIsShowCleanHubServiceBanner(jpCountry.code)).toBe(
    false,
  );
  expect(remoteConfigUtil.getIsShowCleanHubServiceBanner(krCountry.code)).toBe(
    false,
  );
  expect(remoteConfigUtil.getIsShowCleanHubServiceBanner(sgCountry.code)).toBe(
    false,
  );
  expect(remoteConfigUtil.getIsShowCleanHubServiceBanner(thCountry.code)).toBe(
    false,
  );
  expect(remoteConfigUtil.getIsShowCleanHubServiceBanner(twCountry.code)).toBe(
    false,
  );
});

it('getIsShowCustomerInfo works well', () => {
  expect(remoteConfigUtil.getIsShowCustomerInfo(hkCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCustomerInfo(idCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCustomerInfo(jpCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCustomerInfo(krCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCustomerInfo(sgCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCustomerInfo(thCountry.code)).toBe(false);
  expect(remoteConfigUtil.getIsShowCustomerInfo(twCountry.code)).toBe(false);
});

it('getEnableZendesk works well', () => {
  expect(remoteConfigUtil.getEnableZendesk(twCountry.code)).toBe(true);
  expect(remoteConfigUtil.getEnableZendesk(sgCountry.code)).toBe(false);
});

it('getPaymentPageExpirationDuration work well', () => {
  expect(
    remoteConfigUtil.getPaymentPageExpirationDuration(
      jpCountry.code,
      PaymentOption.JP_RAPYD_CARD,
    ),
  ).toBe(3);
  expect(
    remoteConfigUtil.getPaymentPageExpirationDuration(
      krCountry.code,
      PaymentOption.KR_RAPYD_CARD,
    ),
  ).toBe(3);
  expect(
    remoteConfigUtil.getPaymentPageExpirationDuration(
      krCountry.code,
      PaymentOption.KR_RAPYD_KAKAOPAY,
    ),
  ).toBe(3);
  expect(
    remoteConfigUtil.getPaymentPageExpirationDuration(
      krCountry.code,
      PaymentOption.KR_RAPYD_SAMSUNGPAY,
    ),
  ).toBe(3);
  expect(
    remoteConfigUtil.getPaymentPageExpirationDuration(
      unknownCountry.code,
      PaymentOption.KR_RAPYD_SAMSUNGPAY,
    ),
  ).toBe(0);
});

it('getIsEnableScanBarcode works well', () => {
  expect(remoteConfigUtil.getIsEnableScanBarcode(idCountry.code)).toBe(true);
  expect(remoteConfigUtil.getIsEnableScanBarcode(sgCountry.code)).toBe(true);
  expect(remoteConfigUtil.getIsEnableScanBarcode(thCountry.code)).toBe(true);
  expect(remoteConfigUtil.getIsEnableScanBarcode(hkCountry.code)).toBe(true);
  expect(remoteConfigUtil.getIsEnableScanBarcode(jpCountry.code)).toBe(true);
  expect(remoteConfigUtil.getIsEnableScanBarcode(krCountry.code)).toBe(true);
  expect(remoteConfigUtil.getIsEnableScanBarcode(twCountry.code)).toBe(true);
});

it('getEnableRapydCheckoutToolkit work well', () => {
  expect(
    remoteConfigUtil.getEnableRapydCheckoutToolkit(
      jpCountry.code,
      PaymentOption.JP_RAPYD_CARD,
    ),
  ).toBe(false);
  expect(
    remoteConfigUtil.getEnableRapydCheckoutToolkit(
      krCountry.code,
      PaymentOption.KR_RAPYD_CARD,
    ),
  ).toBe(false);
});

it('getEnableValidationApplePay works well', () => {
  expect(remoteConfigUtil.getEnableValidationApplePay(hkCountry.code)).toBe(
    false,
  );
  expect(remoteConfigUtil.getEnableValidationApplePay(sgCountry.code)).toBe(
    false,
  );
});

it('getSupportedNetworkApplePayUrl works well', () => {
  expect(remoteConfigUtil.getSupportedNetworkApplePayUrl(hkCountry.code)).toBe(
    'default_url',
  );
  expect(remoteConfigUtil.getSupportedNetworkApplePayUrl(sgCountry.code)).toBe(
    'default_url',
  );
});

it('getCleanHubLearnMore works well', () => {
  expect(remoteConfigUtil.getCleanHubLearnMore()).toBe(true);
});

it('getShowDownloadPDF works well', () => {
  expect(remoteConfigUtil.getShowDownloadPDF(twCountry.code)).toBe(true);
});

it('getIsShowDeliveryDelayWarning works well', () => {
  expect(remoteConfigUtil.getIsShowDeliveryDelayWarning(idCountry.code)).toBe(
    true,
  );
});
