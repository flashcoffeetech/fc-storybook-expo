export interface CODAlipayHKServiceErrorResponse {
  success: boolean;
  payload: {
    status: string;
    message: string;
  };
}

export interface CODAlipayHKServiceCreatePaymentResponse {
  success: boolean;
  payload: {
    orderString: string;
    outTradeNumber: string;
    merchantId?: string;
    segmentId?: string;
  };
}

export interface CODAlipayHKServiceCheckPaymentExistResponse {
  success: boolean;
  payload: {
    isPaymentExist: boolean;
  };
}

export interface CODAlipayHKServiceSyncPaymentStatusResponse {
  success: boolean;
  payload: any;
}
