import remoteConfig from '@react-native-firebase/remote-config';

import {ICountry} from '@appTypes/location.type';
import {PaymentOption} from '@appTypes/paymentMethod.type';
import {
  COUNTRY_HONG_KONG,
  COUNTRY_INDONESIA,
  COUNTRY_JAPAN,
  COUNTRY_SINGAPORE,
  COUNTRY_SOUTH_KOREA,
  COUNTRY_TAIWAN,
  COUNTRY_THAILAND,
} from '@constants/country.const';
import {
  DEVELOPER_MODE,
  FEATURE_SIGNUP_POPUP,
  MINIMUM_DISTANCE_GEOCODING,
  REMOTE_CONFIG_DEFAULTS,
  REMOTE_CONFIG_SETTINGS,
  FREE_SHIPPING_HK,
  FREE_SHIPPING_JP,
  FREE_SHIPPING_ID,
  FREE_SHIPPING_KR,
  FREE_SHIPPING_SG,
  FREE_SHIPPING_TH,
  FREE_SHIPPING_TW,
  LIMIT_DELIVERY_TIME,
  IS_SHOW_NEUTRAL_COLOR_PRICE,
  IS_SHOW_CURRENCY,
  CLEANHUB_TRACKING_VALUE,
  SHOW_CLEANHUB_LEARN_MORE,
} from '@constants/remoteConfig.const';
import countriesConfig from '@configs/remote.config';

export const fetchRemoteConfig = async (): Promise<void> => {
  await remoteConfig().setConfigSettings(REMOTE_CONFIG_SETTINGS);
  remoteConfig()
    .setDefaults(REMOTE_CONFIG_DEFAULTS)
    .then(async () => {
      await remoteConfig().fetchAndActivate();
    });
};

/**
 * Remote config for Global
 */

export const getDeveloperMode = (): boolean => {
  const value = remoteConfig().getValue(DEVELOPER_MODE);
  return value.asBoolean();
};

export const getIsShowNeutralColorPrice = (): boolean => {
  const value = remoteConfig().getValue(IS_SHOW_NEUTRAL_COLOR_PRICE);
  return value.asBoolean();
};

export const getMinimumDistanceGeocoding = (): number => {
  const value = remoteConfig().getValue(MINIMUM_DISTANCE_GEOCODING);
  return value.asNumber();
};

export const getFeatureSignUpPopUp = (): string => {
  const value = remoteConfig().getValue(FEATURE_SIGNUP_POPUP);
  return value.asString();
};

export const getLimitDeliveryTime = (): number => {
  const value = remoteConfig().getValue(LIMIT_DELIVERY_TIME);
  return value.asNumber();
};

export const getExrateFlashPoint = (currentCountry: ICountry): number => {
  return countriesConfig[currentCountry?.code]
    ? countriesConfig[currentCountry?.code].exrateFlashPoint()
    : countriesConfig[COUNTRY_INDONESIA].exrateFlashPoint();
};

export const getIsShowCurrency = (): boolean => {
  const value = remoteConfig().getValue(IS_SHOW_CURRENCY);
  return value.asBoolean();
};

export const getCleanHubTrackingValue = (): number => {
  const value = remoteConfig().getValue(CLEANHUB_TRACKING_VALUE);
  return value.asNumber();
};

export const getCleanHubLearnMore = (): boolean => {
  const value = remoteConfig().getValue(SHOW_CLEANHUB_LEARN_MORE);
  return value.asBoolean();
};

export const getEnablePayment = (
  countryCode: string,
  paymentMethod: PaymentOption,
) => {
  const getEnable =
    countriesConfig[countryCode]?.[paymentMethod?.toLowerCase()]?.enable;
  return getEnable ? getEnable() : false;
};

export const getUpperLimitPayment = (
  countryCode: string,
  paymentMethod: PaymentOption,
) => {
  const getUpperLimit =
    countriesConfig[countryCode]?.[paymentMethod?.toLowerCase()]?.limit?.upper;
  return getUpperLimit ? getUpperLimit() : 999999999999;
};

export const getLowerLimitPayment = (
  countryCode: string,
  paymentMethod: PaymentOption,
) => {
  const getLowerLimit =
    countriesConfig[countryCode]?.[paymentMethod?.toLowerCase()]?.limit?.lower;
  return getLowerLimit ? getLowerLimit() : 0;
};

export const getOriginWhitelistInicis = (
  countryCode: string,
  paymentMethod: PaymentOption,
) => {
  const getOriginWhitelist =
    countriesConfig[countryCode]?.[paymentMethod?.toLowerCase()]
      ?.originwhitelist;
  return getOriginWhitelist ? getOriginWhitelist() : ['*'];
};

