import 'react-native';
import {ICountry} from '@appTypes/location.type';
import {getAPISource} from '.';

jest.mock('@utils/locationStorage', () => {
  return {
    getFcCountry: async (): Promise<ICountry> => {
      const country: ICountry = {
        code: 'ID',
        currencies: ['IDR'],
        currency: 'IDR',
        name: 'Indonesia',
        zones: ['Asia/Jakarta'],
      };
      return country;
    },
  };
});

it('getAPISource works well to return null', async () => {
  const adyenAPISource = await getAPISource('source', 'adyen');
  expect(adyenAPISource).toBe(null);
});
