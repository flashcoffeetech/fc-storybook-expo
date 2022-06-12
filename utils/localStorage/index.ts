import AsyncStorage from '@react-native-async-storage/async-storage';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const localStorageGetItem = (key: string): string => {
  return storage.getString(key);
};

export const localStorageSetItem = (key: string, value: any): void => {
  storage.set(key, value);
};

export const localStorageRemoveItem = (key: string): void => {
  storage.delete(key);
};

export const localStorageGetAllKeys = (): string[] => {
  return storage.getAllKeys();
};

export const localStorageMultiGet = (keys: string[]): string[][] => {
  return keys.map(key => {
    const value = storage.getString(key);
    return [key, value];
  });
};

// TODO: Remove `hasMigratedFromAsyncStorage` after a while (when everyone has migrated)
export const hasMigratedFromAsyncStorage =
  storage.getBoolean('hasMigratedFromAsyncStorage') ?? false;

// TODO: Remove `hasMigratedFromAsyncStorage` after a while (when everyone has migrated)
export async function migrateFromAsyncStorage(): Promise<void> {
  const keys = await AsyncStorage.getAllKeys();

  for (const key of keys) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value != null) {
        storage.set(key, value);
      }
    } catch (error) {
      console.error(
        `Failed to migrate key "${key}" from AsyncStorage to MMKV!`,
        error,
      );
      throw error;
    }
  }
  storage.set('hasMigratedFromAsyncStorage', true);
}
