import {EPaymentStatus} from '@appTypes/order.type';

export interface HSBCPaymeData {
  paymentRequestId: string;
  paymentRequestType: string;
  amount: number;
  currencyCode: string;
  effectiveDuration: string;
  notificationUri: string;
  appSuccessCallback: string;
  appFailCallback: string;
  orderId: string;
  paymeStatusDescription: string;
  paymeStatusCode: string;
  status: EPaymentStatus;
  webLink: string;
  appLink: string;
  sub: string;
}

export interface HSBCPaymeServiceSuccessResponse {
  success: boolean;
  payload: HSBCPaymeData;
}

export interface HSBCPaymeServiceErrorResponse {
  success: boolean;
  payload: {
    status: string;
    message: string;
  };
}

export interface HSBCServiceSyncPaymentStatusResponse {
  success: boolean;
  payload: any;
}
