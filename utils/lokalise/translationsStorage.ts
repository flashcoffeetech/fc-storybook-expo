import {FC_TRANSLATIONS_VERSION} from '@constants/fcStorage.const';
import {localStorageGetItem, localStorageSetItem} from '@utils/localStorage';

export const getTranslationsVersion = (): number => {
  return parseInt(localStorageGetItem(FC_TRANSLATIONS_VERSION), 10);
};

export const setTranslationsVersion = (data: number): void => {
  return localStorageSetItem(FC_TRANSLATIONS_VERSION, data);
};
