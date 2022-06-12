import {getFcCountry, getFcLocation} from '../locationStorage';

jest.mock('@utils/fcStorage', () => {
  return {
    fcStoreGetItem: (key: string): void => {
      key;
    },
  };
});

it('getFcCountry works well for null', async () => {
  expect(getFcCountry()).resolves.toStrictEqual(null);
});

it('getFcLocation works well for null', async () => {
  expect(getFcLocation()).resolves.toStrictEqual(null);
});
