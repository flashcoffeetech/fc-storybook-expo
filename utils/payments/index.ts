import {ECreditCardType} from '@appTypes/creditCardType.type';
import {PaymentOption} from '@appTypes/paymentMethod.type';
import {assets} from '@assets/assets';
import {PAYMENT_LOGO_HK} from '@configs/hongkong/payments/paymentLogo.config';
import {PAYMENT_LOGO_ID} from '@configs/indonesia/payments/paymentLogo.config';
import {PAYMENT_LOGO_JP} from '@configs/japan/payments/paymentLogo.config';
import {PAYMENT_LOGO_KR} from '@configs/southKorea/payments/paymentLogo.config';
import {PAYMENT_LOGO_SG} from '@configs/singapore/payments/paymentLogo.config';
import {PAYMENT_LOGO_TW} from '@configs/taiwan/payments/paymentLogo.config';
import {PAYMENT_LOGO_TH} from '@configs/thailand/payments/paymentLogo.config';
import {COUNTRY_PAYMENT_MAPPING} from '@constants/country.const';
import {getCardLogo} from '@utils/creditCardLogo';
import {Platform} from 'react-native';
import {
  paymentMethodForAndroidOnly,
  paymentMethodForIOSOnly,
} from '@configs/payments/paymentMethodPlatform.config';

interface ILogoParams {
  cardBrand?: ECreditCardType;
}

export const isDefaultPaymentAvailableInCountry = (
  currentCountry: string,
  defaultPayment: PaymentOption,
): Boolean => {
  const availablePayments = COUNTRY_PAYMENT_MAPPING[currentCountry];
  if (!availablePayments) {
    return false;
  }
  return availablePayments.includes(defaultPayment);
};

export const getLogo = (
  paymentOption: PaymentOption | string,
  params?: ILogoParams,
) => {
  const paymentLogo = {
    [PaymentOption.CASH]: assets.logo.cash,
    [PaymentOption.PANDAGO_CASH_ON_DELIVERY]: assets.logo.cash,
    [PaymentOption.CREDIT_CARD]: params?.cardBrand
      ? getCardLogo(params.cardBrand)
      : undefined,
    [PaymentOption.FlashPoint]: assets.logo.flash,
    ...PAYMENT_LOGO_HK,
    ...PAYMENT_LOGO_ID,
    ...PAYMENT_LOGO_SG,
    ...PAYMENT_LOGO_JP,
    ...PAYMENT_LOGO_KR,
    ...PAYMENT_LOGO_TH,
    ...PAYMENT_LOGO_TW,
  };
  return paymentLogo[paymentOption] || assets.logo.flash;
};

export const isPaymentMethodAvailableForPlatform = (
  paymentMethod: PaymentOption,
) => {
  const platform = Platform.OS;
  if (
    platform === 'ios' &&
    paymentMethodForAndroidOnly.includes(paymentMethod)
  ) {
    return false;
  }

  if (
    platform === 'android' &&
    paymentMethodForIOSOnly.includes(paymentMethod)
  ) {
    return false;
  }

  return true;
};
