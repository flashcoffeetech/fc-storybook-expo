import {IPartnerMeta, EDeliveryDelayWarning} from './delivery.type';
import {ELanguage} from './language.type';

export enum EStoreFilter {
  ALL = 'ALL',
  PICKUP = 'PICKUP_ONLY',
  DELIVERY = 'DELIVERY_ONLY',
}

export interface IStore {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  storehubId: string;
  storeName: string;
  streetAddress: string;
  city: string;
  state: string;
  country: string;
  countryCode: string;
  postCode: string;
  latitude: number;
  longitude: number;
  isNearest: boolean;
  distance: {raw: number; formatted: string};
  isOpen: boolean;
  isClosedToday: boolean;
  openTime: string;
  closeTime: string;
  timezone: string;
  isActive: boolean;
  storeTime: IStoreTime[];
  storeImage?: string;
  storeCode?: string;
  temporaryClose?: boolean;
  isDeliveryEnabled?: boolean;
  isSelfPickupEnabled?: boolean;
  distanceInKm?: number;
  phoneNumber?: string;
  deliveryNotes?: string;
  deliveryPartner?: IPartnerMeta;
  deliveryOpenTime?: string;
  deliveryCloseTime?: string;
  isHidden?: boolean;
  isSelected?: boolean;
  defaultPickupTimeAddVar?: number;
  config?: IStoreConfig;
  forceClose?: number;
  _lang?: {
    city?: {[key in ELanguage]?: string};
    name?: {[key in ELanguage]?: string};
    state?: {[key in ELanguage]?: string};
    country?: {[key in ELanguage]?: string};
    streetAddress?: {[key in ELanguage]?: string};
  };
}

export interface IStoreTime {
  dayName: string;
  openTime: string;
  closeTime: string;
  deliveryOpenTime?: string;
  deliveryCloseTime?: string;
  closed: boolean;
}

export interface IStoreConfig {
  leadDeliveryTime?: number;
  leadLastDeliveryTime?: number;
  defaultPickupTimeAddVar?: number;
  restrictionEmail: string;
  maxQtyDelivery: number;
  recommendedTitle?: string;
  deliveryDelayWarning?: EDeliveryDelayWarning;
  deliveryDelayMinutes?: number;
}
