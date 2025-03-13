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

import { FilterCfg, FilterStudyResponse, ScanParams } from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Filters<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a filter; Response object looks like this { "tildaid" : "%s" }
   *
   * @tags Enrollsvc:Filters
   * @name FiltersCreate
   * @summary Creates a filter
   * @request POST:/api/filters
   * @secure
   */
  filtersCreate = (data: FilterCfg, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/filters`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Deletes the requested filter
   *
   * @tags Enrollsvc:Filters
   * @name FiltersDelete
   * @summary Deletes a fliter
   * @request DELETE:/api/filters/{tildaid}
   * @secure
   */
  filtersDelete = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/filters/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Get filter details; Response object looks like this { "result": [ filterResponse ] }
   *
   * @tags Enrollsvc:Filters
   * @name FiltersDetail
   * @summary Get filter details
   * @request GET:/api/filters/{tildaid}
   * @secure
   */
  filtersDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/filters/${tildaid}`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Returns the count and list of records that match the filter parameters; Response object looks like this { "count": 0, "filters": [ ]filterSummary }
   *
   * @tags Enrollsvc:Filters
   * @name FiltersList
   * @summary Gets filters information
   * @request GET:/api/filters
   * @secure
   */
  filtersList = (
    query: {
      /** Sort */
      sort: string;
      /** Descending order */
      desc: boolean;
      /** Search Key */
      searchkey: string;
      /** Search String */
      searchstr: string;
      /** Skip */
      skip: number;
      /** Limit */
      limit: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/filters`,
      method: 'GET',
      query: query,
      secure: true,
      ...params
    });
  /**
   * @description Returns the patient count who satisfy the filter
   *
   * @tags Enrollsvc:Filters
   * @name FiltersPatientCountDetail
   * @summary Gets patient count for a filter
   * @request GET:/api/filters/{tildaid}/patientCount
   * @secure
   */
  filtersPatientCountDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/filters/${tildaid}/patientCount`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Returns the list of reports associated with the filter; Response object looks like this { "reports": [ {"tildaid": "%s", "name": "%s", "numpatients": %d} ] }
   *
   * @tags Enrollsvc:Filters
   * @name FiltersReportsDetail
   * @summary Gets list of reports that use the given filter
   * @request GET:/api/filters/{tildaid}/reports
   * @secure
   */
  filtersReportsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/filters/${tildaid}/reports`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Returns the list of studies associated with the filter
   *
   * @tags Enrollsvc:Filters
   * @name FiltersStudiesDetail
   * @summary Gets list of studies that use reports associated with the given filter
   * @request GET:/api/filters/{tildaid}/studies
   * @secure
   */
  filtersStudiesDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<FilterStudyResponse, void>({
      path: `/api/filters/${tildaid}/studies`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates a filter
   *
   * @tags Enrollsvc:Filters
   * @name FiltersUpdate
   * @summary Updates a filter
   * @request PUT:/api/filters/{tildaid}
   * @secure
   */
  filtersUpdate = (
    tildaid: string,
    data: FilterCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/filters/${tildaid}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Triggers the evaluation of a filter to create the list of patients matching the filter criteria
   *
   * @tags Enrollsvc:Filters
   * @name FilterEvalCreate
   * @summary Triggers the evaluation of a filter
   * @request POST:/api/filterEval/{tildaid}
   * @secure
   */
  filterEvalCreate = (
    tildaid: string,
    data: ScanParams,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/filterEval/${tildaid}`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
}
