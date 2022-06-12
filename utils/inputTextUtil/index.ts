import {EMOJI_REGEX} from '@constants/global.const';
import {ICountry} from '@appTypes/location.type';
import {
  COUNTRY_SOUTH_KOREA,
  COUNTRY_JAPAN,
  COUNTRY_TAIWAN,
} from '@constants/country.const';

export const isContainsEmoji = (textVal: string): boolean => {
  return textVal && new RegExp(EMOJI_REGEX).test(textVal);
};

export const isOnlyWhiteSpace = (textVal: string): boolean => {
  return textVal?.match(/^ *$/) !== null;
};

export const removeMultipleLineBreaks = (textVal: string): string => {
  return textVal.replace(/(\r+\n+|\n+|\r+)/gm, '\n').trim();
};

export const reoderTextInput = (currentCountry: ICountry): boolean => {
  let availableCountry = [COUNTRY_SOUTH_KOREA, COUNTRY_JAPAN, COUNTRY_TAIWAN];

  return availableCountry.indexOf(currentCountry?.code) !== -1;
};
