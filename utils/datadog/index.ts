import {
  DdSdkReactNative,
  DdSdkReactNativeConfiguration,
} from '@datadog/mobile-react-native';

export interface IDataDogInitParams {
  clientToken: string;
  applicationId: string;
  trackUserInteraction: boolean;
  trackXHRResources: boolean;
  trackErrors: boolean;
  appStage: string;
  site: 'US' | 'EU' | 'GOV';
  nativeCrashReportEnabled: boolean;
  sampleRate: number;
}

export const initDataDogInstance = async ({
  clientToken,
  applicationId,
  trackUserInteraction,
  trackXHRResources,
  trackErrors,
  appStage = 'dev',
  site = 'US',
  nativeCrashReportEnabled = true,
  sampleRate = 80,
}: IDataDogInitParams) => {
  const config = new DdSdkReactNativeConfiguration(
    clientToken,
    appStage,
    applicationId,
    trackUserInteraction, // track User interactions
    trackXHRResources, // track XHR Resources
    trackErrors, // track Errors
  );
  config.site = site;
  config.nativeCrashReportEnabled = nativeCrashReportEnabled;
  config.sampleRate = sampleRate;
  await DdSdkReactNative.initialize(config);
};
