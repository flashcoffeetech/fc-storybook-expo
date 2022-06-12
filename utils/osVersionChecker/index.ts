import {Platform} from 'react-native';

interface MinOSVersion {
  minAndroidVersion?: number;
  minIOSVersion?: number;
}

export const isOSVersionSupported = ({
  minAndroidVersion = 0,
  minIOSVersion = 0,
}: MinOSVersion): boolean => {
  if (Platform.OS === 'ios') {
    return parseInt(`${Platform.Version}`, 10) >= minIOSVersion;
  } else if (Platform.OS === 'android') {
    return Platform.Version >= minAndroidVersion;
  }
  return false;
};
