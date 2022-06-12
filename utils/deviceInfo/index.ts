import deviceInfoModule from 'react-native-device-info';

export const getBrowserInfo = async () => {
  const userAgent = await getUserAgent();
  return {
    userAgent,
    acceptHeader:
      'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  };
};

export const getUserAgent = async () => {
  return await deviceInfoModule.getUserAgent();
};
