import 'react-native';

import {ICartItem, ICartItems} from '@appTypes/cart.type';
import {ICategory, IVariant, IVariantOption} from '@appTypes/product.type';
import {IStore} from '@appTypes/store.type';
import {
  IPromotion,
  EPromotionStatus,
  ECompletionType,
} from '@appTypes/promotion.type';
import {PaymentInfo} from '@appTypes/sessionRequest.type';
import {ISessionResponse} from '@appTypes/sessionResponse.type';
import {
  generateTalonOneCartItems,
  generateTalonOneCartItemVariants,
  generateTalonOneAttributes,
  generateTalonOneOrder,
  getAffectedChallenges,
} from '.';

it('generateTalonOneCartItems works well', () => {
  const items: ICartItems = {};
  generateTalonOneCartItems(items);
  const testCategory: ICategory = {};
  const testVariant: IVariant[];
  const testItem: ICartItem = {
    qty: 1,
    optionPrice: 10000,
    product: {
      id: '1',
      storehubId: '1',
      name: 'americano',
      tags: ['drink', 'coffee'],
      category: testCategory,
      subCategory: 'beverage',
      priceType: 'price',
      price: 20000,
      storePrice: 25000,
      cost: 1,
      variants: testVariant,
      trackStockLevel: true,
      isParentProduct: true,
      image: 'image',
      shortDescription: 'delicious drink',
      shortDescriptionLocale: 'delicious drink',
      description: 'delicious drink',
      descriptionLocale: 'delicious drink',
      outOfStock: false,
      availability: 10,
      availabilityBool: true,
    },
    subTotalPrice: 5000,
    totalPrice: 15000,
    variantNo: 1,
  };
  const testItems: ICartItems = {key: testItem};
  generateTalonOneCartItems(testItems);
  generateTalonOneCartItems(null);
});

it('generateTalonOneCartItemVariants works well', () => {
  const productVariants: any[] = [];
  generateTalonOneCartItemVariants(productVariants);
  const variantOption: IVariantOption = {
    id: '1',
    name: 'sugar',
    nameLocale: 'sugar',
    isDefault: true,
    priceDifference: 5000,
    icon: 'icon',
    isSelected: true,
  };
  const variantOption2: IVariantOption = {
    id: '2',
    name: 'milk',
    nameLocale: 'milk',
    isDefault: true,
    priceDifference: 5000,
    icon: 'icon',
    isSelected: false,
  };
  const testVariant: IVariant = {
    id: 'test',
    name: 'milk',
    nameLocale: 'milk',
    options: [variantOption, variantOption2, variantOption],
    regularOptions: [variantOption, variantOption, variantOption2],
    upsizeOptions: [variantOption2, variantOption, variantOption],
    isMultiple: true,
    isWithIcon: true,
    isRequired: true,
    isDirty: true,
  };
  const testVariants: any[] = [testVariant, testVariant, testVariant];
  generateTalonOneCartItemVariants(testVariants);
  const multipleProductVariants: any[] = ['milk', 'almond', 'soy'];
  generateTalonOneCartItemVariants(multipleProductVariants);
});

