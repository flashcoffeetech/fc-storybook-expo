interface CustomElements {
  billingAddressCollect?: boolean;
  displayDescription?: boolean;
  dynamicCurrencyConversion?: boolean;
  merchantColor?: string;
  merchantCurrencyOnly?: boolean;
  paymentFeesDisplay?: boolean;
  saveCardDefault?: boolean;
}

enum FixedSide {
  buy = 'buy',
  sell = 'sell',
}

interface Status {
  errorCode: string;
  status: string;
  message: string;
  responseCode: string;
  operationId: string;
}

interface Payment {
  redirectUrl: string;
  completePaymentUrl: string;
  errorPaymentUrl: string;
  receiptNumber: string;
}

interface CreateCheckoutPageData {
  id: string;
  status: string;
  language: string;
  redirectUrl: string;
  cancelCheckoutUrl: string;
  completeCheckoutUrl: string;
  payment: Payment;
}

export interface CreateCheckoutPageResponse {
  errorCode?: string;
  errors?: [any];
  message?: string;
  success: boolean;
  payload?: {
    status: Status;
    data?: CreateCheckoutPageData;
  };
}

export interface CheckPaymentExistsResponse {
  success: boolean;
  payload: {
    isPaymentExist?: boolean;
  };
}

export interface CreateCheckoutPageRequest {
  amount: number;
  cancelCheckoutUrl?: string;
  capture?: boolean;
  completeCheckoutUrl?: string;
  completePaymentUrl?: string;
  country: string;
  currency: string;
  customElements?: CustomElements;
  customer?: string;
  description?: string;
  errorPaymentUrl?: string;
  escrow?: boolean;
  escrowReleaseDays?: number;
  ewallet?: string;
  ewallets?: any[];
  expiration?: number;
  fixedSide?: FixedSide;
  language?: string;
  merchantReferenceId?: string;
  metadata?: any;
  pageExpiration?: number;
  paymentExpiration?: number;
  paymentFees?: any;
  paymentMethodType?: string;
  paymentMethodTypeCategories?: string[]; // bank_redirect, bank_transfer, card, cash, ewallet
  paymentMethodTypesExclude?: string[];
  paymentMethodTypesInclude?: string[];
  requestedCurrency?: string;
}

export interface GetTransactionStatusRequest {
  checkoutId: string;
}

export interface GetTransactionStatusResponse {
  success: boolean;
  payload: {
    status: Status;
    data?: Payment;
  };
}
