import 'react-native';
import {getBrowserInfo} from '.';

jest.mock('react-native-device-info', () => {
  return {
    getUserAgent: () => {
      return 'FlashCoffee';
    },
  };
});

it('getBrowserInfo works well', async () => {
  expect(await getBrowserInfo()).toEqual({
    acceptHeader:
      'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    userAgent: 'FlashCoffee',
  });
});
