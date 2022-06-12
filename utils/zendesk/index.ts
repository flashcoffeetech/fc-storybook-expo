import {IZendeskBusinessHourInterval} from '@appTypes/post-order/zendesk.type';

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;

export const getMinutesInWeek = (date: Date) => {
  const dayInWeek = date.getDay();
  const pastDaysMinutes = dayInWeek * MINUTES_IN_DAY;
  const todayMinutes = date.getHours() * MINUTES_IN_HOUR + date.getMinutes();
  return pastDaysMinutes + todayMinutes;
};

export const isMinutesInBizHours = (
  minutes: number,
  bizHourIntervals: IZendeskBusinessHourInterval[],
) => {
  for (const interval of bizHourIntervals) {
    if (minutes >= interval.startTime && minutes < interval.endTime) {
      return true;
    }
  }
  return false;
};
