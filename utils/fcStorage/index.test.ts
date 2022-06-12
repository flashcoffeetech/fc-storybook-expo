import 'react-native';
import {fcStoreSetItem, fcStoreGetItem, fcStoreRemoveItem} from '.';

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    setItem: (key: string, value: any): void => {
      key;
      value;
    },
    getItem: (key: string): Promise<any> => {
      key;
      return Promise.resolve('somevalue');
    },
    removeItem: (key: string): void => {
      key;
    },
  };
});

it('fcStoreSetItem works well', () => {
  fcStoreSetItem('someKey', 'someValue');
});

it('fcStoreGetItem works well', () => {
  expect(fcStoreGetItem('key')).resolves.toBe('somevalue');
});

it('fcStoreRemoveItem works well', () => {
  fcStoreRemoveItem('key');
});
