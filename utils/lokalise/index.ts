import {Platform} from 'react-native';
import {unzip} from 'react-native-zip-archive';
import ReactNativeBlobUtil from 'react-native-blob-util';
import i18next from 'i18next';
import {LIST_AVAILABLE_LANG} from '@constants/supportedLanguage.const';

const IS_ANDROID = Platform.OS === 'android';

const path = IS_ANDROID
  ? ReactNativeBlobUtil.fs.dirs.DownloadDir + '/translations/'
  : ReactNativeBlobUtil.fs.dirs.DocumentDir + '/translations/';

const zipPath = path + 'Consumer_App-locale.zip';

export const downloadForAndroid = (url: string): Promise<void> => {
  return ReactNativeBlobUtil.config({
    fileCache: true,
    addAndroidDownloads: {
      path: zipPath,
      mime: 'application/zip',
      useDownloadManager: true,
      title: 'Consumer_App-locale',
    },
  })
    .fetch('GET', url)
    .then(() => unZip());
};
export const downloadForIos = (url: string): Promise<void> => {
  return ReactNativeBlobUtil.config({
    fileCache: true,
    overwrite: true,
    path: zipPath,
  })
    .fetch('GET', url)
    .then(() => unZip());
};

const unZip = (): Promise<void> => {
  return unzip(zipPath, path).then(() => {
    addResourcesToi18n();
    if (isTranslationZipExist) {
      ReactNativeBlobUtil.fs.unlink(zipPath);
    }
  });
};

export const addResourcesToi18n = async (): Promise<void> => {
  const ns = 'translation';
  for (const lang of LIST_AVAILABLE_LANG) {
    const key = lang.key;
    const language = await fetchFileFromAssets(key);
    i18next.addResourceBundle(key, ns, language, false, true);
  }
  i18next.changeLanguage(i18next.language);
};

const fetchFileFromAssets: any = async (key: string) => {
  const jsonPath = `${path}locale/${key}.json`;
  const response = await ReactNativeBlobUtil.fs.readFile(jsonPath, 'utf8');
  return response ? JSON.parse(response) : null;
};

export const isTranslationExist = async (): Promise<boolean> => {
  return ReactNativeBlobUtil.fs.exists(path);
};

const isTranslationZipExist = async (): Promise<boolean> => {
  return ReactNativeBlobUtil.fs.exists(zipPath);
};
