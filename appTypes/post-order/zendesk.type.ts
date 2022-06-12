export interface IZendeskBusinessHourInterval {
  startTime: number;
  endTime: number;
}

export interface IZendeskBusinessHour {
  id: number;
  timeZone: string;
  intervals: IZendeskBusinessHourInterval[];
}

export interface IZendeskBusinessHourResponse {
  success: boolean;
  payload: IZendeskBusinessHour;
}
