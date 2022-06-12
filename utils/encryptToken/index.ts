import crypto from 'crypto-js';

export const encryptToken = async (
  token: string,
  sub: string, // customerRefId,
  secretPassphrase: string,
): Promise<string> => {
  const secretPhraseEnv = secretPassphrase;
  const secretPassphraseSub = sub.substring(sub.length - 12);
  const secretPhrase = `${secretPhraseEnv}--${secretPassphraseSub}`;
  return crypto.AES.encrypt(token, secretPhrase).toString();
};
