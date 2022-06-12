import {IPromotion} from './promotion.type';
import {ESessionInvalidCode} from './talonOne.type';

export interface IEffect {
  campaignId: number;
  rulesetId: number;
  ruleIndex: number;
  ruleName: string;
  effectType:
    | 'acceptCoupon'
    | 'customEffect'
    | 'rejectCoupon'
    | 'setDiscount'
    | 'setDiscountPerItem'
    | 'showNotification'
    | 'addFreeItem';
  triggeredByCoupon: any;
  props: {
    name?: string;
    value?: any;
    title?: 'progress' | 'completed' | 'failed';
    body?: string;
    sku?: string;
    payload?: any;
  };
  campaignAttributes: any;
}

export interface ICustomerSession {
  additionalCostTotal: number;
  applicationId: number;
  attributes: {
    challenges: [];
  };
  cartItemTotal: number;
  cartItems: {
    category: string;
    name: string;
    position: number;
    price: number;
    quantity: number;
    sku: string;
  }[];
  created: string;
  firstSession: boolean;
  integrationId: string;
  profileId: string;
  referralCode: string;
  state: string;
  total: number;
}

export interface ICoupon {
  id: string;
  created: string;
  campaignId: number;
  value: string;
  usageLimit: number;
  usageCounter: number;
  attributes: any;
  reservation: boolean;
  batchId: string;
}

export interface ISessionResponse {
  effects: IEffect[];
  createdCoupons: any[];
  createdReferrals: any[];
  customerSession: ICustomerSession;
  customerProfile: any;
  coupons: ICoupon[];
  triggeredCampaigns: IPromotion[];
  invalidSession?: boolean;
  invalidSessionReason?: string;
  invalidSessionResponse?: string;
  invalidSessionCode?: ESessionInvalidCode;
  minimumCartValueFreeDelivery?: number;
}
