import {ICalculateCart, ICartItem, ISummaryCart} from '@appTypes/cart.type';
import {EOrderType} from '@appTypes/order.type';
import {formatToDecimal} from '@utils/numberFormat';
import _ from 'lodash';

const defaultSOF = {
  orderFee: 0,
  minimumOrderAmount: 0,
};

export const calculateCart = (params: ICalculateCart): ISummaryCart => {
  const cleanHubDonationAmount = params?.cleanHubDonation
    ? formatToDecimal(params?.cleanHubDonationAmount)
    : 0;

  if (_.isEmpty(params?.items)) {
    return {
      cleanHubDonationAmount: params?.cleanHubDonationAmount,
      cleanHubDonation: params?.cleanHubDonation,
      deliveryFee: 0,
      deliveryFeeDiscount: 0,
      deliverySmallOrderFee: defaultSOF,
      discount: 0,
      paidVoucherDiscount: 0,
      subTotal: 0,
      totalAmount: 0,
      totalPayment: 0,
      totalQty: 0,
    };
  }

  const isDelivery = params?.orderType === EOrderType.DELIVERY;

  let totalQty = 0;
  let subTotal = 0;

  _.each(params?.items, (item: ICartItem, _index) => {
    totalQty += item.qty;
    subTotal += item.totalPrice;
  });

  const discount = params?.discount || 0;
  const paidVoucherDiscount = params?.paidVoucherDiscount || 0;

  const totalDiscountValue = discount + paidVoucherDiscount;
  const totalDiscount =
    totalDiscountValue > subTotal ? subTotal : totalDiscountValue;

  const totalAfterDiscount = subTotal - totalDiscount;

  const totalPayment: number = totalAfterDiscount + cleanHubDonationAmount;

  if (isDelivery) {
    const deliveryFee = params?.deliveryEstimation?.estimatedDeliveryFee || 0;

    const sof = totalQty && !_.isEmpty(params?.sof) ? params?.sof : defaultSOF;

    const deliveryFeeDiscount = params?.deliveryFeeDiscount || 0;

    const totalDeliveryFeeAfterDiscount = deliveryFee - deliveryFeeDiscount;

    const sofOrderFee = sof?.orderFee || 0;

    const totalPaymentOrderDelivery: number =
      totalPayment + totalDeliveryFeeAfterDiscount + sofOrderFee;

    return {
      cleanHubDonationAmount: params?.cleanHubDonationAmount,
      cleanHubDonation: params?.cleanHubDonation,
      discount: formatToDecimal(discount),
      paidVoucherDiscount: formatToDecimal(paidVoucherDiscount),
      deliveryFee: formatToDecimal(deliveryFee),
      deliveryFeeDiscount: formatToDecimal(deliveryFeeDiscount),
      deliverySmallOrderFee: sof,
      totalQty,
      subTotal: formatToDecimal(subTotal),
      totalAmount: formatToDecimal(totalAfterDiscount),
      totalPayment: formatToDecimal(totalPaymentOrderDelivery),
    };
  }

  return {
    cleanHubDonationAmount: params?.cleanHubDonationAmount,
    cleanHubDonation: params?.cleanHubDonation,
    deliveryFee: 0,
    deliveryFeeDiscount: 0,
    deliverySmallOrderFee: defaultSOF,
    discount: formatToDecimal(discount),
    paidVoucherDiscount: formatToDecimal(paidVoucherDiscount),
    subTotal: formatToDecimal(subTotal),
    totalAmount: formatToDecimal(totalAfterDiscount),
    totalPayment: formatToDecimal(totalPayment),
    totalQty,
  };
};
