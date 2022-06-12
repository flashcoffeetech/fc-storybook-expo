export interface IInicisPostKakaopayCheckPaymentResponse {
  isExists: boolean;
}

export interface PaymentRequest {
  paymentBrand: string;
  orderId: string;
  amount: string;
  product?: string;
  customerName: string;
  nextUrl?: string;
  vaUrl?: string;
  hppMethod?: string;
}

export enum EPaymentBrands {
  KAKAOPAY = 'KAKAOPAY',
  NAVERPAY = 'NAVERPAY',
  SAMSUNGPAY = 'SAMSUNGPAY',
  CARD = 'CARD',
}

export enum EInicisPaymentMethods {
  CARD = 'CARD',
  BANK = 'BANK',
  VBANK = 'VBANK',
  MOBILE = 'MOBILE',
  CULTURE = 'CULTURE',
  GIFT_CARD = 'HPMN',
  EWALLET = 'EWALLET',
  OTHER_PAYMENT = 'ETC_',
}

export enum EInicisProduct {
  INICIS_FC_PRODUCT = 'Flash Coffee Product',
}

export enum EInicisHPPMethods {
  CONTENTS = '1',
  REAL = '2',
}

export interface PaymentResponse {
  success?: boolean;
  payload?: string;
}

export interface CheckPaymentExistsResponse {
  success: boolean;
  payload: {
    isPaymentExist?: boolean;
  };
}

export interface InicisServiceSyncPaymentStatusResponse {
  success: boolean;
  payload: any;
}
