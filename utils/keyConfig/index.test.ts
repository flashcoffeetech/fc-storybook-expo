import 'react-native';
import Config from 'react-native-config';
import {secretPassphrase, adyenVerificationCode, xenditPublicKey} from '.';

const idCountry = 'ID';
const stgIDCountry = 'STG_ID';
const sgCountry = 'SG';
const thCountry = 'TH';
const twCountry = 'TW';

it('secretPassphrase works well', async () => {
  expect(Config.SECRET_PASSPHRASE_SG).toBeDefined();
  expect(Config.SECRET_PASSPHRASE_TH).toBeDefined();
  expect(Config.SECRET_PASSPHRASE_TW).toBeDefined();

  expect(secretPassphrase(sgCountry)).resolves.toBeDefined();
  expect(secretPassphrase(thCountry)).resolves.toBeDefined();
  expect(secretPassphrase(twCountry)).resolves.toBeDefined();
  expect(secretPassphrase(sgCountry)).resolves.toStrictEqual('SECRET_SG');
  expect(secretPassphrase(thCountry)).resolves.toStrictEqual('SECRET_TH');
  expect(secretPassphrase(twCountry)).resolves.toStrictEqual('SECRET_TW');
});

it('adyenVerificationCode works well', () => {
  expect(Config.ADYEN_VERIFICATION_TOKEN_SG).toBeDefined();
  expect(Config.ADYEN_VERIFICATION_TOKEN_TH).toBeDefined();
  expect(Config.ADYEN_VERIFICATION_TOKEN_TW).toBeDefined();

  expect(adyenVerificationCode(sgCountry)).resolves.toBeDefined();
  expect(adyenVerificationCode(thCountry)).resolves.toBeDefined();
  expect(adyenVerificationCode(twCountry)).resolves.toBeDefined();
  expect(adyenVerificationCode(sgCountry)).resolves.toStrictEqual('TOKEN_SG');
  expect(adyenVerificationCode(thCountry)).resolves.toStrictEqual('TOKEN_TH');
  expect(adyenVerificationCode(twCountry)).resolves.toStrictEqual('TOKEN_TW');
});

it('xenditPublicKey works well', () => {
  expect(Config.XENDIT_PUBLIC_KEY_ID).toBeDefined();
  expect(Config.XENDIT_PUBLIC_KEY_STG_ID).toBeDefined();

  expect(xenditPublicKey(idCountry)).resolves.toBeDefined();
  expect(xenditPublicKey(stgIDCountry)).resolves.toBeDefined();

  expect(xenditPublicKey(idCountry)).resolves.toStrictEqual('TOKEN_ID');
  expect(xenditPublicKey(stgIDCountry)).resolves.toStrictEqual('TOKEN_STG_ID');
});
