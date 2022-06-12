import {API} from '@aws-amplify/api';
import {Auth} from '@aws-amplify/auth';
import {
  QueryFilter,
  QuerySort,
  RequestQueryBuilder,
} from '@nestjsx/crud-request';

import _ from 'lodash';
import {getBuildNumber, getVersion} from 'react-native-device-info';

import {PAGE_LIMIT} from '@constants/api.const';
import axios, {AxiosRequestHeaders} from 'axios';

export interface IDeleteParam {
  ids: string[];
}

export interface ISortParam {
  field: string;
  order: 'ASC' | 'DESC';
}

export interface IFilterParam {
  [key: string]: any | IFilterParam;
}

export interface IResponsePagingList {
  data: any[];
  count?: number;
  total?: number;
  page?: number;
  pageCount?: number;
}

export interface IPagingParam {
  pagination?: {page: number; perPage: number};
  filters?: QueryFilter[];
  sorts?: QuerySort[];
  target?: string;
}

export interface IGetOneParams {
  id: string;
}

export const APIClient = {
  async getToken(): Promise<string> {
    const isLoggedIn = await Auth.currentUserInfo();

    if (isLoggedIn) {
      const session = await Auth.currentSession();

      if (session) {
        const token = session.getIdToken().getJwtToken();

        return `Bearer ${token}`;
      }
    }
    return '';
  },

  async getHeaders(additionalHeaders?: any): Promise<HeadersInit_> {
    const appBuildNumber = await getBuildNumber();
    const appVersion = await getVersion();
    const token = await this.getToken();

    return {
      Authorization: token,
      'x-fc-version-code': appBuildNumber,
      'x-fc-version-name': appVersion,
      ...additionalHeaders,
    };
  },

  async getList<Type>(
    resource: string,
    path: string,
    pagingParams: IPagingParam = {
      pagination: {page: 1, perPage: PAGE_LIMIT},
    },
  ): Promise<IResponsePagingList> {
    try {
      const qb = RequestQueryBuilder.create();

      if (pagingParams?.sorts?.length) {
        qb.sortBy(pagingParams.sorts);
      }

      if (!_.isEmpty(pagingParams.pagination)) {
        const {page, perPage} = pagingParams.pagination;

        qb.setLimit(perPage);
        qb.setPage(page);
      }

      if (pagingParams.filters) {
        qb.setFilter(pagingParams.filters);
      }

      console.info(
        'GET_LIST',
        `${await API.endpoint(resource)}${path}?${qb.query()}`,
      );
      return await API.get(resource, path, {
        headers: await this.getHeaders(),
      });
    } catch (err: any) {
      if (err.response) {
        throw err.response;
      }

      throw err;
    }
  },

  async getListFilter<Type>(
    resource: string,
    path: string,
    pagingParams: IPagingParam = {
      pagination: {page: 1, perPage: 99},
    },
  ): Promise<IResponsePagingList> {
    try {
      const qb = RequestQueryBuilder.create();

      if (pagingParams?.sorts?.length) {
        qb.sortBy(pagingParams.sorts);
      }

      if (!_.isEmpty(pagingParams.pagination)) {
        const {page, perPage} = pagingParams.pagination;

        qb.setPage(page);
        qb.setLimit(perPage);
      }

      if (pagingParams.filters) {
        qb.setFilter(pagingParams.filters);
      }

      console.info(
        'GET_LIST_FILTER',
        `${await API.endpoint(resource)}${path}?${qb.query()}`,
      );
      return await API.get(resource, `${path}?${qb.query()}`, {
        headers: await this.getHeaders(),
      });
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },

  async get<Type>(resource: string, path: string): Promise<Type> {
    try {
      console.info('GET', `${await API.endpoint(resource)}${path}`);

      return await API.get(resource, path, {
        headers: await this.getHeaders(),
      });
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },

  async post<Type>(
    resource: string,
    path: string,
    body: any,
    additionalHeaders?: any,
  ): Promise<Type> {
    try {
      console.info('POST', `${await API.endpoint(resource)}${path}`);

      return await API.post(resource, path, {
        body,
        headers: await this.getHeaders(additionalHeaders),
      });
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },

  async patch<Type>(
    resource: string,
    path: string,
    body: any,
    additionalHeaders?: any,
  ): Promise<Type> {
    try {
      console.info('PATCH', `${await API.endpoint(resource)}${path}`);

      return await API.patch(resource, path, {
        body,
        headers: await this.getHeaders(additionalHeaders),
      });
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },

  async put<Type>(resource: string, path: string, body: Type): Promise<Type> {
    try {
      console.info('PUT', `${await API.endpoint(resource)}${path}`);

      return await API.put(resource, path, {
        body,
        headers: await this.getHeaders(),
      });
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },

  async delete<Type>(
    resource: string,
    path: string,
    body: Type,
  ): Promise<void> {
    try {
      console.info('DELETE', `${await API.endpoint(resource)}${path}`);

      await API.del(resource, path, {
        body,
        headers: await this.getHeaders(),
      });
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },

  async fetchPost<Type>(
    resource: string,
    path: string,
    body: any,
  ): Promise<Type> {
    try {
      const url = `${resource}${path}`;
      console.info('POST', url);

      const additionalHeaders = {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json; charset=UTF-8',
        'user-agent': 'aws-amplify/3.8.23 react-native',
      };

      const headers = (await this.getHeaders(
        additionalHeaders,
      )) as AxiosRequestHeaders;

      return await axios.post(url, body, {headers});
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },
  async fetchGet<Type>(resource: string, path: string): Promise<Type> {
    try {
      const url = `${resource}${path}`;
      console.info('GET', url);

      const additionalHeaders = {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json; charset=UTF-8',
        'user-agent': 'aws-amplify/3.8.23 react-native',
      };

      const headers = await this.getHeaders(additionalHeaders);

      try {
        const result = await fetch(url, {
          method: 'GET',
          headers,
        });
        const data = await result.json();

        if (data.error) {
          throw data.error;
        } else {
          return data;
        }
      } catch (error: any) {
        console.error(`error ${url}=>`, JSON.stringify(error));
      }
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },
};
