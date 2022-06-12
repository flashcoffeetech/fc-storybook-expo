import {ECreditCardType} from '@appTypes/creditCardType.type';
import 'react-native';
import {
  removeLeadingSpaces,
  removeNonNumber,
  limitLength,
  addGaps,
  formatCardNumber,
  formatCardExpiry,
  formatCardCVC,
  getCardType,
} from '.';

it('removeNonNumber works well', () => {
  expect(removeNonNumber('GHG238Z78')).toBe('23878');
  expect(removeNonNumber()).toBe('');
});

it('removeLeadingSpaces works well', () => {
  expect(removeLeadingSpaces('  GHG238Z78')).toBe('GHG238Z78');
  expect(removeLeadingSpaces()).toBe('');
});

it('limitLength works well', () => {
  let empty: string;
  expect(limitLength('ABCDEF', 3)).toBe('ABC');
  expect(limitLength(empty, 3)).toBe('');
});

it('addGaps works well', () => {
  expect(addGaps('4700123456781234')).toBe('4700 1234 5678 1234');
  expect(addGaps()).toBe('');
});

it('formatCardNumber works well', () => {
  expect(formatCardNumber('4700123456781234')).toBe('4700 1234 5678 1234');
});

it('formatCardExpiry works well', () => {
  expect(formatCardExpiry('0424')).toBe('04/24');
  expect(formatCardExpiry('9')).toBe('09');
  expect(formatCardExpiry('')).toBe('');
});

it('formatCardCVC works well', () => {
  expect(formatCardCVC('3456')).toBe('3456');
  expect(formatCardCVC('34567')).toBe('3456');
});

it('getCardType works well', () => {
  // ADYEN
  expect(getCardType('5454 5454 5454 5454')).toBe(ECreditCardType.MASTER_CARD);
  expect(getCardType('4212 3456 7890 1237')).toBe(ECreditCardType.VISA);
  expect(getCardType('3700 0000 0000 002')).toBe(
    ECreditCardType.AMERICAN_EXPRESS,
  );
  expect(getCardType('6011 6011 6011 6611')).toBe(ECreditCardType.DISCOVER);
  expect(getCardType('3600 6666 3333 44')).toBe(ECreditCardType.DINERS_CLUB);
  expect(getCardType('6771 7980 2100 0008')).toBe(ECreditCardType.MAESTRO);
  expect(getCardType('3569 9900 1009 5841')).toBe(ECreditCardType.JCB);
  expect(getCardType('6250 9470 0000 0014')).toBe(ECreditCardType.UNION_PAY);

  // TAPPAY
  expect(getCardType('5451 4178 2523 0575')).toBe(ECreditCardType.MASTER_CARD);
  expect(getCardType('4242 4242 4242 4242')).toBe(ECreditCardType.VISA);
  expect(getCardType('3454 5465 4604 563')).toBe(
    ECreditCardType.AMERICAN_EXPRESS,
  );
  expect(getCardType('6234 5774 3859 4899')).toBe(ECreditCardType.UNION_PAY);
  expect(getCardType('3543 9234 8838 2426')).toBe(ECreditCardType.JCB);

  // XENDIT
  expect(getCardType('4111 1111 1111 1111')).toBe(ECreditCardType.VISA);
  expect(getCardType('5200 0000 0000 0007')).toBe(ECreditCardType.MASTER_CARD);
  expect(getCardType('3569 9600 1008 3758')).toBe(ECreditCardType.JCB);

  // UNKNOWN
  expect(getCardType('0000 0000 0000 0000')).toBe(ECreditCardType.UNKNOWN);
});
