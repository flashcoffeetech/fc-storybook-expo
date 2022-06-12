import crypto from 'crypto-js';

export const encryptCreditCard = async (
  plainData: string,
  sub: string, // customerRefId,
  secretPassphrase: string,
): Promise<string> => {
  const secretPhraseEnv = secretPassphrase;
  const secretPassphraseSub = sub.substring(sub.length - 12);
  const secretPhrase = secretPhraseEnv + '-' + '' + '-' + secretPassphraseSub;
  return crypto.AES.encrypt(plainData, secretPhrase).toString();
};

export const decryptCreditCard = async (
  encryptedData: string,
  sub: string, // customerRefId
  secretPassphrase: string,
): Promise<string> => {
  const secretPhraseEnv = secretPassphrase;
  const secretPassphraseSub = sub.substring(sub.length - 12);
  const secretPhrase = secretPhraseEnv + '-' + '' + '-' + secretPassphraseSub;
  return crypto.AES.decrypt(encryptedData, secretPhrase).toString(
    crypto.enc.Utf8,
  );
};
