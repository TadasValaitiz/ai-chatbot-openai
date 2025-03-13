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

import { HttpClient, RequestParams } from '../http-client';

export class Crlists<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Deletes a custom chart review list
   *
   * @tags Enrollsvc:CR_Lists
   * @name CrlistsDelete
   * @summary Deletes a custom chart review list
   * @request DELETE:/api/crlists/{tildaid}
   * @secure
   */
  crlistsDelete = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/crlists/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets the list of patients added to a custom chart review list of a study
   *
   * @tags Enrollsvc:CR_Lists
   * @name CrlistsDetail
   * @summary Gets the list of patients added to a custom chart review list of a study
   * @request GET:/api/crlists/{tildaid}
   * @secure
   */
  crlistsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/crlists/${tildaid}`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Updates a custom chart review list
   *
   * @tags Enrollsvc:CR_Lists
   * @name CrlistsPartialUpdate
   * @summary Updates a custom chart review list
   * @request PATCH:/api/crlists/{tildaid}
   * @secure
   */
  crlistsPartialUpdate = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/crlists/${tildaid}`,
      method: 'PATCH',
      secure: true,
      ...params
    });
}
