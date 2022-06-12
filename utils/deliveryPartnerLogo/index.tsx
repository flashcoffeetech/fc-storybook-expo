import {assets} from '@assets/assets';
import {EDeliveryPartner} from '@appTypes/delivery.type';
import {ImageSourcePropType} from 'react-native';

export const getDeliveryPartnerLogo = (
  partnerCode: string,
): ImageSourcePropType => {
  switch (partnerCode) {
    case EDeliveryPartner.PANDAGO:
      return assets.logo.pandago;
    case EDeliveryPartner.GRAB_EXPRESS:
      return assets.logo.grabExpress;

    default:
      return null;
  }
};
