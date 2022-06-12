import {
  EDeliveryMethod,
  IDeliveryDetail,
  IOrderDelivery,
} from './delivery.type';
import {
  EOrderDisplayCode,
  EOrderFailureReason,
  EOrderStatus,
  EOrderType,
  EPaymentStatus,
  IAppliedPromotion,
} from './order.type';
import {PaymentOption} from './paymentMethod.type';
import {IStoreConfig, IStoreTime} from './store.type';
import {TransactionType} from './transactionType.type';
import {ITriggeredCampaign} from './triggeredCampaign.type';

export interface ILoggedStore {
  storeName: string;
  storeId: string;
  storeTime: IStoreTime[];
  isSelfPickupEnabled?: boolean;
  isClosedToday: boolean;
  config?: IStoreConfig;
  timezone: string;
  openTime: string;
  closeTime: string;
  isOpen: boolean;
  deliveryCloseTime?: string;
  deliveryOpenTime?: string;
  isDeliveryEnabled?: boolean;
  temporaryClose?: boolean;
  distance: {raw: number; formatted: string};
  forceClose?: number;
}

export interface ILoggedOrderItem {
  itemId?: string;
  name?: string;
  outOfStock?: boolean;
  availabilityBool?: boolean;
  availability?: number;
  isAvailableForDelivery?: boolean;
  isSelling?: boolean;
}

export interface ILoggedOrder {
  appliedVoucher?: IAppliedPromotion;
  authID?: string;
  cancelledBy?: string;
  cancelledTime?: string;
  cardBrand?: string;
  checkoutUrl?: string;
  cleanHubDonationAmount?: number;
  comment: string;
  createdAt?: string;
  currency?: string;
  customerRefId: string;
  dataVersion?: string;
  decimalDiscount?: number;
  decimalSubTotal?: number;
  decimalTax?: number;
  decimalTotal?: number;
  deliveryDetail?: IDeliveryDetail;
  deliveryDiscountFee?: number;
  deliveryFailureReason?: string;
  deliveryFee?: number;
  deliveryMethod: EDeliveryMethod | EOrderType;
  discount: number;
  displayStatus?: string;
  displayStatusCode?: EOrderDisplayCode;
  employeeId?: string;
  employeeMeta?: null;
  failureReason?: EOrderFailureReason;
  flashPointAmountPaid?: number;
  handledById?: null;
  id: string;
  invoiceNumber: string;
  isCancelled?: boolean;
  items: ILoggedOrderItem[];
  localCurrencyAmountPaid?: number;
  maskedCardNumber?: string;
  nettSales?: number;
  orderDelivery?: IOrderDelivery;
  orderNumber?: string;
  paymentAmount?: number;
  paymentMethod: PaymentOption;
  paymentStatus: EPaymentStatus;
  phoneNumber: string;
  pickupTime: string;
  promotions?: IAppliedPromotion[];
  randomDigit?: number;
  redirectUrl?: string;
  refId: string;
  refund?: number;
  returnReason?: string;
  smallOrderFee: number;
  snapToken?: string;
  status: EOrderStatus;
  storeMeta: ILoggedStore;
  subTotal: number;
  tax: number;
  taxPercentage?: number;
  token?: string;
  total: number;
  transactionTime: string;
  transactionType: TransactionType;
  triggeredPromotions?: ITriggeredCampaign[];
  updatedAt?: string;
  useFlashPoint?: string;
  userAgent?: string;
}
