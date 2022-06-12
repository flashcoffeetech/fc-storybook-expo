import analytics, {
  FirebaseAnalyticsTypes,
} from '@react-native-firebase/analytics';
import ReactAppboy from 'react-native-appboy-sdk';
import appsFlyer from 'react-native-appsflyer';
import {AppEventsLogger} from 'react-native-fbsdk-next';

import {ICartModifier} from '@appTypes/cart.type';
import {EEventStorage, IEventStorage} from '@appTypes/eventStorage.type';
import {IOrder} from '@appTypes/order.type';
import {IOrderItem} from '@appTypes/orderItem.type';
import {IUser} from '@appTypes/user.type';
import {ICategory, ILoggedProduct, IProduct} from '@appTypes/product.type';
import {IStore} from '@appTypes/store.type';
import {
  CONTENT_TYPE_PRODUCT,
  PRODUCT_DEFAULT_BRAND,
} from '@constants/appEvent.const';
import {fcStoreSetItem, fcStoreGetItem} from 'utils/fcStorage';
import {getFcCountry} from '@utils/locationStorage';
import {CURRENCY_CODE_MAP} from '@constants/country.const';
import {EVENT_STORAGE} from '@constants/eventStorage.const';

import {
  EAppEvents,
  EAppFlyersEvents,
  ECustomEvents,
  EFBEvents,
} from './index.type';
import {isOrderDelivery} from '@utils/orderUtil';
import {
  ILoggedOrder,
  ILoggedOrderItem,
  ILoggedStore,
} from '@appTypes/loggedOrder.type';

type Params = {
  [key: string]: string | number;
};

export const getCurrency = async (): Promise<string> => {
  const currentCountry = await getFcCountry();
  return CURRENCY_CODE_MAP[currentCountry?.code] || 'IDR';
};

export const getLoggedProductData = (
  cartModifier: ICartModifier,
): ILoggedProduct => {
  return {
    id: cartModifier?.product?.id,
    name: cartModifier?.product?.name,
    outOfStock: cartModifier?.product?.outOfStock,
    availabilityBool: cartModifier?.product?.availabilityBool,
    availability: cartModifier?.product?.availability,
    isAvailableForDelivery: cartModifier?.product?.isAvailableForDelivery,
    isSelling: cartModifier?.product?.isSelling,
    qty: cartModifier?.qty,
  };
};

const convertOrderItemToLoggedOrderItem = (
  items: IOrderItem[],
): ILoggedOrderItem[] => {
  const loggedOrderItems: ILoggedOrderItem[] = [];
  items.forEach((item: IOrderItem) => {
    loggedOrderItems.push({
      itemId: item?.productId,
      name: item?.productName,
      outOfStock: item?.product?.outOfStock,
      availabilityBool: item?.product?.availabilityBool,
      availability: item?.product?.availability,
      isAvailableForDelivery: item?.product?.isAvailableForDelivery,
      isSelling: item?.product?.isSelling,
    });
  });

  return loggedOrderItems;
};

const convertStoreMetaToLoggedStoreMeta = (store: IStore): ILoggedStore => {
  return {
    storeName: store?.id,
    storeId: store?.storeName,
    storeTime: store?.storeTime,
    isSelfPickupEnabled: store?.isSelfPickupEnabled,
    isClosedToday: store?.isClosedToday,
    config: store?.config,
    timezone: store?.timezone,
    openTime: store?.openTime,
    closeTime: store?.closeTime,
    isOpen: store?.isOpen,
    deliveryCloseTime: store?.deliveryCloseTime,
    deliveryOpenTime: store?.deliveryOpenTime,
    isDeliveryEnabled: store?.isDeliveryEnabled,
    temporaryClose: store?.temporaryClose,
    distance: store?.distance,
    forceClose: store?.forceClose,
  };
};

export const getLoggedOrderData = (order: any): ILoggedOrder => {
  const loggedOrderData: any = {...order};

  delete loggedOrderData.customerMeta;
  delete loggedOrderData.storeId;
  loggedOrderData.items = convertOrderItemToLoggedOrderItem(order?.items);
  loggedOrderData.storeMeta = convertStoreMetaToLoggedStoreMeta(
    order?.storeMeta,
  );

  return loggedOrderData;
};

export const logSearchStore = (query: string): void => {
  const params: number | Params = {data: query};

  analytics().logEvent(ECustomEvents.SearchStore, params);
  AppEventsLogger.logEvent(ECustomEvents.SearchStore, params);
  appsFlyer.logEvent(ECustomEvents.SearchStore, params);
};

