import _ from 'lodash';
import {ICountry, ILocation} from '@appTypes/location.type';
import {fcStoreGetItem, fcStoreSetItem} from '@utils/fcStorage';

const DEV_MODE_LOCATION_KEY = 'dev_mode_location';
const DEV_MODE_COUNTRY_KEY = 'dev_mode_country';
const DEV_MODE_ENABLED_KEY = 'dev_mode_enable';
const DEV_MODE_WAS_ENABLED_KEY = 'dev_mode_was_enable';

export const getFcDevModeCountry = async (): Promise<ICountry> => {
  const response = await fcStoreGetItem(DEV_MODE_COUNTRY_KEY);
  return response ? JSON.parse(response) : null;
};

export const setFcDevModeCountry = async (country: ICountry): Promise<void> => {
  fcStoreSetItem(DEV_MODE_COUNTRY_KEY, country);
};

export const getFcDevModeLocation = async (): Promise<ILocation> => {
  const response = await fcStoreGetItem(DEV_MODE_LOCATION_KEY);
  return response ? JSON.parse(response) : null;
};

export const setFcDevModeLocation = async (
  location: ILocation,
): Promise<void> => {
  fcStoreSetItem(DEV_MODE_LOCATION_KEY, location);
};

export const getFcDevModeEnabled = async (): Promise<boolean> => {
  const response = (await fcStoreGetItem(DEV_MODE_ENABLED_KEY)) as string;
  return _.isEqual(response, 'true'); // return boolean value
};

export const setFcDevModeEnabled = async (data: boolean): Promise<void> => {
  fcStoreSetItem(DEV_MODE_ENABLED_KEY, data);
};

export const getFcDevModeWasEnabled = async (): Promise<boolean> => {
  const response = await fcStoreGetItem(DEV_MODE_WAS_ENABLED_KEY);
  return _.isEqual(response, 'true'); // return boolean value
};

export const setFcDevModeWasEnabled = async (
  enabled: boolean,
): Promise<void> => {
  fcStoreSetItem(DEV_MODE_WAS_ENABLED_KEY, enabled);
};
