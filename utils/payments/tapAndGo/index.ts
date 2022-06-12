import {NativeModules, Platform} from 'react-native';
const {TapNGoSDK} = NativeModules;

export enum ETapAndGoSupportedCurrency {
  HKD = 'HKD',
}

interface IDoSinglePaymentParams {
  isSandBoxMode: string;
  appId: string;
  apiKey: string;
  publicKey: string;
  callbackId: string;
  merTradeNo: string;
  price: string;
  currency: ETapAndGoSupportedCurrency;
  remark?: string;
  notifyUrl?: string;
}

interface IDoRecurrentPaymentParams {
  isSandBoxMode: string;
  appId: string;
  apiKey: string;
  publicKey: string;
  callbackId: string;
  merTradeNo: string;
  currency: ETapAndGoSupportedCurrency;
  remark?: string;
}

interface IDoSingleAndRecurrentPaymentParams {
  isSandBoxMode: string;
  appId: string;
  apiKey: string;
  publicKey: string;
  callbackId: string;
  merTradeNo: string;
  price: string;
  currency: ETapAndGoSupportedCurrency;
  remark?: string;
  notifyUrl?: string;
}

class RNTapNGoSDKClass {
  doSinglePayment = ({
    isSandBoxMode,
    appId,
    apiKey,
    publicKey,
    callbackId,
    merTradeNo,
    price,
    currency,
    remark,
    notifyUrl,
  }: IDoSinglePaymentParams) => {
    TapNGoSDK.setSandBoxModeEnabled(isSandBoxMode);
    TapNGoSDK.doSinglePayment(
      appId,
      apiKey,
      publicKey,
      callbackId,
      merTradeNo,
      price,
      currency,
      remark || '',
      notifyUrl || '',
    );
  };
  doRecurrentPayment = ({
    isSandBoxMode,
    appId,
    apiKey,
    publicKey,
    callbackId,
    merTradeNo,
    currency,
    remark,
  }: IDoRecurrentPaymentParams) => {
    TapNGoSDK.setSandBoxModeEnabled(isSandBoxMode);
    TapNGoSDK.doRecurrentPayment(
      appId,
      apiKey,
      publicKey,
      callbackId,
      merTradeNo,
      currency,
      remark || '',
    );
  };
  doSingleAndRecurrentPayment = ({
    isSandBoxMode,
    appId,
    apiKey,
    publicKey,
    callbackId,
    merTradeNo,
    price,
    currency,
    remark,
    notifyUrl,
  }: IDoSingleAndRecurrentPaymentParams) => {
    TapNGoSDK.setSandBoxModeEnabled(isSandBoxMode);
    TapNGoSDK.doSingleAndRecurrentPayment(
      appId,
      apiKey,
      publicKey,
      callbackId,
      merTradeNo,
      price,
      currency,
      remark || '',
      notifyUrl || '',
    );
  };
  getSdkVersion = () => {
    return new Promise((resolve, reject) => {
      if (Platform.OS === 'ios') {
        TapNGoSDK.getSDKVersion((error: any, result: any) => {
          if (error) {
            console.error('getSdkVersion iOS', error);
            reject(error);
          } else {
            resolve(result);
          }
        });
      } else {
        TapNGoSDK.getSDKVersion(
          (error: any) => {
            console.error('getSdkVersion Android', error);
            reject(error);
          },
          (result: any) => {
            resolve(result);
          },
        );
      }
    });
  };
}
const RNTapNGoSDK = new RNTapNGoSDKClass();

export {RNTapNGoSDK, TapNGoSDK};
