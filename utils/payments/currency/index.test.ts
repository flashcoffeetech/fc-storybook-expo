import 'react-native';
import {
  convertAmountToMinorCurrencyUnit,
  IConvertAmountToMinorCurrencyUnitProps,
} from './';

const getDineroAmountByCurrencyCode = (
  amount: number,
  currencyCode: string,
) => {
  const options: IConvertAmountToMinorCurrencyUnitProps = {
    amount,
    currencyCode,
  };
  return convertAmountToMinorCurrencyUnit(options);
};

it('convertAmountToMinorCurrencyUnit for SGD', () => {
  const amount = getDineroAmountByCurrencyCode(1.99, 'SGD');
  expect(amount).toBe(199);
});

it('convertAmountToMinorCurrencyUnit for IDR', () => {
  const amount = getDineroAmountByCurrencyCode(1000, 'IDR');
  expect(amount).toBe(1000);
});

it('convertAmountToMinorCurrencyUnit for JPY', () => {
  const amount = getDineroAmountByCurrencyCode(10000, 'JPY');
  expect(amount).toBe(10000);
});

it('convertAmountToMinorCurrencyUnit for THB', () => {
  const amount = getDineroAmountByCurrencyCode(40, 'THB');
  expect(amount).toBe(4000);
});

it('convertAmountToMinorCurrencyUnit for HKD', () => {
  const amount = getDineroAmountByCurrencyCode(100, 'HKD');
  expect(amount).toBe(10000);
});

it('convertAmountToMinorCurrencyUnit for TWD', () => {
  const amount = getDineroAmountByCurrencyCode(10, 'TWD');
  expect(amount).toBe(10);
});
