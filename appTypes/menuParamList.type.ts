import {IProduct} from '@appTypes/product.type';

export type MenuParamList = {
  Product: undefined;
  ProductDetail: {
    item: IProduct;
    caller: 'Product' | 'ProductDetail';
    currentVariant?: number | undefined;
    productSlug?: string;
    productAvailability?: boolean;
    type?: string;
  };
};
