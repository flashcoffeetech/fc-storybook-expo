import {initDataDogInstance} from '.';
import {
  DdSdkReactNative,
  DdSdkReactNativeConfiguration,
} from '@datadog/mobile-react-native';

const clientToken = 'clientToken';
const applicationId = 'applicationId';
const appStage = 'dev';
const trackUserInteraction = true;
const trackXHRResources = true;
const trackErrors = true;
const site = 'US';
const nativeCrashReportEnabled = true;
const sampleRate = 100;

const MockObject = {
  clientToken,
  applicationId,
  appStage,
  trackUserInteraction,
  trackXHRResources,
  trackErrors,
  nativeCrashReportEnabled,
  site,
  sampleRate,
};

jest.mock('@datadog/mobile-react-native', () => {
  return {
    DdSdkReactNative: {
      initialize: jest.fn(),
    },
    DdSdkReactNativeConfiguration: jest.fn(() => MockObject),
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('initDataDogInstance function test', () => {
  it('initDataDogInstance with params', async () => {
    await initDataDogInstance({
      clientToken,
      applicationId,
      appStage,
      trackUserInteraction,
      trackXHRResources,
      trackErrors,
      site,
      nativeCrashReportEnabled,
      sampleRate,
    });

    expect(DdSdkReactNative.initialize).toHaveBeenCalledTimes(1);
    expect(DdSdkReactNativeConfiguration).toHaveBeenCalledTimes(1);

    expect(DdSdkReactNativeConfiguration).toHaveBeenCalledWith(
      clientToken,
      appStage,
      applicationId,
      trackUserInteraction,
      trackXHRResources,
      trackErrors,
    );
    expect(MockObject.site).toBe(site);
    expect(MockObject.nativeCrashReportEnabled).toBe(nativeCrashReportEnabled);
    expect(MockObject.sampleRate).toBe(sampleRate);

    expect(DdSdkReactNative.initialize).toHaveBeenCalledWith(MockObject);
  });
});