export const logPickStore = (store: IStore): void => {
  const params: any | Params = {
    id: store.id,
    storeName: store.storeName,
  };

  analytics().logEvent(ECustomEvents.PickStore, params);
  AppEventsLogger.logEvent(ECustomEvents.PickStore, params);
  appsFlyer.logEvent(ECustomEvents.PickStore, params);
};

export const logViewProduct = async (data: IProduct): Promise<void> => {
  const currency = await getCurrency();

  const fbParams: number | Params = {
    fb_content_type: CONTENT_TYPE_PRODUCT,
    fb_content_id: data.id,
    fb_currency: currency,
  };

  const afParams: number | Params = {
    af_price: data.price,
    af_content_type: CONTENT_TYPE_PRODUCT,
    af_content_id: data.id,
    af_currency: currency,
  };

  const {id, name, category} = {...data};

  const brazeParams = {
    currency,
    content_type: CONTENT_TYPE_PRODUCT,
    category_name: category?.categoryName,
    item_name: name,
    item_id: id,
  };

  analytics().logViewItem({
    value: data.price,
    currency,
    items: [
      {
        item_brand: PRODUCT_DEFAULT_BRAND,
        item_id: data.id,
        item_name: data.name,
        item_category: data.category.categoryName,
      },
    ],
  });

  AppEventsLogger.logEvent(EFBEvents.ViewProduct, data.price, fbParams);
  appsFlyer.logEvent(EAppFlyersEvents.ViewProduct, afParams);
  ReactAppboy.logCustomEvent(ECustomEvents.ViewProduct, brazeParams);
};

export const logAddToCart = async (data: ICartModifier): Promise<void> => {
  const currency = await getCurrency();

  const {product, qty} = {...data};
  const {id, name, category, price} = {...product};
  const totalPrice = qty * price;

  const fbParams: number | Params = {
    fb_content_type: CONTENT_TYPE_PRODUCT,
    fb_content_id: id,
    fb_currency: currency,
  };

  const afParams: number | Params = {
    af_price: totalPrice,
    af_content_type: CONTENT_TYPE_PRODUCT,
    af_content_id: id,
    af_currency: currency,
  };

  const brazeParams = {
    currency,
    content_type: CONTENT_TYPE_PRODUCT,
    category_name: category?.categoryName,
    item_name: name,
    item_id: id,
  };

  try {
    analytics().logAddToCart({
      value: totalPrice,
      currency,
      items: [
        {
          item_brand: PRODUCT_DEFAULT_BRAND,
          item_id: data.product.id,
          item_name: data.product.name,
          item_category: data.product.category.categoryName,
        },
      ],
    });
    AppEventsLogger.logEvent(EFBEvents.AddToCart, totalPrice, fbParams);
    appsFlyer.logEvent(EAppFlyersEvents.AddToCart, afParams);
    ReactAppboy.logCustomEvent(ECustomEvents.AddToCart, brazeParams);
  } catch (error) {
    console.error(
      'consumer-app/src/utils/appEvent/index.ts',
      'logAddToCart',
      error,
    );
  }
};

export const logAddPaymentInfo = (): void => {
  try {
    analytics().logEvent(EAppEvents.AddPaymentInfo);
    AppEventsLogger.logEvent(EFBEvents.AddPaymentInfo);
    appsFlyer.logEvent(EAppFlyersEvents.AddPaymentInfo, {});
  } catch (error) {
    console.error(
      'consumer-app/src/utils/appEvent/index.ts',
      'logAddPaymentInfo',
      error,
    );
  }
};

const getFirebaseAnalyticsItems = (data: IOrder) => {
  let items: FirebaseAnalyticsTypes.Item[] = [];
  let arrayIds: String[] = [];
  let totalQty: number = 0;

  data.items.forEach(item => {
    items.push({
      item_brand: PRODUCT_DEFAULT_BRAND,
      item_id: item.product.id,
      item_name: item.product.name,
      item_category: item.product.category.categoryName,
    });
    arrayIds.push(item.product.id);
    totalQty += item.quantity;
  });

  return {items, arrayIds, totalQty};
};

