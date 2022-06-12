export interface HKTTapAndGoData {
  orderId: string;
  status?: string;
  tapNGoApiUrl?: string;
  appId?: string;
  merTradeNo?: string;
  invoiceNumber?: string;
  paymentType?: string;
  payload?: string;
  extras?: string;
  sign?: string;
  transactionType?: string;
  tradeNo?: string;
  tradeStatus?: string;
  totalPrice: string;
  currency?: string;
  notifyUrl?: string;
  returnUrl?: string;
  remark?: string;
  lang?: string;
  recurrentToken?: string;
  msg?: string;
  resultCode?: string;
}

export interface HKTTapAndGoServiceSuccessResponse {
  success: boolean;
  payload: HKTTapAndGoData;
}

export interface HKTTapAndGoServiceErrorResponse {
  success: boolean;
  payload: {
    status: string;
    message: string;
  };
}

export interface ISyncPaymentStatusParams {
  merTradeNo: string;
  message: string;
  recurrentToken: string;
  resultCode: string;
  tradeNo: string;
  tradeStatus: string;
}
