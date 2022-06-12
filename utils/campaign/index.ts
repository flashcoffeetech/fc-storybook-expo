import {IPromotion} from '@appTypes/promotion.type';

export const getCampaignDisplayName = (campaign: IPromotion): string => {
  if (!campaign) {
    return '';
  }
  return campaign.attributes?.displayName
    ? campaign.attributes?.displayName
    : campaign.name;
};
