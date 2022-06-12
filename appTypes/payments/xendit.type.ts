import {EPaymentStatus} from '@flashcoffee/fctypes';

export interface ResponseStatus {
  code: string;
  message: string;
}

export enum EXenditCurrency {
  IDR = 'IDR',
}

export interface XenditData {
  paymentReferenceId: string;
  storeExtId: string;
  terminalId: string;
  currency: EXenditCurrency;
  referenceId?: string;
  paymentMethod?: number;
  orderId: string;
  amount: number;
  status: EPaymentStatus;
}

export interface XenditServiceSuccessResponse {
  success: boolean;
  payload: XenditData;
}

export interface XenditServiceErrorResponse {
  success: boolean;
  payload: {
    status: string;
    message: string;
  };
}
