import * as React from 'react-native';

import Geocoder, {
  GeocoderOptions,
  Position,
} from '@timwangdev/react-native-geocoder';
import Config from 'react-native-config';
import _ from 'lodash';
import getDistance from 'geolib/es/getDistance';
import RNLocation, {AndroidProvider} from 'react-native-location';
import PlayServices from 'react-native-play-services';
import {showLocation} from 'react-native-map-link';
import {ICountry, IGeocodingObject, ILocation} from '@appTypes/location.type';
import {IStore} from '@appTypes/store.type';
import {
  getFcCountry,
  getFcLocation,
  setFcCountry,
  setFcLocation,
} from '@utils/locationStorage';
import {
  AVAILABLE_COUNTRIES,
  DEFAULT_COUNTRY,
  DEFAULT_LOCATION,
} from '@constants/country.const';
import {DEV_COUNTRY_LIST} from '@constants/devMode.const';

// Validate Geocoding api key
const geocodingApiKey =
  React.Platform.OS === 'android'
    ? Config.GEOCODING_ANDROID
    : Config.GEOCODING_IOS;

const geocodingOption: GeocoderOptions = {
  apiKey: geocodingApiKey,
  locale: 'US',
};

export const initializeRNLocation = async (): Promise<void> => {
  if (React.Platform.OS === 'ios') {
    // iOS Only
    RNLocation.configure({
      distanceFilter: 5.0, // The minimum distance in meters
      allowsBackgroundLocationUpdates: false,
    });
  } else {
    const status = await PlayServices.checkPlayServicesStatus();
    let androidProviderUsed: AndroidProvider | 'standard';

    // If Google Play Service is not available in Device/disabled, cannot use 'auto' it will cause crashed NullPointerException
    // RNPlayServicesLocationProvider.java line 175
    // com.github.reactnativecommunity.location.RNPlayServicesLocationProvider$2.onFailure
    // Note in the types.d.ts should be has "standard" feature
    // export declare type AndroidProvider = "auto" | "fused" | "builtin" | "standard";

    androidProviderUsed =
      status.toString() ===
      PlayServices.GooglePlayServicesStatus.AVAILABLE.toString()
        ? 'auto'
        : 'standard';

    RNLocation.configure({
      distanceFilter: 5.0, // The minimum distance in meters
      allowsBackgroundLocationUpdates: false,
      androidProvider: androidProviderUsed as AndroidProvider,
    });
  }
};
export const requestPermissionRNLocation = async (): Promise<boolean> => {
  return await RNLocation.requestPermission({
    ios: 'whenInUse',
    android: {
      detail: 'fine',
    },
  });
};

export const getDefaultCurrentLocation = async (): Promise<ILocation> => {
  const fcStorageCurrentLocation = await getFcLocation();
  if (fcStorageCurrentLocation) {
    return fcStorageCurrentLocation;
  } else {
    await setFcLocation(DEFAULT_LOCATION);
    return DEFAULT_LOCATION;
  }
};

export const getDefaultCountryLocation = (countryCode: string): ILocation => {
  let foundLocation = DEFAULT_LOCATION;
  DEV_COUNTRY_LIST.map((item): any => {
    if (item.country.code === countryCode) {
      foundLocation.latitude = item.location.latitude;
      foundLocation.longitude = item.location.longitude;
    } else {
      return null;
    }
  });
  return foundLocation;
};

export const getDefaultCurrentCountry = async (): Promise<ICountry> => {
  const fcStorageCurrentCountry = await getFcCountry();
  if (fcStorageCurrentCountry) {
    return fcStorageCurrentCountry;
  } else {
    await setFcCountry(DEFAULT_COUNTRY);
    return DEFAULT_COUNTRY;
  }
};

export const validateAvailableCountry = async (
  currentCountry: ICountry,
): Promise<ICountry> => {
  let result = await getDefaultCurrentCountry();
  const fcCurrentCountry = _.find(AVAILABLE_COUNTRIES, item => {
    return item.code === currentCountry?.code;
  });

  if (fcCurrentCountry) {
    currentCountry.currency = fcCurrentCountry.currency;
    result = currentCountry;
    return result;
  }

  return result;
};

export const getLocationTranslated = async (
  currentLocation: ILocation,
): Promise<IGeocodingObject[]> => {
  const position = {
    lat: currentLocation.latitude,
    lng: currentLocation.longitude,
  };
  const locationTranslated: IGeocodingObject[] = await getGeocodePosition(
    position,
  );
  return locationTranslated;
};

export const getFormalAddress = async (
  geocodePosition: IGeocodingObject[],
): Promise<string> => {
  if (geocodePosition) {
    return geocodePosition[0].formattedAddress;
  }
  return '';
};

export const getAddressName = async (
  geocodePosition: IGeocodingObject[],
): Promise<string> => {
  if (geocodePosition) {
    return (
      geocodePosition[0].feature ||
      `${geocodePosition[0].streetName || ''}, ${
        geocodePosition[0].streetNumber || ''
      }` ||
      geocodePosition[0].locality ||
      geocodePosition[0].subLocality ||
      geocodePosition[0].subAdminArea
    );
  }
  return '';
};

export const getCountryByLocation = async (
  currentLocation: ILocation,
  isRaw?: boolean,
): Promise<ICountry> => {
  const position = {
    lat: currentLocation.latitude,
    lng: currentLocation.longitude,
  };
  const locationTranslated: IGeocodingObject[] = await getGeocodePosition(
    position,
  );
  _.forEach(locationTranslated, item => {
    const distance = getDistance(
      {
        latitude: position.lat,
        longitude: position.lng,
      },
      {latitude: item.position.lat, longitude: item.position.lng},
    );
    item.distance = distance;
  });

  const sortedLocation = _.orderBy(locationTranslated, 'distance', ['asc']);
  const nearestLocation = sortedLocation[0];

  const nearestCountry: ICountry = {
    code: nearestLocation.countryCode,
    name: nearestLocation.country,
    currencies: [],
    zones: [],
    currency: undefined,
  };
  if (isRaw) {
    return nearestCountry;
  } else {
    return await validateAvailableCountry(nearestCountry);
  }
};

export const openMap = async (
  latitude: number,
  longitude: number,
): Promise<void> => {
  await showLocation({
    latitude,
    longitude,
  });
};

export const getStoreDistance = (
  currentLocation: ILocation,
  storeLocation: IStore,
) => {
  if (currentLocation) {
    const distance = getDistance(
      {
        latitude: currentLocation?.latitude,
        longitude: currentLocation?.longitude,
      },
      {latitude: storeLocation.latitude, longitude: storeLocation.longitude},
    );

    let formatted = '';

    if (distance > 1000) {
      formatted = `${(distance / 1000).toFixed(2)}km`;
    } else {
      formatted = `${distance}m`;
    }

    return {raw: distance, formatted};
  }
  return {
    raw: 0,
    formatted: '0 km',
  };
};

export const getGeocodePosition = async (
  position: Position,
): Promise<IGeocodingObject[]> => {
  return await new Promise<any>(resolve => {
    Geocoder.geocodePosition(position, geocodingOption).then(result => {
      resolve(result);
    });
  });
};
