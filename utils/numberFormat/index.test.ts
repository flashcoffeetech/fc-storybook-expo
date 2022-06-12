import 'react-native';

import {
  COUNTRY_INDONESIA,
  COUNTRY_INDONESIA_CURRENCY,
  COUNTRY_INDONESIA_CURRENCY_SIGN,
  COUNTRY_JAPAN,
  COUNTRY_JAPAN_CURRENCY,
  COUNTRY_JAPAN_CURRENCY_SIGN,
  COUNTRY_SINGAPORE,
  COUNTRY_SINGAPORE_CURRENCY,
  COUNTRY_SINGAPORE_CURRENCY_SIGN,
  COUNTRY_THAILAND,
  COUNTRY_THAILAND_CURRENCY,
  COUNTRY_THAILAND_CURRENCY_SIGN,
  COUNTRY_SOUTH_KOREA,
  COUNTRY_SOUTH_KOREA_CURRENCY,
  COUNTRY_SOUTH_KOREA_CURRENCY_SIGN,
  ZONE_ASIA_SEOUL,
  ZONE_ASIA_TOKYO,
  ZONE_ASIA_JAKARTA,
  ZONE_ASIA_SINGAPORE,
  ZONE_ASIA_BANGKOK,
} from '@constants/country.const';
import {
  formatToDecimal,
  formatNumber,
  formatPriceWithCurrency,
  formatPriceWithOutCurrency,
  formatPrice,
} from '@utils/numberFormat';
import {ICountry} from '@appTypes/location.type';

it('formatToDecimal works well', () => {
  expect(formatToDecimal(2.891)).toBe(2.89);
  expect(formatToDecimal(2.895)).toBe(2.9);
  expect(formatToDecimal(2.897)).toBe(2.9);
  expect(formatToDecimal(2.8)).toBe(2.8);
  expect(formatToDecimal(2)).toBe(2);
  expect(formatToDecimal()).toBe(0);
  expect(formatToDecimal(null)).toBe(0);
  expect(formatToDecimal(undefined)).toBe(0);
});

it('formatNumber works well', () => {
  expect(formatNumber(2.891)).toBe('3');
  expect(formatNumber(2.895)).toBe('3');
  expect(formatNumber(2.897)).toBe('3');
  expect(formatNumber(2.8)).toBe('3');
  expect(formatNumber(2.5)).toBe('3');
  expect(formatNumber(2.2)).toBe('2');
  expect(formatNumber(2)).toBe('2');
  expect(formatNumber(12)).toBe('12');
  expect(formatNumber(123)).toBe('123');
  expect(formatNumber(1234)).toBe('1,234');
  expect(formatNumber(12345)).toBe('12,345');
  expect(formatNumber(123456)).toBe('123,456');
  expect(formatNumber(1234567)).toBe('1,234,567');
});

it('formatPriceWithOutCurrency works well', () => {
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

  expect(formatPriceWithOutCurrency(indonesiaCountry, 9)).toBe('9');
  expect(formatPriceWithOutCurrency(indonesiaCountry, 92)).toBe('92');
  expect(formatPriceWithOutCurrency(indonesiaCountry, 900)).toBe('900');
  expect(formatPriceWithOutCurrency(indonesiaCountry, 9000)).toBe('9,000');
  expect(formatPriceWithOutCurrency(indonesiaCountry, 28000)).toBe('28,000');
  expect(formatPriceWithOutCurrency(indonesiaCountry, 287000)).toBe('287,000');
  expect(formatPriceWithOutCurrency(indonesiaCountry, 1289000)).toBe(
    '1,289,000',
  );
  expect(formatPriceWithOutCurrency(indonesiaCountry)).toBe('0');

  expect(formatPriceWithOutCurrency(singaporeCountry, 5)).toBe('5.00');
  expect(formatPriceWithOutCurrency(singaporeCountry, 5.6)).toBe('5.60');
  expect(formatPriceWithOutCurrency(singaporeCountry, 5.62)).toBe('5.62');

  expect(formatPriceWithOutCurrency(thailandCountry, 360)).toBe('360.00');

  expect(formatPriceWithOutCurrency(undefined, 9)).toBe('9');
});

