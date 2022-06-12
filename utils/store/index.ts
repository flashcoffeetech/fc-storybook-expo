import {ICountry} from '@appTypes/location.type';
import {EOrderType} from '@appTypes/order.type';
import {IStore} from '@appTypes/store.type';
import remoteConfigUtil from '@utils/remoteConfig';
import moment from 'moment';

export const availablePickupTimes = (
  store: IStore,
  addedTimeInMinutes: number = 0,
  currentTime = moment(),
): Date[] => {
  const DEFAULT_TIME_ADD_INTERVAL = 15;
  const DEFAULT_TIME_REMAINDER = 5;

  const pickupTimes: Date[] = [];

  if (!store) {
    return pickupTimes;
  }

  const openTime = store?.openTime;
  const closeTime = store?.closeTime;

  const startTime = moment(openTime.toString(), 'HH:mm');

  const remainder =
    DEFAULT_TIME_REMAINDER - (startTime.minute() % DEFAULT_TIME_REMAINDER);

  const startTimeRounded = startTime.add(remainder, 'minutes').second(0);

  const endTime = moment(closeTime.toString(), 'HH:mm').subtract(
    addedTimeInMinutes,
    'minutes',
  );

  while (startTimeRounded < endTime) {
    if (startTimeRounded > currentTime) {
      pickupTimes.push(
        moment(startTimeRounded)
          .add(DEFAULT_TIME_ADD_INTERVAL, 'minutes')
          .toDate(),
      );
    }
    startTimeRounded.add(DEFAULT_TIME_ADD_INTERVAL, 'minutes');
  }

  return pickupTimes;
};

export const defaultPickupTimeVar = (
  store: IStore,
  country: ICountry,
): number => {
  const storeConfig = store?.config;
  const STORE_PICKUP_ADDED_TIME_VAR = Number(
    storeConfig?.defaultPickupTimeAddVar,
  );

  const RC_PICKUP_ADDED_TIME_VAR = remoteConfigUtil.getDefaultPickupTimeAddVar(
    country?.code,
  );

  return STORE_PICKUP_ADDED_TIME_VAR || RC_PICKUP_ADDED_TIME_VAR || 0;
};

export const getValidStoreOrderType = (
  store: IStore,
  currentOrderType: EOrderType,
): EOrderType => {
  const isDelivery = currentOrderType === EOrderType.DELIVERY;
  const isDeliveryEnabled = store?.isDeliveryEnabled;
  const isPickupEnabled = store?.isSelfPickupEnabled;

  if (isDelivery && !isDeliveryEnabled) {
    return EOrderType.PICKUP;
  } else if (!isDelivery && !isPickupEnabled) {
    return EOrderType.DELIVERY;
  }

  return currentOrderType || EOrderType.PICKUP;
};

export const storeOperationalTime = (selectedStore: IStore): IStore => {
  const store = selectedStore;
  if (store?.storeTime?.length) {
    const today = moment().format('dddd').toLowerCase();
    const data = store?.storeTime.find(i => i.dayName === today);
    const {config} = store;
    if (data) {
      store.closeTime = data.closeTime;
      store.openTime = data.openTime;

      if (config?.leadDeliveryTime && config?.leadLastDeliveryTime) {
        store.deliveryOpenTime = String(
          moment(store?.openTime, 'HH:mm')
            .add(config?.leadDeliveryTime || 0, 'minutes')
            .format('HH:mm'),
        );
        store.deliveryCloseTime = String(
          moment(store?.closeTime, 'HH:mm')
            .subtract(config?.leadLastDeliveryTime || 0, 'minutes')
            .format('HH:mm'),
        );
      }
    }
  }
  return store;
};

export const isMaxQtyDeliveryReached = (
  selectedStore: IStore,
  cartItemCount: number,
  orderType: EOrderType,
): boolean => {
  const maxQtyDelivery = selectedStore?.config?.maxQtyDelivery;
  const isMaxQtyDelivery = cartItemCount > maxQtyDelivery;
  return orderType === EOrderType.DELIVERY && isMaxQtyDelivery;
};
