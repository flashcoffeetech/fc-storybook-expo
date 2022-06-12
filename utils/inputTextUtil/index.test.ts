import 'react-native';

import {
  isContainsEmoji,
  isOnlyWhiteSpace,
  removeMultipleLineBreaks,
  reoderTextInput,
} from 'utils/inputTextUtil';

import {COUNTRY_JAPAN, COUNTRY_INDONESIA} from '@constants/country.const';

jest.mock('react-native-config', () => {
  return {
    Config: {
      CONFIG_ENV: 'dev',
    },
  };
});

const availableCountryCode: any = {
  code: COUNTRY_JAPAN,
};
const notAvailableCountryCode: any = {
  code: COUNTRY_INDONESIA,
};

it('isContainsEmoji works well', () => {
  expect(isContainsEmoji('😀😁')).toBe(true);
  expect(isContainsEmoji('test@mailinator.com')).toBe(false);
});

it('isOnlyWhiteSpace works well', () => {
  expect(isOnlyWhiteSpace('  ')).toBe(true);
  expect(isOnlyWhiteSpace('Flash Coffee')).toBe(false);
});

it('removeMultipleLineBreaks works well', () => {
  expect(
    removeMultipleLineBreaks(
      "\n\n\n\n\nHello \n\n\n\n\nThere \n\n\n\n\nM'lady\n\n\n\n\n",
    ),
  ).toBe("Hello \nThere \nM'lady");
});

it('isReoderTextInput works well', () => {
  expect(reoderTextInput(availableCountryCode)).toBe(true);
  expect(reoderTextInput(notAvailableCountryCode)).toBe(false);
});
