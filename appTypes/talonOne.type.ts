import {ICartItems} from './cart.type';
import {IPromotion} from './promotion.type';
import {PaymentInfo} from './sessionRequest.type';
import {IStore} from './store.type';

export interface IGenerateTalonOneOrder {
  cartId: string;
  store: IStore;
  cartItems: ICartItems;
  appliedVoucher: IPromotion;
  currentChallenges: IPromotion[];
  paymentInfo: PaymentInfo;
  userAgent: string;
  paymentAmount: number;
  shippingMethod?: string;
  deliveryPartnerName?: string;
  deliveryFee?: number;
  deliveryDiscountFee?: number;
  freeShipping?: boolean;
}

export interface ITalonOneOpenSession {
  store: IStore;
  items: ICartItems;
  paymentUsed: string;
  paymentAmount: number;
  shippingMethod?: string;
  deliveryPartnerName?: string;
  deliveryFee?: number;
  deliveryDiscountFee?: number;
  freeShipping?: boolean;
}
export enum ESessionInvalidCode {
  SER001 = 'SER001',
  SER002 = 'SER002',
  SER003 = 'SER003',
  SER004 = 'SER004',
  SER005 = 'SER005',
  SER006 = 'SER006',
  SER007 = 'SER007',
  SER008 = 'SER008',
  SER009 = 'SER009',
  SER010 = 'SER010',
  SER011 = 'SER011',
  SER012 = 'SER012',
  SER013 = 'SER013',
  SER014 = 'SER014',
  SER015 = 'SER015',
  SER016 = 'SER016',
  SER017 = 'SER017',
  SER018 = 'SER018',
}
