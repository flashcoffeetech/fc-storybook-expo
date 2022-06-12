import {IDeliveryProductPayload, IProduct, IVariant} from './product.type';

export interface IOrderItem {
  createdAt?: string;
  decimalDiscount?: number;
  decimalPrice?: number;
  decimalSubTotal?: number;
  decimalTax?: number;
  decimalTotal?: number;
  discount: number;
  id?: string;
  itemVariantPrice?: number;
  notes?: string;
  price?: number;
  product: IProduct;
  productId: string;
  productName: string;
  productType?: string;
  quantity: number;
  storehubId: string;
  subTotal: number;
  tax?: number;
  taxCode?: string;
  total: number;
  updatedAt?: string;
  variantAvailableIn?: string;
  variantAvailableInPrice?: number;
  variantCombinedPrice?: number;
  variantExtraShot?: string;
  variantExtraShotPrice?: number;
  variantExtraSyrup?: string;
  variantExtraSyrupPrice?: number;
  variantMilkType?: string;
  variantMilkTypePrice?: number;
  variants?: IVariant[];
  variantSize?: string;
  variantSizePrice?: number;
  variantSugarLevel?: string;
  variantSugarLevelPrice?: number;
}

export interface IOrderDeliveryItem {
  productId: string;
  discount: number;
  price?: number;
  product: IDeliveryProductPayload;
  productName: string;
  quantity: number;
  subTotal: number;
  total: number;
}
