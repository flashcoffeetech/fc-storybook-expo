import {UseQueryOptions, QueryKey} from 'react-query';

export type TUseQueryOptions<TQueryFnData = unknown> = Omit<
  UseQueryOptions<TQueryFnData, Error, TQueryFnData, QueryKey>,
  'queryKey' | 'queryFn'
>;
