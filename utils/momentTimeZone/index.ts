import moment from 'moment-timezone';

export const compareTime = (start: string, end: string): boolean => {
  const currentTime = moment();

  const startTime = moment(start, 'hh:mm');
  const endTime = moment(end, 'hh:mm');

  return currentTime.isBetween(startTime, endTime);
};
