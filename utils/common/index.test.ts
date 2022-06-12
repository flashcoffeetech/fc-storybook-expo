import 'react-native';

import {
  removeUndefinedAttributes,
  replaceAllDuplicateLineBreaks,
} from 'utils/common';

it('removeUndefinedAttributes works well', () => {
  expect(
    removeUndefinedAttributes({
      color: undefined,
      fontSize: 12,
    }),
  ).toStrictEqual({
    fontSize: 12,
  });
  expect(
    removeUndefinedAttributes({
      color: 'red',
      fontSize: 12,
    }),
  ).toStrictEqual({
    color: 'red',
    fontSize: 12,
  });
});

it('replaceAll works well', () => {
  expect(replaceAllDuplicateLineBreaks('Test \\nUtil')).toStrictEqual(
    'Test \nUtil',
  );
  expect(replaceAllDuplicateLineBreaks('Test \\n\\nUtil')).toStrictEqual(
    'Test \n\nUtil',
  );
});
