import {EOrderType} from '@appTypes/order.type';
import 'react-native';
import {calculateCart} from '.';

const data: any = {
  orderType: EOrderType.PICKUP,
  items: {
    '7c9fb2b0-b84d-4609-9450-56f1c93e6575-1': {
      qty: 4,
      optionPrice: 0,
      subTotalPrice: 4.8,
      totalPrice: 19.2,
      variantNo: 1,
    },
  },
  cleanHubDonationAmount: 3,
  cleanHubDonation: false,
  deliveryEstimation: {
    estimatedPickupTime: '2022-03-15T02:10:01.39184Z',
    estimatedDeliveryTime: '2022-03-15T02:10:01.39184Z',
    estimatedDeliveryFee: 3.49,
  },
  deliveryFeeDiscount: 0,
  discount: 9.6,
  sof: {
    orderFee: 0.4,
    minimumOrderAmount: 10,
  },
};

it('[CASE 1] Pickup calculate cart with cleanHubDonation === true', async () => {
  const cartData = {...data};
  cartData.orderType = EOrderType.PICKUP;
  cartData.cleanHubDonationAmount = 6;
  cartData.cleanHubDonation = true;

  expect(calculateCart(cartData)).toEqual({
    cleanHubDonationAmount: 6,
    cleanHubDonation: true,
    deliveryFee: 0,
    deliveryFeeDiscount: 0,
    deliverySmallOrderFee: {orderFee: 0, minimumOrderAmount: 0},
    discount: 9.6,
    paidVoucherDiscount: 0,
    subTotal: 19.2,
    totalAmount: 9.6,
    totalPayment: 15.6,
    totalQty: 4,
  });
});

it('[CASE 2] Pickup calculate cart with cleanHubDonation === false', async () => {
  const cartData = {...data};
  cartData.orderType = EOrderType.PICKUP;
  cartData.cleanHubDonationAmount = 4;
  cartData.cleanHubDonation = false;

  expect(calculateCart(cartData)).toEqual({
    cleanHubDonationAmount: 4,
    cleanHubDonation: false,
    deliveryFee: 0,
    deliveryFeeDiscount: 0,
    deliverySmallOrderFee: {orderFee: 0, minimumOrderAmount: 0},
    discount: 9.6,
    paidVoucherDiscount: 0,
    subTotal: 19.2,
    totalAmount: 9.6,
    totalPayment: 9.6,
    totalQty: 4,
  });
});

it('[CASE 3] Delivery calculate cart with cleanHubDonation === true', async () => {
  const cartData = {...data};
  cartData.orderType = EOrderType.DELIVERY;
  cartData.cleanHubDonationAmount = 6;
  cartData.cleanHubDonation = true;

  expect(calculateCart(cartData)).toEqual({
    cleanHubDonationAmount: 6,
    cleanHubDonation: true,
    deliveryFee: 3.49,
    deliveryFeeDiscount: 0,
    deliverySmallOrderFee: {orderFee: 0.4, minimumOrderAmount: 10},
    discount: 9.6,
    paidVoucherDiscount: 0,
    subTotal: 19.2,
    totalAmount: 9.6,
    totalPayment: 19.49,
    totalQty: 4,
  });
});

it('[CASE 4] Delivery calculate cart with cleanHubDonation === false', async () => {
  const cartData = {...data};
  cartData.orderType = EOrderType.DELIVERY;
  cartData.cleanHubDonationAmount = 4;
  cartData.cleanHubDonation = false;

  expect(calculateCart(cartData)).toEqual({
    cleanHubDonationAmount: 4,
    cleanHubDonation: false,
    deliveryFee: 3.49,
    deliveryFeeDiscount: 0,
    deliverySmallOrderFee: {orderFee: 0.4, minimumOrderAmount: 10},
    discount: 9.6,
    paidVoucherDiscount: 0,
    subTotal: 19.2,
    totalAmount: 9.6,
    totalPayment: 13.49,
    totalQty: 4,
  });
});

it('[CASE 5] Calculate cart does not have items', async () => {
  const cartData = {...data};
  delete cartData.items;

  expect(calculateCart(cartData)).toEqual({
    cleanHubDonationAmount: 3,
    cleanHubDonation: false,
    deliveryFee: 0,
    deliveryFeeDiscount: 0,
    deliverySmallOrderFee: {orderFee: 0, minimumOrderAmount: 0},
    discount: 0,
    paidVoucherDiscount: 0,
    subTotal: 0,
    totalAmount: 0,
    totalPayment: 0,
    totalQty: 0,
  });
});

it('[CASE 6] Calculate cart does not have orderType will treat as order pickup', async () => {
  const cartData = {...data};
  delete cartData.orderType;

  expect(calculateCart(cartData)).toEqual({
    cleanHubDonationAmount: 3,
    cleanHubDonation: false,
    deliveryFee: 0,
    deliveryFeeDiscount: 0,
    deliverySmallOrderFee: {orderFee: 0, minimumOrderAmount: 0},
    discount: 9.6,
    paidVoucherDiscount: 0,
    subTotal: 19.2,
    totalAmount: 9.6,
    totalPayment: 9.6,
    totalQty: 4,
  });
});
