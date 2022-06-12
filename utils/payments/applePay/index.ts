export interface IGenerateApplePayDisplayParams {
  subtotal: number;
  totalPrice?: number;
  discount?: number;
  deliveryFee?: number;
  deliveryDiscountFee?: number;
  smallOrderFee?: number;
  cleanHubDonation?: number;
  labelTranslation?: IlabelTranslation;
}

export interface IlabelTranslation {
  subtotal?: string;
  totalPrice?: string;
  discount?: string;
  deliveryFee?: string;
  deliveryDiscountFee?: string;
  smallOrderFee?: string;
  cleanHubDonation?: string;
}

export interface IApplePayDisplay {
  label: String;
  amount: number;
}

export interface IApplePayDisplay {
  label: String;
  amount: number;
}

export const generateApplePayDisplayItems = ({
  subtotal,
  totalPrice,
  discount,
  deliveryFee,
  deliveryDiscountFee,
  smallOrderFee,
  labelTranslation,
  cleanHubDonation,
}: IGenerateApplePayDisplayParams) => {
  const displayItems: IApplePayDisplay[] = subtotal
    ? [
        {
          label: labelTranslation?.subtotal || 'Subtotal',
          amount: subtotal,
        },
      ]
    : [];

  if (discount) {
    const total = {
      label: labelTranslation?.discount || 'Item Discount',
      amount: -1 * discount,
    };
    displayItems.push(total);
  }

  if (deliveryFee) {
    const delivery = {
      label: labelTranslation?.deliveryFee || 'Delivery Fee',
      amount: deliveryFee,
    };
    displayItems.push(delivery);
  }

  if (deliveryDiscountFee) {
    const deliveryDiscount = {
      label: labelTranslation?.deliveryDiscountFee || 'Delivery Discount',
      amount: -1 * deliveryDiscountFee,
    };
    displayItems.push(deliveryDiscount);
  }

  if (smallOrderFee) {
    const smallAmount = {
      label: labelTranslation?.smallOrderFee || 'Small Order Fee',
      amount: smallOrderFee,
    };
    displayItems.push(smallAmount);
  }

  if (cleanHubDonation) {
    const cleanHubDonationAmount = {
      label: labelTranslation?.cleanHubDonation || 'CleanHub Donation Fee',
      amount: cleanHubDonation,
    };
    displayItems.push(cleanHubDonationAmount);
  }

  if (totalPrice) {
    const total = {
      label: labelTranslation?.totalPrice || 'Total Payment',
      amount: totalPrice,
    };
    displayItems.push(total);
  }

  return {
    displayItems,
  };
};
