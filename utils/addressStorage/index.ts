import {FC_DELIVERY_ADDRESS} from '@constants/fcStorage.const';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeFcSelectedDeliveryAddress = async (): Promise<void> => {
  await AsyncStorage.removeItem(FC_DELIVERY_ADDRESS);
};
