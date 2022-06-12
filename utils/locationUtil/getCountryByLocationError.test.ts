import {getCountryByLocation} from '.';
import {ILocation} from '@appTypes/location.type';

//Mocking getDistance to test for Error by returning null
jest.mock('geolib/es/getDistance', () => {
  return (loc1: any, loc2: any): number => {
    loc1;
    loc2;
    return null;
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
  expect(getCountryByLocation(indonesiaLocation)).resolves.toStrictEqual(Error);
});
