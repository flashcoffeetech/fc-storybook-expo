import 'react-native';
import {ICountry} from '@appTypes/location.type';
import {goToPaymentMethod} from '.';

it('goToPaymentMethods works well for Indonesia', () => {
  const navigation = {
    navigate: (): void => {},
  };
  const country: ICountry = {
    code: 'ID',
    currencies: ['IDR'],
    currency: 'IDR',
    name: 'Indonesia',
    zones: ['Asia/Jakarta'],
  };
  goToPaymentMethod(navigation, country);
});

it('goToPaymentMethod works well for Singapore', () => {
  const navigation = {
    navigate: (): void => {},
  };
  const country: ICountry = {
    code: 'SG',
    currencies: ['SGD'],
    currency: 'SGD',
    name: 'Singapore',
    zones: ['Asia/Singapore'],
  };
  goToPaymentMethod(navigation, country);
});

it('goToPaymentMethod works well for Thailand', () => {
  const navigation = {
    navigate: (): void => {},
  };
  const country: ICountry = {
    code: 'TH',
    currencies: ['THB'],
    currency: 'THB',
    name: 'Thailand',
    zones: ['Asia/Thailand'],
  };
  goToPaymentMethod(navigation, country);
});

it('goToPaymentMethod works well for Taiwan', () => {
  const navigation = {
    navigate: (): void => {},
  };
  const country: ICountry = {
    code: 'TW',
    currencies: ['NT'],
    currency: 'NT',
    name: 'Taiwan',
    zones: ['Asia/Taiwan'],
  };
  goToPaymentMethod(navigation, country);
});

it('goToPaymentMethod works well for Default', () => {
  const navigation = {
    navigate: (): void => {},
  };
  const country: ICountry = {
    code: 'Other',
    currencies: ['None'],
    currency: 'None',
    name: 'Test country',
    zones: ['Asia/Unknown'],
  };
  goToPaymentMethod(navigation, country);
});
