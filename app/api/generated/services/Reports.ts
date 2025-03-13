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
  ReportCfg,
  ReportFilterResponse,
  ReportPatientResponse,
  ReportStudyResponse,
  ScanParams
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Reports<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a new report; Response object looks like this { "tildaid": "%s" }
   *
   * @tags Enrollsvc:Reports
   * @name ReportsCreate
   * @summary Creates a new report
   * @request POST:/api/reports
   * @secure
   */
  reportsCreate = (data: ReportCfg, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/reports`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Deletes a report
   *
   * @tags Enrollsvc:Reports
   * @name ReportsDelete
   * @summary Deletes a report
   * @request DELETE:/api/reports/{tildaid}
   * @secure
   */
  reportsDelete = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/reports/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get report details; Response object looks like this { "count": %d, "reports":[ ]reportSummary }
   *
   * @tags Enrollsvc:Reports
   * @name ReportsDetail
   * @summary Get report details
   * @request GET:/api/reports/{tildaid}
   * @secure
   */
  reportsDetail = (
    tildaid: string,
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/reports/${tildaid}`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description Get filters associated with a report
   *
   * @tags Enrollsvc:Reports
   * @name ReportsFiltersDetail
   * @summary Get filters associated with a report
   * @request GET:/api/reports/{tildaid}/filters
   * @secure
   */
  reportsFiltersDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<ReportFilterResponse, void>({
      path: `/api/reports/${tildaid}/filters`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns the count and a list of all the reports; Response object looks like this { "count": %d, "reports":[ reportSummary ] }
   *
   * @tags Enrollsvc:Reports
   * @name ReportsList
   * @summary Gets the reports summary
   * @request GET:/api/reports
   * @secure
   */
  reportsList = (
    query?: {
      /** Sort */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Search Key */
      searchkey?: string;
      /** Search String */
      searchstr?: string;
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/reports`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description Get patient count associated with a report; Response object looks like this { "lastdraftrunscheduled":"%s", "lastdraftevaluated": "%s", "draftnumpatients": %d, "lastrunscheduled": "%s", "lastevaluated" : "%s", "numpatients" : %d }
   *
   * @tags Enrollsvc:Reports
   * @name ReportsPatientCountDetail
   * @summary Get patient count associated with a report
   * @request GET:/api/reports/{tildaid}/patientCount
   * @secure
   */
  reportsPatientCountDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/reports/${tildaid}/patientCount`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Get patients associated with a report
   *
   * @tags Enrollsvc:Reports
   * @name ReportsPatientsDetail
   * @summary Get patients associated with a report
   * @request GET:/api/reports/{tildaid}/patients
   * @secure
   */
  reportsPatientsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<ReportPatientResponse, void>({
      path: `/api/reports/${tildaid}/patients`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get studies associated with a report
   *
   * @tags Enrollsvc:Reports
   * @name ReportsStudiesDetail
   * @summary Get studies associated with a report
   * @request GET:/api/reports/{tildaid}/studies
   * @secure
   */
  reportsStudiesDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<ReportStudyResponse, void>({
      path: `/api/reports/${tildaid}/studies`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates the report
   *
   * @tags Enrollsvc:Reports
   * @name ReportsUpdate
   * @summary Updates the report
   * @request PUT:/api/reports/{tildaid}
   * @secure
   */
  reportsUpdate = (
    tildaid: string,
    data: ReportCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/reports/${tildaid}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Creates a duplicate report
   *
   * @tags Enrollsvc:Reports
   * @name ReportDupCreate
   * @summary Creates a duplicate report
   * @request POST:/api/reportDup/{tildaid}
   * @secure
   */
  reportDupCreate = (
    tildaid: string,
    data: ReportCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/reportDup/${tildaid}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Triggers a report run
   *
   * @tags Enrollsvc:Reports
   * @name ReportEvalCreate
   * @summary Triggers a report run
   * @request POST:/api/reportEval/{tildaid}
   * @secure
   */
  reportEvalCreate = (
    tildaid: string,
    data: ScanParams,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/reportEval/${tildaid}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Gets stats of reports and filters; Response object looks like this { "numreports": %d, "numfilters": %d, "numdraftfilters": %d }
   *
   * @tags Enrollsvc:Reports
   * @name ReportFilterStatsList
   * @summary Gets stats of reports and filters
   * @request GET:/api/reportFilterStats
   * @secure
   */
  reportFilterStatsList = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/reportFilterStats`,
      method: 'GET',
      secure: true,
      ...params
    });
}
