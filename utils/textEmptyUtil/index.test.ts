import 'react-native';

import {displayEmptyString} from 'utils/textEmptyUtil';

it('isDisplayEmptyString works well', () => {
  expect(displayEmptyString(null)).toBe('');
  expect(displayEmptyString('')).toBe('');
  expect(displayEmptyString('availableString')).toBe('availableString ');
});
