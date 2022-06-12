import 'react-native';
import {checkIfFirstLaunch} from '.';

jest.mock('@react-native-async-storage/async-storage', () => {
  return {
    setItem: (key: string, value: any): void => {
      key;
      value;
    },
    getItem: (key: string): Promise<any> => {
      key;
      return null;
    },
  };
});

it('checkIfFirstLaunch works well', async () => {
  checkIfFirstLaunch();
});
