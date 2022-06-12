import 'react-native';
import {ICountry} from '@appTypes/location.type';
import {getAPISource} from '.';

jest.mock('@utils/locationStorage', () => {
  return {
    getFcCountry: async (): Promise<ICountry> => {
      const country: ICountry = {
        code: null,
        currencies: ['TST'],
        currency: 'TST',
        name: 'Test',
        zones: ['Other/Test'],
      };
      return country;
    },
  };
});

it('getAPISource works well to return source', async () => {
  const APISourceReturnsSource = await getAPISource('source', 'adyen');
  expect(APISourceReturnsSource).toBe('source');
});
