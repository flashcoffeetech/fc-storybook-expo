import 'react-native';
import {ICountry, IGeocodingObject, ILocation} from '@appTypes/location.type';
import {IStore} from '@appTypes/store.type';
import {
  initializeRNLocation,
  requestPermissionRNLocation,
  getDefaultCurrentLocation,
  getDefaultCurrentCountry,
  validateAvailableCountry,
  getCountryByLocation,
  openMap,
  getFormalAddress,
  getAddressName,
  getDefaultCountryLocation,
  getStoreDistance,
} from '.';
import {DEFAULT_COUNTRY} from '../../constants/country.const';

//Mocking Google Play Service to check AndroidProviderUsed
jest.mock('react-native-play-services', () => {
  return {
    GooglePlayServicesStatus: {
      AVAILABLE: 'AVAILABLE',
    },
    checkPlayServicesStatus: (): string => {
      return 'AVAILABLE';
    },
  };
});

jest.mock('@utils/fcStorage', () => {
  return {
    fcStoreGetItem: async (key: string): Promise<any> => {
      switch (key) {
        case 'country':
          const country: ICountry = {
            code: 'SG',
            currencies: ['SGD'],
            currency: 'SGD',
            name: 'Singapore',
            zones: ['Asia/Singapore'],
          };
          return JSON.stringify(country);
        case 'location':
          const location: ILocation = {
            latitude: 23.6,
            longitude: 106.891223,
          };
          return JSON.stringify(location);
        case 'dev_mode_enable':
          return 'true';
      }
      return null;
    },
    fcStoreSetItem: async (key: any, data: any): Promise<any> => {
      key;
      data;
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

jest.mock('react-native-config', () => {
  return {
    Config: {
      CONFIG_ENV: 'dev',
    },
  };
});

it('initializeRNLocation works well', async () => {
  initializeRNLocation();
});

it('requestPermissionRNLocation works well', () => {
  expect(requestPermissionRNLocation()).resolves.toBe(true);
});

it('getDefaultCurrentLocation works well', async () => {
  expect(getDefaultCurrentLocation()).resolves.toStrictEqual('test value');
});

it('getDefaultCurrentCountry works well', async () => {
  expect(getDefaultCurrentCountry()).resolves.toStrictEqual('test country');
});

it('validateAvailableCountry works well', async () => {
  const indonesiaCountry: ICountry = {
    code: 'ID',
    name: 'Indonesia',
    zones: ['Asia/Jakarta'],
    currency: 'IDR',
    currencies: ['IDR'],
  };
  expect(validateAvailableCountry(indonesiaCountry)).resolves.toStrictEqual({});

  const singaporeCountry: ICountry = {
    code: 'SG',
    name: 'Singapore',
    zones: ['Asia/Singapore'],
    currency: 'SGD',
    currencies: ['SGD'],
  };
  expect(validateAvailableCountry(singaporeCountry)).resolves.toStrictEqual({});

  const nullCountry: ICountry = {
    code: null,
    name: null,
    zones: null,
    currency: null,
    currencies: null,
  };
  expect(validateAvailableCountry(nullCountry)).resolves.toStrictEqual(
    DEFAULT_COUNTRY,
  );
});

it('getCountryByLocation works well', async () => {
  const indonesiaLocation: ILocation = {
    latitude: -6.2276672,
    longitude: 106.8073733,
  };
  const indonesiaCountry: ICountry = {
    code: 'ID',
    name: 'Indonesia',
    zones: ['Asia/Jakarta'],
    currency: 'IDR',
    currencies: ['IDR'],
  };
  expect(getCountryByLocation(indonesiaLocation)).resolves.toStrictEqual(
    indonesiaCountry,
  );

  const singaporeLocation: ILocation = {
    latitude: 1.29027,
    longitude: 103.851959,
  };

  const singaporeCountry: ICountry = {
    code: 'SG',
    name: 'Singapore',
    zones: ['Asia/Singapore'],
    currency: 'SGD',
    currencies: ['SGD'],
  };

  expect(getCountryByLocation(singaporeLocation)).resolves.toStrictEqual(
    singaporeCountry,
  );

  const errorLocation: ILocation = {
    latitude: NaN,
    longitude: NaN,
  };

  getCountryByLocation(errorLocation);
});

it('openMap works well', () => {
  openMap(62.0, 106.8);
});

it('getFormalAddress works well', async () => {
  const testLocation: IGeocodingObject[] = [
    {
      distance: null,
      position: null,
      feature: null,
      streetName: 'cool',
      streetNumber: '123',
      formattedAddress: '123 cool street',
      postalCode: '745',
      locality: null,
      country: null,
      countryCode: null,
      adminArea: null,
      subAdminArea: null,
      subLocality: null,
    },
  ];
  expect(getFormalAddress(testLocation)).resolves.toStrictEqual(
    '123 cool street',
  );
});

it('getAddressName works well', async () => {
  const testLocation: IGeocodingObject[] = [
    {
      distance: null,
      position: null,
      feature: 'test plaza',
      streetName: 'cool',
      streetNumber: '123',
      formattedAddress: '123 cool street',
      postalCode: '745',
      locality: null,
      country: null,
      countryCode: null,
      adminArea: null,
      subAdminArea: null,
      subLocality: null,
    },
  ];
  const testLocation2: IGeocodingObject[] = [
    {
      distance: null,
      position: null,
      feature: null,
      streetName: 'cool',
      streetNumber: '123',
      formattedAddress: '123 cool street',
      postalCode: '745',
      locality: null,
      country: null,
      countryCode: null,
      adminArea: null,
      subAdminArea: null,
      subLocality: null,
    },
  ];
  const testLocation3: IGeocodingObject[] = [
    {
      distance: null,
      position: null,
      feature: null,
      streetName: null,
      streetNumber: null,
      formattedAddress: '123 cool street',
      postalCode: '745',
      locality: 'Jakarta',
      country: null,
      countryCode: null,
      adminArea: null,
      subAdminArea: null,
      subLocality: null,
    },
  ];
  const testLocation4: IGeocodingObject[] = [
    {
      distance: null,
      position: null,
      feature: null,
      streetName: null,
      streetNumber: null,
      formattedAddress: '123 cool street',
      postalCode: '745',
      locality: null,
      country: null,
      countryCode: null,
      adminArea: null,
      subAdminArea: null,
      subLocality: 'Singapore',
    },
  ];
  const testLocation5: IGeocodingObject[] = [
    {
      distance: null,
      position: null,
      feature: null,
      streetName: null,
      streetNumber: null,
      formattedAddress: '123 cool street',
      postalCode: '745',
      locality: null,
      country: null,
      countryCode: null,
      adminArea: null,
      subAdminArea: 'TW',
      subLocality: null,
    },
  ];
  expect(getAddressName(testLocation)).resolves.toStrictEqual('test plaza');
  expect(getAddressName(testLocation2)).resolves.toStrictEqual('cool 123');
  expect(getAddressName(testLocation3)).resolves.toStrictEqual('Jakarta');
  expect(getAddressName(testLocation4)).resolves.toStrictEqual('Singapore');
  expect(getAddressName(testLocation5)).resolves.toStrictEqual('TW');
});

it('getDefaultCountryLocation works well', () => {
  const singaporeLocation: ILocation = {
    latitude: 1.2788901,
    longitude: 103.848452,
  };

  const receivedLocation: ILocation = {
    latitude: getDefaultCountryLocation('SG').latitude,
    longitude: getDefaultCountryLocation('SG').longitude,
  };

  expect(receivedLocation).toStrictEqual(singaporeLocation);
});

it('getStoreDistance works well', async () => {
  const currentLocation: ILocation = {
    latitude: 1.29027,
    longitude: 103.851959,
  };
  const store: IStore = {
    latitude: 1.33486,
    longitude: 103.962,
    id: '',
    storehubId: '',
    storeName: '',
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    countryCode: '',
    postCode: '',
    isNearest: false,
    distance: {
      raw: 0,
      formatted: '',
    },
    isOpen: false,
    openTime: '',
    closeTime: '',
    timezone: '',
    isActive: false,
    storeTime: [],
  };
  expect(getStoreDistance(currentLocation, store).formatted).toStrictEqual(
    '13.21km',
  );
});
