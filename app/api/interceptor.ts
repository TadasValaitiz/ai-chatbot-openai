import {
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse
} from 'axios';
import { BASE_URL } from './constants';

const orgHeaderBlacklist = (config: AxiosRequestConfig) => {
  const blacklistUrls = ['/api/users', 'myprofile$'];
  const regex = new RegExp(blacklistUrls.join('|'));

  return regex.test(config.url!);
};

export const requestInterceptor = {
  success: (config: InternalAxiosRequestConfig) => {
    const auth = localStorage.getItem('auth-state') ? JSON.parse(localStorage.getItem('auth-state')!)['idToken'] : null;
    if (auth) {
      config.headers['Authorization'] = `Bearer ${auth}`;
    } else {
      delete config.headers['Authorization'];
    }
    const org = localStorage.getItem('organization');
    if (
      (!!config.headers['Organization'] || org) &&
      (!orgHeaderBlacklist(config) ||
        (orgHeaderBlacklist(config) && config.headers['includeOrg']))
    ) {
      delete config.headers['includeOrg'];
      config.headers['Organization'] = config.headers['Organization'] || org;
    } else {
      delete config.headers['Organization'];
    } 

    return config;
  },
  error: (error: AxiosError) => Promise.reject(error)
};

export const responseInterceptor = {
  success: (response: AxiosResponse) => response,
  error: (error: AxiosError<{ message: string }>) => {
    if (
      error.response?.status === 401 &&
      error.response.data?.message?.includes('token is expired')
    ) {
      const ce = new CustomEvent('token_expired', {
        detail: {
          invalidateQueries: true
        }
      });
      document.dispatchEvent(ce);
    } else {
      return Promise.reject(error);
    }
  }
};

export const baseUrlInterceptor = {
  success: (config: InternalAxiosRequestConfig) => {
    config.baseURL = BASE_URL;
    return config;
  },
  error: (error: AxiosError) => Promise.reject(error)
};
