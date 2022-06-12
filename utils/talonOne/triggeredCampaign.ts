import {IAppliedPromotion} from '@appTypes/order.type';
import {IPromotion} from '@appTypes/promotion.type';
import {IEffect, ISessionResponse} from '@appTypes/sessionResponse.type';
import {
  EDiscountType,
  ITriggeredCampaign,
} from '@appTypes/triggeredCampaign.type';
import {
  EFFECT_SET_DELIVERY_DISCOUNT,
  EFFECT_SET_DISCOUNT,
  EFFECT_SET_ITEM_DISCOUNT,
} from '@constants/loyalty.const';
import _ from 'lodash';

export const getTriggeredPromotions = (
  session: ISessionResponse,
): ITriggeredCampaign[] => {
  const triggeredPromotions: ITriggeredCampaign[] = [];
  const effects = session?.effects || [];
  const triggeredCampaigns = session?.triggeredCampaigns || [];

  effects.map(async (effect: IEffect) => {
    const effectProps = effect?.props;
    const effectPayload = effectProps?.payload;

    const isSetDiscountEffect = effect?.effectType === EFFECT_SET_DISCOUNT;
    const isSetItemDiscountEffect =
      effect?.effectType === EFFECT_SET_ITEM_DISCOUNT;

    const isSetDeliveryDiscountEffect =
      effectPayload?.effectType === EFFECT_SET_DELIVERY_DISCOUNT;

    const isHaveDiscountEffect =
      isSetDiscountEffect ||
      isSetItemDiscountEffect ||
      isSetDeliveryDiscountEffect;

    if (isHaveDiscountEffect) {
      const foundedCampaign = _.find(triggeredCampaigns, campaign => {
        return campaign.id === effect.campaignId;
      });

      const discountType = isSetDeliveryDiscountEffect
        ? EDiscountType.DELIVERY
        : EDiscountType.ITEM;

      const discount = isSetDeliveryDiscountEffect
        ? effectPayload.value
        : effect.props.value;

      const discountCampaign: ITriggeredCampaign = {
        id: effect.campaignId,
        name: foundedCampaign.name,
        nameLocale: foundedCampaign.attributes?.nameLocale,
        displayName: foundedCampaign.attributes?.displayName,
        ruleName: effect.ruleName,
        triggeredByCoupon: effect.triggeredByCoupon,
        discount,
        discountType,
      };
      triggeredPromotions.push(discountCampaign);
    }
  });

  return triggeredPromotions;
};

export const appliedVoucherData = (voucher: IPromotion): IAppliedPromotion => {
  if (!voucher) {
    return;
  }
  return {
    id: voucher.id,
    campaignId: voucher.id,
    voucherCode: voucher.voucherCode,
  };
};
