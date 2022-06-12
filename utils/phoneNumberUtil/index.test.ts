import 'react-native';

import {getNationalNumber, getCountryCode, getCallingCode} from '.';

it('getNationalNumber works well', () => {
  expect(getNationalNumber('+65123456789')).toBe('123456789');
  expect(getNationalNumber('+1684123123')).toBe('123123');
  expect(getNationalNumber('123456789')).toBe('123456789');
  expect(getNationalNumber('')).toBe('');
});

it('getCountryCode works well', () => {
  expect(getCountryCode('+65123456789')).toBe('SG');
  expect(getCountryCode('123456789')).toBe(undefined);
  expect(getCountryCode('')).toBe(undefined);
});

it('getCallingCode works well', () => {
  expect(getCallingCode('+65123456789')).toBe('65');
  expect(getCallingCode('+1684123123')).toBe('1684');
  expect(getCallingCode('123456789')).toBe(undefined);
  expect(getCallingCode('')).toBe(undefined);
});
