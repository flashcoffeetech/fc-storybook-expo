import _ from "lodash";
import * as appTheme from "../../assets/custom-theme.json";
import {
  EOrderDisplayCode,
  EOrderDisplayLokalise,
  EOrderStatus,
  IOrder,
} from "../../appTypes/order.type";
import { IOrderDeliveryItem, IOrderItem } from "../../appTypes/orderItem.type";
import { formatToDecimal } from "../../utils/numberFormat";
import {
  EDeliveryMethod,
  EDeliveryStatus,
  EDeliveryStatusLokalise,
} from "../../appTypes/delivery.type";
import { assets } from "../../assets/assets";
import { ImageSourcePropType } from "react-native";
import { ICartItems } from "../../appTypes/cart.type";
import { IDeliveryProductPayload } from "../../appTypes/product.type";

const ORDER_STATUS_COLOR = {
  [EOrderDisplayCode.OS001]: appTheme["color-primary-500"],
  [EOrderDisplayCode.OS002]: appTheme["color-primary-500"],
  [EOrderDisplayCode.OS003]: appTheme["color-primary-500"],
  [EOrderDisplayCode.OS004]: appTheme["color-primary-500"],
  [EOrderDisplayCode.OS005]: appTheme["color-primary-500"],
  [EOrderDisplayCode.OS006]: appTheme["color-primary-500"],
  [EOrderDisplayCode.OS007]: appTheme["color-downy"],
  [EOrderDisplayCode.OS008]: appTheme["color-downy"],
};

const ORDER_IMAGE_STATUS_DISPLAY = {
  [EOrderDisplayCode.OS001]: assets.image.waitingForPayment,
  [EOrderDisplayCode.OS002]: assets.image.weReceiveYourOrder,
  [EOrderDisplayCode.OS003]: assets.image.preparing,
  [EOrderDisplayCode.OS004]: assets.image.waitingForDriverToPickup,
  [EOrderDisplayCode.OS005]: assets.image.readyToPickup,
  [EOrderDisplayCode.OS006]: assets.image.driverOnTheWay,
  [EOrderDisplayCode.OS007]: assets.image.deliveryCompleted,
  [EOrderDisplayCode.OS008]: assets.image.pickupCompleted,
  [EOrderDisplayCode.OS009]: assets.image.failed,
  [EOrderDisplayCode.OS010]: assets.image.failed,
  [EOrderDisplayCode.OS011]: assets.image.failed,
  [EOrderDisplayCode.OS012]: assets.image.failed,
  [EOrderDisplayCode.OS013]: assets.image.failed,
  [EOrderDisplayCode.OS014]: assets.image.failed,
};

const ORDER_STATUS_DISPLAY = {
  [EOrderDisplayCode.OS001]: EOrderDisplayLokalise.WAITING_FOR_PAYMENT,
  [EOrderDisplayCode.OS002]: EOrderDisplayLokalise.WE_GOT_YOUR_ORDER,
  [EOrderDisplayCode.OS003]: EOrderDisplayLokalise.PREPARING_YOUR_ORDER,
  [EOrderDisplayCode.OS004]: EOrderDisplayLokalise.DRIVER_PICKUP,
  [EOrderDisplayCode.OS005]: EOrderDisplayLokalise.READY_FOR_PICKUP,
  [EOrderDisplayCode.OS006]: EOrderDisplayLokalise.DRIVER_ON_THE_WAY,
  [EOrderDisplayCode.OS007]: EOrderDisplayLokalise.COMPLETED,
  [EOrderDisplayCode.OS008]: EOrderDisplayLokalise.COMPLETED,
  [EOrderDisplayCode.OS009]: EOrderDisplayLokalise.FAILED,
  [EOrderDisplayCode.OS010]: EOrderDisplayLokalise.REJECTED,
  [EOrderDisplayCode.OS011]: EOrderDisplayLokalise.CANCELED,
  [EOrderDisplayCode.OS012]: EOrderDisplayLokalise.DRIVER_ISSUE,
  [EOrderDisplayCode.OS013]: EOrderDisplayLokalise.NOT_PICKED_UP,
  [EOrderDisplayCode.OS014]: EOrderDisplayLokalise.NOT_PICKED_UP,
};

