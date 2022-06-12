export interface ITalonOneCartItem {
  name: string;
  sku: string;
  quantity: number;
  price: number;
  category: string;
  position: number;
  attributes: {[key: string]: any};
}

export interface PaymentInfo {
  method: string;
  brand?: string;
  cardNumber?: string;
}

export interface TalonOneOrder {
  cartItems: ITalonOneCartItem[];
  couponCodes?: string[];
  attributes?: ITalonOneAttributes;
  additionalCosts?: {[key: string]: any};
}

export interface IValidateVoucher {
  couponCode: string;
}

export interface ITalonOneAttributes {
  [key: string]: any;
  appliedPromotion?: number;
}
