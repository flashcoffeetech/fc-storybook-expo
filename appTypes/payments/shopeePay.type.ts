import {EPaymentStatus} from '@appTypes/order.type';

interface ResponseStatus {
  code: string;
  message: string;
}

export enum EShopeePayCurrency {
  MYR = 'MYR',
  IDR = 'IDR',
  PHP = 'PHP',
  SGD = 'SGD',
  THB = 'THB',
  VND = 'VND',
}

export enum EShopeePayPlatformType {
  APP = 'app',
  PC = 'pc',
  MWEB = 'mweb',
}

export enum EShopeePayPointOfInitiation {
  APP = 'app',
}

export interface ShopeePayData {
  paymentReferenceId: string;
  merchantExtId: string;
  storeExtId: string;
  terminalId: string;
  currency: EShopeePayCurrency;
  returnUrl: string;
  pointOfInitiation: EShopeePayPointOfInitiation;
  platformType: EShopeePayPlatformType;
  validityPeriod?: number;
  expiryTime?: number;
  promoIds?: string;
  additionalInfo?: string;
  paymentStatus?: number;
  redirectUrlApp?: string;
  redirectUrlHttp?: string;
  referenceId?: string;
  transactionType?: number;
  transactionStatus?: number;
  userIdHash?: string;
  transactionSN?: string;
  paymentMethod?: number;
  refundReferenceId?: string;
  orderId: string;
  amount: number;
  coFunding?: {[key: string]: any};
  status: EPaymentStatus;
}

export interface ShopeePayServiceSuccessResponse {
  success: boolean;
  payload: ShopeePayData;
}

export interface ShopeePayServiceErrorResponse {
  success: boolean;
  payload: {
    status: string;
    message: string;
  };
}
