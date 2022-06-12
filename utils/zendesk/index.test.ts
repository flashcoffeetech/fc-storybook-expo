import {getMinutesInWeek, isMinutesInBizHours} from '.';

const bizHourIntervals = [
  {
    startTime: 1980,
    endTime: 2520,
  },
  {
    startTime: 3420,
    endTime: 3960,
  },
  {
    startTime: 4860,
    endTime: 5400,
  },
  {
    startTime: 6300,
    endTime: 6840,
  },
  {
    startTime: 7740,
    endTime: 8280,
  },
];

it('getMinutesInWeek works well', () => {
  const date = new Date('Tue, 08 Feb 2022 12:00:00');
  const result = getMinutesInWeek(date);
  expect(result).toEqual(3600);
});

it('isMinutesInBizHours returns true', () => {
  const minutes = 3600;
  const result = isMinutesInBizHours(minutes, bizHourIntervals);
  expect(result).toBeTruthy();
});

it('isMinutesInBizHours returns false', () => {
  const minutes = 5500;
  const result = isMinutesInBizHours(minutes, bizHourIntervals);
  expect(result).toBeFalsy();
});
