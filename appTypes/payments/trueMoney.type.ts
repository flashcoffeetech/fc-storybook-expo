export enum Language {
  TH = 'TH',
  EN = 'EN',
}

interface DatasetsItem {
  name?: string;
  description?: string;
  amount?: string;
}

interface Datasets {
  image?: string;
  items?: DatasetsItem[];
}

interface OrderInfo {
  language: Language;
  remark?: string;
  datasets?: Datasets[];
}

interface OrderDisplay {
  returnAddress?: string;
  orderInfo: OrderInfo[];
}

interface ItemMetadata {
  [key: string]: string;
}

interface OrderItem {
  merchantId: string;
  shopId?: string;
  terminalId?: string;
  amount: string;
  productRef1?: string;
  productRef2?: string;
  productId?: string;
  metadata?: ItemMetadata;
}

interface OrderMetadata {
  partnerShopId: string;
  partnerShopName: string;
  description: string;
}

interface Order {
  productCode: string;
  items: OrderItem[];
  metadata: OrderMetadata;
}

interface ResponseStatus {
  code: string;
  message: string;
}

interface CreateOrderData {
  orderId: string;
  checkoutUrl: string;
  isvPaymentRef: string;
  created: string;
}

export interface CreateOrderRequest {
  tmnId?: string;
  order: Order;
  orderDisplay: OrderDisplay;
}

export interface CreateOrderResponse {
  success: boolean;
  payload: {
    status: ResponseStatus;
    data: CreateOrderData;
  };
}

export interface ResponseError {
  success: boolean;
  payload: {
    status: string;
    message: string;
  };
}

enum TransactionStatus {
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
  PENDING = 'pending',
}

interface GetTransactionStatusData {
  isvPaymentRef: string;
  paymentId: string;
  status: TransactionStatus;
  created: string;
  checkoutUrl: string;
}

export interface GetTransactionStatusRequest {
  isvPaymentRef: string;
  transactionDate: string;
}

export interface GetTransactionStatusResponse {
  success: boolean;
  payload: {
    status: ResponseStatus;
    data: GetTransactionStatusData;
  };
}

export interface CheckPaymentExistsResponse {
  success: boolean;
  payload: {
    isPaymentExist?: boolean;
  };
}
