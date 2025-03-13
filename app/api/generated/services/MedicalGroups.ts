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

import { MedicalGroupSummaryResponse } from '../data-contracts';
import { HttpClient, RequestParams } from '../http-client';

export class MedicalGroups<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns list of medical groups
   *
   * @tags Patientsvc
   * @name MedicalGroupsList
   * @summary Gets list of medical groups
   * @request GET:/api/medicalGroups
   * @secure
   */
  medicalGroupsList = (
    query?: {
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<MedicalGroupSummaryResponse, void>({
      path: `/api/medicalGroups`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
}
