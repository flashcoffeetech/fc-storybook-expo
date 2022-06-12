import 'react-native';
import {getDefaultCurrentLocation, getDefaultCurrentCountry} from '.';
import {DEFAULT_LOCATION, DEFAULT_COUNTRY} from '../../constants/country.const';
import {ICountry, ILocation} from '@appTypes/location.type';

//Mocking locationStorage methods
jest.mock('@utils/locationStorage', () => {
  return {
    getFcLocation: async (): Promise<ILocation> => {
      return Promise.resolve(null);
    },
    getFcCountry: async (): Promise<ICountry> => {
      return Promise.resolve(null);
    },
    setFcLocation: async (loc: any): Promise<void> => {
      loc;
      return null;
    },
    setFcCountry: async (country: any): Promise<void> => {
      country;
      return null;
    },
  };
});

jest.mock('react-native-config', () => {
  return {
    Config: {
      CONFIG_ENV: 'dev',
    },
  };
});

it('getDefaultCurrentLocation works well for default value', async () => {
  expect(getDefaultCurrentLocation()).resolves.toStrictEqual(DEFAULT_LOCATION);
});

it('getDefaultCurrentCountry works well for default value', async () => {
  expect(getDefaultCurrentCountry()).resolves.toStrictEqual(DEFAULT_COUNTRY);
});
