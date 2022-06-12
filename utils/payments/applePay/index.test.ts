import {generateApplePayDisplayItems, IApplePayDisplay} from '.';

jest.mock('@configs/payments/adyen/applepay/payment.config', () => {
  return {SUPPORTED_NETWORK: {country: ['visa', 'amex']}};
});

const subtotal: number = 52.5;
const totalPrice: number = 40;
const discount: number = 12.5;

const generateApplePayItems = () => {
  return generateApplePayDisplayItems({
    subtotal: subtotal - 3.1,
    totalPrice,
    discount,
    deliveryFee: 12.5,
    deliveryDiscountFee: 10,
    smallOrderFee: 3.1,
    cleanHubDonation: 20,
  });
};

const displayItems = () => {
  const expected = {
    displayItems: [
      {
        label: 'Subtotal',
        amount: 52.5 - 3.1,
      },
      {
        label: 'Item Discount',
        amount: -12.5,
      },
      {
        label: 'Delivery Fee',
        amount: 12.5,
      },
      {
        label: 'Delivery Discount',
        amount: -10,
      },
      {
        label: 'Small Order Fee',
        amount: 3.1,
      },
      {
        label: 'CleanHub Donation Fee',
        amount: 20,
      },
      {
        label: 'Total Payment',
        amount: 40,
      },
    ],
  };
  const not_expected = {
    displayItems: [
      {
        label: 'Delivery Fee',
        amount: 12.5,
      },
      {
        label: 'Total Payment',
        amount: 40,
      },
      {
        label: 'Item Discount',
        amount: -12.5,
      },
      {
        label: 'CleanHub Donation',
        amount: 20,
      },
      {
        label: 'Subtotal',
        amount: 52.5,
      },
      {
        label: 'Total Payment',
        amount: 40,
      },
      {
        label: 'Small Order Fee',
        amount: 3.1,
      },
    ],
  };

  return {expected, not_expected};
};

