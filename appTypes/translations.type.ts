export interface IDownloadTranslations {
  url: string;
  version: number;
}

export interface IDownloadTranslationsResponse {
  success: boolean;
  payload: IDownloadTranslations;
}
