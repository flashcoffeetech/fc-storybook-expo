import {IDeliveryEstimation} from './delivery.type';
import {EOrderType, ISmallOrderFee} from './order.type';
import {IProduct} from './product.type';

export class ICartItem {
  qty: number;
  optionPrice: number;
  product: IProduct;
  subTotalPrice: number;
  totalPrice: number;
  variantNo: number;
  currentPrice?: number;
  discount?: number;
}
export interface ICartItems {
  [key: string]: ICartItem;
}

export interface ICartModifier {
  product?: IProduct;
  qty?: number;
  optionPrice?: number;
  variantNo?: number;
}

export interface ISummaryCart {
  discount: number;
  paidVoucherDiscount: number;
  deliveryFee: number;
  deliveryFeeDiscount: number;
  deliverySmallOrderFee: ISmallOrderFee;
  totalQty: number;
  subTotal: number;
  totalAmount: number;
  totalPayment: number;
  cleanHubDonationAmount: number;
  cleanHubDonation: boolean;
}
export interface ICalculateCart {
  items: ICartItems;
  orderType?: EOrderType;
  sof?: ISmallOrderFee;
  deliveryEstimation?: IDeliveryEstimation;
  discount?: number;
  paidVoucherDiscount?: number;
  deliveryFeeDiscount?: number;
  cleanHubDonation?: boolean;
  cleanHubDonationAmount?: number;
}
export interface ICartPickupTime {
  isASAP?: boolean;
  pickupTime?: Date;
}
