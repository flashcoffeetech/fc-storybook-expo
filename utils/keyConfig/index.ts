import Config from 'react-native-config';

export const secretPassphrase = async (
  countryCode: string,
): Promise<string> => {
  return Config[`SECRET_PASSPHRASE_${countryCode}`];
};

export const adyenVerificationCode = async (
  countryCode: string,
): Promise<string> => {
  return Config[`ADYEN_VERIFICATION_TOKEN_${countryCode}`];
};

export const xenditPublicKey = async (countryCode: string): Promise<string> => {
  return Config[`XENDIT_PUBLIC_KEY_${countryCode}`];
};
