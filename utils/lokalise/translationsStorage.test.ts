import {
  getTranslationsVersion,
  setTranslationsVersion,
} from './translationsStorage';

jest.mock('@utils/localStorage', () => {
  return {
    localStorageGetItem: (): string => {
      return '7';
    },
    localStorageSetItem: (data: number): void => {
      data;
      return undefined;
    },
  };
});

it('setTranslationsVersion works well', () => {
  const response = setTranslationsVersion(9);
  expect(response).toEqual(undefined);
});

it('getTranslationsVersion works well', () => {
  const response = getTranslationsVersion();
  expect(response).toEqual(7);
});
