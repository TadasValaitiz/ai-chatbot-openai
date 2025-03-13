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
  ChangeLog,
  OutputTask,
  TaskBulkPutPayload,
  TaskDetails,
  TaskFilterOp,
  TaskPutPayload,
  TaskStats,
  UserWithRole
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Tasks<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Get List of Appropriate Users for Task Assignment
   *
   * @tags Tusker
   * @name TasksAssignmentList
   * @summary Get List of Appropriate Users for Task Assignment
   * @request GET:/api/tasks/assignment
   * @secure
   */
  tasksAssignmentList = (
    query?: {
      /** tildaid of Task */
      taskid?: string;
      /** study id of Task */
      study?: string;
      /** site id of Task */
      site?: string;
      /** Task Category */
      category?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<UserWithRole[], void>({
      path: `/api/tasks/assignment`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update multiple tasks
   *
   * @tags Tusker
   * @name TasksBulkUpdate
   * @summary Update multiple tasks
   * @request PUT:/api/tasks/bulk
   * @secure
   */
  tasksBulkUpdate = (data: TaskBulkPutPayload, params: RequestParams = {}) =>
    this.request<void, void>({
      path: `/api/tasks/bulk`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Get task categories endpoints list
   *
   * @tags Tusker
   * @name TasksCategoriesList
   * @summary Get task categories endpoints list
   * @request GET:/api/tasks/categories
   * @secure
   */
  tasksCategoriesList = (params: RequestParams = {}) =>
    this.request<Record<string, string>, void>({
      path: `/api/tasks/categories`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get task changelogs
   *
   * @tags Tusker
   * @name TasksChangelogsDetail
   * @summary Get task changelogs
   * @request GET:/api/tasks/{taskID}/changelogs
   * @secure
   */
  tasksChangelogsDetail = (taskId: string, params: RequestParams = {}) =>
    this.request<ChangeLog[], void>({
      path: `/api/tasks/${taskId}/changelogs`,
      method: 'GET',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get Home Tasks List
   *
   * @tags Tusker
   * @name TasksHomeList
   * @summary Get Home Tasks list
   * @request GET:/api/tasks/home/
   * @secure
   */
  tasksHomeList = (
    query?: {
      /** Inbox ID */
      inbox?: string;
      /** Query */
      q?: string;
      /** States */
      state?: string[];
      /** Start Date */
      startdate?: string;
      /** End Date */
      enddate?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OutputTask[], void>({
      path: `/api/tasks/home/`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get task List
   *
   * @tags Tusker
   * @name TasksList
   * @summary Get task list
   * @request GET:/api/tasks/
   * @secure
   */
  tasksList = (
    query?: {
      /** Sort by this field */
      sort?: string;
      /** Descending sort */
      desc?: boolean;
      /** Limit */
      limit?: number;
      /** Skip */
      skip?: number;
      /** Inbox ID */
      inbox?: string;
      /** Query String */
      q?: string;
      /** Categories */
      category?: string[];
      /** Priorities */
      priority?: number[];
      /** States */
      state?: string[];
      /**
       * Due Before
       * @format date-time
       */
      due_before?: string;
      /** Studies */
      study?: string[];
      /** Sites */
      site?: string[];
      /** Visits */
      visit?: string[];
      /** Subjects */
      subject?: string[];
      /** Actor ID */
      actor?: string;
      /** Lead ID */
      lead?: string;
      /** Start Date */
      startdate?: string;
      /** End Date */
      enddate?: string;
      /** Created By User ID */
      createdby?: string;
      /** Created At Date (YYYY-MM-DD) */
      createdat?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<TaskDetails, void>({
      path: `/api/tasks/`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Get statistics for tasks in an inbox
   *
   * @tags Tusker
   * @name TasksStatsList
   * @summary Get task statistics
   * @request GET:/api/tasks/stats
   * @secure
   */
  tasksStatsList = (
    query: {
      /** Inbox */
      inbox: string;
      /** State */
      state?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<TaskStats, void>({
      path: `/api/tasks/stats`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Update a task
   *
   * @tags Tusker
   * @name TasksUpdate
   * @summary Update a task
   * @request PUT:/api/tasks/{taskID}
   * @secure
   */
  tasksUpdate = (
    taskId: string,
    data: TaskPutPayload,
    params: RequestParams = {}
  ) =>
    this.request<void, void>({
      path: `/api/tasks/${taskId}`,
      method: 'PUT',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params
    });
  /**
   * @description Get task filters list
   *
   * @tags Tusker
   * @name TaskfiltersList
   * @summary Get task filters list
   * @request GET:/api/taskfilters/
   * @secure
   */
  taskfiltersList = (
    query?: {
      /** Inbox ID */
      inbox?: string;
      /** Study */
      study?: string;
      /** Site */
      site?: string;
      /** State */
      state?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<TaskFilterOp, void>({
      path: `/api/taskfilters/`,
      method: 'GET',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
}
