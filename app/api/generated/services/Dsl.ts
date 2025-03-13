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

import { StatusResponseObj } from '../data-contracts';
import { ContentType, HttpClient, RequestParams } from '../http-client';

export class Dsl<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates a new form for various purposes (pif, screener, econsent...)
   *
   * @tags Form
   * @name V1DslFormCreateCreate
   * @summary Creates a new form for various purposes (pif, screener, econsent...)
   * @request POST:/api/v1/dsl/form/create
   * @secure
   */
  v1DslFormCreateCreate = (
    data: number[],
    query?: {
      /** optional: will replace Form name during object creation */
      name?: string;
      /** optional: will replace Form version during object creation */
      version?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/v1/dsl/form/create`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Deletes protocol version and its children by ProtocolVersion tildaid
   *
   * @tags Protocol
   * @name V1DslStudyAnythingProtocolDelete
   * @summary Deletes protocol version and its children
   * @request DELETE:/api/v1/dsl/study/anything/protocol/{protocolVersionID}
   * @secure
   */
  v1DslStudyAnythingProtocolDelete = (
    protocolVersionId: string,
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/v1/dsl/study/anything/protocol/${protocolVersionId}`,
      method: 'DELETE',
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a Protocol Version by studyID and either passing the files in the payload or by passing either Git (tag, commit-id, or branch) and repo
   *
   * @tags Protocol
   * @name V1DslStudyProtocolCreate
   * @summary Creates a new protocol for various purposes (study, pif, recruitment...)
   * @request POST:/api/v1/dsl/study/{studyID}/protocol
   * @secure
   */
  v1DslStudyProtocolCreate = (
    studyId: string,
    query: {
      /** Git repo can be passed with either tag, commit-id, or branch */
      repo: string;
      /** Git repo tag must be passed with repo query */
      tag?: string;
      /** Git repo commit-id must be passed with repo query */
      'commit-id'?: string;
      /** Git repo branch must be passed with repo query */
      branch?: string;
      /** optional: will replace Protocol name during object creation */
      name?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/v1/dsl/study/${studyId}/protocol`,
      method: 'POST',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Publishes Protocol Version by studyID, site-ids, and ref
   *
   * @tags Protocol
   * @name V1DslStudyProtocolPublishCreate
   * @summary Publishes Protocol Version
   * @request POST:/api/v1/dsl/study/{studyID}/protocol/publish
   * @secure
   */
  v1DslStudyProtocolPublishCreate = (
    studyId: string,
    query: {
      /** tildaid site to publish, can pass multiple */
      'site-id': string;
      /** commitID value of protocol version */
      'commit-id': string;
    },
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/v1/dsl/study/${studyId}/protocol/publish`,
      method: 'POST',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
  /**
   * @description Creates a new workflow for various purposes
   *
   * @tags Workflow
   * @name V1DslWorkflowCreateCreate
   * @summary Creates a new workflow for various purposes
   * @request POST:/api/v1/dsl/workflow/create
   * @secure
   */
  v1DslWorkflowCreateCreate = (
    data: number[],
    query?: {
      /** optional: will replace Process name during object creation */
      name?: string;
      /** optional: will replace Process version during object creation */
      version?: string;
    },
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/v1/dsl/workflow/create`,
      method: 'POST',
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params
    });
  /**
   * @description Publishes Propcess by studyID, site-ids, and ref
   *
   * @tags Workflow
   * @name V1DslWorkflowPublishCreate
   * @summary Publishes Process
   * @request POST:/api/v1/dsl/workflow/publish
   * @secure
   */
  v1DslWorkflowPublishCreate = (
    query: {
      /** tildaid site to publish, can pass multiple */
      'site-id': string;
      /** commitID value of process */
      'commit-id': string;
      /** tildaid of study */
      'study-id': string;
    },
    params: RequestParams = {}
  ) =>
    this.request<StatusResponseObj, void>({
      path: `/api/v1/dsl/workflow/publish`,
      method: 'POST',
      query: query,
      secure: true,
      format: 'json',
      ...params
    });
}