describe('testing generateApplePayDisplayItems', () => {
  it('generate apple pay display without total and discount', () => {
    const result = generateApplePayDisplayItems({subtotal});

    const expected = {
      displayItems: [
        {
          label: 'Subtotal',
          amount: 52.5,
        },
      ],
    };
    expect(result).toEqual(expected);
  });
  it('generate apple pay display with total', () => {
    const result = generateApplePayDisplayItems({subtotal, totalPrice});

    const expected = {
      displayItems: [
        {
          label: 'Subtotal',
          amount: 52.5,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
      ],
    };
    const not_expected = {
      displayItems: [
        {
          label: 'Total Payment',
          amount: 40,
        },
        {
          label: 'Subtotal',
          amount: 52.5,
        },
      ],
    };

    expect(result).toEqual(expected);
    expect(result).not.toEqual(not_expected);
  });
  it('generate apple pay display with discount', () => {
    const result = generateApplePayDisplayItems({subtotal, discount});

    const expected = {
      displayItems: [
        {
          label: 'Subtotal',
          amount: 52.5,
        },
        {
          label: 'Item Discount',
          amount: -12.5,
        },
      ],
    };
    const not_expected = {
      displayItems: [
        {
          label: 'Item Discount',
          amount: -12.5,
        },
        {
          label: 'Subtotal',
          amount: 52.5,
        },
      ],
    };

    expect(result).toEqual(expected);
    expect(result).not.toEqual(not_expected);
  });
  it('generate apple pay display with discount and total', () => {
    const result = generateApplePayDisplayItems({
      subtotal,
      totalPrice,
      discount,
    });

    const expected = {
      displayItems: [
        {
          label: 'Subtotal',
          amount: 52.5,
        },
        {
          label: 'Item Discount',
          amount: -12.5,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
      ],
    };
    const not_expected = {
      displayItems: [
        {
          label: 'Item Discount',
          amount: -12.5,
        },
        {
          label: 'Subtotal',
          amount: 52.5,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
      ],
    };

    expect(result).toEqual(expected);
    expect(result).not.toEqual(not_expected);
  });
  it('generate apple pay display with empty items but with total and discount', () => {
    const result = generateApplePayDisplayItems({
      subtotal: null,
      totalPrice,
      discount,
    });

    const expected = {
      displayItems: [
        {
          label: 'Item Discount',
          amount: -12.5,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
      ],
    };
    const not_expected = {
      displayItems: [
        {
          label: 'Total Payment',
          amount: 40,
        },
        {
          label: 'Item Discount',
          amount: -12.5,
        },
      ],
    };

    expect(result).toEqual(expected);
    expect(result).not.toEqual(not_expected);
  });
  it('generate apple pay display with empty items ', () => {
    const result = generateApplePayDisplayItems({subtotal: null});

    const expected = {
      displayItems: [] as IApplePayDisplay[],
    };

    expect(result).toEqual(expected);
  });
  it('generate apple pay display with discount 0, supposely not shown discount ', () => {
    const result = generateApplePayDisplayItems({subtotal, discount: 0});

    const expected = {
      displayItems: [
        {
          label: 'Subtotal',
          amount: 52.5,
        },
      ],
    };
    const not_expected = {
      displayItems: [
        {
          label: 'Subtotal',
          amount: 12.5,
        },
        {
          label: 'Discount',
          amount: 0,
        },
      ],
    };

    expect(result).toEqual(expected);
    expect(result).not.toEqual(not_expected);
  });
  it('generate apple pay display with discount, delivery fee, delivery discount fee and total', () => {
    const result = generateApplePayDisplayItems({
      subtotal,
      totalPrice,
      discount,
      deliveryFee: 12.5,
      deliveryDiscountFee: 10,
    });

    const expected = {
      displayItems: [
        {
          label: 'Subtotal',
          amount: 52.5,
        },
        {
          label: 'Item Discount',
          amount: -12.5,
        },
        {
          label: 'Delivery Fee',
          amount: 12.5,
        },
        {
          label: 'Delivery Discount',
          amount: -10,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
      ],
    };
    const not_expected = {
      displayItems: [
        {
          label: 'Delivery Fee',
          amount: 12.5,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
        {
          label: 'Item Discount',
          amount: -12.5,
        },
        {
          label: 'Subtotal',
          amount: 52.5,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
      ],
    };

    expect(result).toEqual(expected);
    expect(result).not.toEqual(not_expected);
  });

  it('generate apple pay display with discount, delivery fee, delivery discount fee,small amount fee and total', () => {
    const result = generateApplePayDisplayItems({
      subtotal: subtotal - 3.1,
      totalPrice,
      discount,
      deliveryFee: 12.5,
      deliveryDiscountFee: 10,
      smallOrderFee: 3.1,
    });

    const expected = {
      displayItems: [
        {
          label: 'Subtotal',
          amount: 52.5 - 3.1,
        },
        {
          label: 'Item Discount',
          amount: -12.5,
        },
        {
          label: 'Delivery Fee',
          amount: 12.5,
        },
        {
          label: 'Delivery Discount',
          amount: -10,
        },
        {
          label: 'Small Order Fee',
          amount: 3.1,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
      ],
    };
    const not_expected = {
      displayItems: [
        {
          label: 'Delivery Fee',
          amount: 12.5,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
        {
          label: 'Item Discount',
          amount: -12.5,
        },
        {
          label: 'Subtotal',
          amount: 52.5,
        },
        {
          label: 'Total Payment',
          amount: 40,
        },
        {
          label: 'Small Order Fee',
          amount: 3.1,
        },
      ],
    };

    expect(result).toEqual(expected);
    expect(result).not.toEqual(not_expected);
  });
  it('generate apple pay display with discount, delivery fee, delivery discount fee,small amount fee, cleanHubDonation Amount and total', () => {
    const result = generateApplePayItems();
    const {expected, not_expected} = displayItems();

    expect(result).toEqual(expected);
    expect(result).not.toEqual(not_expected);
  });
  describe('generate apple pay display with translated label', () => {
    it('generate default label if the translation not provided', () => {
      const applePayResult = generateApplePayItems();
      const {expected, not_expected} = displayItems();

      expect(applePayResult).toEqual(expected);
      expect(applePayResult).not.toEqual(not_expected);
    });
    it('generate translated label if the translation provided', () => {
      const translation = {
        subtotal: 'test1',
        totalPrice: 'test2',
        discount: 'test3',
        deliveryFee: 'test4',
        deliveryDiscountFee: 'test5',
        smallOrderFee: 'test6',
      };
      const result = generateApplePayDisplayItems({
        subtotal: subtotal - 3.1,
        totalPrice,
        discount,
        deliveryFee: 12.5,
        deliveryDiscountFee: 10,
        smallOrderFee: 3.1,
        labelTranslation: translation,
      });

      const expected = {
        displayItems: [
          {
            label: translation.subtotal,
            amount: 52.5 - 3.1,
          },
          {
            label: translation.discount,
            amount: -12.5,
          },
          {
            label: translation.deliveryFee,
            amount: 12.5,
          },
          {
            label: translation.deliveryDiscountFee,
            amount: -10,
          },
          {
            label: translation.smallOrderFee,
            amount: 3.1,
          },
          {
            label: translation.totalPrice,
            amount: 40,
          },
        ],
      };
      const not_expected = {
        displayItems: [
          {
            label: 'Subtotal',
            amount: 52.5 - 3.1,
          },
          {
            label: 'Item Discount',
            amount: -12.5,
          },
          {
            label: 'Delivery Fee',
            amount: 12.5,
          },
          {
            label: 'Delivery Discount',
            amount: -10,
          },
          {
            label: 'Small Amount Fee',
            amount: 3.1,
          },
          {
            label: 'Total Payment',
            amount: 40,
          },
        ],
      };

      expect(result).toEqual(expected);
      expect(result).not.toEqual(not_expected);
    });
  });
});
