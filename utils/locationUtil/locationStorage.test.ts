import 'react-native';
import {ICountry, ILocation} from '@appTypes/location.type';
import {
  getFcCountry,
  setFcCountry,
  getFcLocation,
  setFcLocation,
} from '../locationStorage';

jest.mock('@utils/fcStorage', () => {
  return {
    fcStoreSetItem: (key: string, value: any): void => {
      key;
      value;
    },
    fcStoreRemoveItem: (key: string): void => {
      key;
    },
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
  };
});

it('getFcCountry works well', async () => {
  await getFcCountry();
});

it('setFcCountry works well', () => {
  const someCountry: ICountry = {
    code: 'ID',
    currencies: ['IDR'],
    currency: 'IDR',
    name: 'Indonesia',
    zones: ['Asia/Jakarta'],
  };
  setFcCountry(someCountry);
});

it('getFcLocation works well', async () => {
  await getFcLocation();
});

it('setFcLocation works well', () => {
  const someLocation: ILocation = {
    accuracy: 603,
    altitude: 0,
    altitudeAccuracy: 0,
    course: 0,
    latitude: -6.2276672,
    longitude: 106.8073733,
    speed: 0,
    timestamp: 1610532312900,
  };
  setFcLocation(someLocation);
});
