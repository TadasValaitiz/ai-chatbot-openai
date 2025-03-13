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

export class Chartreviews<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Gets the activity log associated with chart review of a patient for a given study
   *
   * @tags Enrollsvc:ChartReviews
   * @name ChartreviewsActivityLogDetail
   * @summary Gets the activity log associated with chart review of a patient for a given study
   * @request GET:/api/chartreviews/{tildaid}/activityLog/{tildaid2}
   * @secure
   */
  chartreviewsActivityLogDetail = (
    tildaid: string,
    tildaid2: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/chartreviews/${tildaid}/activityLog/${tildaid2}`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Assigns the chart review responsibility for a list of patients for a given studyt to an owner
   *
   * @tags Enrollsvc:ChartReviews
   * @name ChartreviewsAssignmentsCreate
   * @summary Assigns the chart review responsibility for a list of patients for a given study to an owner
   * @request POST:/api/chartreviews/assignments/{tildaid}
   * @secure
   */
  chartreviewsAssignmentsCreate = (
    tildaid: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/chartreviews/assignments/${tildaid}`,
      method: 'POST',
      secure: true,
      ...params
    });
  /**
   * @description Creates a custom list for chart review of a given study
   *
   * @tags Enrollsvc:CR_Lists
   * @name ChartreviewsCrlistsCreate
   * @summary Creates a custom list for chart review of a given study
   * @request POST:/api/chartreviews/{tildaid}/crlists
   * @secure
   */
  chartreviewsCrlistsCreate = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/chartreviews/${tildaid}/crlists`,
      method: 'POST',
      secure: true,
      ...params
    });
  /**
   * @description Gets list of custom chart review lists for a given study
   *
   * @tags Enrollsvc:CR_Lists
   * @name ChartreviewsCrlistsDetail
   * @summary Gets list of custom chart review lists for a given study
   * @request GET:/api/chartreviews/{tildaid}/crlists
   * @secure
   */
  chartreviewsCrlistsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/chartreviews/${tildaid}/crlists`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Records the chart review decision for the selected list of patients for a given study
   *
   * @tags Enrollsvc:ChartReviews
   * @name ChartreviewsDecisionsCreate
   * @summary Records the chart review decision for the selected list of patients for a given study
   * @request POST:/api/chartreviews/decisions/{tildaid}
   * @secure
   */
  chartreviewsDecisionsCreate = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/chartreviews/decisions/${tildaid}`,
      method: 'POST',
      secure: true,
      ...params
    });
  /**
   * @description Creates a searchable keyword that can be looked up, and highlighted in patient documents to help with chartreview for a given study
   *
   * @tags Enrollsvc:ChartReviews
   * @name ChartreviewsKeywordsCreate
   * @summary Creates a searchable keyword that can be looked up in patient documents
   * @request POST:/api/chartreviews/keywords/{tildaid}
   * @secure
   */
  chartreviewsKeywordsCreate = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/chartreviews/keywords/${tildaid}`,
      method: 'POST',
      secure: true,
      ...params
    });
  /**
   * @description Deletes a keyword created for chartreview of a given study
   *
   * @tags Enrollsvc:ChartReviews
   * @name ChartreviewsKeywordsDelete
   * @summary Deletes a keyword created for chartreview of a given study
   * @request DELETE:/api/chartreviews/keywords/{tildaid}
   * @secure
   */
  chartreviewsKeywordsDelete = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/chartreviews/keywords/${tildaid}`,
      method: 'DELETE',
      secure: true,
      ...params
    });
  /**
   * @description Gets list of keywords created for chartreview of a given study
   *
   * @tags Enrollsvc:ChartReviews
   * @name ChartreviewsKeywordsDetail
   * @summary Gets list of keywords created for chartreview of a given study
   * @request GET:/api/chartreviews/{tildaid}/keywords
   * @secure
   */
  chartreviewsKeywordsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/chartreviews/${tildaid}/keywords`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Gets details on the chart review decision of a patient for a given study
   *
   * @tags Enrollsvc:ChartReviews
   * @name ChartreviewsPatientDecisionDetail
   * @summary Gets details on the chart review decision of a patient for a given study
   * @request GET:/api/chartreviews/{tildaid}/patientDecision/{tildaid2}
   * @secure
   */
  chartreviewsPatientDecisionDetail = (
    tildaid: string,
    tildaid2: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/chartreviews/${tildaid}/patientDecision/${tildaid2}`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Gets list of keywords present in a given patient's documents for a given study
   *
   * @tags Enrollsvc:ChartReviews
   * @name ChartreviewsPatientKeywordsDetail
   * @summary Gets list of keywords present in a given patient's documents for a given study
   * @request GET:/api/chartreviews/{tildaid}/patientKeywords/{tildaid2}
   * @secure
   */
  chartreviewsPatientKeywordsDetail = (
    tildaid: string,
    tildaid2: string,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/chartreviews/${tildaid}/patientKeywords/${tildaid2}`,
      method: 'GET',
      secure: true,
      ...params
    });
  /**
   * @description Returns list of patients associated with a study for chart review, as evaluated by the reports attached to the study
   *
   * @tags Enrollsvc:ChartReviews
   * @name ChartreviewsPatientsDetail
   * @summary Gets list of patients associated with a study for chart review
   * @request GET:/api/chartreviews/{tildaid}/patients
   * @secure
   */
  chartreviewsPatientsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/chartreviews/${tildaid}/patients`,
      method: 'GET',
      secure: true,
      ...params
    });
}
