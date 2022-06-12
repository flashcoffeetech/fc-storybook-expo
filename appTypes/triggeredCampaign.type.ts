export enum EDiscountType {
  ITEM = 'item',
  DELIVERY = 'delivery',
}

export interface ITriggeredCampaign {
  id: number;
  name: string;
  nameLocale: string;
  displayName: string;
  ruleName: string;
  triggeredByCoupon: string;
  discount: number;
  discountType: EDiscountType;
}
