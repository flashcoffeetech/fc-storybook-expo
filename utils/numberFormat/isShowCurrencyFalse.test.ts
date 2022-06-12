import 'react-native';

import {
  COUNTRY_INDONESIA,
  COUNTRY_INDONESIA_CURRENCY,
  COUNTRY_SINGAPORE,
  COUNTRY_SINGAPORE_CURRENCY,
  COUNTRY_THAILAND,
  COUNTRY_THAILAND_CURRENCY,
  ZONE_ASIA_JAKARTA,
  ZONE_ASIA_SINGAPORE,
  ZONE_ASIA_BANGKOK,
} from '@constants/country.const';
import {formatPrice} from '@utils/numberFormat';
import {ICountry} from '@appTypes/location.type';

jest.mock('@utils/remoteConfig', () => {
  return {
    getIsShowCurrency: (): boolean => {
      return false;
    },
  };
});

it('formatPrice works well with is_show_currency set to false', () => {
  const indonesiaCountry: ICountry = {
    code: COUNTRY_INDONESIA,
    currencies: [COUNTRY_INDONESIA_CURRENCY],
    currency: COUNTRY_INDONESIA_CURRENCY,
    name: 'Indonesia',
    zones: [ZONE_ASIA_JAKARTA],
  };

  const singaporeCountry: ICountry = {
    code: COUNTRY_SINGAPORE,
    currencies: [COUNTRY_SINGAPORE_CURRENCY],
    currency: COUNTRY_SINGAPORE_CURRENCY,
    name: 'Singapore',
    zones: [ZONE_ASIA_SINGAPORE],
  };

  const thailandCountry: ICountry = {
    code: COUNTRY_THAILAND,
    currencies: [COUNTRY_THAILAND_CURRENCY],
    currency: COUNTRY_THAILAND_CURRENCY,
    name: 'Thailand',
    zones: [ZONE_ASIA_BANGKOK],
  };

  expect(formatPrice(indonesiaCountry, 9)).toBe('9');
  expect(formatPrice(indonesiaCountry, 92)).toBe('92');
  expect(formatPrice(indonesiaCountry, 900)).toBe('900');
  expect(formatPrice(indonesiaCountry, 9000)).toBe('9,000');
  expect(formatPrice(indonesiaCountry, 28000)).toBe('28,000');
  expect(formatPrice(indonesiaCountry, 287000)).toBe('287,000');
  expect(formatPrice(indonesiaCountry, 1289000)).toBe('1,289,000');
  expect(formatPrice(indonesiaCountry)).toBe('0');

  expect(formatPrice(singaporeCountry, 5)).toBe('5.00');
  expect(formatPrice(singaporeCountry, 5.6)).toBe('5.60');
  expect(formatPrice(singaporeCountry, 5.62)).toBe('5.62');

  expect(formatPrice(thailandCountry, 360)).toBe('360.00');

  expect(formatPrice(undefined, 9)).toBe('9');
});
