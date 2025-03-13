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

import { RunInfoSummaryResponse } from '../data-contracts';
import { HttpClient, RequestParams } from '../http-client';

export class EhrRuns<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Gets the summary of pubsub runinfo
   *
   * @tags ehrRuns
   * @name EhrRunsList
   * @summary Gets the ehr runs info
   * @request GET:/api/ehrRuns
   * @secure
   */
  ehrRunsList = (
    query?: {
      /** skip */
      skip?: string;
      /** limit */
      limit?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<RunInfoSummaryResponse, void>({
      path: `/api/ehrRuns`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
}