it('generateTalonOneAttributes works well', () => {
  const store: IStore = {
    id: 'storeId',
    storehubId: 'storeHubId',
    storeName: 'storeName',
    streetAddress: 'streetAddress',
    city: 'Jakarta',
    country: 'Indonesia',
    postCode: '12345',
    state: 'DKI Jakarta',
    isNearest: true,
    distance: {
      raw: 300,
      formatted: '300m',
    },
    isOpen: true,
    longitude: 102.333,
    latitude: 23.2222,
    countryCode: 'ID',
    isActive: true,
    timezone: '+7',
    openTime: '07:00',
    closeTime: '22:00',
    storeTime: [],
  };

  const appliedVoucher: IPromotion = {
    id: 120,
    created: '',
    applicationId: 12,
    campaignGroups: [],
    userId: 12,
    name: 'name',
    description: 'description',
    attributes: {
      isForceApplied: false,
      headline: '',
      headlineLocale: '',
      headlineSmall: '',
      headlineSmallLocale: '',
      bannerText: '',
      bannerTextLocale: '',
    },
    completedCount: 0,
    state: 'OPEN',
    activeRulesetId: 100,
    tags: [],
    features: [],
    couponSettings: {
      validCharacters: [],
      couponPattern: '',
    },
    limits: [],
    couponRedemptionCount: 0,
    referralRedemptionCount: 0,
    discountCount: 0,
    discountEffectCount: 0,
    couponCreationCount: 0,
    updated: '2021-01-01',
    updatedBy: 'system',
    startTime: '2021-01-01',
    endTime: '2021-01-01',
    status: EPromotionStatus.ON_GOING,
  };

  const currentChallenges: IPromotion[] = [];
  const payment: PaymentInfo = {
    method: 'PAYMENT_INFO',
  };
  const userAgent = 'userAgent';
  const shippingMethod = 'PICKUP';

  generateTalonOneAttributes(
    store,
    appliedVoucher,
    currentChallenges,
    payment,
    userAgent,
    shippingMethod,
  );
  //generateTalonOneAttributes with no shippingMethod
  generateTalonOneAttributes(
    store,
    appliedVoucher,
    currentChallenges,
    payment,
    userAgent,
  );
  const paymentWithBrand: PaymentInfo = {
    method: 'PAYMENT_INFO',
    brand: 'dana',
  };
  const newChallenge: IPromotion[] = [appliedVoucher, appliedVoucher];
  //generateTalonOneAttributes with payment brand and currentChallenges
  generateTalonOneAttributes(
    store,
    appliedVoucher,
    newChallenge,
    paymentWithBrand,
    userAgent,
    shippingMethod,
  );
  //generateTalonOneAttributes with no appliedVoucher
  generateTalonOneAttributes(
    store,
    null,
    currentChallenges,
    paymentWithBrand,
    userAgent,
    shippingMethod,
  );
});

it('generateTalonOneOrder works well', () => {
  const cartItems: ICartItems = {};
  const store: IStore = {
    id: 'storeId',
    storehubId: 'storeHubId',
    storeName: 'storeName',
    streetAddress: 'streetAddress',
    city: 'Jakarta',
    country: 'Indonesia',
    postCode: '12345',
    state: 'DKI Jakarta',
    isNearest: true,
    distance: {
      raw: 300,
      formatted: '300m',
    },
    isOpen: true,
    longitude: 102.333,
    latitude: 23.2222,
    countryCode: 'ID',
    isActive: true,
    timezone: '+7',
    openTime: '07:00',
    closeTime: '22:00',
    storeTime: [],
  };

  const appliedVoucher: IPromotion = {
    id: 120,
    created: '',
    applicationId: 12,
    campaignGroups: [],
    userId: 12,
    name: 'name',
    description: 'description',
    attributes: {
      isForceApplied: false,
      headline: '',
      headlineLocale: '',
      headlineSmall: '',
      headlineSmallLocale: '',
      bannerText: '',
      bannerTextLocale: '',
    },
    completedCount: 0,
    state: 'OPEN',
    activeRulesetId: 100,
    tags: [],
    features: [],
    couponSettings: {
      validCharacters: [],
      couponPattern: '',
    },
    limits: [],
    couponRedemptionCount: 0,
    referralRedemptionCount: 0,
    discountCount: 0,
    discountEffectCount: 0,
    couponCreationCount: 0,
    updated: '2021-01-01',
    updatedBy: 'system',
    startTime: '2021-01-01',
    endTime: '2021-01-01',
    status: EPromotionStatus.ON_GOING,
  };

  const appliedVoucherWithCode: IPromotion = {
    id: 120,
    created: '',
    applicationId: 12,
    campaignGroups: [],
    userId: 12,
    name: 'name',
    description: 'description',
    attributes: {
      isForceApplied: false,
      headline: '',
      headlineLocale: '',
      headlineSmall: '',
      headlineSmallLocale: '',
      bannerText: '',
      bannerTextLocale: '',
    },
    completedCount: 0,
    state: 'OPEN',
    activeRulesetId: 100,
    tags: [],
    features: [],
    couponSettings: {
      validCharacters: [],
      couponPattern: '',
    },
    limits: [],
    couponRedemptionCount: 0,
    referralRedemptionCount: 0,
    discountCount: 0,
    discountEffectCount: 0,
    couponCreationCount: 0,
    updated: '2021-01-01',
    updatedBy: 'system',
    startTime: '2021-01-01',
    endTime: '2021-01-01',
    status: EPromotionStatus.ON_GOING,
    voucherCode: '123',
  };

  const currentChallenges: IPromotion[] = [];
  const payment: PaymentInfo = {
    method: 'PAYMENT_INFO',
  };
  const userAgent = 'userAgent';
  const shippingMethod = 'PICKUP';

  generateTalonOneOrder(
    store,
    cartItems,
    appliedVoucher,
    currentChallenges,
    payment,
    userAgent,
    shippingMethod,
  );
  //test voucher code
  generateTalonOneOrder(
    store,
    cartItems,
    appliedVoucherWithCode,
    currentChallenges,
    payment,
    userAgent,
    shippingMethod,
  );
});

