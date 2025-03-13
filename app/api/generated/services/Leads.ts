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
  LeadAssignCfg,
  LeadAssigneeResponse,
  LeadCreateUpdateCfg,
  LeadExportCfg,
  LeadPatchCfg,
  LeadPortalAdminSummaryResponse,
  LeadStatusHistory,
  LeadSummaryInfo,
  LeadSummaryResponse,
  OutputTask
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Leads<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Exports lead info for advocate as a CSV
   *
   * @tags Patientsvc
   * @name LeadsAdvocateExportCreate
   * @summary Exports lead info for advocate as a CSV
   * @request POST:/api/leads/advocate/export
   * @secure
   */
  leadsAdvocateExportCreate = (
    data: LeadExportCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/leads/advocate/export`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns list of leads in the advocate view
   *
   * @tags Patientsvc
   * @name LeadsAdvocateList
   * @summary Gets list of leads in the advocate view
   * @request GET:/api/leads/advocate
   * @secure
   */
  leadsAdvocateList = (
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
      /** LeadType */
      leadtype?: string;
      /** filter by studyid */
      studyid?: string;
      /** filter by campaignid */
      campaignid?: string;
      /** filter by status */
      status?: string;
      /** get all the leads for the advocate org */
      orgleads?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<LeadPortalAdminSummaryResponse, void>({
      path: `/api/leads/advocate`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns list of recruiters assigned to leads
   *
   * @tags Patientsvc
   * @name LeadsAssigneesList
   * @summary Gets list of recruiters assigned to leads
   * @request GET:/api/leads/assignees
   * @secure
   */
  leadsAssigneesList = (
    query?: {
      /** Skip */
      skip?: number;
      /** Limit */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<LeadAssigneeResponse, void>({
      path: `/api/leads/assignees`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Assigns a recuriter to one or more leads; Returns OK
   *
   * @tags Patientsvc
   * @name LeadsAssignRecruiterCreate
   * @summary Assigns a recruiter to one or more leads
   * @request POST:/api/leads/assignRecruiter
   * @secure
   */
  leadsAssignRecruiterCreate = (
    data: LeadAssignCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/leads/assignRecruiter`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Creates a new lead; Response object looks like this { "tildaid": "%s" }
   *
   * @tags Patientsvc
   * @name LeadsCreate
   * @summary Creates a new lead
   * @request POST:/api/leads
   * @secure
   */
  leadsCreate = (data: LeadCreateUpdateCfg, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/leads`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns detailed info of a lead
   *
   * @tags Patientsvc
   * @name LeadsDetail
   * @summary Gets detailed info of a lead
   * @request GET:/api/leads/{tildaid}
   * @secure
   */
  leadsDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<LeadSummaryInfo, void>({
      path: `/api/leads/${tildaid}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Exports lead info as a CSV
   *
   * @tags Patientsvc
   * @name LeadsExportCreate
   * @summary Exports lead info as a CSV
   * @request POST:/api/leads/export
   * @secure
   */
  leadsExportCreate = (data: LeadExportCfg, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/leads/export`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns list of leads
   *
   * @tags Patientsvc
   * @name LeadsList
   * @summary Gets list of leads
   * @request GET:/api/leads
   * @secure
   */
  leadsList = (
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
      /** Advocate tildaId */
      advocateid?: string;
      /** Patient tildaId */
      patientid?: string;
      /** Study tildaId */
      studyid?: string;
      /** SMO org's tildaId */
      smoorgid?: string;
      /** Status */
      status?: string;
      /** MyActive */
      myactive?: boolean;
      /** Status */
      unassigned?: boolean;
      /** Name */
      name?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<LeadSummaryResponse, void>({
      path: `/api/leads`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Updates status of an existing lead
   *
   * @tags Patientsvc
   * @name LeadsPartialUpdate
   * @summary Updates status of an existing lead
   * @request PATCH:/api/leads/{tildaid}
   * @secure
   */
  leadsPartialUpdate = (
    tildaid: string,
    data: LeadPatchCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/leads/${tildaid}`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Exports lead info for advocate portal admin as a CSV
   *
   * @tags Patientsvc
   * @name LeadsPortalAdminExportCreate
   * @summary Exports lead info for advocate portal admin as a CSV
   * @request POST:/api/leads/portalAdmin/export
   * @secure
   */
  leadsPortalAdminExportCreate = (
    data: LeadExportCfg,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/leads/portalAdmin/export`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Returns list of leads in the portal admin view
   *
   * @tags Patientsvc
   * @name LeadsPortalAdminList
   * @summary Gets list of leads in the portal admin view
   * @request GET:/api/leads/portalAdmin
   * @secure
   */
  leadsPortalAdminList = (
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
      /** LeadType */
      leadtype?: string;
      /** filter by studyid */
      studyid?: string;
      /** filter by campaignid */
      campaignid?: string;
      /** filter by advocateid */
      advocateid?: string;
      /** filter by status */
      status?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<LeadPortalAdminSummaryResponse, void>({
      path: `/api/leads/portalAdmin`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns status history of a lead
   *
   * @tags Patientsvc
   * @name LeadsStatusHistoryDetail
   * @summary Gets status history of a lead
   * @request GET:/api/leads/statusHistory/{tildaid}
   * @secure
   */
  leadsStatusHistoryDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<LeadStatusHistory, void>({
      path: `/api/leads/statusHistory/${tildaid}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Returns details of a task associated with a lead
   *
   * @tags Patientsvc
   * @name LeadsTasksDetail
   * @summary Gets details of a task associated with a lead
   * @request GET:/api/leads/tasks/{tildaid}
   * @secure
   */
  leadsTasksDetail = (tildaid: string, params: RequestParams = {}) =>
    this.request<OutputTask, void>({
      path: `/api/leads/tasks/${tildaid}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
}
