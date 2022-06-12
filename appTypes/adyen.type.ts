type Channel = 'iOS' | 'Android' | 'Web';

export enum EResultCode {
  AuthenticationFinished = 'AuthenticationFinished',
  Authorised = 'Authorised',
  Cancelled = 'Cancelled',
  ChallengeShopper = 'ChallengeShopper',
  Error = 'Error',
  IdentifyShopper = 'IdentifyShopper',
  Pending = 'Pending',
  PresentToShopper = 'PresentToShopper',
  Received = 'Received',
  RedirectShopper = 'RedirectShopper',
  Refused = 'Refused',
}

interface Item {
  id?: string;
  name?: string;
}

interface Amount {
  currency?: string;
  value?: number;
}

interface InputDetail {
  items?: Item[];
  key?: string;
  optional?: boolean;
  type?: string;
}

interface AdyenPaymentMethodRequest {
  issuer?: string;
  type: EAdyenPaymentType;
}
interface ApplePayDetails {
  applePayToken: string;
  type: 'applepay';
}

interface GooglePayDetails {
  googlePayToken: string;
  type: EAdyenPaymentType.PAY_WITH_GOOGLE;
}

interface Redirect {
  data?: {
    [name: string]: string;
  };
  method?: 'GET' | 'POST';
  url?: string;
}

interface CheckoutRedirectAction {
  data?: {
    [name: string]: string;
  };
  method?: string;
  paymentData?: string;
  paymentMethodType?: string;
  url?: string;
  type?: string;
}

export interface IPaymentMethod {
  name: string;
  type: string;
  brands?: string[];
  details?: InputDetail[];
  configuration?: {
    [name: string]: string;
  };
}

export interface IPaymentMethodsRequest {
  allowedPaymentMethods?: string[];
  amount?: Amount;
  channel?: Channel;
  countryCode?: string;
  merchantAccount: string;
}

export interface IPaymentMethodsResponse {
  paymentMethods?: IPaymentMethod[];
}

interface IMobileBrowserInfo {
  /**
   * The accept header value of the shopper's browser.
   */
  acceptHeader?: string;
  /**
   * The user agent value of the shopper's browser.
   */
  userAgent?: string;
}

export interface PaymentRequest {
  amount: Amount;
  channel?: Channel;
  countryCode?: string;
  merchantAccount: string;
  orderReference?: string;
  paymentMethod: AdyenPaymentMethodRequest | ApplePayDetails | GooglePayDetails;
  reference: string;
  returnUrl: string;
  shopperEmail?: string;
  shopperReference?: string;
  browserInfo?: IMobileBrowserInfo;
}

export interface PaymentResponse {
  action?: CheckoutRedirectAction;
  amount?: Amount;
  details?: InputDetail[];
  merchantReference?: string;
  outputDetails?: {
    [name: string]: string;
  };
  paymentData?: string;
  pspReference?: string;
  redirect?: Redirect;
  refusalReason?: string;
  refusalReasonCode?: string;
  resultCode?: EResultCode;
}

interface PaymentCompletionDetails {
  redirectResult?: string;
}

export interface DetailsRequest {
  details: PaymentCompletionDetails;
}

export enum EAdyenPaymentType {
  MOLPAY_EBANKING_FPX_MY = 'molpay_ebanking_fpx_MY',
  MOLPAY_EBANKING_TH = 'molpay_ebanking_TH',
  WECHATPAY_WEB = 'wechatpayWeb',
  ALIPAY_HK = 'alipay_hk_wap',
  APPLE_PAY = 'applepay',
  PAY_WITH_GOOGLE = 'paywithgoogle',
}
