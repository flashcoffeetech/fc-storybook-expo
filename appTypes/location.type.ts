import {GeocodingObject} from '@timwangdev/react-native-geocoder';

export enum ECountry {
  ID = 'ID',
  SG = 'SG',
  TH = 'TH',
  TW = 'TW',
  HK = 'HK',
  JP = 'JP',
  SK = 'SK',
  MY = 'MY',
  PH = 'PH',
  VT = 'VT',
}

export interface IGeocodingObject extends GeocodingObject {
  distance: number;
}

export interface ICountry {
  currencies: string[];
  currency: string;
  zones: string[];
  code: string;
  name: string;
}

export interface IPlaceID {
  addressName: string;
  placeID: string;
}

export interface IPlaces {
  formattedAddress: string;
  addressName: string;
  latitude: number;
  longitude: number;
}

export interface ILocation {
  latitude: number;
  longitude: number;
  course?: number;
  speed?: number;
  accuracy?: number;
  altitude?: number;
  altitudeAccuracy?: number;
  timestamp?: number;
}

export interface IUserAddress {
  id?: string;
  addressName: string;
  formattedAddress: string;
  longitude: number;
  latitude: number;
  country: ECountry;
  addressDetails: string;
  isDeleted: boolean;
  remark: string;
  distance?: number;
  recipientPhoneNumber: string;
  phoneNumber?: string;
  recipientName?: string;
}
