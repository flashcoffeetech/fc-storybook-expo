import {
  ECreditCardType,
  ECreditCardAuthType,
  EPaymentProvider,
} from './creditCardType.type';
import {ICountry} from './location.type';

export interface ICreditCard {
  id: string; // token
  maskedCardNumber: string;
  status: string;
  paymentProvider: EPaymentProvider;
  selected: boolean;
  type: ECreditCardType;
  encryptedCardDetail?: string; // token for adyen -> deprecated
  holderName?: string;
  createdAt: string;
  shopperReference?: string;
  pspReference?: string;
  country?: ICountry;
}

export interface ICardToken {
  id: string;
  authentication_id: string;
  masked_card_number: string;
  status: string;
  payer_authentication_url?: string;
  failure_reason?: string;
  card_info?: {[key: string]: any};
}

export interface ICreateTokenPayload {
  amount: string;
  card_number: string;
  card_exp_month: string;
  card_exp_year: string;
  card_cvn: string;
  is_multiple_use: boolean;
  should_authenticate: boolean;
}
export interface IAdyenCreateTokenPayload {
  number: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  holderName: string;
  type: ECreditCardType;
}

export interface ITapPayCreateTokenPayload {
  token: string;
  number: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  holderName: string;
  type: ECreditCardType;
}

export interface ICreateAuthenticationCard {
  id: string;
  payer_authentication_url: string;
  status: ECreditCardAuthType;
}

export interface IConfirmPaymentCCPayload {
  MD: string;
  PaRes: string;
}
