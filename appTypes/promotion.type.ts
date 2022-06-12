export enum EPromotionStatus {
  ON_GOING = 'ON_GOING',
  COMPLETED = 'COMPLETED',
  PURCHASED = 'PURCHASED',
  APPLIED = 'APPLIED',
}

export enum ECompletionType {
  DAY = 'day',
  ITEM = 'item',
  ORDER = 'order',
  STORE = 'store',
  POINT = 'point',
}

export interface IPromotion {
  id: number;
  created: string;
  applicationId: number;
  campaignGroups: any[];
  userId: number;
  name: string;
  description: string;
  attributes: {
    [key: string]: any;
    image?: string;
    imageLocale?: string;
    nameLocale?: string;
    descLocale?: string;
    tnc?: string;
    tncLocale?: string;
    promotionCategory?: string;
    promotionCost?: number;
    promotionMaxUsage?: number;
    completedOn?: number;
    completionType?: string;
    reward?: number;
    duration?: number;
    headline1?: number;
    headline2?: number;
    isForceApplied: boolean;
    headline: string;
    headlineLocale: string;
    headlineSmall: string;
    headlineSmallLocale: string;
    bannerText: string;
    bannerTextLocale: string;
    displayName?: string;
  };
  completedCount: number;
  state: string;
  activeRulesetId: number;
  tags: string[];
  features: string[];
  couponSettings: {
    validCharacters: string[];
    couponPattern: string;
  };
  limits: number[];
  couponRedemptionCount: number;
  referralRedemptionCount: number;
  discountCount: number;
  discountEffectCount: number;
  couponCreationCount: number;
  updated: string;
  updatedBy: string;
  startTime: string;
  endTime: string;
  challengeActivateTime?: string;
  challengeExpiredTime?: string;
  status: EPromotionStatus;
  voucherCode?: string;
  affectedProgress?: number;
  completionType?: ECompletionType;
  expiredAt?: string;
}
