/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { EmrSummaryResponse } from '../data-contracts';
import { HttpClient, RequestParams } from '../http-client';

export class Emrs<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns list of EMRs
   *
   * @tags Patientsvc
   * @name EmrsList
   * @summary Gets list of EMRs
   * @request GET:/api/emrs
   * @secure
   */
  emrsList = (
    query?: {
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<EmrSummaryResponse, void>({
      path: `/api/emrs`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
}
