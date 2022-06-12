//Mocking for ios
import {initializeRNLocation} from '.';

jest.mock('react-native', () => {
  return {
    Platform: {
      OS: 'ios',
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

it('initializeRNLocation works well for iOS', async () => {
  initializeRNLocation();
});