export const logInitiatedCheckout = async (data: IOrder): Promise<void> => {
  const currency = await getCurrency();
  const {items, arrayIds, totalQty} = getFirebaseAnalyticsItems(data);

  const fbParams: number | Params = {
    fb_content_type: CONTENT_TYPE_PRODUCT,
    fb_num_items: totalQty,
    fb_content_id: JSON.stringify(arrayIds),
    fb_payment_info_available: data.paymentMethod,
    fb_currency: currency,
  };

  const afParams: number | Params = {
    af_price: data.total,
    af_content_type: CONTENT_TYPE_PRODUCT,
    af_quantity: totalQty,
    af_content_id: JSON.stringify(arrayIds),
    af_payment_info_available: data.paymentMethod,
    af_currency: currency,
  };

  const {
    paymentMethod,
    total,
    subTotal,
    appliedVoucher,
    customerRefId,
    customerMeta,
    id,
    storeId,
    storeMeta,
    cardBrand,
    items: orderItems,
    discount,
  } = {...data};

  const itemNameList: String[] = [];
  const itemIdList: String[] = [];
  const categoryNameList: String[] = [];
  const categoryIdList: String[] = [];

  orderItems.map(boughtProduct => {
    itemNameList.push(boughtProduct?.productName || '');
    itemIdList.push(boughtProduct?.productId || '');
    categoryNameList.push(boughtProduct?.product?.category?.categoryName || '');
    categoryIdList.push(boughtProduct?.product?.category?.id || '');
  });

  const brazeParams = {
    customer_id: customerRefId,
    customer_first_name: customerMeta?.name,
    customer_last_name: '',
    order_id: id,
    invoice_no: '',

    store_country: storeMeta?.country,
    store_name: storeMeta?.storeName,
    store_id: storeId,
    store_code: storeMeta?.storeCode,
    num_items: totalQty,
    category_name_list: JSON.stringify(categoryNameList),
    category_id_list: JSON.stringify(categoryIdList),
    item_name_list: JSON.stringify(itemNameList),
    item_id_list: JSON.stringify(itemIdList),

    delivery_fee: 0,
    voucher_used: !!appliedVoucher,
    voucher_code: appliedVoucher?.voucherCode || '',
    voucher_campaign_id: appliedVoucher?.id || '',
    total_value: subTotal,
    discount_value: discount,
    pay_value: total,
    payment_method: paymentMethod,
    card_brand: cardBrand || '',
  };
  try {
    analytics().logBeginCheckout({
      value: data.total,
      currency,
      items,
    });

    AppEventsLogger.logEvent(EFBEvents.InitiatedCheckout, data.total, fbParams);
    appsFlyer.logEvent(EAppFlyersEvents.InitiatedCheckout, afParams);
    ReactAppboy.logCustomEvent(ECustomEvents.InitiatedCheckout, brazeParams);
  } catch (error) {
    console.error(
      'consumer-app/src/utils/appEvent/index.ts',
      'logInitiatedCheckout',
      error,
    );
  }
};

export const logPurchaseLater = async (data: IOrder): Promise<void> => {
  const eventPurchaseStorage = await fcStoreGetItem(EVENT_STORAGE);
  const country = await getFcCountry();
  if (!eventPurchaseStorage) {
    const arrEvents: IEventStorage[] = [
      {
        event: EEventStorage.PURCHASE,
        data,
        country,
      },
    ];
    fcStoreSetItem(EVENT_STORAGE, arrEvents);
  } else {
    const arrEvents: IEventStorage[] = JSON.parse(eventPurchaseStorage);
    arrEvents.push({
      event: EEventStorage.PURCHASE,
      data,
      country,
    });

    fcStoreSetItem(EVENT_STORAGE, arrEvents);
  }
};

export const logPurchase = async (data: IOrder): Promise<void> => {
  const currency = await getCurrency();

  const {items, arrayIds, totalQty} = getFirebaseAnalyticsItems(data);

  // This one for "purchase" event FB Standard Parameters
  const fbParams: number | Params = {
    fb_content_type: CONTENT_TYPE_PRODUCT,
    fb_num_items: totalQty,
    fb_content_id: JSON.stringify(arrayIds),
    fb_currency: currency,
  };

  // This one for "purchase" event AppFlyers
  const afParams: number | Params = {
    af_revenue: data.total,
    af_content_type: CONTENT_TYPE_PRODUCT,
    af_quantity: totalQty,
    af_content_id: JSON.stringify(arrayIds),
    af_currency: currency,
  };

  try {
    analytics().logPurchase({
      value: data.total,
      currency,
      items,
    });

    AppEventsLogger.logPurchase(data.total, currency, fbParams);

    appsFlyer.logEvent(EAppFlyersEvents.Purchase, afParams);
  } catch (error) {
    console.error(
      'consumer-app/src/utils/appEvent/index.ts',
      'logPurchase',
      error,
    );
  }
};

