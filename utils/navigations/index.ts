import {ICountry} from '@appTypes/location.type';

export const goToPaymentMethod = (
  navigation: any,
  currentCountry: ICountry,
): void => {
  if (currentCountry?.code) {
    navigation.navigate('Payment', {
      screen: 'SelectPaymentMethod',
      params: {
        currentCountry: currentCountry?.code,
      },
    });
  }
};
