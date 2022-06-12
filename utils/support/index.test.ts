import {ICartItems} from '@appTypes/cart.type';
import {ECountry} from '@appTypes/location.type';
import {ICategory, IVariantOption} from '@appTypes/product.type';
import {chatWithSupport, goToEmail, goToPhone, goToZendesk} from './index';

const testCategory: ICategory = {
  id: '',
  createdAt: '',
  updatedAt: '',
  categoryName: '',
  categoryOrder: 0,
  isVisible: false,
};

const userAddress: any = {
  formattedAddress: '',
  addressDetails: 'Jalan ABC nomor 123',
  remark: '',
};

const testVariantOption: IVariantOption[] = [
  {
    id: '1',
    name: 'hot',
    nameLocale: '',
    isDefault: true,
    priceDifference: 0,
    icon: '',
    isSelected: true,
  },
  {
    id: '2',
    name: 'medium',
    nameLocale: '',
    isDefault: true,
    priceDifference: 0,
    icon: '',
    isSelected: true,
  },
  {
    id: '3',
    name: 'medium',
    nameLocale: '',
    isDefault: true,
    priceDifference: 0,
    icon: '',
    isSelected: false,
  },
];

const testVariant: any[] = [
  {
    options: testVariantOption,
  },
];

const testItem: any = {
  qty: 1,
  optionPrice: 10000,
  product: {
    id: '1',
    storehubId: '1',
    name: 'americano',
    tags: ['drink', 'coffee'],
    category: testCategory,
    subCategory: 'beverage',
    priceType: 'price',
    price: 20000,
    storePrice: 25000,
    cost: 1,
    variants: testVariant,
    trackStockLevel: true,
    isParentProduct: true,
    image: 'image',
    shortDescription: 'delicious drink',
    shortDescriptionLocale: 'delicious drink',
    description: 'delicious drink',
    descriptionLocale: 'delicious drink',
    outOfStock: false,
    availability: 10,
    availabilityBool: true,
  },
  subTotalPrice: 5000,
  totalPrice: 15000,
  variantNo: 1,
};

const testItems: ICartItems = {key: testItem};

const idCountryID: any = {
  code: ECountry.ID,
};

const store: any = {
  storeName: 'storeName',
  phoneNumber: '+6281234567890',
};

it('chat with support ID working', () => {
  chatWithSupport({
    currentCountry: idCountryID,
    selectedStore: store,
    cartItems: testItems,
    nameOfUser: 'Fido',
    deliveryAddress: userAddress,
    callbackForZendeskChat: () => {},
  });
});

it('go to phone working', () => {
  goToPhone(store);
});

it('go to email working', () => {
  goToEmail(
    {
      cartItems: testItems,
      selectedStore: store,
      phoneNumber: store?.phoneNumber,
      nameOfUser: 'Adam',
      deliveryAddress: userAddress,
    },
    {
      contact: 'support@flash-coffee.com',
    },
  );
});

it('go to email zendesk working', () => {
  goToZendesk(() => {});
});
