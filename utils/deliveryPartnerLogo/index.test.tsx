import 'react-native';

import {assets} from '@assets/assets';
import {getDeliveryPartnerLogo} from '.';
import {EDeliveryPartner} from '@appTypes/delivery.type';

it('getDeliveryPartnerLogo works well', () => {
  expect(getDeliveryPartnerLogo(EDeliveryPartner.PANDAGO)).toBe(
    assets.logo.pandago,
  );

  expect(getDeliveryPartnerLogo('XYZ')).toBe(null);
});
