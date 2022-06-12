import 'react-native';
import {ICountry} from '@appTypes/location.type';
import {getAPISource} from '.';

jest.mock('@utils/locationStorage', () => {
  return {
    getFcCountry: async (): Promise<ICountry> => {
      const country: ICountry = {
        code: 'SG',
        currencies: ['SGD'],
        currency: 'SGD',
        name: 'Singapore',
        zones: ['Asia/Singapore'],
      };
      return country;
    },
  };
});

it('getAPISource SG works well', async () => {
  const adyenApiSource = await getAPISource('source', 'adyen');
  expect(adyenApiSource).toBe('source');
  const regularApiSource = await getAPISource('reg');
  expect(regularApiSource).toBe('sg-reg');
});
