import numeral from 'numeral';

import {ICountry} from '@appTypes/location.type';
import {
  COUNTRY_INDONESIA,
  CURRENCY_MAP,
  COUNTRY_SOUTH_KOREA,
  COUNTRY_JAPAN,
} from '@constants/country.const';
import {getIsShowCurrency} from '@utils/remoteConfig';

export const formatToDecimal = (value: number): number => {
  const number = value || 0;
  return parseFloat(number.toFixed(2));
};

export const formatNumber = (value: number): string => {
  return numeral(value).format('0,0');
};

export const formatPriceWithOutCurrency = (
  currentCountry: ICountry,
  value: number = 0,
): string => {
  const isIndonesia = currentCountry?.code === COUNTRY_INDONESIA;
  return !currentCountry || isIndonesia
    ? formatNumber(value)
    : value.toFixed(2);
};

export const formatPriceWithCurrency = (
  currentCountry: ICountry,
  value: number = 0,
): string => {
  if (currentCountry) {
    const currencySign = CURRENCY_MAP[currentCountry?.code];
    switch (currentCountry?.code) {
      case COUNTRY_INDONESIA:
      case COUNTRY_JAPAN:
      case COUNTRY_SOUTH_KOREA:
        return `${currencySign} ${formatNumber(value)}`;
      default:
        return `${currencySign} ${value?.toFixed(2)}`;
    }
  } else {
    return `${formatNumber(value)}`;
  }
};

export const formatPrice = (
  currentCountry: ICountry,
  value: number = 0,
): string => {
  const isShowCurrency = getIsShowCurrency();
  if (isShowCurrency) {
    return formatPriceWithCurrency(currentCountry, value);
  } else {
    return formatPriceWithOutCurrency(currentCountry, value);
  }
};
