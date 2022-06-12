import 'react-native';
// TODO Change types to @apptypes
import {getFcDevModeCountry} from '.';

jest.mock('@utils/fcStorage', () => {
  return {
    fcStoreGetItem: async (key: string): Promise<any> => {
      key;
      return null;
    },
  };
});

it('getFcDevModeCountry works well simulate return null', async () => {
  expect(await getFcDevModeCountry()).toBe(null);
});
