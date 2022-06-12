import {CountryCode} from 'react-native-country-picker-modal';

export const getNationalNumber = (phoneNumber: string): string => {
  try {
    const phoneUtil =
      require('google-libphonenumber').PhoneNumberUtil.getInstance();
    const countryCode = getCountryCode(phoneNumber);
    if (phoneUtil.isNANPACountry(countryCode)) {
      return phoneNumber.startsWith('+') && phoneNumber.substring(5);
    } else {
      const parsedNumber = phoneUtil.parseAndKeepRawInput(phoneNumber, '');
      return parsedNumber.getNationalNumber().toString();
    }
  } catch {
    return phoneNumber;
  }
};

export const getCountryCode = (phoneNumber: string): CountryCode => {
  try {
    const phoneUtil =
      require('google-libphonenumber').PhoneNumberUtil.getInstance();
    const parsedNumber = phoneUtil.parseAndKeepRawInput(phoneNumber, '');
    return phoneUtil.getRegionCodeForNumber(parsedNumber).toString();
  } catch {
    return undefined;
  }
};

export const getCallingCode = (phoneNumber: string): string => {
  try {
    const phoneUtil =
      require('google-libphonenumber').PhoneNumberUtil.getInstance();
    const countryCode = getCountryCode(phoneNumber);
    if (phoneUtil.isNANPACountry(countryCode)) {
      return phoneNumber.substring(1, 5);
    } else {
      const parsedNumber = phoneUtil.parse(phoneNumber, '');
      return parsedNumber.getCountryCode().toString();
    }
  } catch {
    return undefined;
  }
};