export const getDefaultPickupTimeAddVar = (countryCode: string) => {
  const getCountryDefaultPickupTimeAddVar =
    countriesConfig[countryCode]?.pickupTimeAddVar;
  return getCountryDefaultPickupTimeAddVar
    ? getCountryDefaultPickupTimeAddVar()
    : 5;
};

export const getMaxEstimateDeliveryTimeAddVar = (countryCode: string) => {
  const getCountryMaxEstimateDeliveryTimeAddVar =
    countriesConfig[countryCode]?.maxEstimateDeliveryTimeAddVar;
  return getCountryMaxEstimateDeliveryTimeAddVar
    ? getCountryMaxEstimateDeliveryTimeAddVar()
    : 5;
};

export const getIsEnabledDelivery = (countryCode: string): boolean => {
  const getCountryIsEnabledDelivery =
    countriesConfig[countryCode]?.isEnableDelivery;
  return getCountryIsEnabledDelivery ? getCountryIsEnabledDelivery() : false;
};

export const getIsShowCleanHubBanner = (countryCode: string): boolean => {
  const getCountryIsShowCleanHubBanner =
    countriesConfig[countryCode]?.isShowCleanHubBanner;
  return getCountryIsShowCleanHubBanner
    ? getCountryIsShowCleanHubBanner()
    : false;
};

export const getIsShowCleanHubServiceBanner = (
  countryCode: string,
): boolean => {
  const getCountryIsShowCleanHubServiceBanner =
    countriesConfig[countryCode]?.isShowCleanHubServiceBanner;
  return getCountryIsShowCleanHubServiceBanner
    ? getCountryIsShowCleanHubServiceBanner()
    : false;
};

export const getIsShowCustomerInfo = (countryCode: string): boolean => {
  const getCountryIsShowCustomerInfo =
    countriesConfig[countryCode]?.isShowCustomerInfo;
  return getCountryIsShowCustomerInfo ? getCountryIsShowCustomerInfo() : false;
};

export const getIsEnableScanBarcode = (countryCode: string): boolean => {
  const getCountryIsEnableScanBarcode =
    countriesConfig[countryCode]?.isEnableScanBarcode;
  return getCountryIsEnableScanBarcode
    ? getCountryIsEnableScanBarcode()
    : false;
};

export const getTaxInvoiceRequest = (countryCode: string): boolean => {
  const getCountryTaxInvoiceRequest =
    countriesConfig[countryCode]?.taxInvoiceRequest;
  return getCountryTaxInvoiceRequest ? getCountryTaxInvoiceRequest() : false;
};

export const getTaxInvoiceRequestMinDate = (countryCode: string) => {
  const getCountryTaxInvoiceRequestMinDate =
    countriesConfig[countryCode]?.taxInvoiceRequestMinDate;
  return getCountryTaxInvoiceRequestMinDate
    ? getCountryTaxInvoiceRequestMinDate()
    : null;
};

export const getTaxInvoiceRequestForm = (countryCode: string): any => {
  const getCountryTaxInvoiceRequestForm =
    countriesConfig[countryCode]?.taxInvoiceRequestForm;
  return getCountryTaxInvoiceRequestForm
    ? getCountryTaxInvoiceRequestForm()
    : null;
};

const countryFreeShipping = {
  [COUNTRY_HONG_KONG]: FREE_SHIPPING_HK,
  [COUNTRY_INDONESIA]: FREE_SHIPPING_ID,
  [COUNTRY_JAPAN]: FREE_SHIPPING_JP,
  [COUNTRY_SOUTH_KOREA]: FREE_SHIPPING_KR,
  [COUNTRY_SINGAPORE]: FREE_SHIPPING_SG,
  [COUNTRY_THAILAND]: FREE_SHIPPING_TH,
  [COUNTRY_TAIWAN]: FREE_SHIPPING_TW,
};

export const getFreeShipping = (currentCountry: ICountry): boolean => {
  const value = remoteConfig().getValue(
    countryFreeShipping[currentCountry?.code],
  );
  return value.asBoolean();
};

export const getIsShowRecommendedProducts = (countryCode: string): boolean => {
  const getCountryIsShowRecommendedProducts =
    countriesConfig[countryCode]?.isShowRecommendedProduct;
  return getCountryIsShowRecommendedProducts
    ? getCountryIsShowRecommendedProducts()
    : false;
};

export const getIsPreorderEnabled = (countryCode: string): boolean => {
  const getCountryIsPreorderEnabled =
    countriesConfig[countryCode]?.isPreorderEnabled;
  return getCountryIsPreorderEnabled ? getCountryIsPreorderEnabled() : false;
};