it('formatPriceWithCurrency works well', () => {
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

  const japanCountry = {
    code: COUNTRY_JAPAN,
    currencies: [COUNTRY_JAPAN_CURRENCY],
    currency: COUNTRY_JAPAN_CURRENCY,
    name: 'Japan',
    zones: [ZONE_ASIA_TOKYO],
  };

  const southKoreaCountry = {
    code: COUNTRY_SOUTH_KOREA,
    currencies: [COUNTRY_SOUTH_KOREA_CURRENCY],
    currency: COUNTRY_SOUTH_KOREA_CURRENCY,
    name: 'South Korea',
    zones: [ZONE_ASIA_SEOUL],
  };

  expect(formatPriceWithCurrency(indonesiaCountry, 9)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 9`,
  );
  expect(formatPriceWithCurrency(indonesiaCountry, 92)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 92`,
  );
  expect(formatPriceWithCurrency(indonesiaCountry, 900)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 900`,
  );
  expect(formatPriceWithCurrency(indonesiaCountry, 9000)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 9,000`,
  );
  expect(formatPriceWithCurrency(indonesiaCountry, 28000)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 28,000`,
  );
  expect(formatPriceWithCurrency(indonesiaCountry, 287000)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 287,000`,
  );
  expect(formatPriceWithCurrency(indonesiaCountry, 1289000)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 1,289,000`,
  );

  expect(formatPriceWithCurrency(singaporeCountry, 5)).toBe(
    `${COUNTRY_SINGAPORE_CURRENCY_SIGN} 5.00`,
  );
  expect(formatPriceWithCurrency(singaporeCountry, 5.6)).toBe(
    `${COUNTRY_SINGAPORE_CURRENCY_SIGN} 5.60`,
  );
  expect(formatPriceWithCurrency(singaporeCountry, 5.62)).toBe(
    `${COUNTRY_SINGAPORE_CURRENCY_SIGN} 5.62`,
  );

  expect(formatPriceWithCurrency(thailandCountry, 360)).toBe(
    `${COUNTRY_THAILAND_CURRENCY_SIGN} 360.00`,
  );

  expect(formatPriceWithCurrency(undefined, 9)).toBe('9');
  expect(formatPriceWithCurrency(indonesiaCountry)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 0`,
  );

  expect(formatPriceWithCurrency(japanCountry, 9)).toBe(
    `${COUNTRY_JAPAN_CURRENCY_SIGN} 9`,
  );
  expect(formatPriceWithCurrency(japanCountry, 92)).toBe(
    `${COUNTRY_JAPAN_CURRENCY_SIGN} 92`,
  );
  expect(formatPriceWithCurrency(japanCountry, 900)).toBe(
    `${COUNTRY_JAPAN_CURRENCY_SIGN} 900`,
  );
  expect(formatPriceWithCurrency(japanCountry, 9000)).toBe(
    `${COUNTRY_JAPAN_CURRENCY_SIGN} 9,000`,
  );

  expect(formatPriceWithCurrency(southKoreaCountry, 9)).toBe(
    `${COUNTRY_SOUTH_KOREA_CURRENCY_SIGN} 9`,
  );
  expect(formatPriceWithCurrency(southKoreaCountry, 92)).toBe(
    `${COUNTRY_SOUTH_KOREA_CURRENCY_SIGN} 92`,
  );
  expect(formatPriceWithCurrency(southKoreaCountry, 900)).toBe(
    `${COUNTRY_SOUTH_KOREA_CURRENCY_SIGN} 900`,
  );
  expect(formatPriceWithCurrency(southKoreaCountry, 9000)).toBe(
    `${COUNTRY_SOUTH_KOREA_CURRENCY_SIGN} 9,000`,
  );
});

it('formatPrice works well with is_show_currency set to true', () => {
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

  const japanCountry = {
    code: COUNTRY_JAPAN,
    currencies: [COUNTRY_JAPAN_CURRENCY],
    currency: COUNTRY_JAPAN_CURRENCY,
    name: 'Japan',
    zones: [ZONE_ASIA_TOKYO],
  };

  const southKoreaCountry = {
    code: COUNTRY_SOUTH_KOREA,
    currencies: [COUNTRY_SOUTH_KOREA_CURRENCY],
    currency: COUNTRY_SOUTH_KOREA_CURRENCY,
    name: 'South Korea',
    zones: [ZONE_ASIA_SEOUL],
  };

  expect(formatPrice(indonesiaCountry, 9)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 9`,
  );
  expect(formatPrice(indonesiaCountry, 92)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 92`,
  );
  expect(formatPrice(indonesiaCountry, 900)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 900`,
  );
  expect(formatPrice(indonesiaCountry, 9000)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 9,000`,
  );
  expect(formatPrice(indonesiaCountry, 28000)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 28,000`,
  );
  expect(formatPrice(indonesiaCountry, 287000)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 287,000`,
  );
  expect(formatPrice(indonesiaCountry, 1289000)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 1,289,000`,
  );

  expect(formatPrice(singaporeCountry, 5)).toBe(
    `${COUNTRY_SINGAPORE_CURRENCY_SIGN} 5.00`,
  );
  expect(formatPrice(singaporeCountry, 5.6)).toBe(
    `${COUNTRY_SINGAPORE_CURRENCY_SIGN} 5.60`,
  );
  expect(formatPrice(singaporeCountry, 5.62)).toBe(
    `${COUNTRY_SINGAPORE_CURRENCY_SIGN} 5.62`,
  );

  expect(formatPrice(thailandCountry, 360)).toBe(
    `${COUNTRY_THAILAND_CURRENCY_SIGN} 360.00`,
  );

  expect(formatPrice(undefined, 9)).toBe('9');
  expect(formatPrice(indonesiaCountry)).toBe(
    `${COUNTRY_INDONESIA_CURRENCY_SIGN} 0`,
  );

  expect(formatPrice(japanCountry, 9)).toBe(`${COUNTRY_JAPAN_CURRENCY_SIGN} 9`);

  expect(formatPrice(japanCountry, 92)).toBe(
    `${COUNTRY_JAPAN_CURRENCY_SIGN} 92`,
  );
  expect(formatPrice(japanCountry, 900)).toBe(
    `${COUNTRY_JAPAN_CURRENCY_SIGN} 900`,
  );
  expect(formatPrice(japanCountry, 9000)).toBe(
    `${COUNTRY_JAPAN_CURRENCY_SIGN} 9,000`,
  );

  expect(formatPrice(southKoreaCountry, 9)).toBe(
    `${COUNTRY_SOUTH_KOREA_CURRENCY_SIGN} 9`,
  );
  expect(formatPrice(southKoreaCountry, 92)).toBe(
    `${COUNTRY_SOUTH_KOREA_CURRENCY_SIGN} 92`,
  );
  expect(formatPrice(southKoreaCountry, 900)).toBe(
    `${COUNTRY_SOUTH_KOREA_CURRENCY_SIGN} 900`,
  );
  expect(formatPrice(southKoreaCountry, 9000)).toBe(
    `${COUNTRY_SOUTH_KOREA_CURRENCY_SIGN} 9,000`,
  );
});
