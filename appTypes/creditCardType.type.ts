export enum ECreditCardType {
  MASTER_CARD = 'Mastercard',
  VISA = 'Visa',
  AMERICAN_EXPRESS = 'American Express', // NOTES: use for Adyen & Xendit
  AMERICAN_EXPRESS_TAPPAY = 'AMEX',
  DISCOVER = 'Discover',
  DINERS_CLUB = 'Diners Club',
  MAESTRO = 'Maestro',
  JCB = 'JCB',
  UNION_PAY = 'UnionPay', // NOTES: use for Adyen & Xendit
  UNION_PAY_TAPPAY = 'Union Pay',
  UNKNOWN = 'Unknown',
}
export enum ECreditCardAuthType {
  IN_REVIEW = 'IN_REVIEW',
  VERIFIED = 'VERIFIED',
}

export enum EPaymentProvider {
  XENDIT = 'xendit',
  ADYEN = 'adyen',
  TAPPAY = 'tappay',
}
