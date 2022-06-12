import {getCountryByLocation} from '.';
import {ICountry, ILocation} from '@appTypes/location.type';

jest.mock('geolib/es/getDistance', () => {
  return (loc1: any, loc2: any): number => {
    loc1;
    loc2;
    return 200;
  };
});

jest.mock('react-native-config', () => {
  return {
    Config: {
      CONFIG_ENV: 'dev',
    },
  };
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
});
