import 'react-native';
import {removeFcSelectedDeliveryAddress} from '.';

jest.mock('@utils/fcStorage', () => {
  return {
    removeFcSelectedDeliveryAddress: async (): Promise<void> => {
      return null;
    },
  };
});

it('setFcDevModeWasEnabled works well', () => {
  expect(removeFcSelectedDeliveryAddress()).resolves.toBe(null);
});
