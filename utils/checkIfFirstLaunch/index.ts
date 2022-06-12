import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  HAS_LAUNCHED,
  HAS_LAUNCHED_STATUS_TRUE,
} from '@constants/environment.const';

const setAppLaunched = () => {
  AsyncStorage.setItem(HAS_LAUNCHED, HAS_LAUNCHED_STATUS_TRUE);
};

export const checkIfFirstLaunch = async () => {
  try {
    const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
    if (hasLaunched === null) {
      setAppLaunched();
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
