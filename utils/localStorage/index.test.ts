import 'react-native';
import {
  localStorageGetAllKeys,
  localStorageGetItem,
  localStorageMultiGet,
  localStorageRemoveItem,
  localStorageSetItem,
} from '.';

it('localStorageSetItem works well', () => {
  const response = localStorageSetItem('someKey', 'someValue');
  expect(response).toEqual(undefined);
});

it('localStorageGetItem works well', () => {
  expect(localStorageGetItem('someKey')).toEqual('someValue');
});

it('localStorageRemoveItem works well', () => {
  expect(localStorageRemoveItem('someKey')).toEqual(undefined);
});

it('localStorageGetAllKeys works well', () => {
  const response = localStorageGetAllKeys();
  expect(Array.isArray(response)).toBe(true);
});

it('localStorageMultiGet works well', () => {
  const response = localStorageMultiGet(['key1', 'key2']);
  expect(Array.isArray(response)).toBe(true);
});
