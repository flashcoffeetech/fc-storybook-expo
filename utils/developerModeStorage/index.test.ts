import 'react-native';
import {ICountry, ILocation} from '@appTypes/location.type';
import {
  getFcDevModeCountry,
  setFcDevModeCountry,
  getFcDevModeLocation,
  setFcDevModeLocation,
  getFcDevModeEnabled,
  setFcDevModeEnabled,
  getFcDevModeWasEnabled,
  setFcDevModeWasEnabled,
} from '.';

jest.mock('@utils/fcStorage', () => {
  return {
    fcStoreGetItem: async (key: string): Promise<any> => {
      switch (key) {
        case 'dev_mode_country':
          const country: ICountry = {
            code: 'SG',
            currencies: ['SGD'],
            currency: 'SGD',
            name: 'Singapore',
            zones: ['Asia/Singapore'],
          };
          return JSON.stringify(country);
        case 'dev_mode_enable':
          return 'true';
      }
      return null;
    },
    getFcDevModeCountry: async (): Promise<ICountry> => {
      const country: ICountry = {
        code: 'SG',
        currencies: ['SGD'],
        currency: 'SGD',
        name: 'Singapore',
        zones: ['Asia/Singapore'],
      };
      return country;
    },
    setFcDevModeCountry: async (country: ICountry): Promise<void> => {
      country;
      return null;
    },
    getFcDevModeLocation: async (): Promise<ILocation> => {
      const location: ILocation = {
        latitude: 106.8,
        longitude: 23.6,
      };
      return location;
    },
    setFcDevModeLocation: async (location: ILocation): Promise<void> => {
      location;
      return null;
    },
    getFcDevModeEnabled: async (): Promise<boolean> => {
      return true;
    },
    setFcDevModeEnabled: async (enabled: boolean): Promise<void> => {
      enabled;
      return null;
    },
  };
});

it('getFcDevModeEnabled works well', () => {
  expect(getFcDevModeEnabled()).resolves.toBe(true);
});

it('setFcDevModeEnabled works well', () => {
  expect(setFcDevModeEnabled(true)).resolves.toBe(null);
});

it('getFcDevModeLocation works well', () => {
  const location: ILocation = {
    latitude: 106.8,
    longitude: 23.6,
  };
  expect(getFcDevModeLocation()).resolves.toStrictEqual(location);
});

it('setFcDevModeLocation works well', () => {
  const location: ILocation = {
    latitude: 106.8,
    longitude: 23.6,
  };
  expect(setFcDevModeLocation(location)).resolves.toBe(null);
});

it('getFcDevModeCountry works well', async () => {
  const country: ICountry = {
    code: 'SG',
    currencies: ['SGD'],
    currency: 'SGD',
    name: 'Singapore',
    zones: ['Asia/Singapore'],
  };
  expect(await getFcDevModeCountry()).toStrictEqual(country);
});

it('setFcDevModeCountry works well', () => {
  const country: ICountry = {
    code: 'SG',
    currencies: ['SGD'],
    currency: 'SGD',
    name: 'Singapore',
    zones: ['Asia/Singapore'],
  };
  expect(setFcDevModeCountry(country)).resolves.toBe(null);
});

it('getFcDevModeWasEnabled works well', async () => {
  expect(getFcDevModeWasEnabled()).resolves.toBe(true);
});

it('setFcDevModeWasEnabled works well', () => {
  expect(setFcDevModeWasEnabled(true)).resolves.toBe(null);
});
