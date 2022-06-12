import {dinero} from 'dinero.js';
import {SGD, THB, HKD, JPY, KRW, Currency} from '@dinero.js/currencies';

export interface IConvertAmountToMinorCurrencyUnitProps {
  amount: number | string;
  currencyCode?: string;
}

// We made a custom object, because it's different from ISO 4217
// based on this : https://docs.adyen.com/development-resources/currency-codes
const IDR: Currency<number> = {
  code: 'IDR',
  base: 10,
  exponent: 0,
};

const TWD: Currency<number> = {
  code: 'TWD',
  base: 10,
  exponent: 0,
};

export const DINERO_AMOUNT_MAP = {
  SGD,
  THB,
  IDR,
  HKD,
  JPY,
  TWD,
  KRW,
};

const convertToDineroObject = ({
  amount: amountValue,
  currencyCode = 'SGD',
}: IConvertAmountToMinorCurrencyUnitProps) => {
  const amountVal =
    typeof amountValue === 'string' ? Number(amountValue) : amountValue;
  const dineroAmount = DINERO_AMOUNT_MAP[currencyCode];
  const factor = dineroAmount.base ** dineroAmount.exponent;
  const amount = Math.round(amountVal * factor);
  return dinero({amount, currency: dineroAmount});
};

export const convertAmountToMinorCurrencyUnit = ({
  amount,
  currencyCode = 'SGD',
}: IConvertAmountToMinorCurrencyUnitProps) => {
  const dineroObj = convertToDineroObject({amount, currencyCode});
  const dineroJSON = dineroObj.toJSON();
  return dineroJSON.amount;
};
