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

import { EventResponse } from '../data-contracts';
import { HttpClient, RequestParams } from '../http-client';

export class Events<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Gets list of events
   *
   * @tags events
   * @name EventsList
   * @summary Gets list of events
   * @request GET:/api/events
   * @secure
   */
  eventsList = (
    query?: {
      /** svcName */
      svcName?: string;
      /** userId */
      userId?: string;
      /** orgId */
      orgId?: string;
      /** objType */
      objType?: string;
      /** eventType */
      eventType?: string;
      /** objId */
      objId?: string;
      /** search */
      search?: string;
      /** skip */
      skip?: string;
      /** limit */
      limit?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<EventResponse, void>({
      path: `/api/events`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
}
