import {
  COUNTRY_HONG_KONG,
  COUNTRY_INDONESIA,
  COUNTRY_JAPAN,
  COUNTRY_SINGAPORE,
  COUNTRY_SOUTH_KOREA,
  COUNTRY_TAIWAN,
  COUNTRY_THAILAND,
} from '@constants/country.const';
import {getFcCountry} from '@utils/locationStorage';

type APISourceType = 'adyen' | 'regular';

export const getAPISource = async (
  source: string,
  type: APISourceType = 'regular',
): Promise<string> => {
  const currentCountry = await getFcCountry();

  const apiSource: {[key: string]: string} = {
    [COUNTRY_HONG_KONG]: `hk-${source}`,
    [COUNTRY_JAPAN]: `jp-${source}`,
    [COUNTRY_SINGAPORE]: `sg-${source}`,
    [COUNTRY_SOUTH_KOREA]: `kr-${source}`,
    [COUNTRY_THAILAND]: `th-${source}`,
    [COUNTRY_TAIWAN]: `tw-${source}`,
    [COUNTRY_SOUTH_KOREA]: `kr-${source}`,
  };

  if (type === 'adyen' && currentCountry?.code === COUNTRY_INDONESIA) {
    return null;
  }
  if (type === 'adyen' && currentCountry?.code === COUNTRY_SINGAPORE) {
    // Singapore don't have sg-adyen, but adyen
    return source;
  }
  return apiSource[currentCountry?.code] || source;
};

export const getAPIPath = (
  path: string,
  page?: number,
  limit?: number,
): string => {
  if (page && limit) {
    return (path += `?page=${page}&limit=${limit}`);
  }

  return `${path.startsWith('/') ? '' : '/'}${path}`;
};
