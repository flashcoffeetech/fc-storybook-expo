import {isOSVersionSupported} from '.';
jest.unmock('react-native');

const mockPlatform = (OS: string, Version: number) => {
  jest.resetModules();
  jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
    OS,
    Version,
    select: platform => {
      OS = platform;
    },
  }));
};

describe('test isOSVersionSupported working', () => {
  describe('android Test', () => {
    it('test isOSVersion lower than given mock', () => {
      mockPlatform('android', 22);
      const expected = false;
      const result = isOSVersionSupported({
        minAndroidVersion: 23,
        minIOSVersion: 8,
      });
      expect(result).toBe(expected);
    });
    it('test isOSVersion greater than given mock', () => {
      mockPlatform('android', 22);
      const expected = true;
      const result = isOSVersionSupported({
        minAndroidVersion: 20,
        minIOSVersion: 6,
      });
      expect(result).toBe(expected);
    });
    it('test isOSVersion no parameter given', () => {
      mockPlatform('android', 22);
      const expected = true;
      const result = isOSVersionSupported({});
      expect(result).toBe(expected);
    });
  });
  describe('iOS Test', () => {
    it('test isOSVersion lower than given mock', () => {
      mockPlatform('ios', 7);
      const expected = false;
      const result = isOSVersionSupported({
        minAndroidVersion: 23,
        minIOSVersion: 8,
      });
      expect(result).toBe(expected);
    });
    it('test isOSVersion greater than given mock', () => {
      mockPlatform('ios', 9);
      const expected = true;
      const result = isOSVersionSupported({
        minAndroidVersion: 20,
        minIOSVersion: 6,
      });
      expect(result).toBe(expected);
    });
    it('test isOSVersion no parameter given', () => {
      mockPlatform('ios', 9);
      const expected = true;
      const result = isOSVersionSupported({});
      expect(result).toBe(expected);
    });
  });
});
