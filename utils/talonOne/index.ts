import _ from 'lodash';
import {ICartItems} from '@appTypes/cart.type';
import {ECompletionType, IPromotion} from '@appTypes/promotion.type';
import {
  ITalonOneAttributes,
  ITalonOneCartItem,
  PaymentInfo,
  TalonOneOrder,
} from '@appTypes/sessionRequest.type';
import {ISessionResponse} from '@appTypes/sessionResponse.type';
import {IStore} from '@appTypes/store.type';
import {IGenerateTalonOneOrder} from '@appTypes/talonOne.type';
import {EOrderType} from '@appTypes/order.type';

export const generateTalonOneCartItems = (
  items: ICartItems,
): ITalonOneCartItem[] => {
  const talonOneItems: ITalonOneCartItem[] = [];

  if (items) {
    Object.keys(items).forEach((key: string, index: number) => {
      const talonOneItem: ITalonOneCartItem = {
        name: items[key].product.name,
        sku: items[key].product.sku || items[key].product.name,
        quantity: items[key].qty,
        price: items[key].subTotalPrice,
        category: items[key].product.category.categoryName,
        position: index,
        attributes: {
          productId: items[key].product.id,
          variants: generateTalonOneCartItemVariants(
            items[key].product.variants,
          ),
          sic: items[key]?.product?.sic || '',
        },
      };

      talonOneItems.push(talonOneItem);
    });
  }

  return talonOneItems;
};

export const generateTalonOneCartItemVariants = (
  productVariants: any[],
): string[] => {
  let result: string[] = [];
  if (productVariants && productVariants.length > 0) {
    productVariants.map(variant => {
      let selectedVariant: string;
      const options: any[] = variant.options;
      if (options && options.length > 0) {
        options.map(option => {
          if (option.isSelected) {
            selectedVariant = `${variant.name}: ${option.name}`;
          }
        });
      }
      if (selectedVariant) {
        result.push(selectedVariant);
      }
    });
  }

  return result;
};

export const generateTalonOneAttributes = (
  store: IStore,
  appliedVoucher: IPromotion,
  currentChallenges: IPromotion[],
  payment: PaymentInfo,
  userAgent: string,
  paymentAmount: number,
  shippingMethod?: string,
  deliveryPartnerName?: string,
  deliveryFee?: number,
  deliveryDiscountFee?: number,
  freeShipping?: boolean,
): ITalonOneAttributes => {
  let talonOneAttributes: ITalonOneAttributes = {
    appliedPromotion: 0,
    appliedChallenges: [],
    storeId: store?.id,
    storeName: store?.storeName,
    storeCode: store?.storeCode,
    paymentMethod: payment?.method || null,
    userAgent,
    paymentAmount,
    freeShipping,
  };

  const isDelivery = shippingMethod === EOrderType.DELIVERY;

  talonOneAttributes.ShippingMethod = shippingMethod || null;

  talonOneAttributes.ShippingCost =
    isDelivery && deliveryFee ? deliveryFee : null;

  talonOneAttributes.ShippingDiscount =
    isDelivery && deliveryDiscountFee ? deliveryDiscountFee : null;

  talonOneAttributes.ShippingPartnerName =
    isDelivery && deliveryPartnerName ? deliveryPartnerName : null;

  talonOneAttributes.paymentCardBrand = payment?.brand || null;

  if (payment?.cardNumber) {
    const splitByX = payment?.cardNumber?.toUpperCase().split('X');

    const binCard = splitByX[0];
    const validBinCard = binCard?.length <= 8;

    talonOneAttributes.binCard = validBinCard ? binCard : null;
  } else {
    talonOneAttributes.binCard = null;
  }

  talonOneAttributes.appliedPromotion = appliedVoucher?.id || null;

  if (currentChallenges) {
    Object.keys(currentChallenges).forEach((key: string) => {
      talonOneAttributes.appliedChallenges.push(currentChallenges[key].id);
    });
  }

  return talonOneAttributes;
};

export const generateTalonOneOrder = ({
  store,
  cartItems,
  appliedVoucher,
  currentChallenges,
  paymentInfo,
  userAgent,
  paymentAmount,
  shippingMethod,
  deliveryPartnerName,
  deliveryFee,
  deliveryDiscountFee,
  freeShipping,
}: IGenerateTalonOneOrder): TalonOneOrder => {
  const talonOneItems = generateTalonOneCartItems(cartItems);

  const talonOneAttributes = generateTalonOneAttributes(
    store,
    appliedVoucher,
    currentChallenges,
    paymentInfo,
    userAgent,
    paymentAmount,
    shippingMethod,
    deliveryPartnerName,
    deliveryFee,
    deliveryDiscountFee,
    freeShipping,
  );

  const couponCodes = appliedVoucher?.voucherCode
    ? [appliedVoucher.voucherCode]
    : [];

  const talonOneOrder: TalonOneOrder = {
    cartItems: talonOneItems,
    attributes: talonOneAttributes,
    couponCodes,
  };

  return talonOneOrder;
};

export const getAffectedChallenges = (
  currentChallenges: IPromotion[],
  session: ISessionResponse,
): IPromotion[] => {
  const challengesIntersect = _.intersectionBy(
    currentChallenges,
    session.triggeredCampaigns,
    'id',
  );

  if (challengesIntersect?.length > 0) {
    Object.keys(challengesIntersect).forEach((key: string, index: number) => {
      const effectUsed = _.find(session.effects, function (effect) {
        return (
          effect.campaignId === challengesIntersect[index].id &&
          effect?.props?.title === 'progress'
        );
      });
      challengesIntersect[index].affectedProgress = parseInt(
        effectUsed?.props?.body,
        10,
      );
    });
  } else {
    if (currentChallenges) {
      Object.keys(currentChallenges).forEach((key: string, index: number) => {
        if (
          currentChallenges[index].completionType === ECompletionType.DAY &&
          currentChallenges[index].completedCount === 0
        ) {
          challengesIntersect.push(currentChallenges[index]);
        }
      });
    }
  }

  return challengesIntersect;
};

export const getInvalidSessionLokalise = (code: string) => {
  return `general.${code}`;
};
