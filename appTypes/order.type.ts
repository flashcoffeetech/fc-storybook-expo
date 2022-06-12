import {
  EDeliveryMethod,
  IDeliveryDetail,
  IOrderDelivery,
} from './delivery.type';
import {IOrderItem} from './orderItem.type';
import {PaymentOption} from './paymentMethod.type';
import {IStore} from './store.type';
import {ETier} from './tierConfig.type';
import {TransactionType} from './transactionType.type';
import {ITriggeredCampaign} from './triggeredCampaign.type';
import {IUser} from './user.type';

export enum EOrderDisplayCode {
  OS001 = 'OS001',
  OS002 = 'OS002',
  OS003 = 'OS003',
  OS004 = 'OS004',
  OS005 = 'OS005',
  OS006 = 'OS006',
  OS007 = 'OS007',
  OS008 = 'OS008',
  OS009 = 'OS009',
  OS010 = 'OS010',
  OS011 = 'OS011',
  OS012 = 'OS012',
  OS013 = 'OS013',
  OS014 = 'OS014',
  OS015 = 'OS015',
}

export enum EOrderFailureReason {
  FRAUD = 'FRAUD',
  TOO_HIGH = 'TOO_HIGH',
}

export enum EOrderStatus {
  CREATED = 'CREATED',
  PAID = 'PAID',
  PROCESSED = 'PROCESSED',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELED = 'CANCELED',
  PICKED_UP = 'PICKED_UP',
  NOT_PICKED_UP = 'NOT_PICKED_UP',
  REJECTED = 'REJECTED',
  TRANSFERRED = 'TRANSFERRED',
  ON_DELIVERY = 'ON_DELIVERY',
  DELIVERED = 'DELIVERED',
}

export enum EPaymentStatus {
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  CAPTURED = 'CAPTURED',
}

export enum EOrderDisplayLokalise {
  WAITING_FOR_PAYMENT = 'orderStatus.waitingForPayment',
  WE_GOT_YOUR_ORDER = 'orderStatus.weGotYourOrder',
  PROCESSING = 'orderStatus.preparing',
  READY_FOR_PICKUP = 'orderStatus.readyForPickup',
  PICKED_UP = 'orderStatus.pickedUp',
  COMPLETED = 'orderStatus.completed',
  DRIVER_PICKUP = 'general.driverPickUp',
  DRIVER_ON_THE_WAY = 'general.driverOnTheWay',
  FAILED = 'orderStatus.failed',
  REJECTED = 'orderStatus.rejected',
  NOT_PICKED_UP = 'orderStatus.notPickedUp',
  CANCELED = 'orderStatus.canceled',
  SWITCH_PAYMENT = 'orderStatus.switchPayment',
  DRIVER_ISSUE = 'general.driverIssue',
  UNKNOWN = 'general.unknown',
  PREPARING_YOUR_ORDER = 'general.preparingYourOrder',
}

export enum EOrderType {
  PICKUP = 'Pickup',
  DELIVERY = 'Delivery',
}

export interface IAppliedPromotion {
  id: number;
  campaignId: number;
  voucherCode: string;
}

export interface IOrder {
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
  customerMeta: IUser;
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
  paidVoucherDiscount: number;
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
  items: IOrderItem[];
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
  session?: IOrderSession;
  smallOrderFee: number;
  snapToken?: string;
  status: EOrderStatus;
  storeId: string;
  storeMeta: IStore;
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
export interface IOrderPastItem {
  decimalTotal: number;
  deliveryMethod: EDeliveryMethod | EOrderType;
  displayStatus: string;
  displayStatusCode: EOrderDisplayCode;
  id: string;
  isOfflineOrder: boolean;
  itemCount: number;
  paymentAmount: number;
  randomDigit: string;
  status: EOrderStatus;
  storeId: string;
  storeName: string;
  transactionTime: string;
}

export interface ITodaysOrders {
  now: IOrder[];
  latter: IOrder[];
  past: IOrder[];
}

export interface ICashPaymentAvailability {
  isAvailable: boolean;
  message: string;
}

export interface ISmallOrderFee {
  orderFee: number;
  minimumOrderAmount: number;
}

export interface ISmallOrderFeeParams {
  deliveryFee: number;
  deliveryDiscountFee: number;
  subTotal: number;
  total: number;
  discount: number;
  tax?: number;
}

interface ITriggeredPromotionsMeta {
  discount: number;
  id: number;
  name: string;
  nameLocale: string;
  ruleName: string;
}
interface IOrderSession {
  currentFlashPoints: number;
  currentLoyaltyPoints: number;
  currentTier: ETier;
  flashPointsEarn: number;
  id: string;
  loyaltyPointsEarn: number;
  triggeredPromotionCampaigns: number[];
  triggeredPromotionsMeta: ITriggeredPromotionsMeta[];
}
