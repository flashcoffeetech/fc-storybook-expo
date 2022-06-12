import {ETier, ITierConfig} from '@appTypes/tierConfig.type';

export const getUserTierConfig = (
  data: ITierConfig[] = [],
  vipStatus: boolean = false,
): ITierConfig[] => {
  const vipTierConfig = data.find(({name}) => {
    return name === ETier.VIP;
  });

  const tierConfigs = data.filter(({name}) => {
    return name !== ETier.VIP;
  });

  if (vipStatus && vipTierConfig) {
    tierConfigs.unshift(vipTierConfig);
  }

  return tierConfigs;
};
