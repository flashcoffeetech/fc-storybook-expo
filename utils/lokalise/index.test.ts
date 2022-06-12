import 'react-native';
import {
  addResourcesToi18n,
  downloadForAndroid,
  downloadForIos,
  isTranslationExist,
} from './index';

it('downloadForAndroid ', async () => {
  await expect(downloadForAndroid('http://foo.com')).toEqual(undefined);
});

it('downloadForIos ', async () => {
  await expect(downloadForIos('http://foo.com')).toEqual(undefined);
});

it('isTranslationExist ', async () => {
  const response = await isTranslationExist();
  await expect(response).toEqual(true);
});

it('addResourcesToi18n should work well ', async () => {
  const response = await addResourcesToi18n();
  await expect(response).toEqual(undefined);
});
