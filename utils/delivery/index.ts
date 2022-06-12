import {EDeliveryStatus, IOrderDelivery} from '@appTypes/delivery.type';
import {isDriverToCustomer, isDriverToStore} from '@utils/orderUtil';
import {getDuration} from '@utils/timeUtil';
import {TFunction} from 'i18next';
import moment from 'moment';

export const getDeliveryInfo = (
  orderDelivery: IOrderDelivery,
  maxDeliveryTimeAddVar = 5,
) => {
  const isDriverOnTheWay =
    isDriverToCustomer(orderDelivery?.status) ||
    isDriverToStore(orderDelivery?.status);

  const isDelivered = orderDelivery?.status === EDeliveryStatus.DELIVERED;

  const isDeliveryFailed =
    orderDelivery?.status === EDeliveryStatus.FAILED ||
    orderDelivery?.status === EDeliveryStatus.REJECTED ||
    orderDelivery?.status === EDeliveryStatus.CANCELLED;

  const driverToCustomer = isDriverToCustomer(orderDelivery?.status);

  const estDeliveryTime = getDuration(
    orderDelivery?.estimatedDeliveryTime,
    'minutes',
  );
  const estMaxDeliveryTime = getDuration(
    moment(orderDelivery?.estimatedDeliveryTime)
      .add(maxDeliveryTimeAddVar, 'minutes')
      .toString(),
    'minutes',
  );

  const estDeliveryTimeLabel =
    estDeliveryTime > 0
      ? `${estDeliveryTime} - ${estMaxDeliveryTime}`
      : `${estMaxDeliveryTime}`;

  return {
    isDriverOnTheWay,
    isDelivered,
    isDeliveryFailed,
    isDriverToCustomer: driverToCustomer,
    estDeliveryTime,
    estMaxDeliveryTime,
    estDeliveryTimeLabel,
  };
};

export const driverStatusMessage = (
  t: TFunction,
  isOrderFailed: boolean,
  status: EDeliveryStatus,
  estMaxDeliveryTime: number,
  estDeliveryTimeLabel: string,
): string => {
  let result = `${t('general.pleaseWaitLookingForDriver')}`;

  if (isOrderFailed) {
    result = t('general.cantDeliverOrder');
  }

  switch (status) {
    case EDeliveryStatus.COURIER_ACCEPTED_DELIVERY:
    case EDeliveryStatus.NEAR_VENDOR:
    case EDeliveryStatus.PICKED_UP:
    case EDeliveryStatus.COURIER_LEFT_VENDOR:
    case EDeliveryStatus.NEAR_CUSTOMER:
    case EDeliveryStatus.DELAYED: {
      if (estMaxDeliveryTime <= 0) {
        result = `${t('general.driverTakeLongDelivery')}`;
      } else {
        result = `${t('general.estCourierToCustomer', {
          time: estDeliveryTimeLabel,
          unit: 'min',
        })}`;
      }
      break;
    }

    case EDeliveryStatus.DELIVERED:
      result = t('general.alreadySent');
      break;

    case EDeliveryStatus.REJECTED:
    case EDeliveryStatus.FAILED:
    case EDeliveryStatus.CANCELLED:
      result = t('general.cantDeliverOrder');
      break;
  }

  return result;
};

export const selectedDeliveryInstructionID = (
  map: {id: number; label: string}[],
  selectedLabel: string,
): number => {
  const foundPair = map.find(obj => {
    return obj.label === selectedLabel;
  });
  return foundPair ? foundPair?.id : 0;
};
