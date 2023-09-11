import axios, { AxiosRequestConfig } from 'axios';

import { getAuthData } from 'utils/storage';

import { BASE_URL } from './request-config';

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};
