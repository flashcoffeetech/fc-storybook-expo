import 'react-native';
import {ICountry} from '@appTypes/location.type';
import {getAPISource, getAPIPath} from '.';

jest.mock('@utils/locationStorage', () => {
  return {
    getFcCountry: async (): Promise<ICountry> => {
      const country: ICountry = {
        code: 'TH',
        currencies: ['TBH'],
        currency: 'TBH',
        name: 'Thailand',
        zones: ['Asia/Bangkok'],
      };
      return country;
    },
  };
});

it('getAPISource TH works well', async () => {
  const adyenApiSource = await getAPISource('source', 'adyen');
  expect(adyenApiSource).toBe('th-source');
  const regularApiSource = await getAPISource('reg');
  expect(regularApiSource).toBe('th-reg');
});

it('getAPIPath works well', async () => {
  const pathPageLimit = await getAPIPath('path', 1, 2);
  expect(pathPageLimit).toBe('path?page=1&limit=2');

  const justPath = await getAPIPath('path');
  expect(justPath).toBe('/path');

  const pathWithSlash = await getAPIPath('/path');
  expect(pathWithSlash).toBe('/path');
});