export const getEnableZendesk = (countryCode: string): boolean => {
  const getCountryEnableZendesk = countriesConfig[countryCode]?.isEnableZendesk;
  return getCountryEnableZendesk ? getCountryEnableZendesk() : false;
};

export const getPaymentPageExpirationDuration = (
  countryCode: string,
  paymentMethod: PaymentOption,
): number => {
  const getPageExpirationDuration =
    countriesConfig[countryCode]?.[paymentMethod?.toLowerCase()]
      ?.pageExpirationDuration;
  return getPageExpirationDuration ? getPageExpirationDuration() : 0;
};

export const getEnableRapydCheckoutToolkit = (
  countryCode: string,
  paymentMethod: PaymentOption,
): number => {
  const getEnabledCheckoutToolkit =
    countriesConfig[countryCode]?.[paymentMethod?.toLowerCase()]
      ?.getEnabledRapydCheckoutToolkit;
  return getEnabledCheckoutToolkit ? getEnabledCheckoutToolkit() : false;
};

export const getEnableValidationApplePay = (countryCode: string): boolean => {
  const getCountryEnableValidationApplePay =
    countriesConfig[countryCode]?.isEnableValidationApplePay;
  return getCountryEnableValidationApplePay
    ? getCountryEnableValidationApplePay()
    : false;
};
export const getSupportedNetworkApplePayUrl = (countryCode: string): string => {
  const getCountrySupportedNetworkApplePayUrl =
    countriesConfig[countryCode]?.supportedNetworkApplePayUrl;
  return getCountrySupportedNetworkApplePayUrl
    ? getCountrySupportedNetworkApplePayUrl()
    : false;
};

export const getBulkOrderContact = (countryCode: string): any => {
  const getCountryBulkOrderContact =
    countriesConfig[countryCode]?.bulkOrderContact;
  return getCountryBulkOrderContact ? getCountryBulkOrderContact() : null;
};

export const getShowItemNote = (countryCode: string): any => {
  const getCountryShowItemNote = countriesConfig[countryCode]?.showItemNote;
  return getCountryShowItemNote ? getCountryShowItemNote() : null;
};

export const getShowFreeDeliveryProgressBar = (countryCode: string): any => {
  const getCountryShowDeliveryProgressBar =
    countriesConfig[countryCode]?.getShowDeliveryProgressBar;
  return getCountryShowDeliveryProgressBar
    ? getCountryShowDeliveryProgressBar()
    : null;
};

export const getShowDownloadPDF = (countryCode: string): boolean => {
  const getCountryShowDownloadPDF =
    countriesConfig[countryCode]?.isShowDownloadPDF;
  return getCountryShowDownloadPDF ? getCountryShowDownloadPDF() : false;
};

export const getIsShowDeliveryDelayWarning = (countryCode: string): boolean => {
  const getCountryShowDeliveryDelayWarning =
    countriesConfig[countryCode].showDeliveryDelayWarning;
  return getCountryShowDeliveryDelayWarning
    ? getCountryShowDeliveryDelayWarning()
    : false;
};

const remoteConfigUtil = {
  fetch: fetchRemoteConfig,
  getDeveloperMode,
  getIsShowNeutralColorPrice,
  getMinimumDistanceGeocoding,
  getFeatureSignUpPopUp,
  getExrateFlashPoint,
  getEnablePayment,
  getUpperLimitPayment,
  getLowerLimitPayment,
  getDefaultPickupTimeAddVar,
  getMaxEstimateDeliveryTimeAddVar,
  getFreeShipping,
  getIsEnabledDelivery,
  getIsShowCleanHubBanner,
  getIsShowCleanHubServiceBanner,
  getIsShowCustomerInfo,
  getTaxInvoiceRequest,
  getTaxInvoiceRequestMinDate,
  getIsShowRecommendedProducts,
  getTaxInvoiceRequestForm,
  getEnableZendesk,
  getIsEnableScanBarcode,
  getIsShowCurrency,
  getCleanHubTrackingValue,
  getCleanHubLearnMore,
  getPaymentPageExpirationDuration,
  getEnableRapydCheckoutToolkit,
  getIsPreorderEnabled,
  getEnableValidationApplePay,
  getSupportedNetworkApplePayUrl,
  getBulkOrderContact,
  getShowDownloadPDF,
  getShowItemNote,
  getShowFreeDeliveryProgressBar,
  getOriginWhitelistInicis,
  getIsShowDeliveryDelayWarning,
};

export default remoteConfigUtil;
