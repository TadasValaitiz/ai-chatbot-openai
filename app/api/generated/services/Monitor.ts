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
  ActivityInfo,
  MCategoryList,
  MonitorControlResp,
  MonitorFilterList,
  MonitorSidePanelResp,
  MonitorSiteResp,
  MonitorTaskResp
} from '../data-contracts';
import { HttpClient, RequestParams } from '../http-client';

export class Monitor<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description List monitor category/subcategories
   *
   * @tags Regsvc
   * @name MonitorCategoriesDetail
   * @summary List monitor category/subcategories
   * @request GET:/api/monitor/categories/{studyId}
   * @secure
   */
  monitorCategoriesDetail = (studyId: string, params: RequestParams = {}) =>
    this.request<MCategoryList, void>({
      path: `/api/monitor/categories/${studyId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List monitor controls
   *
   * @tags Regsvc
   * @name MonitorControlsDetail
   * @summary List monitor controls
   * @request GET:/api/monitor/controls/{studyId}
   * @secure
   */
  monitorControlsDetail = (
    studyId: string,
    query?: {
      /** Site Ids */
      siteIds?: string[];
      /** Category */
      category?: string;
      /** Subcategory */
      subcategory?: string;
      /** Sort order */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Skip number of records */
      skip?: number;
      /** Limit number of records */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<MonitorControlResp, void>({
      path: `/api/monitor/controls/${studyId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Fetches filters such as states, priorities, users, and control names for the monitor view based on organization and study ID.
   *
   * @tags Regsvc, Monitor
   * @name MonitorFiltersDetail
   * @summary Retrieve monitor filters
   * @request GET:/api/monitor/filters/{studyId}
   */
  monitorFiltersDetail = (
    studyId: string,
    query?: {
      /** Category filter */
      category?: string;
      /** Subcategory filter */
      subcategory?: string;
      /** Site Ids filter */
      siteIds?: string[];
      /** Task State filter */
      taskState?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<MonitorFilterList, void>({
      path: `/api/monitor/filters/${studyId}`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Fetches and lists controls and tasks based on study ID, category, subcategory, and control filter for the monitor side panel.
   *
   * @tags Regsvc, Monitor
   * @name MonitorSidepanelDetail
   * @summary List monitor controls and tasks for the side panel
   * @request GET:/api/monitor/sidepanel/{studyId}
   * @secure
   */
  monitorSidepanelDetail = (
    studyId: string,
    query: {
      /** Category filter */
      category?: string;
      /** Subcategory filter */
      subcategory?: string;
      /** Control filter */
      control: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<MonitorSidePanelResp, void>({
      path: `/api/monitor/sidepanel/${studyId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List monitor sites based on given parameters
   *
   * @tags Regsvc
   * @name MonitorSitesDetail
   * @summary List monitor sites
   * @request GET:/api/monitor/sites/{studyId}
   * @secure
   */
  monitorSitesDetail = (
    studyId: string,
    query?: {
      /** Array of Site Ids */
      siteIds?: string[];
      /** Category filter */
      category?: string;
      /** Subcategory filter */
      subcategory?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<MonitorSiteResp, void>({
      path: `/api/monitor/sites/${studyId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Retrieves onboarding activities information for a specific study and site
   *
   * @tags Regsvc
   * @name MonitorStudysitepanelDetail
   * @summary Study Site Panel Information
   * @request GET:/api/monitor/studysitepanel/{studyId}/{siteId}
   * @secure
   */
  monitorStudysitepanelDetail = (
    studyId: string,
    siteId: string,
    params: RequestParams = {}
  ) =>
    this.request<ActivityInfo[], void>({
      path: `/api/monitor/studysitepanel/${studyId}/${siteId}`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description List monitor tasks
   *
   * @tags Regsvc
   * @name MonitorTasksDetail
   * @summary List monitor tasks
   * @request GET:/api/monitor/tasks/{studyId}
   * @secure
   */
  monitorTasksDetail = (
    studyId: string,
    query?: {
      /** Site Ids */
      siteIds?: string[];
      /** Category */
      category?: string;
      /** Subcategory */
      subcategory?: string;
      /** Control */
      control?: string;
      /** Task Category */
      taskCategory?: string;
      /** Task State */
      taskState?: string;
      /** Task Priority */
      taskPriority?: number;
      /** Task Query */
      taskQuery?: string;
      /** Task User */
      taskUser?: string;
      /** Start Date */
      startDate?: string;
      /** End Date */
      endDate?: string;
      /** Sort order */
      sort?: string;
      /** Descending order */
      desc?: boolean;
      /** Skip number of records */
      skip?: number;
      /** Limit number of records */
      limit?: number;
    },
    params: RequestParams = {}
  ) =>
    this.request<MonitorTaskResp, void>({
      path: `/api/monitor/tasks/${studyId}`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
}
