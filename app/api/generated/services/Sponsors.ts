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

export class Sponsors<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns a list of all the sponsors avalaible
   *
   * @tags Enrollsvc:Sponsors
   * @name SponsorsList
   * @summary Gets sponsors details
   * @request GET:/api/sponsors
   * @secure
   */
  sponsorsList = (params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/sponsors`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Returns the image of the requested sponsor
   *
   * @tags Enrollsvc:Sponsors
   * @name SponsorLogosDetail
   * @summary Get sponsor image
   * @request GET:/api/sponsorLogos/{tildaid}
   * @secure
   */
  sponsorLogosDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/sponsorLogos/${tildaid}`,
      method: 'GET',
      secure: true,
      ...params
    });
}
