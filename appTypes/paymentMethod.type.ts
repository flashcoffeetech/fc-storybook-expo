export enum PaymentOption {
  //======  deprecated ========
  CREDIT_CARD = 'CreditCard',
  OVO = 'OVO',
  DANA = 'Dana',
  GOPAY = 'GoPay',
  SHOPEEPAY = 'ShopeePay',
  // == GLOBAL ==
  FREE = 'Free',
  CASH = 'Cash',
  FlashPoint = 'FlashPoint',
  PANDAGO_CASH_ON_DELIVERY = 'pandago_cash_on_delivery',
  // == ID ==
  ID_CREDITCARD = 'id_xendit_creditcard',
  ID_GOPAY = 'id_midtrans_gopay',
  ID_XENDIT_OVO = 'id_xendit_ovo',
  ID_XENDIT_DANA = 'id_xendit_dana',
  ID_XENDIT_SHOPEEPAY = 'id_xendit_shopeepay',
  // == SG ==
  SG_ADYEN_APPLEPAY = 'sg_adyen_applepay',
  SG_ADYEN_CREDITCARD = 'sg_adyen_creditcard',
  SG_ADYEN_GRABPAY = 'sg_adyen_grabpay',
  SG_ADYEN_PAYWITHGOOGLE = 'sg_adyen_paywithgoogle',
  // == TH ==
  TH_ADYEN_CREDITCARD = 'th_adyen_creditcard',
  TH_ADYEN_MOLPAY = 'th_adyen_molpay-ebanking',
  TH_ADYEN_PAYWITHGOOGLE = 'th_adyen_paywithgoogle',
  TH_TRUEMONEY_TRUEMONEY = 'th_truemoney_truemoney',
  TH_SHOPEEPAY_SHOPEEPAY = 'th_shopeepay_shopeepay',
  // == HK ==
  HK_ADYEN_ALIPAYHK = 'hk_adyen_alipayhk',
  HK_ADYEN_APPLEPAY = 'hk_adyen_applepay',
  HK_ADYEN_CREDITCARD = 'hk_adyen_creditcard',
  HK_ADYEN_WECHATPAY = 'hk_adyen_wechatpay',
  HK_COD_ALIPAYHK = 'hk_cod_alipayhk',
  HK_HSBC_PAYME = 'hk_hsbc_payme',
  HK_HKT_TAPANDGO = 'hk_hkt_tapandgo',
  HK_ADYEN_PAYWITHGOOGLE = 'hk_adyen_paywithgoogle',
  // == JP ==
  JP_ADYEN_APPLEPAY = 'jp_adyen_applepay',
  JP_ADYEN_CREDITCARD = 'jp_adyen_creditcard',
  JP_RAPYD_CARD = 'jp_rapyd_card',
  // == KR ==
  KR_INICIS_CREDITCARD = 'kr_inicis_creditcard',
  KR_INICIS_KAKAOPAY = 'kr_inicis_kakaopay',
  KR_INICIS_NAVERPAY = 'kr_inicis_naverpay',
  KR_INICIS_SAMSUNGPAY = 'kr_inicis_samsungpay',
  KR_RAPYD_CARD = 'kr_rapyd_card',
  KR_RAPYD_KAKAOPAY = 'kr_rapyd_kakaopay',
  KR_RAPYD_SAMSUNGPAY = 'kr_rapyd_samsungpay',
  // == TW ==
  TW_TAPPAY_GOOGLEPAY = 'tw_tappay_googlepay',
  TW_TAPPAY_JKOPAY = 'tw_tappay_jkopay',
  TW_TAPPAY_LINEPAY = 'tw_tappay_linepay',
  TW_TAPPAY_APPLEPAY = 'tw_tappay_applepay',
}

export type PaymentOptions = {
  [key in PaymentOption]?: string;
};

export enum EPaymentMethod {
  APPLE_PAY = 'apple_pay',
}
