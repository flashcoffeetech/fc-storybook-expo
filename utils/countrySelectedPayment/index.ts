import {PaymentOption, PaymentOptions} from '@appTypes/paymentMethod.type';
import {
  COUNTRY_PAYMENT_MAPPING,
  CREDITCARD_PAYMENT,
} from '@constants/country.const';
import {countrySelectedCreditCard} from '@utils/creditCard';

export const validateCountrySelectedPayment = (
  paymentOptions: PaymentOptions,
  selectedPayment: PaymentOption,
  countryCode: string,
): boolean => {
  if (!paymentOptions || !selectedPayment || !countryCode) {
    return false;
  }

  const AVAILABLE_COUNTRY_PAYMENT: PaymentOption[] =
    COUNTRY_PAYMENT_MAPPING[countryCode];
  const countrySelectedPayment =
    AVAILABLE_COUNTRY_PAYMENT.includes(selectedPayment);
  const creditcardSelectedPayment = CREDITCARD_PAYMENT[selectedPayment];

  if (creditcardSelectedPayment) {
    const creditCardOptions = paymentOptions[creditcardSelectedPayment] as any;
    const selectedCreditCard = countrySelectedCreditCard(
      creditCardOptions,
      countryCode,
    );
    return !!selectedCreditCard;
  }

  return countrySelectedPayment;
};
