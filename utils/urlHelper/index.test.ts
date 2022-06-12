import 'react-native';
import {getUrlAllParams} from '.';

it('getUrlAllParams works well', () => {
  const obj = {age: '13', name: 'Ali', member: 'true'};
  expect(
    getUrlAllParams('https://somedomain.com?name=Ali&age=13&member=true'),
  ).toStrictEqual(obj);
  expect(getUrlAllParams(null)).toStrictEqual(null);
});
