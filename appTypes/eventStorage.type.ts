import {ICountry} from './location.type';
import {IOrder} from './order.type';

export enum EEventStorage {
  PURCHASE = 'purchase',
}

export interface IEventStorage {
  event: EEventStorage;
  data: IOrder;
  country: ICountry;
}
