import {ICreditCard} from '@appTypes/creditCard.type';
import {EPaymentProvider} from '@appTypes/creditCardType.type';
import {ICountry} from '@appTypes/location.type';

interface IOrganizeCreditCard {
  newCreditCard: ICreditCard;
  creditCardOptions: ICreditCard[] | any;
  paymentProvider: EPaymentProvider;
  currentCountry: ICountry;
}

export const organizeCreditCard = ({
  newCreditCard,
  creditCardOptions = [],
  paymentProvider,
  currentCountry,
}: IOrganizeCreditCard): ICreditCard[] => {
  const newCreditCardOptions: ICreditCard[] = [];

  creditCardOptions.forEach((item: ICreditCard) => {
    const card: ICreditCard = {...item};
    const provider = card.paymentProvider?.toLowerCase();
    const cardCountry = card.country;
    const isSameProvider = provider === paymentProvider;
    const isSameCountry = cardCountry?.code === currentCountry?.code;

    if (!cardCountry) {
      card.country = currentCountry;
    }

    if (isSameProvider && isSameCountry) {
      card.selected = false;
    }

    newCreditCardOptions.push(card);
  });

  newCreditCardOptions.push(newCreditCard);

  return newCreditCardOptions;
};
