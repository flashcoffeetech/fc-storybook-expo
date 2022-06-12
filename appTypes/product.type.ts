import {ELanguage} from './language.type';
export interface ICategory {
  id: string;
  createdAt: string;
  updatedAt: string;
  categoryName: string;
  categoryOrder: number;
  isVisible: boolean;
  anchor?: number;
  products?: IProduct[];
}
export interface IProduct {
  isAvailableForDelivery: boolean;
  sellingPrice: number;
  id: string;
  storehubId: string;
  name: string;
  tags: string[];
  category: ICategory;
  subCategory: string;
  sku: string;
  priceType: string;
  price: number;
  storePrice: number;
  cost: number;
  variants: IVariant[];
  trackStockLevel: boolean;
  isParentProduct: boolean;
  image: string;
  shortDescription: string;
  shortDescriptionLocale: string;
  description: string;
  descriptionLocale: string;
  outOfStock: boolean;
  availability: number;
  availabilityBool: boolean;
  variant?: number;
  sic?: string;
  _lang?: {
    name?: {[key in ELanguage]?: string};
    description?: {[key in ELanguage]?: string};
    shortDescription?: {[key in ELanguage]?: string};
  };
  isRecommended?: boolean;
  displayPrice?: number;
  isSelling?: boolean;
  notes?: string;
}

export interface IDeliveryProductPayload {
  description: string;
  descriptionLocale: string;
  shortDescription: string;
  shortDescriptionLocale: string;
}

export interface IVariant {
  id: string;
  name: string;
  nameLocale: string;
  options: IVariantOption[];
  regularOptions: IVariantOption[];
  upsizeOptions: IVariantOption[];
  isMultiple: boolean;
  isWithIcon: boolean;
  isRequired: boolean;
  isDirty: boolean;
}

export interface IProductChecks {
  checks: string[];
}

export interface IOptionChecks {
  data: string[];
}

export interface IVariantOption {
  id: string;
  name: string;
  nameLocale: string;
  isDefault: boolean;
  priceDifference: number;
  icon: string;
  isSelected?: boolean;
}

export interface IProductAvailability {
  productId: string;
  availabilityBool: boolean;
}

export interface IProductAvailabilityList {
  data: IProductAvailability[];
}

export interface IOptionAvailability {
  productId: string;
  isProductAvailable: boolean;
  isOptionsAvailable: boolean;
}

export interface IOptionAvailabilityList {
  data: IOptionAvailability[];
}

export interface ILoggedProduct {
  id: string;
  name: string;
  outOfStock: boolean;
  availabilityBool: boolean;
  availability: number;
  isAvailableForDelivery: boolean;
  isSelling: boolean;
  qty: number;
}
