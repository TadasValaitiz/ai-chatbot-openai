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

import { Inbox, InboxesResp } from '../data-contracts';
import { HttpClient, RequestParams } from '../http-client';

export class Inboxes<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get inbox List
   *
   * @tags Tusker
   * @name InboxesList
   * @summary Get inbox list
   * @request GET:/api/inboxes/
   * @secure
   */
  inboxesList = (params: RequestParams = {}) =>
    this.request<InboxesResp, void>({
      path: `/api/inboxes/`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get Current User Inbox
   *
   * @tags Tusker
   * @name InboxesUserList
   * @summary Get Current User Inbox
   * @request GET:/api/inboxes/user
   * @secure
   */
  inboxesUserList = (params: RequestParams = {}) =>
    this.request<Inbox, void>({
      path: `/api/inboxes/user`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
}
