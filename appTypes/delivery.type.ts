import {IOrderDeliveryItem} from './orderItem.type';

export enum EDeliveryStatusLokalise {
  DRAFT = 'general.draft',
  NEW = 'general.new',
  RECEIVED = 'general.received',
  WAITING_FOR_TRANSPORT = 'general.waitingForTransport',
  ASSIGNED_TO_TRANSPORT = 'general.assignedToTransport',
  COURIER_ACCEPTED_DELIVERY = 'general.courierAcceptedDelivery',
  NEAR_VENDOR = 'general.nearVendor',
  PICKED_UP = 'general.pickedUp',
  COURIER_LEFT_VENDOR = 'general.courierLeftVendor',
  NEAR_CUSTOMER = 'general.nearCustomer',
  DELIVERED = 'general.delivered',
  DELAYED = 'general.delayed',
  CANCELLED = 'general.cancelled',
  REJECTED = 'general.rejected',
  FAILED = 'general.failed',
  UNKNOWN = 'general.unknown',
}

export enum EDriverStatusCode {
  DS001 = 'DS001',
  DS002 = 'DS002',
  DS003 = 'DS003',
  DS004 = 'DS004',
  DS005 = 'DS005',
  DS006 = 'DS006',
  DS007 = 'DS007',
}

export enum EDeliveryMethod {
  PICKUP = 'Pickup',
  DELIVERY = 'Delivery',
}

export enum EDeliveryPaymentMethod {
  PAID = 'PAID',
  COD = 'CASH_ON_DELIVERY',
}

export enum EDeliveryStatus {
  DRAFT = 'DRAFT',
  NEW = 'NEW',
  RECEIVED = 'RECEIVED',
  WAITING_FOR_TRANSPORT = 'WAITING_FOR_TRANSPORT',
  ASSIGNED_TO_TRANSPORT = 'ASSIGNED_TO_TRANSPORT',
  COURIER_ACCEPTED_DELIVERY = 'COURIER_ACCEPTED_DELIVERY',
  NEAR_VENDOR = 'NEAR_VENDOR',
  PICKED_UP = 'PICKED_UP',
  COURIER_LEFT_VENDOR = 'COURIER_LEFT_VENDOR',
  NEAR_CUSTOMER = 'NEAR_CUSTOMER',
  DELIVERED = 'DELIVERED',
  DELAYED = 'DELAYED',
  CANCELLED = 'CANCELLED',
  REJECTED = 'REJECTED',
  FAILED = 'FAILED',
}

export enum EDeliveryPartner {
  PANDAGO = 'pandago',
  GRAB_EXPRESS = 'grab-express',
}
export enum ELocationResponseType {
  URL = 'URL',
  COORDINATES = 'COORDIANTES',
}

export interface IOrderDelivery {
  appVersionName: string;
  appVersionCode: string;
  serviceVersionCode: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  orderId: string;
  partnerOrderId: string;
  fee: number;
  discountFee: number;
  partnerMeta: IPartnerMeta;
  status: EDeliveryStatus;
  senderMeta: IAddressMeta;
  recipientMeta: IAddressMeta;
  driverStatusCode?: EDriverStatusCode;
  paymentMethod: EDeliveryPaymentMethod;
  coldbagNeeded: boolean;
  amount: number;
  estimatedPickupTime: string;
  estimatedDeliveryTime: string;
  driverMeta: IDriverMeta;
}

export interface IDeliveryDetail {
  senderMeta: IAddressMeta;
  recipientMeta: IAddressMeta;
  amount: number;
  paymentMethod: string;
  partnerMeta: IPartnerMeta;
  estimatedPickupTime: string;
  estimatedDeliveryTime: string;
}

export interface IPartnerMeta {
  id: string;
  code: string;
  name: string;
  isActive: boolean;
  baseUrl: string;
}
export interface IAddressMeta {
  name: string;
  streetAddress: string;
  addressDetails?: string;
  phoneNumber: string;
  latitude: number;
  longitude: number;
  driverNotes?: string;
  notes: string;
  recipientName?: string;
}
export interface IDriverMeta {
  id: string;
  name: string;
  phone_number: string;
}
export interface IDriverLocation {
  clientOrderId: string;
  latitude: number;
  longitude: number;
  updatedAt: string;
  responseType: ELocationResponseType;
  trackingUrl?: string;
}
export interface IDeliveryParams {
  senderMeta: IAddressMeta;
  recipientMeta: IAddressMeta;
  description: string;
  amount: number;
  paymentMethod: EDeliveryPaymentMethod;
  items: IOrderDeliveryItem[];
  storeCode?: string;
}

export interface IDeliveryEstimation {
  estimatedPickupTime?: string;
  estimatedDeliveryTime?: string;
  estimatedDeliveryFee: number;
}

export enum EDeliveryDelayWarning {
  HIGH_DEMAND = 'highDemand',
  BAD_WEATHER = 'badWeather',
  NONE = 'none',
}