export const logViewProductList = (data: ICategory): void => {
  const params: number | Params = {data: JSON.stringify(data)};
  try {
    analytics().logViewItemList({
      item_list_name: data.categoryName,
    });

    AppEventsLogger.logEvent(ECustomEvents.ViewProductList, params);
    appsFlyer.logEvent(ECustomEvents.ViewProductList, params);
  } catch (error) {
    console.error(
      'consumer-app/src/utils/appEvent/index.ts',
      'logViewProductList',
      error,
    );
  }
};

export const logError = (message: string, error: any): void => {
  const params: number | Params = {
    message,
    error: JSON.stringify(error),
  };
  analytics().logEvent(EAppEvents.ErrorOccurs, params);
};

export const logSignIn = (_UserUniqueID: string): void => {
  // TODO USR-187 Implement custom event SignIn
};

export const logSignOut = (): void => {
  // TODO USR-187 Implement custom event SignOut
};

export const logSignUpCompleted = (data: IUser): void => {
  const {name, email, phone_number} = data;
  analytics().logEvent(EAppEvents.SignUpCompleted, {
    name,
    email,
    phone_number,
  });
  appsFlyer.logEvent(EAppEvents.SignUpCompleted, data);
};

export const logNotShownSignUpPopup = (): void => {
  analytics().logEvent(EAppEvents.NotShownSignUpPopup);
};

export const logShowHalfScreenSignUpPopup = (): void => {
  analytics().logEvent(EAppEvents.ShowHalfScreenSignUpPopup);
};

export const logCloseHalfScreenSignUpPopup = (): void => {
  analytics().logEvent(EAppEvents.CloseHalfScreenSignUpPopup);
};

export const logNextHalfScreenSignUpPopup = (): void => {
  analytics().logEvent(EAppEvents.NextHalfScreenSignUpPopup);
};

export const logShowFullScreenSignUpPopup = (): void => {
  analytics().logEvent(EAppEvents.ShowFullScreenSignUpPopup);
};

export const logCloseFullScreenSignUpPopup = (): void => {
  analytics().logEvent(EAppEvents.CloseFullScreenSignUpPopup);
};

export const logNextFullScreenSignUpPopup = (): void => {
  analytics().logEvent(EAppEvents.NextFullScreenSignUpPopup);
};

export const logHomeOrderTypeTab = (): void => {
  analytics().logEvent(EAppEvents.HomeOrderTypeTab);
};

export const logCheckoutOrderTypeTab = (): void => {
  analytics().logEvent(EAppEvents.CheckoutOrderTypeTab);
};

export const logStoreListOrderTypeTab = (): void => {
  analytics().logEvent(EAppEvents.StoreListOrderTypeTab);
};

export const logStoreSearch = (): void => {
  analytics().logEvent(EAppEvents.StoreSearch);
};

export const logSaveAddress = (): void => {
  analytics().logEvent(EAppEvents.SaveAddress);
};

export const logTapAddMoreLocation = (): void => {
  analytics().logEvent(EAppEvents.TapAddMoreLocation);
};

export const logTapEditFavoriteLocation = (): void => {
  analytics().logEvent(EAppEvents.TapEditFavoriteLocation);
};

export const logAdjustPinMap = (): void => {
  analytics().logEvent(EAppEvents.AdjustPinMap);
};

export const logDeleteSavedAddress = (): void => {
  analytics().logEvent(EAppEvents.DeleteSavedAddress);
};

export const logDeleteSavedAddressSuccess = (): void => {
  analytics().logEvent(EAppEvents.DeleteSavedAddressSuccess);
};

export const logEditSavedAddress = (): void => {
  analytics().logEvent(EAppEvents.EditSavedAddress);
};

export const logEditSavedAddressSuccess = (): void => {
  analytics().logEvent(EAppEvents.EditSavedAddressSuccess);
};

export const logPaymentInitiated = async (data: IOrder): Promise<void> => {
  const {storeMeta, id, invoiceNumber, paymentAmount} = {...data};

  const brazeParams = {
    order_id: id,
    invoice_number: invoiceNumber,
    payment_amount: paymentAmount,
    store_name: storeMeta?.storeName,
  };
  try {
    ReactAppboy.logCustomEvent(ECustomEvents.PaymentInitiated, brazeParams);
  } catch (error) {
    console.error(
      'consumer-app/src/utils/appEvent/index.ts',
      'logPaymentInitiated',
      error,
    );
  }
};

