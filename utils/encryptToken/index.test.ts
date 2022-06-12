import 'react-native';
import {encryptToken} from '.';

it('encryptCreditCard/decryptCreditCard works well', () => {
  const data: string = '{"cardNumber": "1234123412341234"}';
  const sub: string = 'customerId';
  const secret: string = 'wjQkRN8Wy2';

  const encrypted =
    'U2FsdGVkX1/G7luYQ/I7NdYHxN/zL9LD2iCKUKdw7gaLH788kEFhUO6MryTBUxt/+RzlTcLbMktXlOYM4BnbNA==';
  expect(encryptToken(data, sub, secret)).resolves.toEqual(encrypted);
});
