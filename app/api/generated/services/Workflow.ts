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
  AddParticipantWorkflowRequest,
  DeleteParticipantWorkflowRequest,
  GenericKeyArr,
  OPWorkflow,
  StatusResponseObj
} from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Workflow<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Adds a new participant workflow based on the given scope, scopeObjId, and studyId
   *
   * @tags Regsvc, workflow
   * @name WorkflowCreate
   * @summary Add a new participant workflow
   * @request POST:/api/workflow/
   */
  workflowCreate = (
    data: AddParticipantWorkflowRequest,
    params: RequestParams = {}
  ) =>
    this.request<string, void>({
      path: `/api/workflow/`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a participant workflow based on the given scope and scopeObjId
   *
   * @tags Regsvc, workflow
   * @name WorkflowDelete
   * @summary Delete a participant workflow
   * @request DELETE:/api/workflow/
   */
  workflowDelete = (
    data: DeleteParticipantWorkflowRequest,
    params: RequestParams = {}
  ) =>
    this.request<string, void>({
      path: `/api/workflow/`,
      method: 'DELETE',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Lists all workflows for a given study
   *
   * @tags Regsvc, workflow
   * @name WorkflowList
   * @summary List study workflows
   * @request GET:/api/workflow
   */
  workflowList = (
    query: {
      /** Study ID */
      studyId: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<OPWorkflow[], void>({
      path: `/api/workflow`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params
    });
  /**
   * @description Publishes a workflow to specified sites
   *
   * @tags Regsvc, workflow
   * @name WorkflowPublishCreate
   * @summary Publish a study workflow
   * @request POST:/api/workflow/publish
   */
  workflowPublishCreate = (
    query: {
      /** Study ID */
      studyId: string;
      /** Workflow ID */
      workflowId: string;
    },
    data: GenericKeyArr,
    params: RequestParams = {}
  ) =>
    this.request<Record<string, StatusResponseObj>, void>({
      path: `/api/workflow/publish`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Adds a new workflow to a study
   *
   * @tags Regsvc, workflow
   * @name WorkflowStudyCreate
   * @summary Add a new study workflow
   * @request POST:/api/workflow/study
   */
  workflowStudyCreate = (
    query: {
      /** Study ID */
      studyId: string;
      /** Workflow ID */
      workflowId: string;
    },
    data: GenericKeyArr,
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/workflow/study`,
      method: 'POST',
      query: query,
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes a workflow from a study
   *
   * @tags Regsvc, workflow
   * @name WorkflowStudyDelete
   * @summary Delete a study workflow
   * @request DELETE:/api/workflow/study
   */
  workflowStudyDelete = (
    query: {
      /** Study ID */
      studyId: string;
      /** Workflow ID */
      workflowId: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/workflow/study`,
      method: 'DELETE',
      query: query,
      format: 'json',
      ...params
    });
}