it('getAffectedChallenges works well', () => {
  const currentChallenges: IPromotion[] = [];
  const session: ISessionResponse = {
    effects: [],
    createdCoupons: [],
    createdReferrals: [],
    customerSession: {
      additionalCostTotal: 0,
      applicationId: 120,
      attributes: {
        challenges: [],
      },
      cartItemTotal: 0,
      cartItems: [],
      created: '2020-02-02',
      firstSession: true,
      integrationId: 'integrationId',
      profileId: 'profileId',
      referralCode: '',
      state: 'OPEN',
      total: 50000,
    },
    customerProfile: {},
    coupons: [],
    triggeredCampaigns: [],
  };
  getAffectedChallenges(currentChallenges, session);
  //get affected challenges true
  const testPromotion: IPromotion = {
    id: 1,
    completionType: ECompletionType.DAY,
    completedCount: 0,
  };
  const testPromotion2: IPromotion = {
    id: 2,
    completionType: ECompletionType.DAY,
    completedCount: 1,
  };
  const currentChallengesWithPromotion: IPromotion[] = [
    testPromotion,
    testPromotion2,
  ];
  const sessionWithCampaign: ISessionResponse = {
    effects: [
      {
        campaignId: 1,
        rulesetId: 1,
        ruleIndex: 1,
        ruleName: 'test',
        effectType: 'acceptCoupon',
        props: {
          name: 'prop',
          value: 'this value',
          title: 'progress',
        },
      },
    ],
    createdCoupons: [],
    createdReferrals: [],
    customerSession: {
      additionalCostTotal: 0,
      applicationId: 120,
      attributes: {
        challenges: [],
      },
      cartItemTotal: 0,
      cartItems: [],
      created: '2020-02-02',
      firstSession: true,
      integrationId: 'integrationId',
      profileId: 'profileId',
      referralCode: '',
      state: 'OPEN',
      total: 50000,
    },
    customerProfile: {},
    coupons: [],
    triggeredCampaigns: [testPromotion],
  };
  getAffectedChallenges(currentChallengesWithPromotion, sessionWithCampaign);
  const sessionWithCompletedTitle: ISessionResponse = {
    effects: [
      {
        campaignId: 1,
        rulesetId: 1,
        ruleIndex: 1,
        ruleName: 'test',
        effectType: 'acceptCoupon',
        props: {},
      },
    ],
    createdCoupons: [],
    createdReferrals: [],
    customerSession: {
      additionalCostTotal: 0,
      applicationId: 120,
      attributes: {
        challenges: [],
      },
      cartItemTotal: 0,
      cartItems: [],
      created: '2020-02-02',
      firstSession: true,
      integrationId: 'integrationId',
      profileId: 'profileId',
      referralCode: '',
      state: 'OPEN',
      total: 50000,
    },
    customerProfile: {},
    coupons: [],
    triggeredCampaigns: [testPromotion],
  };
  getAffectedChallenges(
    currentChallengesWithPromotion,
    sessionWithCompletedTitle,
  );
  const sessionWithoutTriggeredCampaign: ISessionResponse = {
    effects: [
      {
        campaignId: 1,
        rulesetId: 1,
        ruleIndex: 1,
        ruleName: 'test',
        effectType: 'acceptCoupon',
        props: {},
      },
    ],
    createdCoupons: [],
    createdReferrals: [],
    customerSession: {
      additionalCostTotal: 0,
      applicationId: 120,
      attributes: {
        challenges: [],
      },
      cartItemTotal: 0,
      cartItems: [],
      created: '2020-02-02',
      firstSession: true,
      integrationId: 'integrationId',
      profileId: 'profileId',
      referralCode: '',
      state: 'OPEN',
      total: 50000,
    },
    customerProfile: {},
    coupons: [],
    triggeredCampaigns: [],
  };
  getAffectedChallenges(
    currentChallengesWithPromotion,
    sessionWithoutTriggeredCampaign,
  );
  getAffectedChallenges(null, sessionWithoutTriggeredCampaign);
});
