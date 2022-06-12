import {ICreditCard} from '@appTypes/creditCard.type';
import {COUNTRY_CREDIT_CARD_PROVIDER_MAP} from '@constants/country.const';
import crypto from 'crypto-js';

export const countryCreditCardList = (
  data: ICreditCard[],
  countryCode: string,
): ICreditCard[] => {
  const creditCards: ICreditCard[] = [];

  if (Array.isArray(data)) {
    data.forEach(item => {
      const paymentProvider = item.paymentProvider?.toLowerCase();
      const countryPaymentProvider =
        COUNTRY_CREDIT_CARD_PROVIDER_MAP[countryCode];

      const isSameCountry = item.country?.code === countryCode;
      const isSameProvider = countryPaymentProvider === paymentProvider;

      if (isSameCountry && isSameProvider) {
        creditCards.push(item);
      }
    });
  }

  return creditCards;
};

export const countrySelectedCreditCard = (
  data: ICreditCard[],
  countryCode: string,
): ICreditCard => {
  const creditCards: ICreditCard[] = countryCreditCardList(data, countryCode);

  const selectedCreditCard: ICreditCard = creditCards.find(item => {
    return item.id && item.selected;
  });

  return selectedCreditCard;
};

export const decryptCardToken = async (
  data: string,
  sub: string,
  maskedCardNumber: string,
  secretPassphrase: string,
): Promise<string> => {
  const secretPassphraseSub = sub.substring(sub.length - 12);
  const secretPassphraseCard = maskedCardNumber.substring(
    maskedCardNumber.length - 4,
  );
  const secretPhrase = `${secretPassphrase}-${secretPassphraseCard}-${secretPassphraseSub}`;
  return crypto.AES.decrypt(data, secretPhrase).toString(crypto.enc.Utf8);
};