const DELIVERY_STATUS_DISPLAY = {
  [EDeliveryStatus.DRAFT]: EDeliveryStatusLokalise.DRAFT,
  [EDeliveryStatus.NEW]: EDeliveryStatusLokalise.NEW,
  [EDeliveryStatus.RECEIVED]: EDeliveryStatusLokalise.RECEIVED,
  [EDeliveryStatus.WAITING_FOR_TRANSPORT]:
    EDeliveryStatusLokalise.WAITING_FOR_TRANSPORT,
  [EDeliveryStatus.ASSIGNED_TO_TRANSPORT]:
    EDeliveryStatusLokalise.ASSIGNED_TO_TRANSPORT,
  [EDeliveryStatus.COURIER_ACCEPTED_DELIVERY]:
    EDeliveryStatusLokalise.COURIER_ACCEPTED_DELIVERY,
  [EDeliveryStatus.NEAR_VENDOR]: EDeliveryStatusLokalise.NEAR_VENDOR,
  [EDeliveryStatus.PICKED_UP]: EDeliveryStatusLokalise.PICKED_UP,
  [EDeliveryStatus.COURIER_LEFT_VENDOR]:
    EDeliveryStatusLokalise.COURIER_LEFT_VENDOR,
  [EDeliveryStatus.NEAR_CUSTOMER]: EDeliveryStatusLokalise.NEAR_CUSTOMER,
  [EDeliveryStatus.DELIVERED]: EDeliveryStatusLokalise.DELIVERED,
  [EDeliveryStatus.DELAYED]: EDeliveryStatusLokalise.DELAYED,
  [EDeliveryStatus.CANCELLED]: EDeliveryStatusLokalise.CANCELLED,
  [EDeliveryStatus.REJECTED]: EDeliveryStatusLokalise.REJECTED,
  [EDeliveryStatus.FAILED]: EDeliveryStatusLokalise.FAILED,
};

export const getOrderStatus = (
  orderDisplayStatusCode: EOrderDisplayCode | string
): string => {
  const code = orderDisplayStatusCode || "";

  return ORDER_STATUS_DISPLAY[code] || EOrderDisplayLokalise.UNKNOWN;
};

export const resolveOrderStatus = (order: IOrder): string => {
  const { status, orderDelivery } = order;

  const isDelivery = isOrderDelivery(order?.deliveryMethod);
  const isProcessDelivery =
    status === EOrderStatus.COMPLETED || status === EOrderStatus.ON_DELIVERY;

  if (isDelivery && isProcessDelivery) {
    return orderDelivery?.status;
  } else {
    return status;
  }
};

export const isOrderDelivery = (deliveryMethod: string): boolean => {
  return deliveryMethod === EDeliveryMethod.DELIVERY;
};

export const recalculateOrderHeader = (order: IOrder): IOrder => {
  // Recheck if the Order header subTotal is not match with the item details, then will recalculate and sum up
  let itemSubTotal: number = 0.0;
  _.forEach(order?.items, (item: IOrderItem) => {
    itemSubTotal += formatToDecimal(item.subTotal * item.quantity);
  });

  if (order.subTotal !== itemSubTotal) {
    order.subTotal = formatToDecimal(itemSubTotal);
    order.total = formatToDecimal(order.subTotal - order.discount);
  }
  return order;
};

export const getDeliveryStatus = (
  deliveryStatusCode: EOrderDisplayCode | string
): string => {
  const status = deliveryStatusCode || "";

  return DELIVERY_STATUS_DISPLAY[status] || EDeliveryStatusLokalise.UNKNOWN;
};