export const logPickupViewCart = (): void => {
  analytics().logEvent(EAppEvents.PickupViewCart);
};

export const logDeliveryViewCart = (): void => {
  analytics().logEvent(EAppEvents.DeliveryViewCart);
};

export const logPickupOrderCheckout = (): void => {
  analytics().logEvent(EAppEvents.PickupOrderCheckout);
};

export const logDeliveryOrderCheckout = (): void => {
  analytics().logEvent(EAppEvents.DeliveryOrderCheckout);
};

export const logCheckoutDeliveryTabClick = (): void => {
  analytics().logEvent(EAppEvents.CheckoutDeliveryTabClick);
};

export const logCheckoutPickupTabClick = (): void => {
  analytics().logEvent(EAppEvents.CheckoutPickupTabClick);
};

export const logHomeDeliveryTabClick = (): void => {
  analytics().logEvent(EAppEvents.HomeDeliveryTabClick);
};

export const logHomePickupTabClick = (): void => {
  analytics().logEvent(EAppEvents.HomePickupTabClick);
};

export const logStoreListDeliveryTabClick = (): void => {
  analytics().logEvent(EAppEvents.StoreListDeliveryTabClick);
};

export const logStoreListPickupTabClick = (): void => {
  analytics().logEvent(EAppEvents.StoreListPickupTabClick);
};

export const logDeliveryAddToCart = (): void => {
  analytics().logEvent(EAppEvents.DeliveryAddToCart);
};

export const logPickupAddToCart = (): void => {
  analytics().logEvent(EAppEvents.PickupAddToCart);
};

export const logPickupSelectPickupTime = (): void => {
  analytics().logEvent(EAppEvents.PickupSelectPickupTime);
};

export const logDeliveryCheckoutChangeAddress = (): void => {
  analytics().logEvent(EAppEvents.DeliveryCheckoutChangeAddress);
};

export const logChangePayment = (deliveryMethod: string): void => {
  isOrderDelivery(deliveryMethod)
    ? analytics().logEvent(EAppEvents.DeliveryChangePayment)
    : analytics().logEvent(EAppEvents.PickupChangePayment);
};

export const logConfirmPaymentMethod = (deliveryMethod: string): void => {
  isOrderDelivery(deliveryMethod)
    ? analytics().logEvent(EAppEvents.DeliveryConfirmPaymentMethod)
    : analytics().logEvent(EAppEvents.PickupConfirmPaymentMethod);
};

export const logCheckoutChangeStore = (deliveryMethod: string): void => {
  isOrderDelivery(deliveryMethod)
    ? analytics().logEvent(EAppEvents.DeliveryCheckoutChangeStore)
    : analytics().logEvent(EAppEvents.PickupCheckoutChangeStore);
};

export const logOrderDetailTrack = (): void => {
  analytics().logEvent(EAppEvents.OrderDetailTrack);
};

export const logApplyVoucher = (deliveryMethod: string): void => {
  isOrderDelivery(deliveryMethod)
    ? analytics().logEvent(EAppEvents.DeliveryApplyVoucher)
    : analytics().logEvent(EAppEvents.PickupApplyVoucher);
};

export const logAddNewPayment = (deliveryMethod: string): void => {
  isOrderDelivery(deliveryMethod)
    ? analytics().logEvent(EAppEvents.DeliveryAddNewPayment)
    : analytics().logEvent(EAppEvents.PickupAddNewPayment);
};

export const logUseVoucher = (): void => {
  analytics().logEvent(EAppEvents.UseVoucher);
};

export const logAddVoucher = (): void => {
  analytics().logEvent(EAppEvents.AddVoucher);
};

export const logBulkOrderContactUs = (): void => {
  analytics().logEvent(EAppEvents.BulkOrderContactUs);
};

export const logPayNow = (deliveryMethod: string): void => {
  isOrderDelivery(deliveryMethod)
    ? analytics().logEvent(EAppEvents.DeliveryPayNow)
    : analytics().logEvent(EAppEvents.PickupPayNow);
};

export const logContinueCheckout = (deliveryMethod: string): void => {
  isOrderDelivery(deliveryMethod)
    ? analytics().logEvent(EAppEvents.DeliveryCheckoutContinue)
    : analytics().logEvent(EAppEvents.PickupCheckoutContinue);
};
