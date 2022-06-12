export enum EBenefitIcon {
  MULTIPLIER1 = 'multiplier',
  MULTIPLIER2 = 'multiplier1.5',
  MULTIPLIER3 = 'multiplier2',
  TAG = 'tag',
  GIFT = 'gift',
  COUPON = 'coupon',
  BAG = 'bag',
  MUG = 'mug',
  STAR = 'star',
}

export enum ETier {
  BRONZE = 'bronze',
  SILVER = 'silver',
  GOLD = 'gold',
  VIP = 'vip',
}
export interface ITierConfig {
  name: ETier;
  minPoint: number;
  maxChallenges: number;
  benefits: IBenefit[];
}

export interface IBenefit {
  title: string;
  body: string;
  icon: EBenefitIcon;
  testID?: string;
}

export interface IBenefitTables {
  [tierName: string]: IBenefit[];
}

export interface IEarnPointsTables {
  loyaltyMoneySpend?: number;
  bronze?: number;
  silver?: number;
  gold?: number;
  flashPointValue: number;
  currencyValue: number;
  currencyCode: string;
  currencySign: string;
}
