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

import {
  ScanParams,
  StudyCfg,
  StudyCfgGen,
  StudyDetails,
  StudyLogHistory,
  StudySummaryResponse
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Studies<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Gets audit logs associated with a study.
   *
   * @tags Enrollsvc:Studies
   * @name StudiesAuditlogDetail
   * @summary Gets audit logs associated with a study
   * @request GET:/api/studies/{tildaid}/auditlog
   */
  studiesAuditlogDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<StudyLogHistory, void>({
      path: `/api/studies/${tildaid}/auditlog`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Creates new study
   *
   * @tags Enrollsvc:Studies
   * @name StudiesCreate
   * @summary Creates new study
   * @request POST:/api/studies
   * @secure
   */
  studiesCreate = (data: StudyCfg, params: RequestParams = {}) =>
    this.request<object, void>({
      path: `/api/studies`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes the record of the requested study
   *
   * @tags Enrollsvc:Studies
   * @name StudiesDelete
   * @summary Deletes study details
   * @request DELETE:/api/studies/{tildaid}
   * @secure
   */
  studiesDelete = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/studies/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Returns the details of the requested study
   *
   * @tags Enrollsvc:Studies
   * @name StudiesDetail
   * @summary Gets study details
   * @request GET:/api/studies/{tildaid}
   * @secure
   */
  studiesDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<StudyDetails, void>({
      path: `/api/studies/${tildaid}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Triggers the studio protocol config generation for a study
   *
   * @tags Enrollsvc:Studies
   * @name StudiesGenerateCreate
   * @summary Triggers the studio protocol config generation for a study
   * @request POST:/api/studies/{tildaid}/generate
   * @secure
   */
  studiesGenerateCreate = (
    tildaid: string,
    data: StudyCfgGen,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/studies/${tildaid}/generate`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns the count and list of all the studies available. Limits Monitor view to only studies they are a part of
   *
   * @tags Enrollsvc:Studies
   * @name StudiesList
   * @summary Gets studies details
   * @request GET:/api/studies
   * @secure
   */
  studiesList = (
    query?: {
      /** set to \ */
      filter?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<StudySummaryResponse, void>({
      path: `/api/studies`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates the details of the requested study
   *
   * @tags Enrollsvc:Studies
   * @name StudiesPartialUpdate
   * @summary Update study details
   * @request PATCH:/api/studies/{tildaid}
   * @secure
   */
  studiesPartialUpdate = (
    tildaid: string,
    data: string[],
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/studies/${tildaid}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Gets sites associated with a study. Currently used only for
   *
   * @tags Enrollsvc:Studies
   * @name StudiesSitesDetail
   * @summary Gets sites associated with a study
   * @request GET:/api/studies/{tildaid}/sites
   */
  studiesSitesDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<StudyDetails, void>({
      path: `/api/studies/${tildaid}/sites`,
      method: 'GET',
      format: 'json',
      ...params
    });
  /**
   * @description Triggers the computation of a study's patients eligible for chart review using the latest state of attached reports
   *
   * @tags Enrollsvc:Studies
   * @name StudyEvalCreate
   * @summary Triggers the computation of a study's patients eligible for chart review
   * @request POST:/api/studyEval/{tildaid}
   * @secure
   */
  studyEvalCreate = (
    tildaid: string,
    data: ScanParams,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/studyEval/${tildaid}`,
      method: 'POST',
      body: data,
      secure: true,
      ...params
    });
  /**
   * @description Returns the counts of studies based on their status
   *
   * @tags Enrollsvc:Studies
   * @name StudyStatsList
   * @summary Gets study statistics
   * @request GET:/api/studyStats
   * @secure
   */
  studyStatsList = (
    query?: {
      /** set to \ */
      filter?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/studyStats`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    });
}
