export interface IReward {
  id: string;
  name: string;
  cat: string;
  promoLabel: string;
  description?: string;
  attributes: {
    [key: string]: any;
    image?: string;
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
  };
  image?: string;
}
