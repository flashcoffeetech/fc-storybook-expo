import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

// TODO:  This logic is wrong, will always 'dev:', will need to fix it one day
const MEMORY_KEY_PREFIX =
  `@fcStorage-${Config.CONFIG_ENV}` === 'prod' ? 'prod:' : 'dev:';

// TODO: Should change concatenation into string interpolation
export const fcStoreSetItem = (key: string, value: any): void => {
  AsyncStorage.setItem(MEMORY_KEY_PREFIX + key, JSON.stringify(value));
};

// TODO: Should change concatenation into string interpolation
export const fcStoreGetItem = (key: string): Promise<any> => {
  return AsyncStorage.getItem(MEMORY_KEY_PREFIX + key);
};

// TODO: Should change concatenation into string interpolation
export const fcStoreRemoveItem = (key: string): void => {
  AsyncStorage.removeItem(MEMORY_KEY_PREFIX + key);
};
