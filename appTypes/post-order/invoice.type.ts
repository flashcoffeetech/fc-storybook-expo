export enum EProcessType {
  B2B = 'B2B',
  B2C = 'B2C',
}

export interface IInvoiceOptions {
  id?: string;
  orderId?: string;
  buyerId: string;
  processType?: string;
  buyerName: string;
  email: string;
  isDefault: boolean;
}

export interface ITaxInvoice {
  invoiceNumber: string;
  createdAt: string;
}

export interface ITaxInvoiceResponse {
  success: boolean;
  payload: ITaxInvoice;
}
