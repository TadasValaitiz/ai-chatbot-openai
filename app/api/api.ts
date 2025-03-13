import axios from 'axios';

import { requestInterceptor } from './interceptor';
import { createMergedApi } from './generated';

const headers = {
  'Cache-Control': 'no-cache',
  'Content-Type': 'application/json; charset=utf-8',
  credentials: 'include'
};

export const api = createMergedApi();
export const instance = api.instance;

const fetcher = axios.create({ headers });
fetcher.interceptors.request.use(
  requestInterceptor.success,
  requestInterceptor.error
);
