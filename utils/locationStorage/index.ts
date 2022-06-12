import {ICountry, ILocation} from '@appTypes/location.type';
import {fcStoreGetItem, fcStoreSetItem} from '@utils/fcStorage';

const LOCATION_KEY = 'location';
const COUNTRY_KEY = 'country';

export const getFcCountry = async (): Promise<ICountry> => {
  const response = await fcStoreGetItem(COUNTRY_KEY);
  return response ? JSON.parse(response) : null;
};

export const setFcCountry = async (data: ICountry): Promise<void> => {
  return await fcStoreSetItem(COUNTRY_KEY, data);
};

export const getFcLocation = async (): Promise<ILocation> => {
  const response = await fcStoreGetItem(LOCATION_KEY);
  return response ? JSON.parse(response) : null;
};

export const setFcLocation = async (data: ILocation): Promise<void> => {
  return await fcStoreSetItem(LOCATION_KEY, data);
};
