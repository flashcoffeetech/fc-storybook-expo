import {ESessionInvalidCode} from './talonOne.type';

export interface IErrorParam {
  unavailableItems?: string[];
  unavailableItemsLabel?: string;
  pickupTime?: string;
  storeOpenTime?: string;
  storeCloseTime?: string;
  deliveryOpenTime?: string;
  deliveryCloseTime?: string;
  maximumQtyDelivery?: number;
  maxQtyDelivery?: number;
  dayName?: string;
}
export interface ErrorData {
  code?: number;
  errorCode: EExceptionCode | ESessionInvalidCode;
  exceptionCode?: EExceptionCode | ESessionInvalidCode;
  message?: string;
  title?: string;
  errorParams: IErrorParam;
}

export enum EExceptionCode {
  STORE_IS_CLOSED = 'OE001',
  STORE_IS_BUSY = 'OE002',
  UNAVAILABLE_ITEM = 'OE003',
  INCORRECT_PICKUP_TIME = 'OE004',
  CANNOT_UPDATE_CURRENT_STATUS = 'OE005',
  INVALID_SMALL_ORDER_FEE = 'OE006',
  PICKUP_OUT_OF_OPERATIONAL_TIME = 'OE007',
  DELIVERY_OUT_OF_OPERATIONAL_TIME = 'OE008',
  DELIVERY_OUT_OF_RANGE = 'OE009',
  UNAVAILABLE_ITEM_VARIANT = 'OE010',
  PICKUP_FOR_TOMORROW = 'OE011',
  DELIVERY_MAX_DISTANCE = 'EPDG005',
  INVALID_COORDINATES = 'EPDG002',
  MAX_QTY_DELIVERY = 'OE013',
}
