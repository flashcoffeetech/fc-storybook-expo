import {
  EMAIL_VALIDATION_REGEX,
  MIN_EMAIL_LENGTH,
} from '@constants/global.const';

export const validateEmail = (email: string): boolean => {
  return email?.length > MIN_EMAIL_LENGTH && EMAIL_VALIDATION_REGEX.test(email);
};
