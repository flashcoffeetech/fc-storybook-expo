import 'react-native';

import {getUserTierConfig} from '.';
import {EBenefitIcon, ETier, ITierConfig} from '@appTypes/tierConfig.type';

const data: ITierConfig[] = [
  {
    name: ETier.BRONZE,
    minPoint: 0,
    maxChallenges: 3,
    benefits: [
      {
        title: 'Standard Earn Rate (1x)',
        body: 'Earn 1x reward points on your orders',
        icon: EBenefitIcon.MULTIPLIER1,
      },
    ],
  },
  {
    name: ETier.SILVER,
    minPoint: 100000,
    maxChallenges: 3,
    benefits: [
      {
        title: 'Accelerated Earn Rate (x1.5)',
        body: 'Earn 1.5x reward points on your orders',
        icon: EBenefitIcon.MULTIPLIER2,
      },
    ],
  },
  {
    name: ETier.GOLD,
    minPoint: 1000000,
    maxChallenges: 3,
    benefits: [
      {
        title: 'Accelerated Earn Rate (x2)',
        body: 'Earn 2x reward points on your orders.',
        icon: EBenefitIcon.MULTIPLIER3,
      },
    ],
  },
  {
    name: ETier.VIP,
    minPoint: null,
    maxChallenges: 3,
    benefits: [
      {
        title: 'FREE Coffee (twice a day!)',
        body: 'Enjoy award-winning quality coffee every morning and afternoon.',
        icon: EBenefitIcon.MUG,
      },
    ],
  },
];

const userVipExpectData: ITierConfig[] = [
  {
    name: ETier.VIP,
    minPoint: null,
    maxChallenges: 3,
    benefits: [
      {
        title: 'FREE Coffee (twice a day!)',
        body: 'Enjoy award-winning quality coffee every morning and afternoon.',
        icon: EBenefitIcon.MUG,
      },
    ],
  },
  {
    name: ETier.BRONZE,
    minPoint: 0,
    maxChallenges: 3,
    benefits: [
      {
        title: 'Standard Earn Rate (1x)',
        body: 'Earn 1x reward points on your orders',
        icon: EBenefitIcon.MULTIPLIER1,
      },
    ],
  },
  {
    name: ETier.SILVER,
    minPoint: 100000,
    maxChallenges: 3,
    benefits: [
      {
        title: 'Accelerated Earn Rate (x1.5)',
        body: 'Earn 1.5x reward points on your orders',
        icon: EBenefitIcon.MULTIPLIER2,
      },
    ],
  },
  {
    name: ETier.GOLD,
    minPoint: 1000000,
    maxChallenges: 3,
    benefits: [
      {
        title: 'Accelerated Earn Rate (x2)',
        body: 'Earn 2x reward points on your orders.',
        icon: EBenefitIcon.MULTIPLIER3,
      },
    ],
  },
];

const userNonVipExpectData: ITierConfig[] = [
  {
    name: ETier.BRONZE,
    minPoint: 0,
    maxChallenges: 3,
    benefits: [
      {
        title: 'Standard Earn Rate (1x)',
        body: 'Earn 1x reward points on your orders',
        icon: EBenefitIcon.MULTIPLIER1,
      },
    ],
  },
  {
    name: ETier.SILVER,
    minPoint: 100000,
    maxChallenges: 3,
    benefits: [
      {
        title: 'Accelerated Earn Rate (x1.5)',
        body: 'Earn 1.5x reward points on your orders',
        icon: EBenefitIcon.MULTIPLIER2,
      },
    ],
  },
  {
    name: ETier.GOLD,
    minPoint: 1000000,
    maxChallenges: 3,
    benefits: [
      {
        title: 'Accelerated Earn Rate (x2)',
        body: 'Earn 2x reward points on your orders.',
        icon: EBenefitIcon.MULTIPLIER3,
      },
    ],
  },
];

const userVip = true;
const userNonVip = false;

it('getUserTierConfig user vip', () => {
  const result = getUserTierConfig(data, userVip);
  expect(result).toStrictEqual(userVipExpectData);
});

it('getUserTierConfig user non vip', () => {
  const result = getUserTierConfig(data, userNonVip);
  expect(result).toStrictEqual(userNonVipExpectData);
});
