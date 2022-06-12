import { assets } from "../../assets/assets";
import { ImageSourcePropType } from "react-native";
import { ECreditCardType } from "../../appTypes/creditCardType.type";

export const getCardLogo = (cardType: string): ImageSourcePropType => {
  const adyenCard = {
    mc: assets.logo.masterCard,
    visa: assets.logo.visa,
    amex: assets.logo.americanExpress,
    discover: assets.logo.discover,
    diners: assets.logo.dinersClub,
    maestro: assets.logo.maestro,
    jcb: assets.logo.jcb,
    cup: assets.logo.unionpay,
  };

  const tappayCard = {
    MasterCard: assets.logo.masterCard,
    VISA: assets.logo.visa,
    AMEX: assets.logo.americanExpress,
    JCB: assets.logo.jcb,
    "Union Pay": assets.logo.unionpay,
  };

  const xenditCard = {
    MASTERCARD: assets.logo.masterCard,
    VISA: assets.logo.visa,
    AMEX: assets.logo.americanExpress,
    JCB: assets.logo.jcb,
  };

  const creditCardType = {
    [ECreditCardType.AMERICAN_EXPRESS]: assets.logo.americanExpress,
    [ECreditCardType.AMERICAN_EXPRESS_TAPPAY]: assets.logo.americanExpress,
    [ECreditCardType.DINERS_CLUB]: assets.logo.dinersClub,
    [ECreditCardType.DISCOVER]: assets.logo.discover,
    [ECreditCardType.JCB]: assets.logo.jcb,
    [ECreditCardType.MAESTRO]: assets.logo.maestro,
    [ECreditCardType.MASTER_CARD]: assets.logo.masterCard,
    [ECreditCardType.UNION_PAY]: assets.logo.unionpay,
    [ECreditCardType.UNION_PAY_TAPPAY]: assets.logo.unionpay,
    [ECreditCardType.VISA]: assets.logo.visa,
  };

  const cardLogoMap = {
    ...creditCardType,
    ...adyenCard,
    ...tappayCard,
    ...xenditCard,
  };

  return cardLogoMap[cardType] || null;
};
