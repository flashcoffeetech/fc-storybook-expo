import {ICountry, IUserAddress} from '@appTypes/location.type';
import remoteConfigUtil from '@utils/remoteConfig';
import {IStore} from '@appTypes/store.type';
import {ICartItems} from '@appTypes/cart.type';
import {IVariant, IVariantOption} from '@appTypes/product.type';
import {Linking} from 'react-native';

export interface IChatWithSupport {
  selectedStore: IStore;
  cartItems: ICartItems;
  nameOfUser?: string;
  phoneNumber?: string;
  currentCountry?: ICountry;
  deliveryAddress?: IUserAddress;
  callbackForZendeskChat?: () => void;
}

export enum EBulkServiceType {
  STORE_PHONE = 'storePhone',
  EMAIL = 'email',
  ZENDESK = 'zendesk',
}

export interface ICustomerBulkService {
  type?: EBulkServiceType;
  contact?: string;
}

export interface ICustomerBulkService {
  type?: EBulkServiceType;
  contact?: string;
}

const defaultDeliveryAddress: any = {
  formattedAddress: '',
  addressDetails: '',
  remark: '',
};

export const translateOptionsList = (variants: IVariant[] = []): string => {
  const options: string[] = [];

  variants.forEach((variant: IVariant) => {
    variant.options.forEach((option: IVariantOption) => {
      if (option.isSelected) {
        options.push(option.name);
      }
    });
  });

  const translated: string[] = [];

  options?.map(item => {
    translated.push(item);
  });
  return translated.join(' \u00B7 ');
};

export const goToEmail = async (
  {
    cartItems,
    deliveryAddress,
    nameOfUser,
    phoneNumber,
    selectedStore,
  }: IChatWithSupport,
  {contact}: ICustomerBulkService,
) => {
  let wordingForProduct: string = '';

  Object.keys(cartItems).forEach(async (key: string) => {
    const {qty, product} = cartItems[key];

    const options = translateOptionsList(product.variants);

    wordingForProduct =
      wordingForProduct + `- ${product.name}: ${options} x ${qty}\n`;
  });

  const deliveryAddressForEmail = deliveryAddress
    ? `Delivery Address: \n- ${deliveryAddress?.formattedAddress} \n- 
    ${deliveryAddress?.addressDetails} \n- ${deliveryAddress?.remark}`
    : '';

  Linking.openURL(
    `mailto:${contact}?cc=support@flash-coffee.com&subject=Delivery Order - ${nameOfUser}${
      phoneNumber ? ' - ' + phoneNumber : ''
    }&body=Hey,\n\nI would like to place a bulk order.
    \nStore: ${selectedStore?.storeName}.
    \n${deliveryAddressForEmail}.
    \nCompany/Group Name: <Optional, add if you are ordering for a group>
    \nTime: <When do you want the order to be delivered>
    \nOrder: \n${wordingForProduct.replace('undefined', '')}
    \nNotes: <Please add additional info that we should know>`,
  );
};

export const goToPhone = async (store: IStore) => {
  const storePhoneNumber = store?.phoneNumber;
  Linking.openURL(`tel:${storePhoneNumber}`);
};

export const goToZendesk = (callback?: Function) => {
  callback();
};

export const chatWithSupport = async ({
  currentCountry,
  selectedStore,
  cartItems,
  nameOfUser,
  phoneNumber,
  deliveryAddress = defaultDeliveryAddress,
  callbackForZendeskChat = () => {},
}: IChatWithSupport): Promise<void> => {
  const customerBulkService: ICustomerBulkService = await JSON.parse(
    remoteConfigUtil?.getBulkOrderContact(currentCountry?.code),
  );

  switch (customerBulkService?.type) {
    case EBulkServiceType.EMAIL:
      return goToEmail(
        {
          cartItems,
          nameOfUser,
          phoneNumber,
          selectedStore,
          deliveryAddress,
        },
        {contact: customerBulkService?.contact},
      );

    case EBulkServiceType.STORE_PHONE:
      return goToPhone(selectedStore);

    case EBulkServiceType.ZENDESK:
      return goToZendesk(() => callbackForZendeskChat());

    default:
      return goToZendesk(() => callbackForZendeskChat());
  }
};
