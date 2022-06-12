import {LoyaltyLedger} from './loyaltyLedger.type';
import {ETier} from './tierConfig.type';

export interface ILoyaltyProgram {
  integrationId: string;
  created: string;
  attributes: IUserTalonOneAttributes;
  accountId: number;
  closedSessions: number;
  totalSales: number;
  loyaltyMemberships: any[];
  lastActivity: string;
  loyaltyProgram?: LoyaltyLedger;
  flashProgram?: LoyaltyLedger;
}

export interface IUserTalonOneAttributes {
  Email: string;
  Name: string;
  devTier: ETier;
  lastOrder: string;
  lastVipUsedTime: string;
  phoneNumber: string;
  vipCounterMax: number;
  vipCounterSession: number;
  vipCounterUsage: number;
  vipEndTime: string;
  vipGroup: string;
  vipStartTime: string;
  vipStatus: boolean;
}
