import {EPaymentStatus} from '@flashcoffee/fctypes';

export enum ETapPayPaymentMethod {
  DIRECT_PAY = 'DirectPay',
  GOOGLE_PAY = 'GooglePay',
  LINE_PAY = 'LinePay',
  JKO_PAY = 'JkoPay',
}

export interface ITapPayApplePayPostPrime {
  orderId: string;
  token: string;
  amount: number;
  currency: string;
}

export interface ITapPayJKOPayPostPrime {
  orderId: string;
  token: string;
  amount: number;
  currency: string;
  redirectUrl?: string;
}

export interface ITapPayGooglePayPostPrime {
  orderId: string;
  token: string;
  amount: number;
  currency: string;
}

export interface ITapPayUpdatePaymentStatusPrime {
  orderId: string;
  status: EPaymentStatus;
}

export interface ITapPayPostApplePayCheckPaymentResponse {
  isExists: boolean;
}

export interface ITapPayPostApplePayCheckPayment {
  orderId: string;
}

export interface ITapPayPostGooglePayCheckPaymentResponse {
  isExists: boolean;
}

export interface ITapPayPostGooglePayCheckPayment {
  orderId: string;
}

export interface ITapPayCard {
  number: string;
  dueMonth: string;
  dueYear: string;
  ccv: string;
}

export interface ITapPayValidateCardResult {
  isValid: boolean;
  message: string;
}

export interface ITapPayApplePayResponse {
  isValid: boolean;
  message: string;
}

export interface ITapPayJKOPayCreatePaymentResponse {
  isValid: boolean;
  message: string;
}

export interface ITapPayGooglePayResponse {
  isValid: boolean;
  message: string;
}

export interface ITapPayUpdatePaymentStatusResponse {
  isValid: boolean;
  message: string;
}
