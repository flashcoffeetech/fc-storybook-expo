import {EDeliveryMethod} from '@appTypes/delivery.type';
import {EOrderDisplayCode, EOrderStatus, IOrder} from '@appTypes/order.type';
import {PaymentOption} from '@appTypes/paymentMethod.type';

export const pickupOrderData = (orderData: IOrder) => {
  const order = {...orderData};
  const isPickup = order?.deliveryMethod === EDeliveryMethod.PICKUP;
  const shouldTranslate = !order?.displayStatusCode && isPickup;

  if (shouldTranslate) {
    return translatePickupOrderStatus(order);
  }
  return order;
};

/**
 * This util made to support old order data that not defined "displayStatusCode"
 * please refer to BE util in this link
 * https://gitlab.com/flashcoffee/devteam/services/order/-/blob/dev/src/modules/order/utils/translatePickupOrderStatus.ts
 */
export const translatePickupOrderStatus = (order: IOrder) => {
  if (order.status === EOrderStatus.CREATED) {
    if (order.paymentMethod !== PaymentOption.CASH) {
      order.displayStatusCode = EOrderDisplayCode.OS001;
    } else {
      order.displayStatusCode = EOrderDisplayCode.OS002;
    }
  } else if (
    order.status === EOrderStatus.PAID &&
    order.paymentMethod !== PaymentOption.CASH
  ) {
    order.displayStatusCode = EOrderDisplayCode.OS002;
  } else if (order.status === EOrderStatus.PROCESSED) {
    order.displayStatusCode = EOrderDisplayCode.OS003;
  } else if (order.status === EOrderStatus.COMPLETED) {
    order.displayStatusCode = EOrderDisplayCode.OS005;
  } else if (order.status === EOrderStatus.PICKED_UP) {
    order.displayStatusCode = EOrderDisplayCode.OS008;
  } else if (
    order.status === EOrderStatus.FAILED &&
    order.paymentMethod !== PaymentOption.CASH
  ) {
    order.displayStatusCode = EOrderDisplayCode.OS009;
  } else if (order.status === EOrderStatus.REJECTED) {
    order.displayStatusCode = EOrderDisplayCode.OS010;
  } else if (
    order.status === EOrderStatus.CANCELED &&
    order.paymentMethod === PaymentOption.CASH
  ) {
    order.displayStatusCode = EOrderDisplayCode.OS011;
  } else if (
    order.status === EOrderStatus.NOT_PICKED_UP &&
    order.paymentMethod === PaymentOption.CASH
  ) {
    order.displayStatusCode = EOrderDisplayCode.OS013;
  } else if (
    order.status === EOrderStatus.NOT_PICKED_UP &&
    order.paymentMethod !== PaymentOption.CASH
  ) {
    order.displayStatusCode = EOrderDisplayCode.OS014;
  }
  return order;
};
