//Mocking for androidProviderUsed to be standard
import {initializeRNLocation} from '.';

//Mocking Google Play Service to check AndroidProviderUsed
jest.mock('react-native-play-services', () => {
  return {
    GooglePlayServicesStatus: {
      AVAILABLE: 'AVAILABLE',
    },
    checkPlayServicesStatus: (): string => {
      return 'UNAVAILABLE';
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
