export interface ITransaction {
  created: string;
  programID: number;
  customerProfileID: string;
  customerSessionID: string;
  type: string;
  amount: number;
  name: string;
  subLedgerID: string;
}

export interface Ledger {
  total: number;
  transactions: ITransaction[];
  expiringPoints: [];
}

export interface LoyaltyLedger {
  ledger: Ledger;
  subLedgers: Ledger;
}