export const getOrderStatusImage = (
  orderDisplayStatusCode: EOrderDisplayCode | string
): ImageSourcePropType => {
  const code = orderDisplayStatusCode || "";

  return ORDER_IMAGE_STATUS_DISPLAY[code] || null;
};

export const orderStatusColor = (code: string): string => {
  return ORDER_STATUS_COLOR[code] || appTheme["color-hint"];
};

export const isDriverToStore = (deliveryStatus: string): boolean => {
  let result = false;

  switch (deliveryStatus) {
    case EDeliveryStatus.COURIER_ACCEPTED_DELIVERY:
    case EDeliveryStatus.NEAR_VENDOR:
      result = true;
      break;
    default:
      break;
  }

  return result;
};
export const isDriverToCustomer = (deliveryStatus: string): boolean => {
  let result = false;

  switch (deliveryStatus) {
    case EDeliveryStatus.PICKED_UP:
    case EDeliveryStatus.COURIER_LEFT_VENDOR:
    case EDeliveryStatus.NEAR_CUSTOMER:
    case EDeliveryStatus.DELAYED:
      result = true;
      break;
    default:
      break;
  }

  return result;
};

export const deliveryStatusColor = (deliveryStatus: string): string => {
  let color = appTheme["color-hint"];

  switch (deliveryStatus) {
    case EDeliveryStatus.DELIVERED:
      color = appTheme["color-downy"];
      break;

    case EDeliveryStatus.DRAFT:
    case EDeliveryStatus.NEW:
    case EDeliveryStatus.RECEIVED:
    case EDeliveryStatus.WAITING_FOR_TRANSPORT:
    case EDeliveryStatus.ASSIGNED_TO_TRANSPORT:
    case EDeliveryStatus.COURIER_ACCEPTED_DELIVERY:
    case EDeliveryStatus.NEAR_VENDOR:
    case EDeliveryStatus.PICKED_UP:
    case EDeliveryStatus.COURIER_LEFT_VENDOR:
    case EDeliveryStatus.NEAR_CUSTOMER:
    case EDeliveryStatus.DELAYED:
      color = appTheme["color-primary-500"];
      break;
    default:
      break;
  }
  return color;
};

export const generateOrderItems = (cartItems: ICartItems): IOrderItem[] => {
  const items: IOrderItem[] = [];

  Object.keys(cartItems).forEach((id: string) => {
    const { qty, totalPrice, subTotalPrice, product } = cartItems[id];

    const item: IOrderItem = {
      storehubId: product.storehubId,
      productId: id,
      productName: product.name,
      quantity: qty,
      total: formatToDecimal(totalPrice),
      subTotal: formatToDecimal(subTotalPrice),
      price: formatToDecimal(totalPrice),
      discount: 0,
      product,
      notes: product.notes,
    };

    items.push(item);
  });

  return items;
};

export const generateOrderDeliveryItems = (
  cartItems: ICartItems
): IOrderDeliveryItem[] => {
  const items: IOrderDeliveryItem[] = [];

  Object.keys(cartItems).forEach((id: string) => {
    const { qty, totalPrice, subTotalPrice, product } = cartItems[id];

    const productDelivery: IDeliveryProductPayload = {
      description: product.description,
      descriptionLocale: product.descriptionLocale,
      shortDescription: product.shortDescription,
      shortDescriptionLocale: product.shortDescriptionLocale,
    };

    const item: IOrderDeliveryItem = {
      productId: id,
      productName: product.name,
      quantity: qty,
      total: formatToDecimal(totalPrice),
      subTotal: formatToDecimal(subTotalPrice),
      price: formatToDecimal(totalPrice),
      discount: 0,
      product: productDelivery,
    };

    items.push(item);
  });

  return items;
};

export const getShortOrderId = (order: IOrder): string => {
  if (order?.randomDigit) {
    return `${order?.randomDigit}`;
  }

  return order?.id
    ? `${order.id
        .toUpperCase()
        .substring(order.id.length, order.id.length - 5)}`
    : undefined;
};
