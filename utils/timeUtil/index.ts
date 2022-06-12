import moment from 'moment';

export const getDuration = (date: string, unitOfTime: any) => {
  return moment(date).diff(moment(), unitOfTime);
};
