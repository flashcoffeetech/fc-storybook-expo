import 'react-native';

import {validateEmail} from 'utils/emailUtil';

jest.mock('react-native-config', () => {
  return {
    Config: {
      CONFIG_ENV: 'dev',
    },
  };
});

it('validateEmail works well', () => {
  expect(validateEmail('test@mailinator.com')).toBe(true);
  expect(validateEmail('test@mailinator.com ')).toBe(false);
  expect(validateEmail('test@mailinator.com7272hehe')).toBe(false);
  expect(validateEmail('test@mailinator')).toBe(false);
});
