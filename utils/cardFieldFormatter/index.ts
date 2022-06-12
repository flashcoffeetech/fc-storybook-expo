import valid from 'card-validator';

import {ECreditCardType} from '@appTypes/creditCardType.type';
import {MAX_CREDITCARD_CVC_LENGTH} from '@constants/payments/creditcard.const';

export const removeNonNumber = (input = ''): string => {
  return input.replace(/[^\d]/g, '');
};

export const removeLeadingSpaces = (input = ''): string => {
  return input.replace(/\s/g, '');
};

export const limitLength = (input = '', maxLength: number): string => {
  return input.substr(0, maxLength);
};

export const addGaps = (input = ''): string => {
  const gaps = [4, 8, 12];
  const offsets = [0].concat(gaps).concat([input.length]);

  return offsets
    .map((end, index) => {
      if (index === 0) {
        return '';
      }
      const start = offsets[index - 1];
      return input.substr(start, end - start);
    })
    .filter(part => part !== '')
    .join(' ');
};

export const formatCardNumber = (cardNumber: string): string => {
  const numberSanitized = removeNonNumber(cardNumber);
  const maxLength = 16;
  const lengthSanitized = limitLength(numberSanitized, maxLength);
  return addGaps(lengthSanitized);
};

export const formatCardExpiry = (expiry: string): string => {
  const sanitized = limitLength(removeNonNumber(expiry), 4);
  if (sanitized.match(/^[2-9]$/)) {
    return `0${sanitized}`;
  }
  if (sanitized.length > 2) {
    return `${sanitized.substr(0, 2)}/${sanitized.substr(2, sanitized.length)}`;
  }
  return sanitized;
};

export const formatCardCVC = (cvc: string): string => {
  const maxCVCLength = MAX_CREDITCARD_CVC_LENGTH;
  return limitLength(removeNonNumber(cvc), maxCVCLength);
};

export const getCardType = (value: string) => {
  const cardTypeMap = {
    [ECreditCardType?.AMERICAN_EXPRESS?.toLowerCase()]:
      ECreditCardType?.AMERICAN_EXPRESS,
    [ECreditCardType?.DINERS_CLUB?.toLowerCase()]: ECreditCardType?.DINERS_CLUB,
    [ECreditCardType?.DISCOVER?.toLowerCase()]: ECreditCardType?.DISCOVER,
    [ECreditCardType?.JCB?.toLowerCase()]: ECreditCardType?.JCB,
    [ECreditCardType?.MAESTRO?.toLowerCase()]: ECreditCardType?.MAESTRO,
    [ECreditCardType?.MASTER_CARD?.toLowerCase()]: ECreditCardType?.MASTER_CARD,
    [ECreditCardType?.VISA?.toLowerCase()]: ECreditCardType?.VISA,
    [ECreditCardType?.UNION_PAY?.toLowerCase()]: ECreditCardType?.UNION_PAY,
  };

  const formatValue = removeLeadingSpaces(value);
  const numberValidation = valid.number(formatValue);
  if (formatValue.length > 7 && numberValidation.card) {
    return (
      cardTypeMap[numberValidation?.card?.niceType?.toLowerCase()] ||
      ECreditCardType.UNKNOWN
    );
  } else {
    return ECreditCardType.UNKNOWN;
  }
};
